import Link from "next/link";
import Img from "@/components/Img";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import { BRAND, CATEGORIES, IMG, OFFERS, REELS, WHY } from "@/lib/data";

const MARQUEE = ["PVC panels", "WPC panels", "Charcoal louvers", "UV marble sheets", "7D UV sheets", "PU stones", "Wallpapers", "Sofa fabric", "French molding", "Artificial planters", "Vertical gardens", "Artificial grass", "Curtains", "Roman blinds"];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-cream via-cream to-cream2 pb-20 pt-14">
        <div className="absolute -left-24 top-10 size-80 rounded-full bg-gold/20 blur-3xl" />
        <div className="container-x relative grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <span className="inline-block animate-fade-up text-xs font-semibold uppercase tracking-[0.25em] text-gold">{BRAND.tagline}</span>
            <h1 className="mb-5 mt-4 animate-fade-up text-4xl [animation-delay:120ms] md:text-6xl">
              Premium interior materials, all under one roof in <span className="text-brand2 underline decoration-gold decoration-4 underline-offset-8">Amritsar</span>
            </h1>
            <p className="max-w-lg animate-fade-up text-lg text-neutral-700 [animation-delay:240ms]">
              From fluted panels and UV marble to wallpapers, fabrics and artificial grass – everything to finish your dream home, with installation and design advice from our team.
            </p>
            <div className="mt-8 flex animate-fade-up flex-wrap gap-4 [animation-delay:360ms]">
              <Link href="/products" className="btn btn-gold">Explore products</Link>
              <Link href="/contact" className="btn btn-outline">Visit showroom</Link>
            </div>
            <p className="mt-4 animate-fade-up text-sm opacity-70 [animation-delay:480ms]">{BRAND.sub}</p>
          </div>
          <div className="relative animate-fade-up [animation-delay:300ms]">
                        <div className="relative h-80 animate-bob overflow-hidden rounded-[2rem] shadow-2xl shadow-brand/30 md:h-[30rem]">
              <Img id={IMG.hero} alt="VaaSaa Interiors showroom" w={1200} />
            </div>
            <div className="absolute -bottom-5 -left-3 rounded-2xl bg-white px-5 py-3 shadow-xl">
              <p className="text-xs text-neutral-500">Wallpaper from</p>
              <p className="font-serif text-2xl text-brand2">₹199</p>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="overflow-hidden bg-brand py-4 text-gold">
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap font-serif text-lg">
          {[...MARQUEE, ...MARQUEE].map((m, i) => <span key={i} className="flex items-center gap-10">{m}<span className="text-white/40">✦</span></span>)}
        </div>
      </div>

      {/* CATEGORIES */}
      <section className="section">
        <div className="container-x">
          <Reveal><h2 className="title">Shop by category</h2></Reveal>
          <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
            {CATEGORIES.map((c, i) => (
              <Reveal key={c.name} delay={(i % 4) * 90}>
                <Link href="/products" className="group relative block h-56 overflow-hidden rounded-3xl shadow-md transition duration-500 hover:-translate-y-2 hover:shadow-2xl md:h-64">
                  <Img id={c.img} alt={c.name} w={600} className="transition-transform duration-700 group-hover:scale-110" />
                  <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand/90 to-transparent p-4 pt-12 font-serif text-lg text-white">
                    {c.name}<span className="ml-2 inline-block opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">→</span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* OFFERS */}
      <section className="relative overflow-hidden bg-brand py-16 text-white">
                <div className="container-x relative">
          <Reveal><h2 className="title light">Current offers</h2></Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {OFFERS.map((o, i) => (
              <Reveal key={o.title} delay={i * 120}>
                <div className="group rounded-3xl border border-gold/50 bg-white/5 p-8 text-center backdrop-blur transition duration-500 hover:-translate-y-2 hover:bg-white/15">
                  <span className="block opacity-85">{o.title}</span>
                  <strong className="font-serif text-3xl text-gold transition-transform duration-500 group-hover:scale-110 inline-block">{o.price}</strong>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center"><Link href="/offers" className="btn btn-gold">See all offers</Link></div>
        </div>
      </section>

      {/* FEATURED WORK */}
      <section className="section">
        <div className="container-x">
          <Reveal><h2 className="title">Featured work</h2></Reveal>
          <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
            {REELS.map((r, i) => (
              <Reveal key={r.cap} delay={i * 90}>
                <a href={BRAND.instagramUrl} target="_blank" rel="noreferrer" className="group relative block aspect-[9/14] overflow-hidden rounded-3xl transition duration-500 hover:-translate-y-2 hover:shadow-2xl">
                  <Img id={r.src} alt={r.cap} w={600} className="transition-transform duration-700 group-hover:scale-110" />
                  <span className="absolute left-1/2 top-1/2 grid size-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/85 text-brand transition duration-300 group-hover:scale-125">▶</span>
                  <em className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 pt-10 text-sm not-italic text-white">{r.cap}</em>
                </a>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center"><a href={BRAND.instagramUrl} target="_blank" rel="noreferrer" className="btn btn-green">Follow @{BRAND.instagram}</a></div>
        </div>
      </section>

      {/* WHY */}
      <section className="section bg-cream2">
        <div className="container-x">
          <Reveal><h2 className="title">Why choose us</h2></Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WHY.map((w, i) => (
              <Reveal key={w.title} delay={i * 100}>
                <div className="card group h-full p-7 text-center">
                  <div className="mx-auto mb-4 grid size-14 place-items-center rounded-2xl bg-brand text-gold transition-transform duration-500 group-hover:-translate-y-1"><Icon name={w.icon} className="size-7" /></div>
                  <h3 className="mb-2 text-xl">{w.title}</h3>
                  <p className="text-neutral-600">{w.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* VISIT */}
      <section className="section">
        <div className="container-x grid items-center gap-10 md:grid-cols-2">
          <Reveal>
            <h2 className="title left">Visit us</h2>
            <p className="mb-3"><strong>Address:</strong> {BRAND.address}</p>
            <p className="mb-3"><strong>Phone:</strong> <a href={`tel:${BRAND.phone}`} className="underline decoration-gold">{BRAND.phone}</a></p>
            <p className="mb-3"><strong>Timings:</strong> {BRAND.timings}</p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a className="btn btn-green" href={`tel:${BRAND.phone}`}>Call now</a>
              <Link className="btn btn-gold" href="/contact">Get a free quote</Link>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <iframe className="h-[340px] w-full rounded-3xl border-0 shadow-xl" src={BRAND.map} loading="lazy" title="VaaSaa Interiors location" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
