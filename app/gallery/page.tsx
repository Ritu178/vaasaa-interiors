import PageHero from "@/components/PageHero";
import GalleryTabs from "@/components/GalleryTabs";

export const metadata = { title: "Gallery – VaaSaa Interiors" };

export default function Gallery() {
  return (
    <>
      <PageHero title="Gallery" sub="A look at spaces we have helped transform." />
      <section className="section"><div className="container"><GalleryTabs /></div></section>
    </>
  );
}
