
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
  FaHome,
  FaBaby,
  FaUtensils,
  FaHandsWash,
  FaShoppingBag,
  FaShieldAlt,
  FaClock,
  FaStar,
} from "react-icons/fa";

// ==========================================
// HOUSE HELP BOOKING MODAL
// ==========================================

function HouseHelpModal({ isOpen, onClose, selectedService }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    serviceType: "",
    duration: "Full-Time (Live-in / Live-out)",
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
      duration: "Full-Time (Live-in / Live-out)",
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
          className="absolute right-4 top-4 p-1 text-slate-400 transition hover:text-slate-600 dark:hover:text-slate-200"
          aria-label="Close modal"
        >
          <FaTimes className="h-5 w-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center">

            <FaCheckCircle className="mx-auto mb-4 h-16 w-16 text-emerald-500" />

            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              House Help Request Received!
            </h3>

            <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
              Thank you for your interest. Our team will review your
              household requirements and contact you about the next steps.
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
              Book House Help Service
            </h3>

            <p className="mb-6 mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
              Provide your details and household preferences.
              We will contact you to discuss suitable arrangements.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">

              {/* FULL NAME */}
              <div>
                <label className="mb-1 block text-xs font-semibold uppercase text-slate-600 dark:text-slate-300">
                  Your Full Name *
                </label>

                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      name: e.target.value,
                    })
                  }
                  placeholder="Enter your full name"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:ring-blue-900"
                />
              </div>

              {/* PHONE AND DURATION */}
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
                      setFormData({
                        ...formData,
                        phone: e.target.value,
                      })
                    }
                    placeholder="+232 78 000000"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-xs font-semibold uppercase text-slate-600 dark:text-slate-300">
                    Engagement Duration
                  </label>

                  <select
                    value={formData.duration}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        duration: e.target.value,
                      })
                    }
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                  >
                    <option value="Full-Time (Live-in)">
                      Full-Time (Live-in)
                    </option>

                    <option value="Full-Time (Live-out)">
                      Full-Time (Live-out)
                    </option>

                    <option value="Part-Time / Daily">
                      Part-Time / Daily
                    </option>

                    <option value="Weekend Only">
                      Weekend Only
                    </option>
                  </select>
                </div>

              </div>

              {/* EMAIL */}
              <div>
                <label className="mb-1 block text-xs font-semibold uppercase text-slate-600 dark:text-slate-300">
                  Email Address
                </label>

                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      email: e.target.value,
                    })
                  }
                  placeholder="Enter your email address"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                />
              </div>

              {/* SERVICE */}
              <div>
                <label className="mb-1 block text-xs font-semibold uppercase text-slate-600 dark:text-slate-300">
                  Service Category *
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

              {/* LOCATION */}
              <div>
                <label className="mb-1 block text-xs font-semibold uppercase text-slate-600 dark:text-slate-300">
                  Home Location *
                </label>

                <input
                  type="text"
                  required
                  value={formData.location}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      location: e.target.value,
                    })
                  }
                  placeholder="e.g. Hill Station, Lumley, Goderich"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                />
              </div>

              {/* ADDITIONAL REQUIREMENTS */}
              <div>
                <label className="mb-1 block text-xs font-semibold uppercase text-slate-600 dark:text-slate-300">
                  Additional Requirements / Specific Duties
                </label>

                <textarea
                  rows={3}
                  value={formData.details}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      details: e.target.value,
                    })
                  }
                  placeholder="Mention specific duties, working hours, number of children, or other requirements..."
                  className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3.5 font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
              >
                <FaPaperPlane className="h-4 w-4" />
                Submit House Help Request
              </button>

            </form>
          </>
        )}

      </div>
    </div>
  );
}

// ==========================================
// HOUSE HELP CATEGORIES
// ==========================================

const houseHelpCategories = [
  { name: "All Services", icon: FaHome },
  { name: "General Housekeeping", icon: FaHandsWash },
  { name: "Nanny & Babysitting", icon: FaBaby },
  { name: "Home Cooking", icon: FaUtensils },
  { name: "Errands & Shopping", icon: FaShoppingBag },
];

// ==========================================
// HOUSE HELP SERVICES DATA
// ==========================================

const houseHelpServices = [
  {
    id: 1,
    title: "Full-Time Live-In Housekeeper",
    category: "General Housekeeping",
    location: "Freetown & Environs",
    price: "Le 1,800 – 3,500 / mo",
    rating: "4.9 (28 reviews)",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=85",
    description:
      "Housekeeping assistance for daily sweeping, mopping, laundry, ironing and general household organisation.",
    urgent: false,
  },
  {
    id: 2,
    title: "Professional Nanny & Childcare",
    category: "Nanny & Babysitting",
    location: "Lumley & Aberdeen",
    price: "Le 2,000 – 4,000 / mo",
    rating: "5.0 (34 reviews)",
    image:
      "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=900&q=85",
    description:
      "Childcare assistance for toddlers and school-age children, including supervision, meals, homework support and playtime.",
    urgent: true,
  },
  {
    id: 3,
    title: "Private Home Chef / Cook",
    category: "Home Cooking",
    location: "Wilkinson Road & Hill Station",
    price: "Le 2,500 – 5,000 / mo",
    rating: "4.8 (19 reviews)",
    image:
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=900&q=85",
    description:
      "Home cooking assistance for local Sierra Leonean dishes, continental meals and family meal preparation.",
    urgent: false,
  },
  {
    id: 4,
    title: "Daily Errands & Market Shopper",
    category: "Errands & Shopping",
    location: "Central Freetown",
    price: "Le 1,200 – 2,200 / mo",
    rating: "4.7 (15 reviews)",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=85",
    description:
      "Household assistance with grocery shopping, supermarket visits, market purchases and other daily errands.",
    urgent: false,
  },
  {
    id: 5,
    title: "Part-Time Domestic Assistant",
    category: "General Housekeeping",
    location: "Juba & Goderich",
    price: "Le 150 – 300 / day",
    rating: "4.9 (42 reviews)",
    image:
      "https://images.unsplash.com/photo-1584824486509-112e4181ff6b?auto=format&fit=crop&w=900&q=85",
    description:
      "Flexible domestic assistance for cleaning, laundry, household organisation and special occasions.",
    urgent: false,
  },
  {
    id: 6,
    title: "Live-Out Senior Caregiver",
    category: "Nanny & Babysitting",
    location: "Congo Cross",
    price: "Le 2,500 – 4,500 / mo",
    rating: "4.9 (11 reviews)",
    image:
      "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=900&q=85",
    description:
      "Companionship and everyday assistance for elderly family members, based on the household's care requirements.",
    urgent: true,
  },
];

// ==========================================
// MAIN HOUSE HELP PAGE
// ==========================================

export default function HouseHelpServicePage() {
  const [activeCategory, setActiveCategory] = useState("All Services");
  const [favorites, setFavorites] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const filteredServices = useMemo(() => {
    if (activeCategory === "All Services") {
      return houseHelpServices;
    }

    return houseHelpServices.filter(
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
      .getElementById("house-help-list")
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

            {/* Hero Label */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-emerald-300 backdrop-blur">
              <FaShieldAlt />
              Domestic Assistance & Home Care
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl font-black leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl">
              Reliable Help.
              <span className="block text-emerald-400">
                A Happier Home.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-sm leading-8 text-slate-300 sm:text-base">
              Find domestic assistance for your everyday household needs.
              Explore housekeepers, nannies, home cooks, caregivers and
              personal assistants for homes across Freetown and Sierra Leone.
            </p>

            {/* Action Buttons */}
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
                Request House Help
                <FaPaperPlane />
              </button>

            </div>

            {/* Service Highlights */}
            <div className="mt-12 grid max-w-2xl grid-cols-1 gap-5 border-t border-white/15 pt-7 sm:grid-cols-3">

              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-400">
                  <FaHome size={20} />
                </span>

                <div>
                  <p className="text-sm font-bold">Housekeeping</p>
                  <p className="text-xs text-slate-400">
                    Everyday home support
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-400">
                  <FaBaby size={20} />
                </span>

                <div>
                  <p className="text-sm font-bold">Childcare</p>
                  <p className="text-xs text-slate-400">
                    Nanny & babysitting
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-400">
                  <FaUtensils size={20} />
                </span>

                <div>
                  <p className="text-sm font-bold">Home Cooking</p>
                  <p className="text-xs text-slate-400">
                    Meal preparation
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
              Choose Your Domestic Support
            </h2>

            <p className="mt-3 max-w-xl text-slate-500">
              Select a specialized home service to match your household needs.
            </p>
          </div>

          <button
            onClick={() => {
              clearFilters();
              scrollToServices();
            }}
            className="text-sm font-bold text-blue-600 hover:text-blue-800"
          >
            View all services <FaArrowRight className="ml-1 inline" />
          </button>

        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5 lg:gap-5">

          {houseHelpCategories.map(({ name, icon: Icon }) => (
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
          HOUSE HELP SERVICE LISTINGS
      ====================================== */}

      <section
        id="house-help-list"
        className="border-t border-slate-100 bg-slate-50 py-20"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">

          <div className="mb-8 flex flex-wrap items-end justify-between gap-5">

            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
                Available Profiles & Packages
              </p>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
                House Help Options
              </h2>

              <p className="mt-3 max-w-xl text-slate-500">
                Browse our domestic assistance options and request a suitable service.
              </p>
            </div>

            <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm">
              {filteredServices.length} options found
            </span>

          </div>

          {/* CATEGORY FILTER TABS */}
          <div className="mb-8 flex gap-2 overflow-x-auto pb-2">

            {houseHelpCategories.map((category) => (
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

                  {/* SERVICE IMAGE */}
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

                    {/* FAVORITE BUTTON */}
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

                  {/* SERVICE DETAILS */}
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

                    {/* PRICE AND BOOKING */}
                    <div className="mt-5 flex items-center justify-between gap-3 border-t border-slate-100 pt-4">

                      <div>
                        <p className="text-xs text-slate-400">
                          Rate / Salary
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
                Try selecting a different category.
              </p>

              <button
                onClick={clearFilters}
                className="mt-5 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white hover:bg-blue-700"
              >
                Clear filters
              </button>

            </div>
          )}

          {/* CUSTOM REQUEST */}
          <div className="mt-10 text-center">

            <button
              onClick={() => handleOpenModal()}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-bold transition hover:border-blue-300 hover:text-blue-600"
            >
              Request Custom House Help
              <FaArrowRight />
            </button>

          </div>

        </div>
      </section>

      {/* ======================================
          BOOKING MODAL
      ====================================== */}

      <HouseHelpModal
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
