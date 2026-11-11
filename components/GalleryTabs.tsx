"use client";
import { useState } from "react";
import { BRAND, GALLERY, IMG, REELS } from "@/lib/data";
import Img from "./Img";
import BeforeAfter from "./BeforeAfter";

const TABS = ["Photos", "Reels", "Before and after"];

export default function GalleryTabs() {
  const [tab, setTab] = useState(TABS[0]);
  return (
    <>
      <div className="mb-10 flex flex-wrap justify-center gap-2.5">
        {TABS.map((t, i) => <button key={t} style={{ animationDelay: `${i * 90}ms` }} className={`pill animate-zoom-in ${tab === t ? "on" : ""}`} onClick={() => setTab(t)}>{t}</button>)}
      </div>

      <p className="mx-auto mb-8 max-w-xl rounded-full bg-gold/15 px-5 py-2 text-center text-sm text-ink">Sample images shown – real project photos coming soon.</p>

      <div key={tab} className="animate-fade-up">
        {tab === "Photos" && (
          <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
            {GALLERY.map((g, i) => (
              <figure key={g.cap} style={{ animationDelay: `${i * 90}ms` }} className="group mb-5 animate-zoom-in break-inside-avoid overflow-hidden rounded-3xl bg-surface shadow-md transition duration-500 hover:-translate-y-1 hover:shadow-2xl">
                <div className="overflow-hidden" style={{ height: g.h }}>
                  <Img id={g.src} alt={g.cap} w={800} className="transition-transform duration-700 group-hover:scale-110" />
                </div>
                <figcaption className="px-4 py-3 text-sm">{g.cap}</figcaption>
              </figure>
            ))}
          </div>
        )}

        {tab === "Reels" && (
          <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
            {REELS.map((r, i) => (
              <a key={r.cap} style={{ animationDelay: `${i * 110}ms` }} href={BRAND.instagramUrl} target="_blank" rel="noreferrer" className="group relative block animate-zoom-in aspect-[9/14] overflow-hidden rounded-3xl transition duration-500 hover:-translate-y-1.5 hover:shadow-2xl">
                <Img id={r.src} alt={r.cap} w={600} className="transition-transform duration-700 group-hover:scale-110" />
                <span className="absolute left-1/2 top-1/2 grid size-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/85 text-brand transition group-hover:scale-125">▶</span>
                <em className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 pt-8 text-sm not-italic text-white">{r.cap}</em>
              </a>
            ))}
          </div>
        )}

        {tab === "Before and after" && (
          <div className="grid gap-8 md:grid-cols-2">
            <div className="animate-slide-left"><BeforeAfter before={IMG.living} after={IMG.living} label="Living room, UV marble wall" /></div>
            <div className="animate-slide-right"><BeforeAfter before={IMG.garden} after={IMG.garden} label="Terrace garden, artificial grass" /></div>
          </div>
        )}
      </div>

      <div className="mt-10 text-center">
        <a className="btn btn-gold" href={BRAND.instagramUrl} target="_blank" rel="noreferrer">See more on Instagram</a>
      </div>
    </>
  );
}
