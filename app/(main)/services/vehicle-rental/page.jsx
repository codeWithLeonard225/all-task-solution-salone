// app/(main)/services/vehicle-rental/page.jsx
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
  FaCar,
  FaTruckMonster,
  FaShuttleVan,
  FaPlaneArrival,
  FaTruck,
  FaShieldAlt,
  FaClock,
  FaStar,
  FaGasPump,
} from "react-icons/fa";

// Vehicle Booking Modal Component
function VehicleBookingModal({ isOpen, onClose, selectedVehicle }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    vehicleType: "",
    rentalType: "With Chauffeur / Driver",
    startDate: "",
    durationDays: "1",
    pickupLocation: "",
    destination: "",
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
      vehicleType: "",
      rentalType: "With Chauffeur / Driver",
      startDate: "",
      durationDays: "1",
      pickupLocation: "",
      destination: "",
    });
    onClose();
  };

  const currentTitle = selectedVehicle ? selectedVehicle.title : formData.vehicleType;

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
              Vehicle Booking Request Sent!
            </h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Our fleet manager will confirm availability, pricing breakdown, and contact you shortly.
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
              Book a Vehicle / Truck
            </h3>
            <p className="mb-6 text-sm text-slate-500 dark:text-slate-400">
              Enter your trip and rental details. We provide insured vehicles with experienced local drivers across Sierra Leone.
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
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Mohamed Bangura"
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
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+232 78 000000"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:ring-blue-900"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-xs font-semibold uppercase text-slate-600 dark:text-slate-300">
                    Rental Option
                  </label>
                  <select
                    value={formData.rentalType}
                    onChange={(e) => setFormData({ ...formData, rentalType: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:ring-blue-900"
                  >
                    <option value="With Chauffeur / Driver">With Chauffeur / Driver</option>
                    <option value="Self-Drive (Subject to verification)">Self-Drive (Subject to verification)</option>
                    <option value="Airport Transfer Drop/Pick">Airport Transfer Drop/Pick</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-1 block text-xs font-semibold uppercase text-slate-600 dark:text-slate-300">
                  Selected Vehicle / Machine *
                </label>
                <input
                  type="text"
                  required
                  value={currentTitle}
                  onChange={(e) => setFormData({ ...formData, vehicleType: e.target.value })}
                  placeholder="e.g. Toyota Land Cruiser Prado 4x4"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:ring-blue-900"
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-xs font-semibold uppercase text-slate-600 dark:text-slate-300">
                    Pickup Location *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.pickupLocation}
                    onChange={(e) => setFormData({ ...formData, pickupLocation: e.target.value })}
                    placeholder="e.g. Lungi Airport, Freetown City Center"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:ring-blue-900"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-xs font-semibold uppercase text-slate-600 dark:text-slate-300">
                    Duration (Days)
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={formData.durationDays}
                    onChange={(e) => setFormData({ ...formData, durationDays: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:ring-blue-900"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1 block text-xs font-semibold uppercase text-slate-600 dark:text-slate-300">
                  Destination / Travel Purpose
                </label>
                <textarea
                  rows={2}
                  value={formData.destination}
                  onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                  placeholder="Specify destination (e.g. Freetown town trips, Bo, Kenema, Makeni, site transport)..."
                  className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:ring-blue-900"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3.5 font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
              >
                <FaPaperPlane className="h-4 w-4" /> Submit Booking Request
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

const vehicleCategories = [
  { name: "All Vehicles", icon: FaCar },
  { name: "4x4 SUVs & Jeeps", icon: FaTruckMonster },
  { name: "Buses & Vans", icon: FaShuttleVan },
  { name: "Haulage & Tipper Trucks", icon: FaTruck },
  { name: "Airport Pickup & Transfers", icon: FaPlaneArrival },
];

const vehiclesList = [
  {
    id: 1,
    title: "Toyota Land Cruiser Prado 4x4",
    category: "4x4 SUVs & Jeeps",
    location: "Freetown & Upcountry Trips",
    price: "NLE 1,800 – 2,500 / day",
    rating: "4.9 (38 reviews)",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=900&q=85",
    description: "Heavy-duty 4WD SUV ideal for tough Sierra Leone terrain, long travel, corporate delegates, and VIP transport.",
    urgent: true,
  },
  {
    id: 2,
    title: "Toyota HiAce Passenger Bus (14 Seater)",
    category: "Buses & Vans",
    location: "Freetown & Provinces",
    price: "NLE 2,200 – 3,200 / day",
    rating: "4.8 (29 reviews)",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=900&q=85",
    description: "Air-conditioned 14-seater van suitable for group travel, corporate staff shuttles, and family trips.",
    urgent: false,
  },
  {
    id: 3,
    title: "Lungi Airport Express Shuttle",
    category: "Airport Pickup & Transfers",
    location: "Lungi Airport to Freetown",
    price: "NLE 1,200 – 1,800 / trip",
    rating: "5.0 (52 reviews)",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=900&q=85",
    description: "Direct seamless transport between Lungi International Airport and hotel/residence in Freetown with professional chauffeur.",
    urgent: true,
  },
  {
    id: 4,
    title: "10-Ton Tipper Dump Truck",
    category: "Haulage & Tipper Trucks",
    location: "Western Area & Provinces",
    price: "NLE 3,500 – 5,500 / day",
    rating: "4.9 (17 reviews)",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=900&q=85",
    description: "Heavy commercial tipper truck for construction sand, granite aggregate, topsoil, and site materials haulage.",
    urgent: false,
  },
  {
    id: 5,
    title: "Toyota Hilux Double Cab Pickup 4x4",
    category: "4x4 SUVs & Jeeps",
    location: "Freetown & Mining Sites",
    price: "NLE 1,500 – 2,200 / day",
    rating: "4.9 (41 reviews)",
    image: "https://images.unsplash.com/photo-1559416523-140ddc3d238c?auto=format&fit=crop&w=900&q=85",
    description: "Robust pickup truck with open rear bed for equipment, ideal for site engineers and rural project supervisors.",
    urgent: false,
  },
  {
    id: 6,
    title: "Executive Mercedes-Benz E-Class Sedan",
    category: "Airport Pickup & Transfers",
    location: "Freetown Central",
    price: "NLE 2,500 – 4,000 / day",
    rating: "5.0 (14 reviews)",
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=900&q=85",
    description: "Premium luxury sedan for executive meetings, VIP guests, official state functions, and weddings.",
    urgent: false,
  },
];

export default function VehicleRentalPage() {
  const [activeCategory, setActiveCategory] = useState("All Vehicles");
  const [favorites, setFavorites] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  const filteredVehicles = useMemo(() => {
    if (activeCategory === "All Vehicles") return vehiclesList;
    return vehiclesList.filter((v) => v.category === activeCategory);
  }, [activeCategory]);

  function toggleFavorite(id) {
    setFavorites((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id]
    );
  }

  function scrollToVehicles() {
    document.getElementById("vehicle-list")?.scrollIntoView({ behavior: "smooth" });
  }

  function selectCategory(name) {
    setActiveCategory(name);
    scrollToVehicles();
  }

  function clearFilters() {
    setActiveCategory("All Vehicles");
  }

  function handleOpenModal(vehicle = null) {
    setSelectedVehicle(vehicle);
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
        "url('https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=2000&q=85')",
    }}
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/35" />

  <div className="mx-auto flex min-h-[520px] max-w-7xl items-center px-5 py-20 sm:px-8">
    <div className="max-w-3xl">
      <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-blue-300">
        <FaCar />
        Transport & Logistics Solutions
      </div>

      <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
        Vehicle & Heavy Equipment Rental
        <span className="mt-2 block text-blue-400">
          Move Freely. Travel Confidently.
        </span>
      </h1>

      <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
        Discover reliable 4x4 SUVs, passenger buses, executive cars,
        tipper trucks and airport transfers. Find the right transport
        solution for your personal, business and project needs across
        Sierra Leone.
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <button
          onClick={scrollToVehicles}
          className="inline-flex items-center justify-center gap-3 rounded-xl bg-blue-600 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
        >
          Explore Our Fleet
          <FaArrowRight />
        </button>

        <button
          onClick={() => handleOpenModal()}
          className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/30 bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white hover:text-slate-900"
        >
          Request a Vehicle
          <FaCar />
        </button>
      </div>

      {/* Service Highlights */}
      <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/15 pt-7 text-sm text-slate-300">
        <span className="flex items-center gap-2">
          <FaShieldAlt className="text-blue-400" />
          Insured Fleet
        </span>

        <span className="flex items-center gap-2">
          <FaCheckCircle className="text-blue-400" />
          Professional Drivers
        </span>

        <span className="flex items-center gap-2">
          <FaMapMarkerAlt className="text-blue-400" />
          Nationwide Transport
        </span>
      </div>
    </div>
  </div>
</section>


      {/* CATEGORY CARDS */}
      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Fleet Options
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Choose your vehicle type
            </h2>
            <p className="mt-3 max-w-xl text-slate-500">
              Select from our range of personal, corporate, and commercial transport vehicles.
            </p>
          </div>

          <button
            onClick={() => {
              clearFilters();
              scrollToVehicles();
            }}
            className="text-sm font-bold text-blue-600 hover:text-blue-800"
          >
            Browse all vehicles <FaArrowRight className="ml-1 inline" />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5 lg:gap-5">
          {vehicleCategories.map(({ name, icon: Icon }) => (
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

      {/* VEHICLE LISTINGS */}
      <section id="vehicle-list" className="bg-slate-50 py-20 border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
                Available Fleet
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Featured Vehicles
              </h2>
              <p className="mt-3 max-w-xl text-slate-500">
                Browse our inspected vehicles and book instant airport or town transport.
              </p>
            </div>

            <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm">
              {filteredVehicles.length} vehicles found
            </span>
          </div>

          {/* CATEGORY FILTER TABS */}
          <div className="mb-8 flex gap-2 overflow-x-auto pb-2">
            {vehicleCategories.map((c) => (
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

          {/* VEHICLE CARDS */}
          {filteredVehicles.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredVehicles.map((vehicle) => (
                <article
                  key={vehicle.id}
                  className="group overflow-hidden rounded-2xl border border-slate-100 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative h-56 overflow-hidden bg-slate-200">
                    <img
                      src={vehicle.image}
                      alt={vehicle.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />

                    <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-slate-700 shadow-sm">
                      {vehicle.category}
                    </span>

                    {vehicle.urgent && (
                      <span className="absolute bottom-4 left-4 rounded-full bg-amber-100 px-3 py-1.5 text-xs font-bold text-amber-800">
                        Top Choice
                      </span>
                    )}

                    <button
                      type="button"
                      onClick={() => toggleFavorite(vehicle.id)}
                      aria-label="Favorite"
                      className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md transition hover:scale-105"
                    >
                      <FaHeart
                        size={18}
                        className={
                          favorites.includes(vehicle.id) ? "text-red-500" : "text-slate-600"
                        }
                      />
                    </button>
                  </div>

                  <div className="p-5">
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <span className="flex items-center gap-1.5 text-xs text-slate-500">
                        <FaMapMarkerAlt />
                        {vehicle.location}
                      </span>
                      <span className="flex items-center gap-1 text-xs font-bold text-amber-600">
                        <FaStar size={12} /> {vehicle.rating}
                      </span>
                    </div>

                    <h3 className="text-lg font-extrabold tracking-tight transition group-hover:text-blue-600">
                      {vehicle.title}
                    </h3>

                    <p className="mt-2 min-h-[48px] text-sm leading-6 text-slate-500">
                      {vehicle.description}
                    </p>

                    <div className="mt-5 flex items-center justify-between gap-3 border-t border-slate-100 pt-4">
                      <div>
                        <p className="text-xs text-slate-400">Daily Rate / Transfer</p>
                        <p className="mt-1 text-base font-extrabold text-slate-900">
                          {vehicle.price}
                        </p>
                      </div>

                      <button
                        onClick={() => handleOpenModal(vehicle)}
                        className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition hover:bg-blue-600 hover:text-white"
                        aria-label={`Book ${vehicle.title}`}
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
              <h3 className="mt-4 text-lg font-bold">No matching vehicles found</h3>
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

          <div className="mt-10 text-center">
            <button
              onClick={() => handleOpenModal()}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-bold transition hover:border-blue-300 hover:text-blue-600"
            >
              Request Custom Transport <FaArrowRight />
            </button>
          </div>
        </div>
      </section>

      {/* BOOKING MODAL */}
      <VehicleBookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedVehicle={selectedVehicle}
      />
    </div>
  );
}