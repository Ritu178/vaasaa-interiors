"use client";
import { useState } from "react";
import { FILTERS, PRODUCTS, priceLabel, waLink } from "@/lib/data";
import Img from "./Img";
import Icon from "./Icon";
import { useCart } from "./CartProvider";

export default function ProductGrid() {
  const [f, setF] = useState("All");
  const { add } = useCart();
  const list = f === "All" ? PRODUCTS : PRODUCTS.filter((p) => p.cat === f);
  return (
    <>
      <div className="mb-10 flex flex-wrap gap-2.5">
        {FILTERS.map((c, i) => (
          <button key={c} style={{ animationDelay: `${i * 60}ms` }} className={`pill animate-zoom-in ${f === c ? "on" : ""}`} onClick={() => setF(c)}>{c}</button>
        ))}
      </div>
      <div key={f} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p, i) => (
          <div key={p.id} className="animate-fade-up" style={{ animationDelay: `${(i % 6) * 70}ms` }}>
            <article className="card group h-full">
              <div className="h-60 overflow-hidden">
                <Img id={p.img} alt={p.name} w={700} className="transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="p-5">
                <span className="label">{p.cat}</span>
                <h3 className="mt-1 text-xl">{p.name}</h3>
                <p className="mb-4 mt-1 font-bold text-ink2">{priceLabel(p)}</p>
                <div className="grid gap-2.5">
                  {p.price && (
                    <button className="btn btn-gold btn-block group/cart" onClick={() => add(p)}><Icon name="cart" className="size-4" /> Add to cart</button>
                  )}
                  <a className="btn btn-green btn-block" target="_blank" rel="noreferrer"
                    href={waLink(`Hello VaaSaa Interiors, I'm interested in "${p.name}". Please share details and price.`)}>
                    Enquire on WhatsApp
                  </a>
                </div>
              </div>
            </article>
          </div>
        ))}
      </div>
    </>
  );
}
