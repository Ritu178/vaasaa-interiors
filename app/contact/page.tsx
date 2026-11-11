import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { BRAND, waLink } from "@/lib/data";

export const metadata = { title: "Contact – VaaSaa Interiors" };

export default function Contact() {
  return (
    <>
      <PageHero title="Contact us" sub="Tell us what you need and we will get back with a free quote." />
      <section className="section">
        <div className="container-x grid items-start gap-8 md:grid-cols-2">
          <Reveal><ContactForm /></Reveal>
          <Reveal delay={150}>
            <div className="space-y-6">
              <div className="space-y-4 rounded-3xl bg-white p-8 shadow-lg">
                <h2 className="text-3xl">Showroom details</h2>
                <p><strong>Address</strong><br />{BRAND.address}</p>
                <p><strong>Phone / WhatsApp</strong><br />{BRAND.phone}</p>
                <p><strong>Shop timings</strong><br />{BRAND.timings}</p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <a className="btn btn-green" href={`tel:${BRAND.phone}`}>Call now</a>
                  <a className="btn btn-gold" target="_blank" rel="noreferrer" href={waLink("Hello VaaSaa Interiors!")}>WhatsApp</a>
                </div>
              </div>
              <iframe className="h-[340px] w-full rounded-3xl border-0 shadow-xl" src={BRAND.map} loading="lazy" title="VaaSaa Interiors location" />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
