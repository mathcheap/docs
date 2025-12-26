export const HeaderNavLinks = [
  {
    title: "Documentation",
    href: "/docs",
  },
  // {
  //   title: "Blog",
  //   href: "/blog",
  // },
];

export const DocsPage = {
  metadata: {
    metadataBase: new URL("https://mathcheap.xyz/docs"),
    title: {
      default: "Mathcheap Documentation",
      template: `%s | Mathcheap Documentation`,
    },
    description:
      "Mathcheap Documentation",
    keywords: [
      "LiteDocs",
      "Documentation Template",
      "Mathcheap Documentation",
      "MDX Documentation",
      "Open Source Documentation",
    ],
    openGraph: {
      title: "Mathcheap",
      description:
        "Mathcheap Documentation",
      url: "https://mathcheap.xyz/docs",
      siteName: "Mathcheap",
      locale: "en-US",
      type: "website",
    },
    twitter: {
      title: "Mathcheap",
      card: "summary_large_image",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-snippet": -1,
      },
    },
  },
  title: "Mathcheap",
  version: "0.11.2",
  description:
    "Mathcheap Documentation",
  url: "https://mathcheap.xyz/docs",
  avatar_url: "/images/logo.svg",
};

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
