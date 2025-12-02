const HeaderNavLinks = [
  {
    title: "Documentation",
    href: "/docs",
  },
  // {
  //   title: "Blog",
  //   href: "/blog",
  // },
];


const DocsPage = {
  metadata: { title: "Docs", description: "Documentation for Mathcheap" },
  title: "Mathcheap",
  version: "0.11.0",
};

export { DocsPage, HeaderNavLinks };

export interface SidebarItem {
  title: string;
  href?: string;
  items?: SidebarItem[];
}


/**
 * Sidebar navigation configuration
 * Used for the left sidebar documentation navigation
 */
export const sidebarNavLinks: SidebarItem[] = [
  {
    title: "Overview",
    items: [
      {
        title: "Introduction",
        href: "/introduction",
      },
      {
        title: "Getting Started",
        href: "/getting-started",
      },
      {
        title: "Changelog",
        href: "/changelog",
      },
      {
        title: "About",
        href: "/about",
      },
    ],
  }
];
