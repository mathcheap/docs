import { sidebarNavLinks, type SidebarItem } from "@/data/meta-data";

// Flatten sidebar structure to get ordered list of all pages
export function flattenSidebar(
  items: SidebarItem[],
): { title: string; href: string }[] {
  const result: { title: string; href: string }[] = [];

  function traverse(items: SidebarItem[]) {
    for (const item of items) {
      if (item.href) {
        result.push({ title: item.title, href: item.href });
      }
      if (item.items) {
        traverse(item.items);
      }
    }
  }

  traverse(items);
  return result;
}

// Get previous and next pages for current page
export function getNavigationPages(currentSlug: string) {
  const allPages = flattenSidebar(sidebarNavLinks);

  // Handle special case for introduction page
  if (currentSlug === "overview") {
    return {
      prev: null,
      next: allPages.length > 0 ? allPages[0] : null,
    };
  }

  const currentIndex = allPages.findIndex(
    (page) => page.href === `/${currentSlug}`,
  );

  if (currentIndex === -1) {
    return { prev: null, next: null };
  }

  return {
    prev:
      currentIndex > 0
        ? allPages[currentIndex - 1]
        : { title: "Overview", href: "/" },
    next:
      currentIndex < allPages.length - 1 ? allPages[currentIndex + 1] : null,
  };
}
