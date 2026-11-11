import PageHero from "@/components/PageHero";
import Img from "@/components/Img";
import { OFFERS, waLink } from "@/lib/data";

export const metadata = { title: "Offers – VaaSaa Interiors" };

export default function Offers() {
  return (
    <>
      <PageHero title="Offers" sub="Limited-period deals on our most-loved materials." />
      <section className="section">
        <div className="container">
          <div className="grid g3">
            {OFFERS.map((o) => (
              <article key={o.title} className="card offer">
                <div className="thumb"><Img id={o.img} alt={o.title} w={700} /></div>
                <div className="card-body">
                  <span className="label">{o.valid}</span>
                  <h3>{o.title}</h3>
                  <p className="price big">{o.price}</p>
                  <p>{o.desc}</p>
                  <a className="btn btn-green block" target="_blank" rel="noreferrer"
                    href={waLink(`Hello VaaSaa Interiors, I want to claim the "${o.title} – ${o.price}" offer.`)}>
                    Claim on WhatsApp
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="banner">
            <div>
              <span className="eyebrow">Festive season sale</span>
              <h2>Make your home shine this season</h2>
              <p>Extra savings on panels, UV sheets and wallpapers. Free design consultation on every order.</p>
            </div>
            <a className="btn btn-gold" target="_blank" rel="noreferrer" href={waLink("Hello VaaSaa Interiors, I want to claim the festive sale offer.")}>
              Claim your offer
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
