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
import { sidebarNavLinks, type SidebarItem, DocsPage } from "@/data/meta-data";

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
          "flex items-center gap-2 py-2 text-base rounded",
          "hover:text-black text-slate-600 dark:text-slate-300 dark:hover:text-white hover:underline",
          currentPath === item.href &&
          "text-black dark:text-white dark:hover:text-white underline",
        )}
      >
        {item.title}
      </Link>
    );
  }

  return (
    <SidebarGroupContent>
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        {/* <CollapsibleTrigger asChild>
          <button className="flex items-center select-none justify-between w-full py-2 text-sm">
            <span>{item.title}</span>
            {hasItems &&
              (isOpen ? (
                <ChevronDown className="h-4 w-4" />
              ) : (
                <ChevronRight className="h-4 w-4" />
              ))}
          </button>
        </CollapsibleTrigger> */}
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
      <aside className="h-full w-68 fixed border-r bg-slate-50 dark:bg-black divide-y flex flex-col shrink-0">
        <SidebarHeader className="flex flex-row h-16 min-h-16 items-center px-8 py-0">
          <Link
            href="/"
            className="flex items-center gap-x-1 sticky top-0"
            title={DocsPage.title}
            noBasePath
          >
            <Logo />
            <h2 className="text-xl font-extrabold hover:text-slate-950 dark:hover:text-slate-100">
              {DocsPage.title}
            </h2>
          </Link>
          <Link
            href="/changelog"
            className="text-sm text-slate-600 dark:text-slate-300"
          >
            {`v${DocsPage.version}`}
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
