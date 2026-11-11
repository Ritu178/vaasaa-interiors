"use client";
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { PRODUCTS, type Product } from "@/lib/data";

type Line = { product: Product; qty: number };
type Ctx = {
  lines: Line[];
  count: number;
  total: number;
  bump: number;
  add: (p: Product) => void;
  setQty: (id: string, qty: number) => void;
  remove: (id: string) => void;
  clear: () => void;
};

const CartCtx = createContext<Ctx | null>(null);
const KEY = "vaasaa-cart";

export const useCart = () => {
  const c = useContext(CartCtx);
  if (!c) throw new Error("useCart outside CartProvider");
  return c;
};

export default function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<Record<string, number>>({});
  const [ready, setReady] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const [bump, setBump] = useState(0);

  useEffect(() => {
    try { setItems(JSON.parse(localStorage.getItem(KEY) || "{}")); } catch {}
    setReady(true);
  }, []);
  useEffect(() => {
    if (!ready) return;
    try { localStorage.setItem(KEY, JSON.stringify(items)); } catch {}
  }, [items, ready]);
  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 2200);
    return () => clearTimeout(t);
  }, [toast]);

  const add = useCallback((p: Product) => {
    setItems((s) => ({ ...s, [p.id]: (s[p.id] ?? 0) + 1 }));
    setToast(`${p.name} added to cart`);
    setBump((b) => b + 1);
  }, []);
  const setQty = useCallback((id: string, qty: number) => {
    setItems((s) => {
      const n = { ...s };
      if (qty <= 0) delete n[id]; else n[id] = Math.min(qty, 9999);
      return n;
    });
  }, []);
  const remove = useCallback((id: string) => setQty(id, 0), [setQty]);
  const clear = useCallback(() => setItems({}), []);

  const value = useMemo<Ctx>(() => {
    const lines = Object.entries(items)
      .map(([id, qty]) => ({ product: PRODUCTS.find((p) => p.id === id)!, qty }))
      .filter((l) => l.product && l.product.price);
    return {
      lines,
      count: lines.length,
      total: lines.reduce((a, l) => a + l.product.price! * l.qty, 0),
      bump, add, setQty, remove, clear,
    };
  }, [items, bump, add, setQty, remove, clear]);

  return (
    <CartCtx.Provider value={value}>
      {children}
      {toast && (
        <div className="fixed bottom-24 left-1/2 z-[70] -translate-x-1/2 animate-toast rounded-full bg-brand px-6 py-3 text-sm text-white shadow-2xl">
          ✓ {toast}
        </div>
      )}
    </CartCtx.Provider>
  );
}
