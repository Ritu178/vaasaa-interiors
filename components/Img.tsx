"use client";
import { useState } from "react";
import { img } from "@/lib/data";

export default function Img({ id, alt, w = 900, className = "" }: { id: string; alt: string; w?: number; className?: string }) {
  const [bad, setBad] = useState(false);
  if (bad) return <div className={`size-full bg-gradient-to-br from-brand2 to-gold ${className}`} role="img" aria-label={alt} />;
  return <img src={img(id, w)} alt={alt} loading="lazy" className={className} onError={() => setBad(true)} />;
}
