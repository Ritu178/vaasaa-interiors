import { ImageResponse } from "next/og";

export const alt = "VaaSaa Interiors – Premium interior materials in Amritsar";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center",
          padding: 80, background: "linear-gradient(135deg,#173404,#27500A)", color: "#F8F5EE",
        }}
      >
        <div style={{ fontSize: 30, letterSpacing: 8, color: "#C9A24A", textTransform: "uppercase" }}>Amritsar · Punjab</div>
        <div style={{ fontSize: 100, fontWeight: 700, marginTop: 20 }}>VaaSaa Interiors</div>
        <div style={{ fontSize: 40, marginTop: 20, color: "#C9A24A" }}>Beautiful Spaces • Better Living</div>
        <div style={{ fontSize: 30, marginTop: 40, opacity: 0.85 }}>
          PVC &amp; WPC panels · UV marble · Wallpapers · Artificial grass · Curtains
        </div>
      </div>
    ),
    size
  );
}
