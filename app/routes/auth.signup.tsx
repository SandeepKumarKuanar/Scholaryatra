import { redirect } from "react-router"
import { SignUpForm } from "../signup/signup-form"
import { createClient } from "@/lib/supabase/server"
import type { Route } from "./+types/auth.signup"
// import { GradientMesh } from "@/components/gradient-mesh";
// here instead of gradient mess, we have a static image for better performance

export async function action({ request, context }: Route.ActionArgs) {
  const formData = await request.formData()
  const provider = formData.get("provider") as "google" | "linkedin"

  if (!provider) {
    throw new Response("Provider is required", { status: 400 })
  }

  const supabase = createClient(request, context.cloudflare.env)

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: `${new URL(request.url).origin}/auth/oauth?next=/protected`,
    },
  })

  if (error) {
    throw new Response(error.message, { status: 400 })
  }

  if (data.url) {
    throw redirect(data.url)
  }

  throw new Response("Failed to initiate OAuth", { status: 500 })
}

export default function Page() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      {/* FORM COLUMN */}
      <div
        className="
          flex flex-col gap-4 p-6 md:p-10
          order-2 lg:order-1
          shadow-[inset_0_5px_20px_-10px_rgba(0,0,0,0.8)]
          relative z-10 lg:z-auto bg-white dark:bg-black
        "
      >
        <div className="flex flex-1 items-center justify-center">
          {/* Signing up page */}
          <div className="w-full max-w-xs">
            <SignUpForm />
          </div>
        </div>
      </div>

      {/*
        SCREEN (PHONE) COLUMN
      */}
      <div
        className="
          bg-muted relative p-4
          flex items-center justify-center overflow-hidden
          order-1 lg:order-2
          z-0 -mb-40 lg:mb-0
        "
      >
        <div className="relative flex justify-center h-[520px] w-[700px] border-4 border-black rounded-2xl dark:border-gray-300">
          <span className="border border-black bg-black w-3 h-3 mt-2 rounded-full dark:border-gray-300 dark:bg-gray-300"></span>
        </div>
      </div>
    </div>
  )
}
