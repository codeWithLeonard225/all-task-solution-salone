
// app/(main)/services/building-materials/page.jsx
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
  FaHammer,
  FaLayerGroup,
  FaBoxes,
  FaWhatsapp,
  FaTruck,
  FaShieldAlt,
  FaClock,
} from "react-icons/fa";

import {
  buildingCategories,
  buildingMaterials,
  getMaterialWhatsAppLink,
} from "../../components/buildingMaterialsData";

// Building Material Order / Inquiry Modal Component
function MaterialOrderModal({ isOpen, onClose, selectedMaterial }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    materialTitle: "",
    quantity: "",
    deliveryLocation: "",
    notes: "",
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
      phone: "",
      email: "",
      materialTitle: "",
      quantity: "",
      deliveryLocation: "",
      notes: "",
    });
    onClose();
  };

  const currentTitle = selectedMaterial
    ? selectedMaterial.title
    : formData.materialTitle;

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
              Material Request Submitted!
            </h3>

            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Our wholesale supply team will verify stock, delivery terms, and
              call you back immediately.
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
              Order / Inquire Building Materials
            </h3>

            <p className="mb-6 text-sm text-slate-500 dark:text-slate-400">
              Enter your delivery location and quantity needed. We coordinate
              directly with wholesale hardware suppliers.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="mb-1 block text-xs font-semibold uppercase text-slate-600 dark:text-slate-300">
                  Your Full Name *
                </label>

                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="e.g. Samuel Kargbo"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:ring-blue-900"
                />
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
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="+232 78 000000"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:ring-blue-900"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-xs font-semibold uppercase text-slate-600 dark:text-slate-300">
                    Quantity Needed *
                  </label>

                  <input
                    type="text"
                    required
                    value={formData.quantity}
                    onChange={(e) =>
                      setFormData({ ...formData, quantity: e.target.value })
                    }
                    placeholder="e.g. 100 bags, 50 rods"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:ring-blue-900"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1 block text-xs font-semibold uppercase text-slate-600 dark:text-slate-300">
                  Material Selected *
                </label>

                <input
                  type="text"
                  required
                  value={currentTitle}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      materialTitle: e.target.value,
                    })
                  }
                  placeholder="e.g. Premium Grade 42.5R Cement"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:ring-blue-900"
                />
              </div>

              <div>
                <label className="mb-1 block text-xs font-semibold uppercase text-slate-600 dark:text-slate-300">
                  Delivery Site Location *
                </label>

                <input
                  type="text"
                  required
                  value={formData.deliveryLocation}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      deliveryLocation: e.target.value,
                    })
                  }
                  placeholder="e.g. Goderich near junction, Waterloo"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:ring-blue-900"
                />
              </div>

              <div>
                <label className="mb-1 block text-xs font-semibold uppercase text-slate-600 dark:text-slate-300">
                  Additional Notes
                </label>

                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) =>
                    setFormData({ ...formData, notes: e.target.value })
                  }
                  placeholder="Specify offloading arrangements or site access directions..."
                  className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:ring-blue-900"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3.5 font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
              >
                <FaPaperPlane className="h-4 w-4" />
                Submit Material Order
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default function BuildingMaterialsPage() {
  const [activeMaterialCategory, setActiveMaterialCategory] = useState("all");
  const [favorites, setFavorites] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMaterial, setSelectedMaterial] = useState(null);

  const filteredMaterials = useMemo(() => {
    if (activeMaterialCategory === "all") return buildingMaterials;

    return buildingMaterials.filter(
      (m) => m.category === activeMaterialCategory
    );
  }, [activeMaterialCategory]);

  function toggleFavorite(id) {
    setFavorites((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  }

  function scrollToMaterials() {
    document
      .getElementById("materials-market")
      ?.scrollIntoView({ behavior: "smooth" });
  }

  function handleOpenModal(material = null) {
    setSelectedMaterial(material);
    setIsModalOpen(true);
  }

  return (
    <div className="py-10">
      {/* PROFESSIONAL HERO HEADER */}
      <section className="relative isolate mb-12 overflow-hidden bg-slate-950 text-white">
        {/* Background Image */}
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2000&q=85')",
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/35" />

        <div className="mx-auto flex min-h-[520px] max-w-7xl items-center px-5 py-20 sm:px-8">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-blue-300">
              <FaHammer />
              Construction & Building Supplies
            </div>

            <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Building Materials & Hardware Supply
              <span className="mt-2 block text-blue-400">
                Build Strong. Build With Confidence.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
              Source quality cement, steel rods, roofing sheets, timber,
              aggregates and other essential construction materials. Connect
              with suppliers and arrange delivery directly to your construction
              site across Sierra Leone.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={scrollToMaterials}
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-blue-600 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
              >
                Explore Materials
                <FaArrowRight />
              </button>

              <button
                onClick={() => handleOpenModal()}
                className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/30 bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white hover:text-slate-900"
              >
                Request a Quote
                <FaHammer />
              </button>
            </div>

            {/* Service Highlights */}
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/15 pt-7 text-sm text-slate-300">
              <span className="flex items-center gap-2">
                <FaShieldAlt className="text-blue-400" />
                Quality Materials
              </span>

              <span className="flex items-center gap-2">
                <FaTruck className="text-blue-400" />
                Site Delivery
              </span>

              <span className="flex items-center gap-2">
                <FaWhatsapp className="text-emerald-400" />
                WhatsApp Ordering
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORY SELECTOR CARDS */}
      <section className="mx-auto max-w-7xl px-5 py-6 sm:px-8">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Material Categories
            </p>

            <h2 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">
              What do you need for your construction site?
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
          {buildingCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveMaterialCategory(cat.id);
                scrollToMaterials();
              }}
              className={`rounded-2xl border p-4 text-left transition duration-200 hover:-translate-y-1 hover:shadow-md ${
                activeMaterialCategory === cat.id
                  ? "border-blue-500 bg-blue-50 text-blue-700"
                  : "border-slate-200 bg-white text-slate-700"
              }`}
            >
              <span className="block text-sm font-bold">{cat.label}</span>

              <span className="mt-1 block text-xs text-slate-400">
                View items →
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* MATERIALS MARKET GRID */}
      <section
        id="materials-market"
        className="mt-10 border-t border-slate-100 bg-slate-50 py-16"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
                Direct Wholesale Supply
              </p>

              <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Materials Directory
              </h2>
            </div>

            <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm">
              {filteredMaterials.length} materials listed
            </span>
          </div>

          {/* MATERIAL CATEGORY TABS */}
          <div className="mb-8 flex gap-2 overflow-x-auto pb-2">
            {buildingCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveMaterialCategory(cat.id)}
                className={`shrink-0 rounded-full px-4 py-2.5 text-sm font-semibold transition ${
                  activeMaterialCategory === cat.id
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                    : "border border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:text-blue-600"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* MATERIAL CARDS */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {filteredMaterials.map((material) => {
              const whatsappUrl = getMaterialWhatsAppLink(material);

              const displayPhones = Array.isArray(material.displayPhones)
                ? material.displayPhones.join(" / ")
                : material.displayPhones ||
                  material.displayPhone ||
                  "078355416";

              const materialImage = material.image.startsWith("http")
                ? material.image
                : `https://all-task-solution-salone.vercel.app${
                    material.image.startsWith("/") ? "" : "/"
                  }${material.image}`;

              return (
                <div
                  key={material.id}
                  className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-100 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div>
                    {/* Material Image */}
                    <div className="relative h-48 w-full overflow-hidden bg-slate-200">
                      <a
                        href={materialImage}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={`View ${material.title} image`}
                      >
                        <img
                          src={materialImage}
                          alt={material.title}
                          loading="lazy"
                          className="h-full w-full cursor-zoom-in object-cover transition duration-500 group-hover:scale-105"
                        />
                      </a>

                      <span className="absolute left-3 top-3 max-w-[90%] truncate rounded-full bg-slate-900/80 px-3 py-1 text-[11px] font-bold text-white backdrop-blur">
                        {material.shopName}
                      </span>

                      <button
                        type="button"
                        onClick={() => toggleFavorite(material.id)}
                        aria-label="Favorite"
                        className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow transition hover:scale-105"
                      >
                        <FaHeart
                          size={14}
                          className={
                            favorites.includes(material.id)
                              ? "text-red-500"
                              : "text-slate-600"
                          }
                        />
                      </button>

                      <span className="absolute bottom-3 right-3 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-bold text-slate-700 shadow">
                        Click image to enlarge
                      </span>
                    </div>

                    {/* Details */}
                    <div className="p-5">
                      <div className="mb-1 flex items-center gap-1.5 text-xs text-slate-500">
                        <FaMapMarkerAlt className="shrink-0 text-blue-600" />
                        {material.location}
                      </div>

                      <h3 className="text-base font-bold tracking-tight text-slate-900 transition group-hover:text-blue-600">
                        {material.title}
                      </h3>

                      <p className="mt-2 line-clamp-3 text-xs leading-5 text-slate-500">
                        {material.description}
                      </p>
                    </div>
                  </div>

                  {/* Pricing and Action Buttons */}
                  <div className="p-5 pt-0">
                    <div className="border-t border-slate-100 pt-4">
                      <p className="mb-2 text-sm font-black text-blue-600">
                        {material.price}
                      </p>

                      <p className="mb-3 rounded-lg bg-emerald-50 px-2.5 py-2 text-[11px] font-semibold text-emerald-700">
                        📦 {material.freeDeliveryText}
                      </p>

                      <p className="mb-3 break-words text-[11px] font-medium text-slate-500">
                        Contact:{" "}
                        <span className="font-bold text-slate-800">
                          {displayPhones}
                        </span>
                      </p>

                      <div className="grid grid-cols-1 gap-2">
                        <a
                          href={whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 py-2.5 text-xs font-bold text-white shadow-md shadow-emerald-600/20 transition hover:bg-emerald-700"
                        >
                          <FaWhatsapp className="h-4 w-4" />
                          Order on WhatsApp
                        </a>

                        <button
                          onClick={() => handleOpenModal(material)}
                          className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white py-2 text-xs font-bold text-slate-700 hover:bg-slate-50"
                        >
                          Inquire via Form
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => handleOpenModal()}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-bold transition hover:border-blue-300 hover:text-blue-600"
            >
              Request Custom Material Quote
              <FaArrowRight />
            </button>
          </div>
        </div>
      </section>

      {/* ORDER MODAL */}
      <MaterialOrderModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedMaterial={selectedMaterial}
      />
    </div>
  );
}
