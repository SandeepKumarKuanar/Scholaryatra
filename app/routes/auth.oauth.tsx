import { redirect } from "react-router"

import type { Route } from "./+types/auth.oauth"

import { createClient } from "@/lib/supabase/server"

export async function loader({ request, context }: Route.LoaderArgs) {
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get("code")
  // if "next" is in param, use it as the redirect URL
  let next = searchParams.get("next") ?? "/"
  if (!next.startsWith("/")) {
    // if "next" is not a relative URL, use the default
    next = "/"
  }

  if (code) {
    const supabase = createClient(request, context.cloudflare.env)
    const { error } = await supabase.auth.exchangeCodeForSession(code)
    if (!error) {
      throw redirect(next)
    }
  }

  // return the user to an error page with instructions
  throw redirect(`${origin}/auth/error`)
}
