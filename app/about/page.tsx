import PageHero from "@/components/PageHero";
import Img from "@/components/Img";
import Reveal from "@/components/Reveal";
import { IMG, REVIEWS, WHY } from "@/lib/data";

export const metadata = { title: "About – VaaSaa Interiors" };

export default function About() {
  return (
    <>
      <PageHero title="About us" sub="Spaces | Style | You" />
      <section className="section">
        <div className="container-x grid items-center gap-12 md:grid-cols-2">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-3 -rotate-3 rounded-[2rem] bg-gold/30" />
              <div className="relative h-[28rem] overflow-hidden rounded-[2rem] shadow-2xl"><Img id={IMG.apt} alt="Founder of VaaSaa Interiors (placeholder photo)" w={900} /></div>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <h2 className="title left">Our story</h2>
            <p className="mb-4">VaaSaa Interiors began with a simple idea: good interior materials should be easy to find, fairly priced and properly installed. Based on Majitha Road, Amritsar, we bring together panels, stones, fabrics, wallpapers and greenery under one roof.</p>
            <p className="mb-4">Every home is different, so we sit with you, understand your space and suggest what will actually work – not just what is in stock.</p>
            <blockquote className="mt-6 rounded-r-2xl border-l-4 border-gold bg-white p-5 shadow"><strong>Our mission:</strong> to make beautiful, lasting interiors accessible to every family in Punjab – with honest advice, fair prices and careful work.</blockquote>
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
                  <div className="mb-3 inline-block text-4xl transition-transform duration-500 group-hover:rotate-12 group-hover:scale-125">{w.icon}</div>
                  <h3 className="mb-2 text-xl">{w.title}</h3><p className="text-neutral-600">{w.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <Reveal><h2 className="title">Testimonials</h2></Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {REVIEWS.map((r, i) => (
              <Reveal key={r.name} delay={i * 120}>
                <blockquote className="card h-full p-7">
                  <div className="mb-3 tracking-[3px] text-gold">★★★★★</div><p>“{r.text}”</p>
                  <footer className="mt-4 text-sm text-neutral-500"><strong className="text-brand">{r.name}</strong> · {r.place}</footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
