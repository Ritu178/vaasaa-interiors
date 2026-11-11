import PageHero from "@/components/PageHero";
import ProductGrid from "@/components/ProductGrid";

export const metadata = { title: "Products – VaaSaa Interiors" };

export default function Products() {
  return (
    <>
      <PageHero title="Products" sub="Browse our range and enquire on WhatsApp for the best price. Prices shown are indicative." />
      <section className="section"><div className="container"><ProductGrid /></div></section>
    </>
  );
}
