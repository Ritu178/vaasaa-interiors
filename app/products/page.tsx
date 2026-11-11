import PageHero from "@/components/PageHero";
import ProductGrid from "@/components/ProductGrid";
import JsonLd from "@/components/JsonLd";
import { productsJsonLd, breadcrumbJsonLd, pageMeta } from "@/lib/seo";

export const metadata = pageMeta("Products – PVC, WPC Panels, UV Marble Sheets, Wallpapers & More", "Browse PVC & WPC panels, charcoal louvers, UV marble sheets, wallpapers, sofa fabric, French molding, PU stones, artificial grass, planters, curtains and blinds in Amritsar. Enquire on WhatsApp for the best price.", "/products", "Products");

export default function Products() {
  return (
    <>
      <JsonLd data={[productsJsonLd, breadcrumbJsonLd("Products", "/products")]} />
      <PageHero title="Products" sub="Add items to your cart or enquire on WhatsApp for the best price. Prices shown are indicative." />
      <section className="section"><div className="container-x"><ProductGrid /></div></section>
    </>
  );
}
