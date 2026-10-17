// app/(main)/components/buildingMaterialsData.jsx

export const buildingCategories = [
  { id: "all", label: "All Materials" },
  { id: "cement", label: "Cement & Aggregates" },
  { id: "iron", label: "Iron Rods & Steel" },
  { id: "roofing", label: "Roofing & Timber" },
  { id: "finishing", label: "Tiles & Finishing" }
];

export const buildingMaterials = [
  {
    id: "bm-1",
    category: "cement",
    title: "Premium Grade 42.5R Cement",
    shopName: "Freetown Building Supplies Ltd",
    location: "Cline Town, Freetown",
    price: "NLE 220 / bag",
    freeDeliveryText: "Free delivery above 50 bags within central Freetown",
    whatsappNumber: "23278355416",
    displayPhones: ["078355416", "031183845"],
    image: "/Images/cement.jpg",
    description: "High-strength Portland cement ideal for structural foundations and heavy casting."
  },
  {
    id: "bm-2",
    category: "iron",
    title: "12mm High-Yield Deformed Iron Rods",
    shopName: "Sierra Steel & Hardware Hub",
    location: "Kissy Bypass Road",
    price: "NLE 185 / rod",
    freeDeliveryText: "Free delivery on orders above 100 bundles",
    whatsappNumber: "23278355416",
    displayPhones: ["078355416", "031183845"],
    image: "/Images/zink.PNG",
    description: "Certified tensile strength steel bars for durable pillars, beams, and slabs."
  },
  {
    id: "bm-3",
    category: "iron",
    title: "16mm Heavy Structural Steel Rods",
    shopName: "Atlantic Builders Depot",
    location: "Wilkinson Road, Freetown",
    price: "NLE 340 / rod",
    freeDeliveryText: "Free delivery across West End for bulk orders (50+ rods)",
    whatsappNumber: "23278355416",
    displayPhones: ["078355416", "031183845"],
    image: "/Images/rod.PNG",
    description: "Industrial-grade reinforced iron bars for multi-story commercial and residential projects."
  },
  {
    id: "bm-4",
    category: "roofing",
    title: "Aluminium Corrugated Roofing Sheets (0.5mm)",
    shopName: "EcoMas Hardware & Construction",
    location: "Lumley Road, Freetown",
    price: "NLE 150 / sheet",
    freeDeliveryText: "Free delivery for roof packs covering complete houses",
    whatsappNumber: "23278355416",
    displayPhones: ["078355416", "031183845"],
    image: "/Images/roofing_sheets.jpg",
    description: "Rust-resistant colored aluminium sheets with high durability against heavy tropical rains."
  }
];