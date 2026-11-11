"use client";
import { useState } from "react";
import { img } from "@/lib/data";

export default function BeforeAfter({ before, after, label }: { before: string; after: string; label: string }) {
  const [pos, setPos] = useState(50);
  return (
    <figure>
      <div className="relative aspect-[4/3] select-none overflow-hidden rounded-3xl shadow-xl">
        <img src={img(after, 1200)} alt={`${label} after`} />
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          <img src={img(before, 1200)} alt={`${label} before`} style={{ filter: "grayscale(1) brightness(.8) contrast(.9)" }} />
        </div>
        <span className="absolute left-3 top-3 rounded-full bg-brand/80 px-3 py-1 text-xs text-white">Before</span>
        <span className="absolute right-3 top-3 rounded-full bg-brand/80 px-3 py-1 text-xs text-white">After</span>
        <div className="pointer-events-none absolute inset-y-0 w-[3px] -translate-x-1/2 bg-white" style={{ left: `${pos}%` }}>
          <span className="absolute left-1/2 top-1/2 grid size-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-gold font-bold text-brand shadow-lg">↔</span>
        </div>
        <input type="range" min={0} max={100} value={pos} onChange={(e) => setPos(+e.target.value)} aria-label="Before and after slider"
          className="absolute inset-0 size-full cursor-ew-resize opacity-0" />
      </div>
      <figcaption className="mt-3 text-center font-medium">{label}</figcaption>
    </figure>
  );
}
