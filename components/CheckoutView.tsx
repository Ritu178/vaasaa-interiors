"use client";
import Link from "next/link";
import { useState } from "react";
import { BRAND, inr, waLink } from "@/lib/data";
import { useCart } from "./CartProvider";
import Img from "./Img";
import Icon from "./Icon";

const PAY = [
  { id: "cod", label: "Cash on delivery", hint: "Pay when materials arrive" },
  { id: "upi", label: "UPI / bank transfer", hint: "We share payment details on WhatsApp" },
  { id: "showroom", label: "Pay at showroom", hint: "Pay when you collect or visit" },
];

type Done = { id: string; msg: string; total: number };

export default function CheckoutView() {
  const { lines, total, setQty, remove, clear } = useCart();
  const [mode, setMode] = useState<"delivery" | "pickup">("delivery");
  const [pay, setPay] = useState("cod");
  const [done, setDone] = useState<Done | null>(null);

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const id = "VSI-" + Math.floor(10000 + Math.random() * 90000);
    const items = lines.map((l, i) => `${i + 1}. ${l.product.name} – ${l.qty} ${l.product.unit} × ${inr(l.product.price!)} = ${inr(l.qty * l.product.price!)}`).join("\n");
    const where = mode === "delivery"
      ? `Delivery to: ${d.get("address")}, ${d.get("city")} – ${d.get("pincode")}`
      : "Pickup from showroom";
    const msg = `*New order ${id}*\n\n${items}\n\n*Total: ${inr(total)}* (delivery/installation extra if any)\n\nName: ${d.get("name")}\nPhone: ${d.get("phone")}\nEmail: ${d.get("email") || "-"}\n${where}\nPayment: ${PAY.find((p) => p.id === pay)?.label}\nNotes: ${d.get("notes") || "-"}`;
    window.open(waLink(msg), "_blank");
    setDone({ id, msg, total });
    clear();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (done)
    return (
      <div className="mx-auto max-w-xl animate-fade-up rounded-3xl bg-surface p-10 text-center shadow-xl">
        <div className="mx-auto mb-5 grid size-20 animate-pop place-items-center rounded-full bg-brand2 text-4xl text-white">✓</div>
        <h2 className="text-3xl">Order request sent!</h2>
        <p className="mt-2 text-neutral-600">Order <strong className="text-ink">{done.id}</strong> · {inr(done.total)}</p>
        <p className="mt-4 text-neutral-600">WhatsApp should have opened with your order details – just press <em>send</em>. Our team will confirm availability, delivery charges and payment with you shortly.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a className="btn btn-green" href={waLink(done.msg)} target="_blank" rel="noreferrer">Open WhatsApp again</a>
          <Link className="btn btn-outline" href="/products">Continue shopping</Link>
        </div>
      </div>
    );

  if (!lines.length)
    return (
      <div className="mx-auto max-w-md animate-fade-up py-10 text-center">
        <div className="mx-auto mb-5 grid size-20 place-items-center rounded-full bg-brand text-gold"><Icon name="cart" className="size-9" /></div>
        <h2 className="text-3xl">Your cart is empty</h2>
        <p className="mb-6 mt-2 text-neutral-600">Browse our products and add what you like.</p>
        <Link href="/products" className="btn btn-gold">Explore products</Link>
      </div>
    );

  return (
    <form onSubmit={submit} className="grid items-start gap-8 lg:grid-cols-[1.25fr_1fr]">
      <div className="space-y-8">
        {/* cart */}
        <section className="rounded-3xl bg-surface p-6 shadow-lg">
          <h2 className="mb-5 text-2xl">Your cart</h2>
          <ul className="divide-y divide-line">
            {lines.map(({ product: p, qty }) => (
              <li key={p.id} className="grid animate-fade-in grid-cols-[4.5rem_1fr_auto] items-center gap-x-4 gap-y-3 py-4 sm:grid-cols-[5rem_1fr_auto_auto_auto]">
                <div className="row-span-1 size-[4.5rem] overflow-hidden rounded-2xl sm:size-20"><Img id={p.img} alt={p.name} w={300} /></div>
                <div className="min-w-0">
                  <h3 className="text-base leading-snug">{p.name}</h3>
                  <p className="text-sm text-neutral-500">{inr(p.price!)} / {p.unit}</p>
                </div>
                <button type="button" aria-label={`Remove ${p.name}`} className="grid size-8 place-items-center justify-self-end rounded-full text-xl text-neutral-400 transition hover:scale-110 hover:bg-red-50 hover:text-red-600 sm:order-last" onClick={() => remove(p.id)}>×</button>
                <div className="col-span-3 flex items-center justify-between gap-3 sm:col-span-1 sm:contents">
                  <div className="flex items-center overflow-hidden rounded-full border border-line sm:order-4">
                    <button type="button" aria-label="Decrease" className="size-9 transition hover:bg-gold/30" onClick={() => setQty(p.id, qty - 1)}>−</button>
                    <input aria-label={`Quantity in ${p.unit}`} type="number" min={1} value={qty}
                      onChange={(e) => setQty(p.id, Math.max(1, +e.target.value || 1))}
                      className="w-14 bg-transparent text-center outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none" />
                    <button type="button" aria-label="Increase" className="size-9 transition hover:bg-gold/30" onClick={() => setQty(p.id, qty + 1)}>+</button>
                  </div>
                  <p className="min-w-20 text-right font-bold text-ink2 sm:order-5">{inr(qty * p.price!)}</p>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-neutral-500">Quantity is in the unit shown (sq ft, roll, metre, etc.).</p>
        </section>

        {/* details */}
        <section className="rounded-3xl bg-surface p-6 shadow-lg">
          <h2 className="mb-5 text-2xl">Your details</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="field">Full name<input name="name" required placeholder="Your name" /></label>
            <label className="field">Phone<input name="phone" required type="tel" pattern="[0-9+ ]{10,14}" placeholder="10-digit mobile number" /></label>
            <label className="field sm:col-span-2">Email (optional)<input name="email" type="email" placeholder="you@example.com" /></label>
          </div>

          <div className="my-6 grid grid-cols-2 gap-3">
            {([["delivery", "Home delivery", "truck"], ["pickup", "Showroom pickup", "store"]] as const).map(([k, l, ic]) => (
              <button type="button" key={k} onClick={() => setMode(k)}
                className={`rounded-2xl border-2 p-4 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 ${mode === k ? "border-brand bg-brand text-white shadow-lg" : "border-line bg-cream"}`}><Icon name={ic} className="mx-auto mb-1 size-6" />{l}</button>
            ))}
          </div>

          {mode === "delivery" ? (
            <div key="d" className="grid animate-fade-up gap-4 sm:grid-cols-2">
              <label className="field sm:col-span-2">Address<textarea name="address" required rows={2} placeholder="House no., street, area" /></label>
              <label className="field">City<input name="city" required defaultValue="Amritsar" /></label>
              <label className="field">Pincode<input name="pincode" required pattern="[0-9]{6}" placeholder="143001" /></label>
            </div>
          ) : (
            <p key="p" className="animate-fade-up rounded-2xl bg-cream p-4 text-sm">Collect from <strong>{BRAND.address}</strong>.<br />{BRAND.timings}</p>
          )}

          <label className="field mt-4">Notes (optional)<textarea name="notes" rows={2} placeholder="Colour preference, installation needed, etc." /></label>
        </section>

        {/* payment */}
        <section className="rounded-3xl bg-surface p-6 shadow-lg">
          <h2 className="mb-5 text-2xl">Payment</h2>
          <div className="grid gap-3">
            {PAY.map((p) => (
              <label key={p.id} className={`flex cursor-pointer items-center gap-3 rounded-2xl border-2 p-4 transition-all duration-300 ${pay === p.id ? "border-brand bg-brand/5" : "border-line hover:border-gold"}`}>
                <input type="radio" name="pay" checked={pay === p.id} onChange={() => setPay(p.id)} className="size-4 accent-brand2" />
                <span><strong className="block text-sm">{p.label}</strong><span className="text-xs text-neutral-500">{p.hint}</span></span>
              </label>
            ))}
          </div>
        </section>
      </div>

      {/* summary */}
      <aside className="space-y-4 rounded-3xl bg-brand p-7 text-white shadow-2xl lg:sticky lg:top-28">
        <h2 className="text-2xl text-white">Order summary</h2>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between"><span>Subtotal ({lines.length} item{lines.length > 1 ? "s" : ""})</span><span>{inr(total)}</span></div>
          <div className="flex justify-between"><span>Delivery & installation</span><span className="text-gold">Confirmed on WhatsApp</span></div>
        </div>
        <div className="flex justify-between border-t border-white/20 pt-4 font-serif text-2xl">
          <span>Total</span><span className="text-gold">{inr(total)}</span>
        </div>
        <button className="btn btn-gold btn-block py-4! text-base" type="submit">Place order</button>
        <p className="text-xs leading-relaxed opacity-75">Your order is sent to our team on WhatsApp. We confirm stock, final price and delivery before any payment is taken.</p>
      </aside>
    </form>
  );
}
