import PageHero from "@/components/PageHero";
import Img from "@/components/Img";
import { IMG, REVIEWS, WHY } from "@/lib/data";

export const metadata = { title: "About – VaaSaa Interiors" };

export default function About() {
  return (
    <>
      <PageHero title="About us" sub="Spaces | Style | You" />
      <section className="section">
        <div className="container grid g2 story">
          <div className="founder"><Img id={IMG.apt} alt="Founder of VaaSaa Interiors (placeholder photo)" w={900} /></div>
          <div>
            <h2 className="title left">Our story</h2>
            <p>VaaSaa Interiors began with a simple idea: good interior materials should be easy to find, fairly priced and properly installed. Based on Majitha Road, Amritsar, we bring together panels, stones, fabrics, wallpapers and greenery under one roof.</p>
            <p>Every home is different, so we sit with you, understand your space and suggest what will actually work – not just what is in stock.</p>
            <blockquote className="mission"><strong>Our mission:</strong> to make beautiful, lasting interiors accessible to every family in Punjab – with honest advice, fair prices and careful work.</blockquote>
          </div>
        </div>
      </section>

      <section className="section cream2">
        <div className="container">
          <h2 className="title">Why choose us</h2>
          <div className="grid g4">
            {WHY.map((w) => (
              <div key={w.title} className="card pad center-t">
                <div className="icon">{w.icon}</div><h3>{w.title}</h3><p>{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="title">Testimonials</h2>
          <div className="grid g3">
            {REVIEWS.map((r) => (
              <blockquote key={r.name} className="card pad quote">
                <div className="stars">★★★★★</div><p>“{r.text}”</p>
                <footer><strong>{r.name}</strong> · {r.place}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
