"use client";
import { useEffect, useState } from "react";
import Icon from "./Icon";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (e: MediaQueryListEvent) => {
      let saved: string | null = null;
      try { saved = localStorage.getItem("theme"); } catch {}
      if (saved) return; // user chose explicitly
      document.documentElement.classList.toggle("dark", e.matches);
      setDark(e.matches);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  function toggle() {
    const next = !dark;
    document.documentElement.classList.toggle("dark", next);
    try { localStorage.setItem("theme", next ? "dark" : "light"); } catch {}
    setDark(next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      title={dark ? "Light mode" : "Dark mode"}
      className="relative grid size-11 place-items-center overflow-hidden rounded-full bg-surface text-ink shadow transition hover:-translate-y-0.5 hover:shadow-lg"
    >
      <span key={String(dark)} className="animate-zoom-in">
        <Icon name={dark ? "sun" : "moon"} className="size-5" />
      </span>
    </button>
  );
}
