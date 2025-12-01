"use client"

import * as React from "react"

import type { TableOfContents } from "@/lib/toc"
import { cn } from "@/lib/utils"

interface TocProps {
  toc: TableOfContents
}

type TocItem = { title: string; url: string; items?: TocItem[] }

function flattenTree(items?: TocItem[]): string[] {
  if (!items) return []
  const urls: string[] = []
  for (const item of items) {
    urls.push(item.url)
    if (item.items?.length) {
      urls.push(...flattenTree(item.items))
    }
  }
  return urls
}

export function TableOfContents({ toc }: TocProps) {
  const itemIds = React.useMemo(
    () => {
      const urls = flattenTree(toc.items)
      return urls
        .map((url) => url.split("#")[1])
        .filter((id): id is string => !!id)
    },
    [toc.items]
  )
  const activeHeading = useActiveItem(itemIds)

  if (!toc?.items?.length) {
    return null
  }

  return (
    <>
      {/* <style jsx global>{`
        html {
          scroll-padding-top: 5rem;
          scroll-behavior: smooth;
        }
      `}</style> */}
      <div className="space-y-2 text-sm py-1.5 border-l border-border pl-4">
        <p className="font-medium">On this page</p>
        <Tree tree={toc} activeItem={activeHeading} />
      </div>
    </>
  )
}

function useActiveItem(itemIds: string[]) {
  const [activeId, setActiveId] = React.useState<string | null>(null)

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: `0% 0% -80% 0%` }
    )

    itemIds?.forEach((id) => {
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      itemIds?.forEach((id) => {
        const element = document.getElementById(id)
        if (element) {
          observer.unobserve(element)
        }
      })
    }
  }, [itemIds])

  return activeId
}

interface TreeProps {
  tree: TableOfContents
  level?: number
  activeItem?: string | null
}

function Tree({ tree, level = 1, activeItem }: TreeProps) {
  return tree?.items?.length && level < 3 ? (
    <ul className={cn("m-0 list-none space-y-2", { "pl-4": level !== 1 })}>
      {tree.items.map((item, index) => {
        return (
          <li key={index} className={cn("mt-0 space-y-2")}>
            <a
              href={item.url}
              className={cn(
                "inline-block no-underline hover:text-foreground",
                item.url === `#${activeItem}`
                  ? "text-foreground"
                  : "text-muted-foreground"
              )}
            >
              {item.title}
            </a>
            {item.items?.length ? (
              <Tree tree={item} level={level + 1} activeItem={activeItem} />
            ) : null}
          </li>
        )
      })}
    </ul>
  ) : null
}
