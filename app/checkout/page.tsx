import PageHero from "@/components/PageHero";
import CheckoutView from "@/components/CheckoutView";

export const metadata = { title: "Checkout – VaaSaa Interiors" };

export default function Checkout() {
  return (
    <>
      <PageHero title="Checkout" sub="Review your cart and place your order." />
      <section className="section"><div className="container-x"><CheckoutView /></div></section>
    </>
  );
}
