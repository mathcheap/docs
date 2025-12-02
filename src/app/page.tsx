import { notFound } from "next/navigation";
import { AppNavbar } from "@/components/navbar";
import { AppSidebar } from "@/components/sidebar";
import { allPages, type Page } from "content-collections";
import { MDXContent } from "@content-collections/mdx/react";
import { Pagination } from "@/components/pagination"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { getTableOfContents } from "@/lib/toc"
import { TableOfContents } from "@/components/table-of-contents";
import Link from "@/components/custom-link"

import { Faq } from "@/components/docs/faq"

const components = {
  Faq,
  a: Link,
}

export default async function HomePage() {
  const page = allPages.find((p: Page) => p.slug === "overview");
  if (page) {
    const toc = await getTableOfContents(page.content)
    return (
      <SidebarProvider>
        <AppNavbar />
        <AppSidebar />
        <main className="pt-16 flex w-full justify-center min-h-screen md:pl-68 xl:pr-68">
          <SidebarTrigger className="fixed top-4 left-4 z-5" />
          <article className="flex flex-col flex-1 max-w-3xl md:px-8 px-4 py-8 space-y-8 justify-between">
            <div className="space-y-2 mb-12">
              <h1 className="text-4xl font-extrabold">{page.title}</h1>
              {page.description && (
                <p className="text-xl text-muted-foreground">
                  {page.description}
                </p>
              )}
              <div className="prose dark:prose-invert max-w-none">
                <MDXContent code={page.body} components={components} />
              </div>
            </div>
            <Pagination />
          </article>
          <aside className="fixed top-16 right-8 w-68 p-8 hidden xl:block">
            <TableOfContents toc={toc} />
          </aside>
        </main>
      </SidebarProvider>
    );
  }
  return notFound();
}
