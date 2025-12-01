import type { NextPage } from "next";
import { Logo } from "@/components/logo";
import Link from "next/link";

const NotFound: NextPage = () => {
  return (
    <div className="flex h-full items-center justify-center flex-col">
      <Logo size={120} />
      <h1 className="font-extrabold text-6xl tracking-tight mb-4">404</h1>
      <div className="text-slate-600 text-lg">
        <span>
          Page Not Found. Go back to{" "}
          <Link
            href="/"
            className="underline hover:text-black dark:hover:text-white underline-offset-3"
          >
            Home
          </Link>{" "}
          page.
        </span>
      </div>
    </div>
  );
};

export default NotFound;
