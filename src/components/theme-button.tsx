import { useEffect, useState } from "react";
import type { NextPage } from "next";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "lucide-react";

const ThemeButton: NextPage = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mount, setMount] = useState(true);
  const IconToUse = mount || resolvedTheme === "light" ? MoonIcon : SunIcon;
  useEffect(() => setMount(false), []);
  return (
    <button
      disabled={mount}
      type="button"
      aria-label="Theme Button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-gray-200"
    >
      <IconToUse className="size-6" />
    </button>
  );
};

export default ThemeButton;
