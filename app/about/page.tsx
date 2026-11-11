import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";
import { BRAND, WHY } from "@/lib/data";

export const metadata = pageMeta(
  "About Us – Interior Materials Showroom in Amritsar",
  "VaaSaa Interiors is an interior materials showroom on Majitha Road, Amritsar – panels, UV marble sheets, wallpapers, fabrics, grass and more, with installation and free design advice.",
  "/about",
  "About"
);

export default function About() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd("About", "/about")} />
      <PageHero title="About us" sub="Spaces | Style | You" />

      <section className="section">
        <div className="container-x grid items-center gap-12 md:grid-cols-2">
          <Reveal>
            <div className="mx-auto grid aspect-square max-w-sm place-items-center rounded-[2rem] bg-brand p-10 shadow-2xl">
              <img src="/logo.png" alt="VaaSaa Interiors logo" className="size-full rounded-full ring-4 ring-gold/70" />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="title left">Who we are</h2>
            <p className="mb-4">
              VaaSaa Interiors is a home interior materials showroom at {BRAND.address.replace(", Punjab", "")}. Under one roof you can see and compare PVC and WPC panels, charcoal louvers, UV marble sheets, PU stones, wallpapers, sofa fabric, French molding, artificial grass, planters and vertical gardens, curtains and Roman blinds.
            </p>
            <p className="mb-4">
              Our own team handles installation, and we are happy to talk through your room and suggest materials that suit it – no charge for the advice.
            </p>
            <blockquote className="mt-6 rounded-r-2xl border-l-4 border-gold bg-surface p-5 shadow">
              <strong>Our promise:</strong> beautiful spaces, better living – with fair prices and careful work.
            </blockquote>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/products" className="btn btn-gold">Explore products</Link>
              <Link href="/contact" className="btn btn-outline">Visit the showroom</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section bg-cream2">
        <div className="container-x">
          <Reveal><h2 className="title">Why choose us</h2></Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WHY.map((w, i) => (
              <Reveal key={w.title} delay={i * 100}>
                <div className="card group h-full p-7 text-center">
                  <div className="mx-auto mb-4 grid size-14 place-items-center rounded-2xl bg-brand text-gold transition-transform duration-500 group-hover:-translate-y-1">
                    <Icon name={w.icon} className="size-7" />
                  </div>
                  <h3 className="mb-2 text-xl">{w.title}</h3>
                  <p className="text-neutral-600">{w.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
