"use client";

import { type HTMLAttributes } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { FaDiscord, FaWeixin, FaGithub } from "react-icons/fa6";
import Link from "@/components/custom-link";
import ThemeButton from "@/components/theme-button";

const SocialIcons = [
  {
    title: "Discord",
    href: "https://discord.gg/Q4chBVDFvK",
    icon: <FaDiscord className="size-6" />,
  },
  {
    title: "GitHub",
    href: "https://github.com/mathcheap/docs",
    icon: (
      <FaGithub className="size-6" />
    ),
  },
];

interface Navbar extends HTMLAttributes<HTMLDivElement> { }

export const AppNavbar: React.FC<Navbar> = ({
  className,
  children,
  ...props
}) => {

  return (
    <header
      className={cn(
        "w-full justify-end mx-auto h-16 px-8 lg:px-8 fixed top-0 items-center md:flex hidden",
        "bg-background dark:bg-black",
        "border-b border-border",
        className,
      )}
      {...props}
    >
      <nav className="flex items-center gap-4">
        <ThemeButton />
        <ul className="flex justify-center items-center space-x-4">
          {SocialIcons.map((social) => (
            <Link
              className="text-slate-600 dark:text-slate-300 hover:text-black dark:hover:text-slate-200"
              title={social.title}
              key={social.title}
              href={social.href}
            >
              {social.icon}
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
};
