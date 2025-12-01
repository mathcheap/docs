"use client";
import { ChevronDown, ChevronRight } from "lucide-react";
import Link from "@/components/custom-link";
import { Logo } from "@/components/logo";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { sidebarNavLinks, type SidebarItem } from "@/data/meta-data";

import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
} from "@/components/ui/sidebar";

function SidebarSection({
  item,
  currentPath,
}: {
  item: SidebarItem;
  currentPath?: string;
}) {
  const [isOpen, setIsOpen] = useState(true);
  const hasItems = item.items && item.items.length > 0;

  if (!hasItems && item.href) {
    return (
      <Link
        href={item.href}
        className={cn(
          "flex items-center gap-2 px-3 py-2 text-sm rounded",
          "hover:bg-gray-200 dark:hover:bg-gray-800 hover:text-accent-foreground text-gray-600 dark:text-gray-300 dark:hover:text-white",
          currentPath === item.href &&
          "bg-gray-200 text-accent-foreground dark:bg-gray-800 dark:hover:text-white",
        )}
      >
        {item.title}
      </Link>
    );
  }

  return (
    <SidebarGroupContent>
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger asChild>
          <button className="flex items-center select-none justify-between w-full py-2 text-sm">
            <span>{item.title}</span>
            {hasItems &&
              (isOpen ? (
                <ChevronDown className="h-4 w-4" />
              ) : (
                <ChevronRight className="h-4 w-4" />
              ))}
          </button>
        </CollapsibleTrigger>
        {hasItems && (
          <CollapsibleContent className="space-y-1">
            {item.items?.map((subItem, index) => (
              <SidebarSection
                key={index}
                item={subItem}
                currentPath={currentPath}
              />
            ))}
          </CollapsibleContent>
        )}
      </Collapsible>
    </SidebarGroupContent>
  );
}

export function AppSidebar() {
  const currentPath = usePathname();
  return (
    <Sidebar>
      <aside className="h-full w-68 fixed border-r bg-gray-50 dark:bg-black divide-y flex flex-col shrink-0">
        <SidebarHeader className="flex flex-row h-16 justify-between min-h-16 items-center px-8 py-0">
          <Link
            href="/"
            className="flex items-center gap-x-1 sticky top-0"
            title="LiteDocs"
          >
            <Logo />
            <h2 className="text-xl font-extrabold hover:text-gray-900 dark:hover:text-gray-100">
              LiteDocs
            </h2>
          </Link>
          <Link
            href="/overview/changelog"
            className="text-sm text-gray-600 dark:text-gray-300"
          >
            v.0.1.0
          </Link>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup className="py-2 px-8">
            {sidebarNavLinks.map((item, index) => (
              <SidebarSection
                key={index}
                item={item}
                currentPath={currentPath}
              />
            ))}
          </SidebarGroup>
        </SidebarContent>
      </aside>
    </Sidebar>
  );
}
