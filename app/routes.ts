import { type RouteConfig, index, route } from "@react-router/dev/routes"

export default [
  index("routes/home.tsx"),
  route("about", "routes/about.tsx"),
  route("auth/login", "routes/auth.login.tsx"),
  route("auth/oauth", "routes/auth.oauth.tsx"),
  route("auth/signup", "routes/auth.signup.tsx"),
  route("opportunities", "routes/opportunities.tsx"),
  route("professors", "routes/professors.tsx"),
  route("protected", "routes/protected.tsx"),
  route("students", "routes/students.tsx"),
  route("team", "routes/team.tsx"),
  route("upload", "routes/upload.tsx"),
] satisfies RouteConfig
