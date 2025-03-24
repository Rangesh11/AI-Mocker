import { cn } from "@/lib/utils"

interface NavigationRoutesprops{
    isMobile?:boolean
}

export default function NavigationRoutes({isMobile=false}:NavigationRoutesprops) {
  return (
        <ul className="flex items-center gap-6">
            {}
        </ul>
  )
}
