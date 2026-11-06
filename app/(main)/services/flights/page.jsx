// app/(main)/services/flights-booking/page.jsx
"use client";

import { useMemo, useState } from "react";
import {
  FaPlane,
  FaPlaneDeparture,
  FaPlaneArrival,
  FaSearch,
  FaMapMarkerAlt,
  FaArrowRight,
  FaHeart,
  FaTimes,
  FaCheckCircle,
  FaPaperPlane,
  FaShieldAlt,
  FaClock,
  FaStar,
  FaSuitcase,
} from "react-icons/fa";

function FlightBookingModal({ isOpen, onClose, selectedFlight }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    tripType: "Round Trip",
    origin: "Freetown (FNA - Lungi)",
    destination: "",
    departureDate: "",
    returnDate: "",
    passengers: "1",
    travelClass: "Economy",
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
      tripType: "Round Trip",
      origin: "Freetown (FNA - Lungi)",
      destination: "",
      departureDate: "",
      returnDate: "",
      passengers: "1",
      travelClass: "Economy",
      notes: "",
    });
    onClose();
  };

  const currentDestination = selectedFlight ? selectedFlight.title : formData.destination;

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
              Flight Booking Request Sent!
            </h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Our travel ticketing agent will compare airline rates and send you confirmed ticket options shortly.
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
              Request Flight Booking
            </h3>
            <p className="mb-6 text-sm text-slate-500 dark:text-slate-400">
              Provide your travel route and dates. We issue tickets for Brussels Airlines, Air Senegal, ASKY, Turkish Airlines, and more.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="mb-1 block text-xs font-semibold uppercase text-slate-600 dark:text-slate-300">
                  Passenger Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Hassan Mansaray"
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
                    Trip Type
                  </label>
                  <select
                    value={formData.tripType}
                    onChange={(e) => setFormData({ ...formData, tripType: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:ring-blue-900"
                  >
                    <option value="Round Trip">Round Trip</option>
                    <option value="One Way">One Way</option>
                    <option value="Multi-City">Multi-City</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-xs font-semibold uppercase text-slate-600 dark:text-slate-300">
                    Departure City / Airport *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.origin}
                    onChange={(e) => setFormData({ ...formData, origin: e.target.value })}
                    placeholder="Freetown (FNA)"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:ring-blue-900"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-xs font-semibold uppercase text-slate-600 dark:text-slate-300">
                    Destination City *
                  </label>
                  <input
                    type="text"
                    required
                    value={currentDestination}
                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                    placeholder="e.g. Accra, London, Istanbul, Lagos"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:ring-blue-900"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div>
                  <label className="mb-1 block text-xs font-semibold uppercase text-slate-600 dark:text-slate-300">
                    Departure Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.departureDate}
                    onChange={(e) => setFormData({ ...formData, departureDate: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-xs text-slate-900 outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-xs font-semibold uppercase text-slate-600 dark:text-slate-300">
                    Class
                  </label>
                  <select
                    value={formData.travelClass}
                    onChange={(e) => setFormData({ ...formData, travelClass: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-xs text-slate-900 outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                  >
                    <option value="Economy">Economy</option>
                    <option value="Premium Economy">Premium Econ</option>
                    <option value="Business">Business Class</option>
                  </select>
                </div>
                <div>
                  <label className="mb-1 block text-xs font-semibold uppercase text-slate-600 dark:text-slate-300">
                    Passengers
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={formData.passengers}
                    onChange={(e) => setFormData({ ...formData, passengers: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-xs text-slate-900 outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3.5 font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
              >
                <FaPaperPlane className="h-4 w-4" /> Submit Flight Inquiry
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

const flightCategories = [
  { name: "All Routes", icon: FaPlane },
  { name: "West Africa Regional", icon: FaPlaneDeparture },
  { name: "Europe & UK Routes", icon: FaPlaneArrival },
  { name: "USA & Americas", icon: FaSuitcase },
];

const featuredFlights = [
  {
    id: 1,
    title: "Freetown (FNA) to Accra (ACC)",
    category: "West Africa Regional",
    airline: "Air Senegal / ASKY Airlines",
    price: "From $380",
    rating: "4.9 (42 reviews)",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=900&q=85",
    description: "Daily direct and connection regional flights linking Lungi International to Kotoka International Airport.",
    urgent: true,
  },
  {
    id: 2,
    title: "Freetown (FNA) to London Heathrow (LHR)",
    category: "Europe & UK Routes",
    airline: "Brussels Airlines / Air France",
    price: "From $850",
    rating: "5.0 (58 reviews)",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=900&q=85",
    description: "Popular European connections from Freetown with smooth baggage transfers and flexible booking policies.",
    urgent: false,
  },
  {
    id: 3,
    title: "Freetown (FNA) to Banjul (BJL)",
    category: "West Africa Regional",
    airline: "ASKY Airlines",
    price: "From $290",
    rating: "4.8 (21 reviews)",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=900&q=85",
    description: "Quick regional connections for business travelers, diplomatic personnel, and traders.",
    urgent: false,
  },
  {
    id: 4,
    title: "Freetown (FNA) to Washington Dulles (IAD)",
    category: "USA & Americas",
    airline: "Ethiopian Airlines / Brussels Airlines",
    price: "From $1,150",
    rating: "4.9 (35 reviews)",
    image: "https://images.unsplash.com/photo-1508873696983-2df515122519?auto=format&fit=crop&w=900&q=85",
    description: "Transatlantic travel connections with baggage allowances for Sierra Leonean diaspora and corporate travelers.",
    urgent: true,
  },
];

export default function FlightsBookingPage() {
  const [activeCategory, setActiveCategory] = useState("All Routes");
  const [favorites, setFavorites] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFlight, setSelectedFlight] = useState(null);

  const filteredFlights = useMemo(() => {
    if (activeCategory === "All Routes") return featuredFlights;
    return featuredFlights.filter((f) => f.category === activeCategory);
  }, [activeCategory]);

  function toggleFavorite(id) {
    setFavorites((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id]
    );
  }

  function handleOpenModal(flight = null) {
    setSelectedFlight(flight);
    setIsModalOpen(true);
  }

  return (
    <div className="py-10">
      {/* HEADER */}
      <section className="bg-slate-900 py-16 text-white mb-12">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="text-xs font-bold uppercase tracking-widest text-blue-400">
            Travel & Airline Reservation Agency
          </p>
          <h1 className="mt-3 text-3xl font-black sm:text-5xl">
            Flight Ticketing & Reservations
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
            Book local, regional, and international flight tickets directly through All Task Solution SL. Get instant quotes, date changes, and visa travel assistance in Sierra Leone.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-xs font-semibold text-blue-200">
            <span className="flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-2 backdrop-blur">
              <FaShieldAlt className="text-emerald-400" /> Authorized Airline Ticketing
            </span>
            <span className="flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-2 backdrop-blur">
              <FaClock className="text-emerald-400" /> Fast WhatsApp Confirmation
            </span>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="mx-auto max-w-7xl px-5 py-6 sm:px-8">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Flight Destinations
            </p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">
              Where are you flying to next?
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {flightCategories.map(({ name, icon: Icon }) => (
            <button
              key={name}
              onClick={() => setActiveCategory(name)}
              className={`rounded-2xl border p-5 text-left transition duration-200 hover:-translate-y-1 hover:shadow-lg ${
                activeCategory === name
                  ? "border-blue-500 bg-blue-50 text-blue-700"
                  : "border-slate-100 bg-white text-slate-700"
              }`}
            >
              <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Icon size={20} />
              </span>
              <span className="block text-sm font-bold">{name}</span>
            </button>
          ))}
        </div>
      </section>

      {/* LISTINGS */}
      <section className="bg-slate-50 py-16 border-t border-slate-100 mt-10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {filteredFlights.map((flight) => (
              <div
                key={flight.id}
                className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-100 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div>
                  <div className="relative h-48 w-full overflow-hidden bg-slate-200">
                    <img
                      src={flight.image}
                      alt={flight.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-slate-900/80 px-3 py-1 text-[11px] font-bold text-white backdrop-blur">
                      {flight.airline}
                    </span>
                    <button
                      onClick={() => toggleFavorite(flight.id)}
                      className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow"
                    >
                      <FaHeart
                        size={14}
                        className={favorites.includes(flight.id) ? "text-red-500" : "text-slate-600"}
                      />
                    </button>
                  </div>

                  <div className="p-5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600">
                      {flight.category}
                    </span>
                    <h3 className="mt-1 text-base font-bold text-slate-900">{flight.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-500">{flight.description}</p>
                  </div>
                </div>

                <div className="p-5 pt-0 border-t border-slate-100 mt-4">
                  <div className="mt-3 flex items-center justify-between">
                    <div>
                      <p className="text-[10px] text-slate-400">Est. Price</p>
                      <p className="text-base font-extrabold text-blue-600">{flight.price}</p>
                    </div>
                    <button
                      onClick={() => handleOpenModal(flight)}
                      className="rounded-xl bg-blue-600 px-4 py-2 text-xs font-bold text-white transition hover:bg-blue-700"
                    >
                      Book Flight
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => handleOpenModal()}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-bold transition hover:border-blue-300 hover:text-blue-600"
            >
              Request Custom Route Ticket <FaArrowRight />
            </button>
          </div>
        </div>
      </section>

      <FlightBookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedFlight={selectedFlight}
      />
    </div>
  );
}