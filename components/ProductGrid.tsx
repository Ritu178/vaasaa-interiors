"use client";
import { useState } from "react";
import { FILTERS, PRODUCTS, waLink } from "@/lib/data";
import Img from "./Img";

export default function ProductGrid() {
  const [f, setF] = useState("All");
  const list = f === "All" ? PRODUCTS : PRODUCTS.filter((p) => p.cat === f);
  return (
    <>
      <div className="pills">
        {FILTERS.map((c) => (
          <button key={c} className={`pill ${f === c ? "on" : ""}`} onClick={() => setF(c)}>{c}</button>
        ))}
      </div>
      <div className="grid g3">
        {list.map((p) => (
          <article key={p.name} className="card product">
            <div className="thumb"><Img id={p.img} alt={p.name} w={700} /></div>
            <div className="card-body">
              <span className="label">{p.cat}</span>
              <h3>{p.name}</h3>
              <p className="price">{p.price ?? "Price on request"}</p>
              <a className="btn btn-green block" target="_blank" rel="noreferrer"
                href={waLink(`Hello VaaSaa Interiors, I'm interested in "${p.name}". Please share details and price.`)}>
                Enquire on WhatsApp
              </a>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
