// app/(main)/services/procurement-general-services/page.jsx
"use client";

import { useMemo, useState } from "react";
import {
  FaSearch,
  FaMapMarkerAlt,
  FaArrowRight,
  FaArrowUp,
  FaHeart,
  FaTimes,
  FaCheckCircle,
  FaPaperPlane,
  FaBoxes,
  FaBuilding,
  FaTruckLoading,
  FaClipboardList,
  FaTools,
  FaShieldAlt,
  FaClock,
  FaStar,
} from "react-icons/fa";

// Procurement Request Modal Component
function ProcurementModal({ isOpen, onClose, selectedService }) {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    phone: "",
    email: "",
    serviceType: "",
    budgetEstimate: "",
    location: "",
    details: "",
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: "",
      organization: "",
      phone: "",
      email: "",
      serviceType: "",
      budgetEstimate: "",
      location: "",
      details: "",
    });
    onClose();
  };

  const currentTitle = selectedService ? selectedService.title : formData.serviceType;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
      <div className="relative w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl dark:border-slate-800 dark:bg-slate-900">
        <button
          onClick={handleReset}
          className="absolute right-4 top-4 p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
          aria-label="Close modal"
        >
          <FaTimes className="h-5 w-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center">
            <FaCheckCircle className="mx-auto mb-4 h-16 w-16 text-emerald-500" />
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Procurement Request Received!
            </h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Our corporate sourcing team will review your specifications, prepare a formal quote, and contact you shortly.
            </p>
            <button
              onClick={handleReset}
              className="mt-6 rounded-xl bg-blue-600 px-6 py-2.5 font-semibold text-white transition hover:bg-blue-700"
            >
              Done
            </button>
          </div>
        ) : (
          <>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Request Procurement & Sourcing
            </h3>
            <p className="mb-6 text-sm text-slate-500 dark:text-slate-400">
              Provide your corporate or personal procurement details below. We handle transparent local and cross-border vendor sourcing.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-xs font-semibold uppercase text-slate-600 dark:text-slate-300">
                    Contact Person *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Lamin Sesay"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:ring-blue-900"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-xs font-semibold uppercase text-slate-600 dark:text-slate-300">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="e.g. Sierra Tech Ltd / NGO"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:ring-blue-900"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-xs font-semibold uppercase text-slate-600 dark:text-slate-300">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+232 78 000000"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:ring-blue-900"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-xs font-semibold uppercase text-slate-600 dark:text-slate-300">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="procurement@company.com"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:ring-blue-900"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1 block text-xs font-semibold uppercase text-slate-600 dark:text-slate-300">
                  Service / Sourcing Category *
                </label>
                <input
                  type="text"
                  required
                  value={currentTitle}
                  onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                  placeholder="e.g. Bulk Office Furniture & IT Equipment Supply"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:ring-blue-900"
                />
              </div>

              <div>
                <label className="mb-1 block text-xs font-semibold uppercase text-slate-600 dark:text-slate-300">
                  Delivery / Project Location in Sierra Leone *
                </label>
                <input
                  type="text"
                  required
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  placeholder="e.g. Freetown CBD, Bo, Kenema, Makeni"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:ring-blue-900"
                />
              </div>

              <div>
                <label className="mb-1 block text-xs font-semibold uppercase text-slate-600 dark:text-slate-300">
                  Item Specifications & Special Instructions
                </label>
                <textarea
                  rows={3}
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  placeholder="List quantities, model numbers, delivery deadlines, or target budgets..."
                  className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:ring-blue-900"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3.5 font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
              >
                <FaPaperPlane className="h-4 w-4" /> Submit Sourcing Request
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

const procurementCategories = [
  { name: "All Services", icon: FaBoxes },
  { name: "Office Supplies & IT Sourcing", icon: FaBuilding },
  { name: "Equipment & Tool Sourcing", icon: FaTools },
  { name: "Logistics & Freight Handling", icon: FaTruckLoading },
  { name: "Facility Maintenance Contracts", icon: FaClipboardList },
];

const servicesList = [
  {
    id: 1,
    title: "Corporate Office Furniture & Stationeries Supply",
    category: "Office Supplies & IT Sourcing",
    location: "Freetown & Major Towns",
    price: "Custom Quotation",
    rating: "4.9 (31 reviews)",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=85",
    description: "End-to-end procurement for executive desks, ergonomic chairs, paper supplies, printers, and office electronics.",
    urgent: false,
  },
  {
    id: 2,
    title: "Industrial Tools & Safety Gear Sourcing",
    category: "Equipment & Tool Sourcing",
    location: "Freetown, Bo & Mining Districts",
    price: "Competitive Wholesale Pricing",
    rating: "5.0 (24 reviews)",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=85",
    description: "Supply of PPE safety boots, helmets, high-visibility vests, power tools, generators, and heavy-duty hardware.",
    urgent: true,
  },
  {
    id: 3,
    title: "Upcountry Cargo Freight & Distribution",
    category: "Logistics & Freight Handling",
    location: "Provinces Wide (Bo, Kenema, Makeni)",
    price: "Based on Cargo Volume",
    rating: "4.8 (19 reviews)",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=85",
    description: "Reliable warehousing, loading, and road transport logistics for agricultural products, merchandise, and project materials.",
    urgent: false,
  },
  {
    id: 4,
    title: "Annual Facility Maintenance Management (PMC)",
    category: "Facility Maintenance Contracts",
    location: "Freetown Area",
    price: "Retainer / Contract Basis",
    rating: "4.9 (27 reviews)",
    image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=900&q=85",
    description: "Comprehensive facility upkeep covering plumbing, electrical systems, air conditioning servicing, and structural repairs.",
    urgent: false,
  },
  {
    id: 5,
    title: "Solar Power Systems & Inverter Sourcing",
    category: "Equipment & Tool Sourcing",
    location: "Western Area & Upcountry",
    price: "Package Based",
    rating: "5.0 (42 reviews)",
    image: "https://images.unsplash.com/photo-1508873696983-2df515122519?auto=format&fit=crop&w=900&q=85",
    description: "Procurement and setup of high-efficiency solar panels, lithium batteries, and inverters for homes, NGOs, and commercial buildings.",
    urgent: true,
  },
  {
    id: 6,
    title: "Event Equipment & Canopy Tent Rental",
    category: "Office Supplies & IT Sourcing",
    location: "Freetown & Environs",
    price: "Daily / Event Package",
    rating: "4.8 (33 reviews)",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=900&q=85",
    description: "Procurement and setup of public address sound systems, high-peak canopy tents, executive chairs, and generators for corporate functions.",
    urgent: false,
  },
];

export default function ProcurementGeneralServicesPage() {
  const [activeCategory, setActiveCategory] = useState("All Services");
  const [favorites, setFavorites] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const filteredServices = useMemo(() => {
    if (activeCategory === "All Services") return servicesList;
    return servicesList.filter((s) => s.category === activeCategory);
  }, [activeCategory]);

  function toggleFavorite(id) {
    setFavorites((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id]
    );
  }

  function scrollToServices() {
    document.getElementById("service-list")?.scrollIntoView({ behavior: "smooth" });
  }

  function selectCategory(name) {
    setActiveCategory(name);
    scrollToServices();
  }

  function clearFilters() {
    setActiveCategory("All Services");
  }

  function handleOpenModal(service = null) {
    setSelectedService(service);
    setIsModalOpen(true);
  }

  return (
    <div className="py-10">
      {/* PAGE HEADER */}
      
{/* PROFESSIONAL PROCUREMENT HERO */}

<section className="relative isolate flex min-h-[520px] items-center overflow-hidden bg-slate-950 py-20 text-white sm:min-h-[580px]">

  {/* Background Image */}
  <div
    className="absolute inset-0 -z-20 bg-cover bg-center"
    style={{
      backgroundImage:
        "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2000&q=85')",
    }}
  />

  {/* Dark Gradient Overlay */}
  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/40" />

  <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
    <div className="max-w-3xl">

      {/* Label */}
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-blue-300 backdrop-blur-md">
        <FaBoxes />
        Corporate Procurement & General Services
      </div>

      {/* Heading */}
      <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
        Procurement &
        <span className="block text-blue-400">
          General Services
        </span>
      </h1>

      {/* Description */}
      <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
        Your trusted partner for procurement, equipment sourcing,
        logistics, supplies, and general business support.
        We help individuals, businesses, and institutions
        find the products and services they need.
      </p>

      {/* CTA Buttons */}
      <div className="mt-9 flex flex-col gap-4 sm:flex-row">
        <button
          onClick={scrollToServices}
          className="inline-flex items-center justify-center gap-3 rounded-xl bg-blue-600 px-7 py-4 text-sm font-bold text-white shadow-xl shadow-blue-600/20 transition hover:-translate-y-1 hover:bg-blue-700"
        >
          Explore Our Services
          <FaArrowRight />
        </button>

        <button
          onClick={() => handleOpenModal()}
          className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/30 bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur-md transition hover:bg-white/20"
        >
          Request a Quote
          <FaPaperPlane />
        </button>
      </div>

      {/* Service Highlights */}
      <div className="mt-12 grid grid-cols-1 gap-5 border-t border-white/15 pt-8 sm:grid-cols-3">

        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-400">
            <FaShieldAlt size={19} />
          </div>
          <div>
            <p className="text-sm font-bold text-white">
              Reliable Sourcing
            </p>
            <p className="mt-1 text-xs text-slate-400">
              Procurement support
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/15 text-blue-400">
            <FaTruckLoading size={19} />
          </div>
          <div>
            <p className="text-sm font-bold text-white">
              Logistics Support
            </p>
            <p className="mt-1 text-xs text-slate-400">
              Delivery coordination
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-500/15 text-amber-400">
            <FaBuilding size={19} />
          </div>
          <div>
            <p className="text-sm font-bold text-white">
              Business Solutions
            </p>
            <p className="mt-1 text-xs text-slate-400">
              Individual & corporate needs
            </p>
          </div>
        </div>

      </div>
    </div>
  </div>

  {/* Decorative Circle */}
  <div className="pointer-events-none absolute -bottom-32 -right-20 -z-10 h-96 w-96 rounded-full border border-blue-400/10" />

</section>


      {/* SERVICE CATEGORY CARDS */}
      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Categories
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Procurement & Sourcing Solutions
            </h2>
            <p className="mt-3 max-w-xl text-slate-500">
              Select a specialized procurement division to fit your organization's needs.
            </p>
          </div>

          <button
            onClick={() => {
              clearFilters();
              scrollToServices();
            }}
            className="text-sm font-bold text-blue-600 hover:text-blue-800"
          >
            View all options <FaArrowRight className="ml-1 inline" />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5 lg:gap-5">
          {procurementCategories.map(({ name, icon: Icon }) => (
            <button
              key={name}
              onClick={() => selectCategory(name)}
              className={`group rounded-2xl border p-5 text-left transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg ${
                activeCategory === name
                  ? "border-blue-500 bg-blue-50"
                  : "border-slate-100 bg-white"
              }`}
            >
              <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                <Icon size={23} />
              </span>
              <span className="block text-sm font-bold">{name}</span>
              <span className="mt-2 flex items-center gap-1 text-xs text-slate-400">
                Explore <FaArrowUp size={11} />
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* SERVICES LISTINGS */}
      <section id="service-list" className="bg-slate-50 py-20 border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
                Supply & Sourcing Directory
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Featured Procurement Packages
              </h2>
              <p className="mt-3 max-w-xl text-slate-500">
                Explore our standard procurement and general facility contracts.
              </p>
            </div>

            <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm">
              {filteredServices.length} options found
            </span>
          </div>

          {/* CATEGORY FILTER TABS */}
          <div className="mb-8 flex gap-2 overflow-x-auto pb-2">
            {procurementCategories.map((c) => (
              <button
                key={c.name}
                onClick={() => setActiveCategory(c.name)}
                className={`shrink-0 rounded-full px-4 py-2.5 text-sm font-semibold transition ${
                  activeCategory === c.name
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                    : "border border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:text-blue-600"
                }`}
              >
                {c.name}
              </button>
            ))}
          </div>

          {/* SERVICE CARDS */}
          {filteredServices.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredServices.map((service) => (
                <article
                  key={service.id}
                  className="group overflow-hidden rounded-2xl border border-slate-100 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative h-56 overflow-hidden bg-slate-200">
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />

                    <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-slate-700 shadow-sm">
                      {service.category}
                    </span>

                    {service.urgent && (
                      <span className="absolute bottom-4 left-4 rounded-full bg-amber-100 px-3 py-1.5 text-xs font-bold text-amber-800">
                        High Demand
                      </span>
                    )}

                    <button
                      type="button"
                      onClick={() => toggleFavorite(service.id)}
                      aria-label="Favorite"
                      className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md transition hover:scale-105"
                    >
                      <FaHeart
                        size={18}
                        className={
                          favorites.includes(service.id) ? "text-red-500" : "text-slate-600"
                        }
                      />
                    </button>
                  </div>

                  <div className="p-5">
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <span className="flex items-center gap-1.5 text-xs text-slate-500">
                        <FaMapMarkerAlt />
                        {service.location}
                      </span>
                      <span className="flex items-center gap-1 text-xs font-bold text-amber-600">
                        <FaStar size={12} /> {service.rating}
                      </span>
                    </div>

                    <h3 className="text-lg font-extrabold tracking-tight transition group-hover:text-blue-600">
                      {service.title}
                    </h3>

                    <p className="mt-2 min-h-[48px] text-sm leading-6 text-slate-500">
                      {service.description}
                    </p>

                    <div className="mt-5 flex items-center justify-between gap-3 border-t border-slate-100 pt-4">
                      <div>
                        <p className="text-xs text-slate-400">Pricing / Retainer</p>
                        <p className="mt-1 text-base font-extrabold text-slate-900">
                          {service.price}
                        </p>
                      </div>

                      <button
                        onClick={() => handleOpenModal(service)}
                        className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition hover:bg-blue-600 hover:text-white"
                        aria-label={`Request ${service.title}`}
                      >
                        <FaArrowUp size={18} />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
              <FaSearch size={32} className="mx-auto text-slate-300" />
              <h3 className="mt-4 text-lg font-bold">No matching services found</h3>
              <p className="mt-2 text-sm text-slate-500">
                Try selecting a different service category.
              </p>
              <button
                onClick={clearFilters}
                className="mt-5 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white hover:bg-blue-700"
              >
                Clear filters
              </button>
            </div>
          )}

          <div className="mt-10 text-center">
            <button
              onClick={() => handleOpenModal()}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-bold transition hover:border-blue-300 hover:text-blue-600"
            >
              Request Custom Procurement Tender <FaArrowRight />
            </button>
          </div>
        </div>
      </section>

      {/* BOOKING MODAL */}
      <ProcurementModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedService={selectedService}
      />
    </div>
  );
}