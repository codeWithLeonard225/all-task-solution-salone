
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
  FaBroom,
  FaSprayCan,
  FaBuilding,
  FaHome,
  FaBug,
  FaShieldAlt,
  FaClock,
  FaStar,
} from "react-icons/fa";

// ==========================================
// SERVICE BOOKING MODAL
// ==========================================

function ServiceBookingModal({ isOpen, onClose, selectedService }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    serviceType: "",
    propertyType: "Residential (Home / Apartment)",
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
      phone: "",
      email: "",
      serviceType: "",
      propertyType: "Residential (Home / Apartment)",
      location: "",
      details: "",
    });
    onClose();
  };

  const currentTitle = selectedService
    ? selectedService.title
    : formData.serviceType;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/60 p-4 backdrop-blur-sm">
      <div className="relative my-auto w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl dark:border-slate-800 dark:bg-slate-900">

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
              Service Request Submitted!
            </h3>

            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Your request has been submitted. Our team will review your
              details and contact you about the next steps.
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
              Book Cleaning or Fumigation
            </h3>

            <p className="mb-6 mt-2 text-sm text-slate-500 dark:text-slate-400">
              Enter your property details and tell us which service you need.
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
                  placeholder="Enter your full name"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
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
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-xs font-semibold uppercase text-slate-600 dark:text-slate-300">
                    Property Type
                  </label>

                  <select
                    value={formData.propertyType}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        propertyType: e.target.value,
                      })
                    }
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                  >
                    <option value="Residential (Home / Apartment)">
                      Residential (Home / Apartment)
                    </option>
                    <option value="Commercial Office / Store">
                      Commercial Office / Store
                    </option>
                    <option value="Warehouse / Factory">
                      Warehouse / Factory
                    </option>
                    <option value="Post-Construction Site">
                      Post-Construction Site
                    </option>
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-1 block text-xs font-semibold uppercase text-slate-600 dark:text-slate-300">
                  Email Address
                </label>

                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="Your email address"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                />
              </div>

              <div>
                <label className="mb-1 block text-xs font-semibold uppercase text-slate-600 dark:text-slate-300">
                  Service Selected *
                </label>

                <input
                  type="text"
                  required
                  value={currentTitle}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      serviceType: e.target.value,
                    })
                  }
                  placeholder="Enter the service required"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                />
              </div>

              <div>
                <label className="mb-1 block text-xs font-semibold uppercase text-slate-600 dark:text-slate-300">
                  Location / Address *
                </label>

                <input
                  type="text"
                  required
                  value={formData.location}
                  onChange={(e) =>
                    setFormData({ ...formData, location: e.target.value })
                  }
                  placeholder="e.g. Aberdeen, Lumley, Regent"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                />
              </div>

              <div>
                <label className="mb-1 block text-xs font-semibold uppercase text-slate-600 dark:text-slate-300">
                  Notes / Specific Requirements
                </label>

                <textarea
                  rows={3}
                  value={formData.details}
                  onChange={(e) =>
                    setFormData({ ...formData, details: e.target.value })
                  }
                  placeholder="Number of rooms, type of cleaning, targeted pests, or other requirements..."
                  className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3.5 font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
              >
                <FaPaperPlane className="h-4 w-4" />
                Book Service Request
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

// ==========================================
// SERVICE CATEGORIES
// ==========================================

const cleaningFumigationCategories = [
  { name: "All Services", icon: FaBroom },
  { name: "Pest & Termite Fumigation", icon: FaBug },
  { name: "Deep Home Cleaning", icon: FaHome },
  { name: "Office & Commercial", icon: FaBuilding },
  { name: "Post-Construction Clean", icon: FaSprayCan },
];

// ==========================================
// SERVICES DATA
// ==========================================

const servicesList = [
  {
    id: 1,
    title: "Comprehensive Pest & Mosquito Fumigation",
    category: "Pest & Termite Fumigation",
    location: "Freetown & Greater Western Area",
    price: "Le 800 – 2,500 / session",
    rating: "4.9 (45 reviews)",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=900&q=85",
    description:
      "Pest-control treatments for mosquitoes, cockroaches, bedbugs and flies. Treatment methods and products should be confirmed for each property.",
    urgent: true,
  },
  {
    id: 2,
    title: "Post-Construction Site Cleanup",
    category: "Post-Construction Clean",
    location: "Aberdeen & Goderich",
    price: "Le 2,500 – 6,000 / project",
    rating: "5.0 (22 reviews)",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=85",
    description:
      "Debris removal, cement stain cleaning, window polishing and detailed interior cleaning for newly completed buildings.",
    urgent: false,
  },
  {
    id: 3,
    title: "Office & Corporate Cleaning",
    category: "Office & Commercial",
    location: "Central Freetown & Congo Cross",
    price: "Le 1,500 – 4,500 / mo",
    rating: "4.8 (31 reviews)",
    image:
      "https://images.unsplash.com/photo-1613963931023-5dc59437c8a6?auto=format&fit=crop&w=900&q=85",
    description:
      "Cleaning arrangements for offices and workplaces, including workstations, floors, carpets and restroom areas.",
    urgent: false,
  },
  {
    id: 4,
    title: "Residential Deep Cleaning",
    category: "Deep Home Cleaning",
    location: "Hill Station & Lumley",
    price: "Le 900 – 2,200 / visit",
    rating: "4.9 (58 reviews)",
    image:
      "https://images.unsplash.com/photo-1584824486509-112e4181ff6b?auto=format&fit=crop&w=900&q=85",
    description:
      "Detailed home cleaning covering kitchens, bathrooms, floors, tiles, furniture and hard-to-reach areas.",
    urgent: false,
  },
  {
    id: 5,
    title: "Termite Control & Wood Treatment",
    category: "Pest & Termite Fumigation",
    location: "Regent & Juba",
    price: "Le 1,800 – 4,000 / treatment",
    rating: "4.9 (18 reviews)",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=85",
    description:
      "Property assessment and treatment options for termite activity affecting timber and building structures.",
    urgent: true,
  },
  {
    id: 6,
    title: "Water Tank Cleaning & Disinfection",
    category: "Deep Home Cleaning",
    location: "Wilkinson Road & Kissy",
    price: "Le 600 – 1,500 / tank",
    rating: "4.7 (26 reviews)",
    image:
      "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=900&q=85",
    description:
      "Water tank cleaning arrangements, including sludge removal, washing and appropriate disinfection.",
    urgent: false,
  },
];

// ==========================================
// MAIN PAGE
// ==========================================

export default function CleaningFumigationPage() {
  const [activeCategory, setActiveCategory] = useState("All Services");
  const [favorites, setFavorites] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const filteredServices = useMemo(() => {
    if (activeCategory === "All Services") {
      return servicesList;
    }

    return servicesList.filter(
      (service) => service.category === activeCategory
    );
  }, [activeCategory]);

  function toggleFavorite(id) {
    setFavorites((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  }

  function scrollToServices() {
    document
      .getElementById("service-list")
      ?.scrollIntoView({ behavior: "smooth" });
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
    <div className="min-h-screen bg-white">

      {/* ======================================
          PROFESSIONAL HERO SECTION
      ====================================== */}

      <section className="relative isolate mb-12 min-h-[480px] overflow-hidden bg-slate-950 text-white sm:min-h-[540px]">

        {/* Background Image */}
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=2000&q=90')",
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/35" />

        <div className="mx-auto flex min-h-[480px] max-w-7xl items-center px-5 py-20 sm:min-h-[540px] sm:px-8">

          <div className="max-w-3xl">

            {/* Label */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-emerald-300 backdrop-blur">
              <FaShieldAlt />
              Professional Cleaning & Fumigation
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-black leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl">
              A Cleaner Space.
              <span className="block text-emerald-400">
                A Healthier Environment.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-sm leading-8 text-slate-300 sm:text-base">
              Keep your home, office and business environment clean,
              fresh and protected. Explore cleaning, deep cleaning,
              fumigation, termite control and post-construction
              cleaning services across Sierra Leone.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-wrap gap-4">

              <button
                onClick={scrollToServices}
                className="inline-flex items-center gap-3 rounded-xl bg-emerald-500 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-emerald-500/20 transition hover:-translate-y-1 hover:bg-emerald-600"
              >
                Explore Our Services
                <FaArrowRight />
              </button>

              <button
                onClick={() => handleOpenModal()}
                className="inline-flex items-center gap-3 rounded-xl border border-white/30 bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur transition hover:bg-white hover:text-slate-900"
              >
                Request a Service
                <FaPaperPlane />
              </button>

            </div>

            {/* Service Highlights */}
            <div className="mt-12 grid max-w-2xl grid-cols-1 gap-5 border-t border-white/15 pt-7 sm:grid-cols-3">

              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-400">
                  <FaBroom size={20} />
                </span>

                <div>
                  <p className="text-sm font-bold">Deep Cleaning</p>
                  <p className="text-xs text-slate-400">
                    Homes & offices
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-400">
                  <FaBug size={20} />
                </span>

                <div>
                  <p className="text-sm font-bold">Pest Control</p>
                  <p className="text-xs text-slate-400">
                    Fumigation services
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-400">
                  <FaBuilding size={20} />
                </span>

                <div>
                  <p className="text-sm font-bold">Commercial Care</p>
                  <p className="text-xs text-slate-400">
                    Business properties
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Accent */}
        <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-emerald-600 via-green-400 to-transparent" />
      </section>

      {/* ======================================
          SERVICE CATEGORY CARDS
      ====================================== */}

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">

        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">

          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Categories
            </p>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Sanitization & Pest Control Solutions
            </h2>

            <p className="mt-3 max-w-xl text-slate-500">
              Select a specialized cleaning or fumigation service for your space.
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

          {cleaningFumigationCategories.map(({ name, icon: Icon }) => (
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

              <span className="block text-sm font-bold">
                {name}
              </span>

              <span className="mt-2 flex items-center gap-1 text-xs text-slate-400">
                Explore <FaArrowUp size={11} />
              </span>
            </button>
          ))}

        </div>
      </section>

      {/* ======================================
          SERVICES LISTINGS
      ====================================== */}

      <section
        id="service-list"
        className="border-t border-slate-100 bg-slate-50 py-20"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">

          <div className="mb-8 flex flex-wrap items-end justify-between gap-5">

            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
                Available Treatments & Services
              </p>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Featured Cleaning & Pest Control
              </h2>

              <p className="mt-3 max-w-xl text-slate-500">
                Browse our service options or request a custom site assessment.
              </p>
            </div>

            <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm">
              {filteredServices.length} options found
            </span>

          </div>

          {/* CATEGORY FILTER TABS */}
          <div className="mb-8 flex gap-2 overflow-x-auto pb-2">

            {cleaningFumigationCategories.map((category) => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`shrink-0 rounded-full px-4 py-2.5 text-sm font-semibold transition ${
                  activeCategory === category.name
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                    : "border border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:text-blue-600"
                }`}
              >
                {category.name}
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
                        Popular Choice
                      </span>
                    )}

                    <button
                      type="button"
                      onClick={() => toggleFavorite(service.id)}
                      aria-label={
                        favorites.includes(service.id)
                          ? "Remove from favorites"
                          : "Add to favorites"
                      }
                      className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md transition hover:scale-105"
                    >
                      <FaHeart
                        size={18}
                        className={
                          favorites.includes(service.id)
                            ? "text-red-500"
                            : "text-slate-600"
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
                        <FaStar size={12} />
                        {service.rating}
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
                        <p className="text-xs text-slate-400">
                          Estimated Pricing
                        </p>

                        <p className="mt-1 text-base font-extrabold text-slate-900">
                          {service.price}
                        </p>
                      </div>

                      <button
                        onClick={() => handleOpenModal(service)}
                        className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition hover:bg-blue-600 hover:text-white"
                        aria-label={`Book ${service.title}`}
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

              <h3 className="mt-4 text-lg font-bold">
                No matching services found
              </h3>

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

          {/* CUSTOM SERVICE REQUEST */}
          <div className="mt-10 text-center">
            <button
              onClick={() => handleOpenModal()}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-bold transition hover:border-blue-300 hover:text-blue-600"
            >
              Request Custom Service
              <FaArrowRight />
            </button>
          </div>

        </div>
      </section>

      {/* ======================================
          BOOKING MODAL
      ====================================== */}

      <ServiceBookingModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedService(null);
        }}
        selectedService={selectedService}
      />

    </div>
  );
}
