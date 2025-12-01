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
        title: "Getting Started",
        href: "/overview/getting-started",
      },
      {
        title: "Changelog",
        href: "/overview/changelog",
      },
      {
        title: "About",
        href: "/overview/about",
      },
    ],
  },
  {
    title: "Components",
    items: [
      {
        title: "Themes",
        href: "/components/themes",
      },
      {
        title: "Code Block",
        href: "/components/code-block",
      },
      {
        title: "Table of Contents",
        href: "/components/table-of-contents",
      },
    ],
  },
];
