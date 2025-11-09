import { Form, redirect } from "react-router"
import { requireAuth, signOut } from "@/lib/auth"
import type { Route } from "./+types/protected"
import { Button } from "@/components/ui/button"

export async function loader({ request, context }: Route.LoaderArgs) {
  const user = await requireAuth(request, context.cloudflare.env)
  return { user }
}

export async function action({ request, context }: Route.ActionArgs) {
  await signOut(request, context.cloudflare.env)
  throw redirect("/auth/login")
}

export default function ProtectedPage() {
  return (
    <div className="flex h-svh w-full items-center justify-center gap-2">
      <p>Hello! You are authenticated.</p>
      <Form method="post">
        <Button type="submit">Logout</Button>
      </Form>
    </div>
  )
}
