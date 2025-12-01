"use client";

import { type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

import { DiscordButton } from "@/components/discord-button";
import { GithubButton } from "@/components/github-button";
import ThemeButton from "@/components/theme-button";

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
        "bg-background dark:bg-background",
        "border-b border-border",
        className,
      )}
      {...props}
    >
      <nav className="flex items-center gap-4">
        <ThemeButton />
        <DiscordButton />
        <GithubButton />
      </nav>
    </header>
  );
};
