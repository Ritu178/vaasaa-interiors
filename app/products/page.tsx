import PageHero from "@/components/PageHero";
import ProductGrid from "@/components/ProductGrid";

export const metadata = { title: "Products – VaaSaa Interiors" };

export default function Products() {
  return (
    <>
      <PageHero title="Products" sub="Add items to your cart or enquire on WhatsApp for the best price. Prices shown are indicative." />
      <section className="section"><div className="container-x"><ProductGrid /></div></section>
    </>
  );
}
