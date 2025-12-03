import { Cantarell } from "@/lib/fonts";
import { ThemeProvider } from 'next-themes'
import "./globals.css";
import { DocsPage } from "@/data/meta-data";
import { Metadata } from "next";

export const metadata: Metadata = DocsPage.metadata

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${Cantarell.className} h-screen`}
        suppressHydrationWarning
      >
        <ThemeProvider attribute="class">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
