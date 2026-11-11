import PageHero from "@/components/PageHero";
import GalleryTabs from "@/components/GalleryTabs";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";

export const metadata = pageMeta("Gallery – Interior Projects, Reels & Before/After", "See VaaSaa Interiors projects in Amritsar: UV marble walls, fluted WPC panels, charcoal louvers, terrace gardens with artificial grass, wallpapers and more.", "/gallery", "Gallery");

export default function Gallery() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd("Gallery", "/gallery")} />
      <PageHero title="Gallery" sub="A look at spaces we have helped transform." />
      <section className="section"><div className="container-x"><GalleryTabs /></div></section>
    </>
  );
}
