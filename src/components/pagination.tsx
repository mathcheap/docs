'use client'
import Link from "@/components/custom-link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import { getNavigationPages } from "@/lib/sidebar"

export function Pagination() {
  const pathname = usePathname()
  const slug = (pathname?.replace(/^\/+/, "") || "overview")
  const { prev, next } = getNavigationPages(slug)

  if (!prev && !next) {
    return null
  }

  return (
    <div className="flex items-center justify-between pt-8 space-x-4">
      <div className="flex-1">
        {prev && (
          <Link
            href={prev.href}
            className={cn(
              "group flex items-center gap-2 p-4 rounded border transition-colors",
              "hover:bg-muted/50 hover:border-border"
            )}
          >
            <div className="text-left">
              <div className="text-sm text-muted-foreground">Prev page</div>
              <div className="font-medium group-hover:text-foreground transition-colors flex items-center gap-1">
                <ArrowLeft className="size-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                <span>{prev.title}</span>
              </div>
            </div>
          </Link>
        )}
      </div>
      <div className="flex-1 justify-end">
        {next && (
          <Link
            href={next.href}
            className={cn(
              "group flex items-center gap-2 p-4 rounded border transition-colors",
              "hover:bg-muted/50 hover:border-border justify-end"
            )}
          >
            <div className="text-right">
              <div className="text-sm text-muted-foreground">Next page</div>
              <div className="font-medium group-hover:text-foreground transition-colors flex items-center gap-1">
                <span>{next.title}</span>
                <ArrowRight className="size-5 text-muted-foreground group-hover:text-foreground transition-colors" />
              </div>
            </div>
          </Link>
        )}
      </div>
    </div>
  )
}
