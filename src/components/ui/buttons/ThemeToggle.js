import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import clsx from "clsx";
import IconSun from "./IconSun";
import IconMoon from  "./IconMoon";

function ThemeToggle() {
  // This hook returns two values for the current theme:
  // 1. theme: the actual theme value can be "light", "dark", or "system"
  // 2. resolvedTheme: the resolved theme value can be "light" or "dark"
  // The resolved theme value is the actual theme value, except when the actual
  // theme value is "system", in which case the resolved value is either "light"
  // or "dark" depending on the operating system preference.
  const { resolvedTheme, setTheme } = useTheme();
  console.log(resolvedTheme)

  // This prevents Next.js hydration error
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return <span className="w-7 h-7" />

  return (
    <button
      className={clsx(
        "swap swap-rotate",
        resolvedTheme === "dark" && "swap-active"
      )}
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      <IconSun className="w-7 h-7 swap-on" />
      <IconMoon className="w-7 h-7 swap-off" />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}

export default ThemeToggle;