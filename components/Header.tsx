"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LINKS, waLink } from "@/lib/data";
import { useCart } from "./CartProvider";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { count, bump } = useCart();

  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 10);
    f();
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);

  return (
    <header className={`sticky top-0 z-50 border-b border-line backdrop-blur-xl transition-all duration-300 ${scrolled ? "bg-cream/95 shadow-lg" : "bg-cream/80"}`}>
      <div className={`container-x flex items-center justify-between transition-all duration-300 ${scrolled ? "h-[4.75rem] md:h-24" : "h-24 md:h-28"}`}>
        <Link href="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src="/logo.png" alt="VaaSaa Interiors" className={`flex-none rounded-full shadow-xl ring-[3px] ring-gold/80 ring-offset-2 ring-offset-cream transition-all duration-500 group-hover:scale-105 group-hover:ring-gold ${scrolled ? "size-14 md:size-[4.5rem]" : "size-16 md:size-[5.5rem]"}`} />
          <span className="flex flex-col leading-none">
            <strong className="font-serif text-2xl text-ink md:text-3xl">VaaSaa</strong>
            <small className="mt-1 text-[11px] uppercase tracking-[0.3em] text-gold md:text-xs">Interiors</small>
          </span>
        </Link>

        <nav className={`absolute left-0 right-0 top-full flex flex-col overflow-hidden bg-cream px-5 transition-all duration-500 md:static md:max-h-none md:flex-row md:items-center md:gap-7 md:bg-transparent md:p-0 ${open ? "max-h-[520px] border-b border-line pb-5" : "max-h-0"}`}>
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              className={`group relative border-b border-line py-3.5 font-medium md:border-0 md:py-1 ${path === l.href ? "text-ink2" : "text-neutral-700"}`}>
              {l.label}
              <span className={`absolute -bottom-0.5 left-0 hidden h-0.5 bg-gold transition-all duration-300 md:block ${path === l.href ? "w-full" : "w-0 group-hover:w-full"}`} />
            </Link>
          ))}
          <a className="btn btn-gold mt-4 md:mt-0 md:px-5 md:py-2" href={waLink("Hello VaaSaa Interiors, I would like to know more.")} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link href="/checkout" aria-label="Cart" onClick={() => setOpen(false)}
            className="relative grid size-11 place-items-center rounded-full bg-surface text-ink shadow transition hover:-translate-y-0.5 hover:shadow-lg">
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.600h9.700a2 2 0 0 0 2-1.600L23 6H6" />
            </svg>
            {count > 0 && (
              <span key={bump} className="absolute -right-1 -top-1 grid size-5 animate-pop place-items-center rounded-full bg-gold text-[11px] font-bold text-brand">{count}</span>
            )}
          </Link>
          <button className="flex size-11 flex-col items-center justify-center gap-[5px] md:hidden" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
            <span className={`h-0.5 w-6 bg-ink transition-all ${open ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`h-0.5 w-6 bg-ink transition-all ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-6 bg-ink transition-all ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>
    </header>
  );
}
