import { createClient } from "./supabase/server"
import { redirect } from "react-router"

/**
 * Checks if a user is authenticated and redirects to login if not.
 * Should be used in loaders for protected routes.
 */
export async function requireAuth(request: Request, env: Env) {
  const supabase = createClient(request, env)
  const { data } = await supabase.auth.getUser()

  if (!data.user) {
    throw redirect("/auth/login")
  }

  return data.user
}

/**
 * Gets the current user if authenticated, returns null if not.
 */
export async function getUser(request: Request, env: Env) {
  const supabase = createClient(request, env)
  const { data } = await supabase.auth.getUser()
  return data.user
}

export async function signOut(request: Request, env: Env) {
  const supabase = createClient(request, env)
  await supabase.auth.signOut()
}
