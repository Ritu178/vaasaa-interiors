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
    <form className="card form" onSubmit={submit}>
      <h2>Get a free quote</h2>
      <label>Name<input name="name" required placeholder="Your name" /></label>
      <label>Phone<input name="phone" required type="tel" pattern="[0-9+ ]{10,14}" placeholder="10-digit mobile number" /></label>
      <label>Product interest
        <select name="product" required defaultValue="">
          <option value="" disabled>Select a product</option>
          {FILTERS.slice(1).map((f) => <option key={f}>{f}</option>)}
          <option>Other</option>
        </select>
      </label>
      <label>Message<textarea name="message" rows={4} placeholder="Tell us about your space" /></label>
      <button className="btn btn-green block" type="submit">Request quote</button>
      {sent && <p className="ok">Thanks! Your enquiry opened in WhatsApp – just press send.</p>}
    </form>
  );
}
