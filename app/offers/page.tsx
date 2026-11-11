import PageHero from "@/components/PageHero";
import Img from "@/components/Img";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";
import { OFFERS, waLink } from "@/lib/data";

export const metadata = pageMeta("Offers – Wallpaper from ₹199, Artificial Grass from ₹25/sq ft", "Current VaaSaa Interiors offers in Amritsar: wallpaper from ₹199, artificial grass from ₹25 per sq ft and 7D UV sheets up to ₹2,499. Claim on WhatsApp.", "/offers", "Offers");

export default function Offers() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd("Offers", "/offers")} />
      <PageHero title="Offers" sub="Limited-period deals on our most-loved materials." />
      <section className="section">
        <div className="container-x">
          <div className="grid gap-6 md:grid-cols-3">
            {OFFERS.map((o, i) => (
              <Reveal key={o.title} delay={i * 120}>
                <article className="card group h-full">
                  <div className="relative h-56 overflow-hidden">
                    <Img id={o.img} alt={o.title} w={700} className="transition-transform duration-700 group-hover:scale-110" />
                    <span className="absolute left-3 top-3 rounded-full bg-gold px-3 py-1 text-xs font-bold text-brand">OFFER</span>
                  </div>
                  <div className="p-6">
                    <span className="label">{o.valid}</span>
                    <h3 className="mt-1 text-2xl">{o.title}</h3>
                    <p className="my-2 font-serif text-3xl text-brand2">{o.price}</p>
                    <p className="mb-5 text-neutral-600">{o.desc}</p>
                    <a className="btn btn-green btn-block" target="_blank" rel="noreferrer"
                      href={waLink(`Hello VaaSaa Interiors, I want to claim the "${o.title} – ${o.price}" offer.`)}>
                      Claim on WhatsApp
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="relative mt-16 flex flex-wrap items-center justify-between gap-8 overflow-hidden rounded-[2rem] bg-brand p-10 text-white md:p-14">
              <div className="absolute -right-10 -top-10 size-52 rounded-full bg-gold/20 blur-2xl" />
              <div className="relative">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Festive season sale</span>
                <h2 className="my-2 text-3xl text-white md:text-4xl">Make your home shine this season</h2>
                <p className="max-w-lg opacity-85">Extra savings on panels, UV sheets and wallpapers. Free design consultation on every order.</p>
              </div>
              <a className="btn btn-gold relative" target="_blank" rel="noreferrer" href={waLink("Hello VaaSaa Interiors, I want to claim the festive sale offer.")}>
                Claim your offer
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
