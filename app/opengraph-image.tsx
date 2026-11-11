import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "VaaSaa Interiors – Premium interior materials in Amritsar";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logo = await readFile(join(process.cwd(), "public", "logo.png"));
  const src = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%", height: "100%", display: "flex", alignItems: "center", padding: "0 80px",
          background: "linear-gradient(135deg,#F8F5EE 0%,#F0EBDD 100%)",
        }}
      >
        <div style={{ display: "flex", padding: 14, borderRadius: 999, background: "#C9A24A", boxShadow: "0 20px 50px rgba(23,52,4,.35)" }}>
          <img src={src} width={380} height={380} style={{ borderRadius: 999 }} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", marginLeft: 64, flex: 1 }}>
          <div style={{ fontSize: 26, letterSpacing: 6, color: "#C9A24A", textTransform: "uppercase", fontWeight: 700 }}>Amritsar · Punjab</div>
          <div style={{ fontSize: 84, fontWeight: 700, color: "#173404", marginTop: 12, lineHeight: 1.05 }}>VaaSaa Interiors</div>
          <div style={{ fontSize: 34, marginTop: 18, color: "#27500A" }}>Beautiful Spaces • Better Living</div>
          <div style={{ fontSize: 26, marginTop: 28, color: "#555", lineHeight: 1.35 }}>
            PVC &amp; WPC panels · UV marble sheets · Wallpapers · Artificial grass · Curtains
          </div>
        </div>
      </div>
    ),
    size
  );
}
