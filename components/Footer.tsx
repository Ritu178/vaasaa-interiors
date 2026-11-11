import Link from "next/link";
import { BRAND, LINKS } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <img src="/logo.png" alt="VaaSaa Interiors" style={{ width: 90, height: 90, borderRadius: "50%", marginBottom: 12 }} />
          <h3>VaaSaa Interiors</h3>
          <p className="gold">{BRAND.tagline}</p>
          <p>{BRAND.sub}</p>
        </div>
        <div>
          <h4>Explore</h4>
          {LINKS.map((l) => <Link key={l.href} href={l.href}>{l.label}</Link>)}
        </div>
        <div>
          <h4>Visit us</h4>
          <p>{BRAND.address}</p>
          <p>{BRAND.timings}</p>
          <p><a href={`tel:${BRAND.phone}`}>{BRAND.phone}</a></p>
          <p><a href={BRAND.instagramUrl} target="_blank" rel="noreferrer">@{BRAND.instagram}</a></p>
        </div>
      </div>
      <div className="copy">© {new Date().getFullYear()} VaaSaa Interiors, Amritsar. All rights reserved.</div>
    </footer>
  );
}
