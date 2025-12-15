"use client";

import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) {
      applyTheme(saved);
    } else {
      const systemDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      applyTheme(systemDark ? "dark" : "light");
    }

    // respond to system preference changes (only if user hasn't explicitly chosen)
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e) => {
      const saved = localStorage.getItem("theme");
      if (!saved) applyTheme(e.matches ? "dark" : "light");
    };

    if (mq.addEventListener) {
      mq.addEventListener("change", handler);
      return () => mq.removeEventListener("change", handler);
    } else if (mq.addListener) {
      mq.addListener(handler);
      return () => mq.removeListener(handler);
    }
  }, []);

  const applyTheme = (newTheme) => {
    setTheme(newTheme);
    try {
      localStorage.setItem("theme", newTheme);
    } catch (e) {
      // ignore storage failures (e.g., privacy mode)
    }

    if (newTheme === "dark") {
      document.documentElement.style.setProperty("--background", "#0a0a0a");
      document.documentElement.style.setProperty("--foreground", "#ededed");
      document.documentElement.style.setProperty(
        "--background-muted",
        "hsl(0,0%,15%)",
      );
      document.documentElement.style.setProperty("--footer-color", "#0E0E0E");
      document.documentElement.style.setProperty("--color-bg-rgb", "10 10 10");
      document.documentElement.style.setProperty(
        "--color-text-rgb",
        "237 237 237",
      );
      document.documentElement.classList.add("dark");
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.style.setProperty("--background", "#ffffff");
      document.documentElement.style.setProperty("--foreground", "#171717");
      document.documentElement.style.setProperty(
        "--background-muted",
        "hsl(0,0%,90%)",
      );
      document.documentElement.style.setProperty("--footer-color", "#e2e2e2");
      document.documentElement.style.setProperty(
        "--color-bg-rgb",
        "255 255 255",
      );
      document.documentElement.style.setProperty(
        "--color-text-rgb",
        "23 23 23",
      );
      document.documentElement.classList.remove("dark");
      document.documentElement.setAttribute("data-theme", "light");
    }
  };

  return (
    <button
      onClick={() => applyTheme(theme === "dark" ? "light" : "dark")}
      className="transition"
      aria-label="Toggle theme"
      title="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun size={24} className="text-white" />
      ) : (
        <Moon size={24} className="text-gray-900" />
      )}
    </button>
  );
}
