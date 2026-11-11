export const BRAND = {
  name: "VaaSaa Interiors",
  tagline: "Beautiful Spaces • Better Living",
  sub: "Spaces | Style | You",
  address: "36 Himmat Singh Avenue, Majitha Road, Amritsar, Punjab",
  phone: "8289031319",
  wa: "918289031319",
  instagram: "vaasaainterior",
  instagramUrl: "https://www.instagram.com/vaasaainterior/",
  // NOTE: placeholder timings – update with the real ones
  timings: "Mon – Sat: 10:00 AM – 8:00 PM · Sun: 11:00 AM – 5:00 PM",
  map: "https://www.google.com/maps?q=36+Himmat+Singh+Avenue,+Majitha+Road,+Amritsar&output=embed",
};

export const waLink = (text: string) =>
  `https://wa.me/${BRAND.wa}?text=${encodeURIComponent(text)}`;

const u = (id: string, w = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`;
export const img = u;

export const IMG = {
  hero: "photo-1618221195710-dd6b41faaea6",
  living: "photo-1600210492486-724fe5c67fb0",
  bedroom: "photo-1616486338812-3dadae4b4ace",
  interior1: "photo-1586023492125-27b2c045efd7",
  interior2: "photo-1524758631624-e2822e304c36",
  interior3: "photo-1513694203232-719a280e022f",
  living2: "photo-1493663284031-b7e3aefcae8e",
  living3: "photo-1484101403633-562f891dc89a",
  bed2: "photo-1505693416388-ac5ce068fe85",
  garden: "photo-1416879595882-3373a0480b5b",
  sofa: "photo-1567016376408-0226e4d0c1ea",
  chair: "photo-1540518614846-7eded433c457",
  kitchen: "photo-1556228453-efd6c1ff04f6",
  house: "photo-1600585154340-be6161a56a0c",
  wall: "photo-1615873968403-89e068629265",
  apt: "photo-1522708323590-d24dbb6b0267",
};

export const CATEGORIES = [
  { name: "PVC and WPC panels", img: IMG.living2 },
  { name: "UV marble sheets", img: IMG.hero },
  { name: "Wallpapers", img: IMG.wall },
  { name: "Sofa fabric", img: IMG.sofa },
  { name: "Planters and grass", img: IMG.garden },
  { name: "French molding", img: IMG.interior2 },
  { name: "PU stones", img: IMG.house },
  { name: "Curtains and blinds", img: IMG.bedroom },
];

export const FILTERS = [
  "All",
  "PVC and WPC panels",
  "UV marble sheets",
  "Wallpapers",
  "Sofa fabric",
  "Planters and grass",
  "French molding",
  "PU stones",
  "Curtains and blinds",
];

export type Product = { name: string; cat: string; price: string | null; img: string };

export const PRODUCTS: Product[] = [
  { name: "Fluted WPC Wall Panel", cat: "PVC and WPC panels", price: "₹95 / sq ft", img: IMG.living2 },
  { name: "PVC Wall Panel – Wood Finish", cat: "PVC and WPC panels", price: "₹70 / sq ft", img: IMG.living3 },
  { name: "Charcoal Louver Panel", cat: "PVC and WPC panels", price: "₹185 / sq ft", img: IMG.interior3 },
  { name: "UV Marble Sheet – Carrara", cat: "UV marble sheets", price: "₹1,799 / sheet", img: IMG.hero },
  { name: "7D UV Marble Sheet", cat: "UV marble sheets", price: "Up to ₹2,499", img: IMG.living },
  { name: "UV Marble Sheet – Gold Vein", cat: "UV marble sheets", price: null, img: IMG.interior1 },
  { name: "Designer Wallpaper Roll", cat: "Wallpapers", price: "From ₹199", img: IMG.wall },
  { name: "Textured 3D Wallpaper", cat: "Wallpapers", price: "₹449 / roll", img: IMG.bed2 },
  { name: "Premium Velvet Sofa Fabric", cat: "Sofa fabric", price: "₹550 / metre", img: IMG.sofa },
  { name: "Chenille Upholstery Fabric", cat: "Sofa fabric", price: null, img: IMG.chair },
  { name: "Artificial Grass", cat: "Planters and grass", price: "From ₹25 / sq ft", img: IMG.garden },
  { name: "Vertical Garden Panel", cat: "Planters and grass", price: "₹399 / panel", img: IMG.apt },
  { name: "Artificial Planter Set", cat: "Planters and grass", price: "₹899", img: IMG.kitchen },
  { name: "French Molding – Classic", cat: "French molding", price: "₹120 / ft", img: IMG.interior2 },
  { name: "French Molding – Gold Trim", cat: "French molding", price: null, img: IMG.interior1 },
  { name: "PU Stone Wall Cladding", cat: "PU stones", price: "₹210 / sq ft", img: IMG.house },
  { name: "Sheer & Blackout Curtains", cat: "Curtains and blinds", price: null, img: IMG.bedroom },
  { name: "Roman Blinds", cat: "Curtains and blinds", price: "From ₹650 / sq ft", img: IMG.bed2 },
];

export const OFFERS = [
  { title: "Wallpaper", price: "From ₹199", desc: "Hundreds of designs – florals, textures, geometrics and kids' themes.", valid: "Valid till 31 Dec 2026", img: IMG.wall },
  { title: "Artificial Grass", price: "From ₹25 / sq ft", desc: "Soft, UV-resistant turf for terraces, balconies and lawns.", valid: "Valid till 31 Dec 2026", img: IMG.garden },
  { title: "7D UV Sheets", price: "Up to ₹2,499", desc: "Marble-look 7D UV sheets with a deep glossy finish.", valid: "Valid till 30 Nov 2026", img: IMG.hero },
];

export const WHY = [
  { icon: "🏬", title: "One-stop store", text: "Panels, stones, fabrics, grass and more – everything under one roof." },
  { icon: "🛠️", title: "Installation by our team", text: "Trained fitters handle the job neatly so you don't have to chase anyone." },
  { icon: "💰", title: "Fair prices", text: "Transparent pricing with no hidden costs – honest quotes every time." },
  { icon: "🎨", title: "Free design advice", text: "Walk in with a room, walk out with a plan – at no charge." },
];

export const REVIEWS = [
  { name: "Harpreet Kaur", place: "Majitha Road", text: "The UV marble wall in our living room looks stunning. Team installed it in a single day." },
  { name: "Gurpreet Singh", place: "Ranjit Avenue", text: "Best prices for WPC panels in Amritsar, and the advice on colours was really helpful." },
  { name: "Simran Arora", place: "Lawrence Road", text: "Got our terrace done with artificial grass and planters. Looks like a mini garden!" },
];

export const GALLERY = [
  { src: IMG.living, cap: "Living room, UV marble wall", h: 360 },
  { src: IMG.garden, cap: "Terrace garden, artificial grass", h: 260 },
  { src: IMG.bedroom, cap: "Master bedroom, wallpaper & curtains", h: 320 },
  { src: IMG.interior3, cap: "Entrance, charcoal louvers", h: 280 },
  { src: IMG.living2, cap: "TV unit wall, fluted WPC panels", h: 340 },
  { src: IMG.kitchen, cap: "Dining nook, French molding", h: 250 },
  { src: IMG.apt, cap: "Balcony, vertical garden panel", h: 330 },
  { src: IMG.house, cap: "Facade, PU stone cladding", h: 270 },
  { src: IMG.sofa, cap: "Lounge, custom sofa fabric", h: 300 },
];

export const REELS = [
  { src: IMG.living, cap: "UV marble wall install" },
  { src: IMG.garden, cap: "Terrace grass makeover" },
  { src: IMG.interior3, cap: "Louver panel walkthrough" },
  { src: IMG.bedroom, cap: "Wallpaper transformation" },
];

export const LINKS = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/gallery", label: "Gallery" },
  { href: "/offers", label: "Offers" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];
