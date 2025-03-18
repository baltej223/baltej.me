"use client"; // Only for Next.js (remove for CRA)

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      applyTheme(savedTheme);
    } else {
      // Detect system theme
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      applyTheme(systemTheme);
    }
  }, []);

  const applyTheme = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    // Update background & foreground
    document.documentElement.style.setProperty("--background", newTheme === "dark" ? "#0a0a0a" : "#ffffff");
    document.documentElement.style.setProperty("--foreground", newTheme === "dark" ? "#ededed" : "#171717");

    // Update muted background (slightly darker/lighter)
    document.documentElement.style.setProperty(
      "--background-muted",
      newTheme === "dark" ? "hsl(0, 0%, 15%)" : "hsl(0, 0%, 90%)"
    );
  };

  return (
    <button
      onClick={() => applyTheme(theme === "dark" ? "light" : "dark")}
      className="transition"
    >
      {theme === "dark" ? <Sun size={24} className="text-white" /> : <Moon size={24} className="text-gray-900" />}
    </button>
  );
}
