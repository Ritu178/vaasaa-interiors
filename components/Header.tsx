"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { LINKS, waLink } from "@/lib/data";

export default function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <div className="container header-in">
        <Link href="/" className="logo" onClick={() => setOpen(false)}>
          <img src="/logo.png" alt="VaaSaa Interiors" className="logo-img" />
          <span><strong>VaaSaa</strong><small>Interiors</small></span>
        </Link>
        <nav className={`nav ${open ? "open" : ""}`}>
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className={path === l.href ? "active" : ""} onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
          <a className="btn btn-gold nav-wa" href={waLink("Hello VaaSaa Interiors, I would like to know more.")} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
        </nav>
        <button className="burger" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
