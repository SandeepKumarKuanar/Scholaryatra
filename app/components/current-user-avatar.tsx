import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import type { User } from "@supabase/supabase-js"

export const CurrentUserAvatar = ({ user }: { user?: User | null }) => {
  const profileImage = user?.user_metadata?.avatar_url
  const name = user?.user_metadata?.full_name || "?"
  const initials = name
    ?.split(" ")
    ?.map((word: string) => word[0])
    ?.join("")
    ?.toUpperCase()

  return (
    <Avatar>
      {profileImage && <AvatarImage src={profileImage} alt={initials} />}
      <AvatarFallback>{initials}</AvatarFallback>
    </Avatar>
  )
}
