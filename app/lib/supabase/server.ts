import { createServerClient, serializeCookieHeader } from "@supabase/ssr"

/**
 * Creates a Supabase client for server-side operations in React Router.
 * Must be called within a loader or action.
 */
export function createClient(request: Request, env: Env) {
  const cookieHeader = request.headers.get("cookie") || ""

  return createServerClient(env.SUPABASE_URL, env.SUPABASE_KEY, {
    cookies: {
      getAll() {
        if (!cookieHeader) return []

        return cookieHeader
          .split(";")
          .map((cookie) => {
            const [name, ...valueParts] = cookie.trim().split("=")
            return {
              name: name || "",
              value: valueParts.join("=") || "",
            }
          })
          .filter(({ name }) => name)
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value, options }) =>
          request.headers.append(
            "Set-Cookie",
            serializeCookieHeader(name, value, options),
          ),
        )
      },
    },
  })
}
