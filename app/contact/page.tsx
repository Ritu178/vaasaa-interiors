import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { BRAND, waLink } from "@/lib/data";

export const metadata = { title: "Contact – VaaSaa Interiors" };

export default function Contact() {
  return (
    <>
      <PageHero title="Contact us" sub="Tell us what you need and we will get back with a free quote." />
      <section className="section">
        <div className="container grid g2">
          <ContactForm />
          <div>
            <div className="card pad info">
              <h2>Showroom details</h2>
              <p><strong>Address</strong><br />{BRAND.address}</p>
              <p><strong>Phone / WhatsApp</strong><br />{BRAND.phone}</p>
              <p><strong>Shop timings</strong><br />{BRAND.timings}</p>
              <div className="btn-row">
                <a className="btn btn-green" href={`tel:${BRAND.phone}`}>Call now</a>
                <a className="btn btn-gold" target="_blank" rel="noreferrer" href={waLink("Hello VaaSaa Interiors!")}>WhatsApp</a>
              </div>
            </div>
            <iframe className="map mt" src={BRAND.map} loading="lazy" title="VaaSaa Interiors location" />
          </div>
        </div>
      </section>
    </>
  );
}
