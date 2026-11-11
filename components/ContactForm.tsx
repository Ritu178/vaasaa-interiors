"use client";
import { useState } from "react";
import { FILTERS, waLink } from "@/lib/data";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const msg = `Hello VaaSaa Interiors, I'd like a free quote.\nName: ${d.get("name")}\nPhone: ${d.get("phone")}\nInterested in: ${d.get("product")}\nMessage: ${d.get("message") || "-"}`;
    window.open(waLink(msg), "_blank");
    setSent(true);
  }
  return (
    <form className="flex flex-col gap-4 rounded-3xl bg-white p-8 shadow-lg transition duration-500 hover:shadow-2xl [&>label]:animate-fade-up [&>label:nth-of-type(1)]:[animation-delay:100ms] [&>label:nth-of-type(2)]:[animation-delay:200ms] [&>label:nth-of-type(3)]:[animation-delay:300ms] [&>label:nth-of-type(4)]:[animation-delay:400ms]" onSubmit={submit}>
      <h2 className="text-3xl">Get a free quote</h2>
      <label className="field">Name<input name="name" required placeholder="Your name" /></label>
      <label className="field">Phone<input name="phone" required type="tel" pattern="[0-9+ ]{10,14}" placeholder="10-digit mobile number" /></label>
      <label className="field">Product interest
        <select name="product" required defaultValue="">
          <option value="" disabled>Select a product</option>
          {FILTERS.slice(1).map((f) => <option key={f}>{f}</option>)}
          <option>Other</option>
        </select>
      </label>
      <label className="field">Message<textarea name="message" rows={4} placeholder="Tell us about your space" /></label>
      <button className="btn btn-green btn-block" type="submit">Request quote</button>
      {sent && <p className="animate-fade-up font-semibold text-brand2">Thanks! Your enquiry opened in WhatsApp – just press send.</p>}
    </form>
  );
}
