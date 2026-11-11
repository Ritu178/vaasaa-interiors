import Link from "next/link";
import Img from "@/components/Img";
import { BRAND, CATEGORIES, IMG, OFFERS, REELS, REVIEWS, WHY } from "@/lib/data";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-in">
          <div>
            <span className="eyebrow">{BRAND.tagline}</span>
            <h1>Premium interior materials, all under one roof in Amritsar</h1>
            <p>From fluted panels and UV marble to wallpapers, fabrics and artificial grass – everything to finish your dream home, with installation and design advice from our team.</p>
            <div className="btn-row">
              <Link href="/products" className="btn btn-gold">Explore products</Link>
              <Link href="/contact" className="btn btn-outline">Visit showroom</Link>
            </div>
            <p className="muted-sm">{BRAND.sub}</p>
          </div>
          <div className="hero-img"><Img id={IMG.hero} alt="VaaSaa Interiors showroom" w={1200} /></div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="title">Shop by category</h2>
          <div className="grid g4">
            {CATEGORIES.map((c) => (
              <Link key={c.name} href="/products" className="cat">
                <Img id={c.img} alt={c.name} w={600} />
                <span>{c.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section green">
        <div className="container">
          <h2 className="title light">Current offers</h2>
          <div className="grid g3">
            {OFFERS.map((o) => (
              <div key={o.title} className="offer-mini">
                <span>{o.title}</span>
                <strong>{o.price}</strong>
              </div>
            ))}
          </div>
          <div className="center mt"><Link href="/offers" className="btn btn-gold">See all offers</Link></div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="title">Featured work</h2>
          <div className="grid g4">
            {REELS.map((r) => (
              <a key={r.cap} href={BRAND.instagramUrl} target="_blank" rel="noreferrer" className="reel">
                <Img id={r.src} alt={r.cap} w={600} />
                <span className="play">▶</span>
                <em>{r.cap}</em>
              </a>
            ))}
          </div>
          <div className="center mt"><a href={BRAND.instagramUrl} target="_blank" rel="noreferrer" className="btn btn-green">Follow @{BRAND.instagram}</a></div>
        </div>
      </section>

      <section className="section cream2">
        <div className="container">
          <h2 className="title">Why choose us</h2>
          <div className="grid g4">
            {WHY.map((w) => (
              <div key={w.title} className="card pad center-t">
                <div className="icon">{w.icon}</div>
                <h3>{w.title}</h3>
                <p>{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="title">What our customers say</h2>
          <div className="grid g3">
            {REVIEWS.map((r) => (
              <blockquote key={r.name} className="card pad quote">
                <div className="stars">★★★★★</div>
                <p>“{r.text}”</p>
                <footer><strong>{r.name}</strong> · {r.place}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="section cream2">
        <div className="container grid g2 visit">
          <div>
            <h2 className="title left">Visit us</h2>
            <p><strong>Address:</strong> {BRAND.address}</p>
            <p><strong>Phone:</strong> <a href={`tel:${BRAND.phone}`}>{BRAND.phone}</a></p>
            <p><strong>Timings:</strong> {BRAND.timings}</p>
            <div className="btn-row">
              <a className="btn btn-green" href={`tel:${BRAND.phone}`}>Call now</a>
              <Link className="btn btn-gold" href="/contact">Get a free quote</Link>
            </div>
          </div>
          <iframe className="map" src={BRAND.map} loading="lazy" title="VaaSaa Interiors location" />
        </div>
      </section>
    </>
  );
}
