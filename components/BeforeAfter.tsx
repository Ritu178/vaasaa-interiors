"use client";
import { useState } from "react";
import { img } from "@/lib/data";

export default function BeforeAfter({ before, after, label }: { before: string; after: string; label: string }) {
  const [pos, setPos] = useState(50);
  return (
    <figure className="ba">
      <div className="ba-box">
        <img src={img(after, 1200)} alt={`${label} after`} />
        <div className="ba-before" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          <img src={img(before, 1200)} alt={`${label} before`} style={{ filter: "grayscale(1) brightness(.8) contrast(.9)" }} />
        </div>
        <span className="tag tl">Before</span><span className="tag tr">After</span>
        <div className="ba-line" style={{ left: `${pos}%` }}><span>↔</span></div>
        <input type="range" min={0} max={100} value={pos} onChange={(e) => setPos(+e.target.value)} aria-label="Before and after slider" />
      </div>
      <figcaption>{label}</figcaption>
    </figure>
  );
}
