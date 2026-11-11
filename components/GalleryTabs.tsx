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
      <div className="pills center">
        {TABS.map((t) => <button key={t} className={`pill ${tab === t ? "on" : ""}`} onClick={() => setTab(t)}>{t}</button>)}
      </div>

      {tab === "Photos" && (
        <div className="masonry">
          {GALLERY.map((g) => (
            <figure key={g.cap} className="m-item">
              <div style={{ height: g.h }}><Img id={g.src} alt={g.cap} w={800} /></div>
              <figcaption>{g.cap}</figcaption>
            </figure>
          ))}
        </div>
      )}

      {tab === "Reels" && (
        <div className="grid g4">
          {REELS.map((r) => (
            <a key={r.cap} href={BRAND.instagramUrl} target="_blank" rel="noreferrer" className="reel">
              <Img id={r.src} alt={r.cap} w={600} />
              <span className="play">▶</span>
              <em>{r.cap}</em>
            </a>
          ))}
        </div>
      )}

      {tab === "Before and after" && (
        <div className="grid g2">
          <BeforeAfter before={IMG.living} after={IMG.living} label="Living room, UV marble wall" />
          <BeforeAfter before={IMG.garden} after={IMG.garden} label="Terrace garden, artificial grass" />
        </div>
      )}

      <div className="center mt"><a className="btn btn-gold" href={BRAND.instagramUrl} target="_blank" rel="noreferrer">See more on Instagram</a></div>
    </>
  );
}
