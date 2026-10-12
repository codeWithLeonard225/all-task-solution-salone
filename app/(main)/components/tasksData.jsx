//app/(main)/components/TaskRequestModal.jsx// lib/tasksData.js

export const categories = [
  { id: "all", label: "All Services" },
  { id: "tech", label: "IT & Tech" },
  { id: "home", label: "Home & Repairs" },
  { id: "design", label: "Design & Creative" },
  { id: "business", label: "Business & Events" }
];

export const services = [
  {
    id: "web-dev",
    category: "tech",
    title: "Web & Software Development",
    description: "Custom web applications, e-commerce stores, and business portfolio websites.",
    icon: "FiCode",
    startingPrice: "From NLE 1,500",
    popularTags: ["React", "Next.js", "WordPress"]
  },
  {
    id: "electrical",
    category: "home",
    title: "Electrical & Solar Wiring",
    description: "Full residential wiring, solar inverter installations, and power fault maintenance.",
    icon: "FiZap",
    startingPrice: "From NLE 500",
    popularTags: ["Solar", "Wiring", "Maintenance"]
  },
  {
    id: "plumbing",
    category: "home",
    title: "Plumbing & Water Systems",
    description: "Pipe installations, water tank fitting, pump repairs, and leak fixes.",
    icon: "FiTool",
    startingPrice: "From NLE 400",
    popularTags: ["Pipes", "Tanks", "Repairs"]
  },
  {
    id: "graphic-design",
    category: "design",
    title: "Branding & Graphic Design",
    description: "Logos, flyers, social media banners, corporate IDs, and event stationery.",
    icon: "FiEdit3",
    startingPrice: "From NLE 300",
    popularTags: ["Logos", "Branding", "Flyers"]
  },
  {
    id: "event-planning",
    category: "business",
    title: "Event Decoration & Planning",
    description: "Weddings, corporate conferences, parties setup, and sound management.",
    icon: "FiCalendar",
    startingPrice: "From NLE 2,000",
    popularTags: ["Decor", "Weddings", "Sound"]
  },
  {
    id: "it-support",
    category: "tech",
    title: "Computer Repair & Networking",
    description: "Hardware repairs, OS setup, office network installation, and CCTV setup.",
    icon: "FiMonitor",
    startingPrice: "From NLE 450",
    popularTags: ["CCTV", "Network", "PC Repair"]
  }
];

export const galleryItems = [
  {
    id: "g1",
    title: "Modern E-Commerce Store",
    category: "tech",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    description: "Custom Next.js web application for local retail shop."
  },
  {
    id: "g2",
    title: "Residential Solar Inverter Setup",
    category: "home",
    image: "https://images.unsplash.com/photo-1508873696983-2df515122519?auto=format&fit=crop&q=80&w=800",
    description: "5KVA Hybrid Solar Installation completed in 2 days."
  },
  {
    id: "g3",
    title: "Corporate Identity & Branding",
    category: "design",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800",
    description: "Logo, business cards, and marketing banners for a logistics firm."
  },
  {
    id: "g4",
    title: "Office Network & CCTV Rigging",
    category: "tech",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800",
    description: "High-speed Ethernet routing and 16-camera installation."
  }
];