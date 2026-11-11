import Link from "next/link";
import { BRAND, LINKS } from "@/lib/data";

export default function Footer() {
  const a = "block transition hover:translate-x-1 hover:text-gold";
  return (
    <footer className="bg-brand pt-14 text-[#e8e3d0]">
      <div className="container-x grid gap-10 pb-10 md:grid-cols-[1.2fr_1fr_1.4fr]">
        <div>
          <img src="/logo.png" alt="VaaSaa Interiors" className="mb-3 size-24 rounded-full" />
          <h3 className="mb-2 text-white">VaaSaa Interiors</h3>
          <p className="text-gold">{BRAND.tagline}</p>
          <p>{BRAND.sub}</p>
        </div>
        <div className="space-y-1.5">
          <h4 className="mb-3 text-white">Explore</h4>
          {LINKS.map((l) => <Link key={l.href} href={l.href} className={a}>{l.label}</Link>)}
          <Link href="/checkout" className={a}>Cart & checkout</Link>
        </div>
        <div className="space-y-2">
          <h4 className="mb-3 text-white">Visit us</h4>
          <p>{BRAND.address}</p>
          <p>{BRAND.timings}</p>
          <a className={a} href={`tel:${BRAND.phone}`}>{BRAND.phone}</a>
          <a className={a} href={BRAND.instagramUrl} target="_blank" rel="noreferrer">@{BRAND.instagram}</a>
        </div>
      </div>
      <div className="border-t border-white/15 py-5 text-center text-sm opacity-75">
        © {new Date().getFullYear()} VaaSaa Interiors, Amritsar. All rights reserved.
      </div>
    </footer>
  );
}
