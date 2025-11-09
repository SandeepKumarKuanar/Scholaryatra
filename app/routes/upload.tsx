import type { Route } from "./+types/upload"
import { FileUploadDemo } from "../upload/uploadform"
import { requireAuth } from "@/lib/auth"
import { createClient } from "@/lib/supabase/server"

export async function loader({ request, context }: Route.LoaderArgs) {
  await requireAuth(request, context.cloudflare.env)
  return {}
}

export async function action({ request, context }: Route.ActionArgs) {
  await requireAuth(request, context.cloudflare.env)

  const formData = await request.formData()
  const fileName = formData.get("fileName") as string
  const fileType = formData.get("fileType") as string
  const bucketName = "CV" // or get from form data

  if (!fileName || !fileType) {
    throw new Response("File name and type are required", { status: 400 })
  }

  const supabase = createClient(request, context.cloudflare.env)

  const { data, error } = await supabase.storage
    .from(bucketName)
    .createSignedUploadUrl(fileName, {
      upsert: false,
    })

  if (error) {
    throw new Response(error.message, { status: 500 })
  }

  return { signedUrl: data.signedUrl, path: data.path }
}

export default function UploadPage() {
  return (
    <div className="flex h-svh w-full flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-bold">CV Upload</h1>
      <p>Upload your CV here, </p>
      <FileUploadDemo />
    </div>
  )
}
