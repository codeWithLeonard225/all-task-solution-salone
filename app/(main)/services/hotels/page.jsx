// app/(main)/services/hotels/page.jsx
"use client";

import { useMemo, useState } from "react";
import {
  FaHotel,
  FaBed,
  FaBuilding,
  FaUmbrellaBeach,
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
  FaWifi,
  FaSwimmingPool,
  FaConciergeBell,
} from "react-icons/fa";

// Hotel Booking Modal Component
function HotelBookingModal({ isOpen, onClose, selectedHotel }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    hotelTitle: "",
    roomType: "Deluxe Executive Room",
    checkInDate: "",
    checkOutDate: "",
    guests: "2",
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
      hotelTitle: "",
      roomType: "Deluxe Executive Room",
      checkInDate: "",
      checkOutDate: "",
      guests: "2",
      notes: "",
    });
    onClose();
  };

  const currentHotel = selectedHotel ? selectedHotel.title : formData.hotelTitle;

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
              Reservation Request Received!
            </h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Our hospitality desk will verify room availability with hotel management and contact you with confirmation details shortly.
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
              Reserve Hotel / Accommodation
            </h3>
            <p className="mb-6 text-sm text-slate-500 dark:text-slate-400">
              Book executive city hotels, luxury beachfront resorts, and serviced apartments across Freetown, Bo, Makeni, and Kenema.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="mb-1 block text-xs font-semibold uppercase text-slate-600 dark:text-slate-300">
                  Guest Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Dr. Kojo Williams"
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
                    Room / Unit Type
                  </label>
                  <select
                    value={formData.roomType}
                    onChange={(e) => setFormData({ ...formData, roomType: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:ring-blue-900"
                  >
                    <option value="Standard Single Room">Standard Single Room</option>
                    <option value="Deluxe Executive Room">Deluxe Executive Room</option>
                    <option value="Ocean View Suite">Ocean View Suite</option>
                    <option value="Serviced 2-Bed Apartment">Serviced 2-Bed Apartment</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-1 block text-xs font-semibold uppercase text-slate-600 dark:text-slate-300">
                  Hotel / Property Selected *
                </label>
                <input
                  type="text"
                  required
                  value={currentHotel}
                  onChange={(e) => setFormData({ ...formData, hotelTitle: e.target.value })}
                  placeholder="e.g. Radisson Blu Mammy Yoko, Cape Sierra, Country Lodge"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:ring-blue-900"
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div>
                  <label className="mb-1 block text-xs font-semibold uppercase text-slate-600 dark:text-slate-300">
                    Check-in Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.checkInDate}
                    onChange={(e) => setFormData({ ...formData, checkInDate: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-xs text-slate-900 outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-xs font-semibold uppercase text-slate-600 dark:text-slate-300">
                    Check-out Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.checkOutDate}
                    onChange={(e) => setFormData({ ...formData, checkOutDate: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-xs text-slate-900 outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-xs font-semibold uppercase text-slate-600 dark:text-slate-300">
                    Guests Count
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-xs text-slate-900 outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1 block text-xs font-semibold uppercase text-slate-600 dark:text-slate-300">
                  Special Requests / Airport Shuttle
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Need early check-in, late check-out, or Lungi airport transfer?"
                  className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:ring-blue-900"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3.5 font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
              >
                <FaPaperPlane className="h-4 w-4" /> Submit Reservation Request
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

const accommodationCategories = [
  { name: "All Stays", icon: FaHotel },
  { name: "Beachfront Resorts", icon: FaUmbrellaBeach },
  { name: "Executive City Hotels", icon: FaBuilding },
  { name: "Serviced Apartments", icon: FaBed },
];

const hotelListings = [
  {
    id: 1,
    title: "Luxury Oceanfront Resort & Spa",
    category: "Beachfront Resorts",
    location: "Aberdeen & Lumley Beach, Freetown",
    price: "$150 – $280 / night",
    rating: "4.9 (64 reviews)",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=85",
    description: "Premium beachfront resort featuring outdoor swimming pools, ocean-view suites, high-speed Wi-Fi, and top-tier seafood dining.",
    urgent: true,
  },
  {
    id: 2,
    title: "Hilltop Executive Business Hotel",
    category: "Executive City Hotels",
    location: "Hill Station / Regent, Freetown",
    price: "$120 – $220 / night",
    rating: "4.8 (39 reviews)",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=85",
    description: "Serene mountain-view hotel equipped with high-tech conference halls, 24/7 generator backup, security, and airport shuttles.",
    urgent: false,
  },
  {
    id: 3,
    title: "Modern 2-Bedroom Serviced Apartment",
    category: "Serviced Apartments",
    location: "Wilkinson Road, Freetown",
    price: "$90 – $160 / night",
    rating: "4.9 (28 reviews)",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=900&q=85",
    description: "Fully furnished apartment with a fitted kitchen, air conditioning, daily housekeeping, and private balcony.",
    urgent: false,
  },
  {
    id: 4,
    title: "Eco-Lodge & Beachfront Cabanas",
    category: "Beachfront Resorts",
    location: "Bureh Beach / Tokeh",
    price: "$70 – $130 / night",
    rating: "5.0 (47 reviews)",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=900&q=85",
    description: "Relaxing coastal getaway cabanas ideal for weekend retreats, surfing holidays, and family vacations.",
    urgent: false,
  },
  {
    id: 5,
    title: "Boutique Heritage Guest House",
    category: "Executive City Hotels",
    location: "Congo Cross, Freetown",
    price: "$60 – $110 / night",
    rating: "4.7 (33 reviews)",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=900&q=85",
    description: "Quiet and cozy boutique hotel offering complimentary breakfast, air-conditioned rooms, and personalized customer care.",
    urgent: false,
  },
  {
    id: 6,
    title: "Regional Transit Hotel & Conference Hub",
    category: "Executive City Hotels",
    location: "Bo City / Makeni Central",
    price: "$50 – $100 / night",
    rating: "4.8 (19 reviews)",
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=900&q=85",
    description: "Ideal accommodation for field project managers, NGO staff, and business travelers visiting provincial headquarters.",
    urgent: false,
  },
];

export default function HotelsPage() {
  const [activeCategory, setActiveCategory] = useState("All Stays");
  const [favorites, setFavorites] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedHotel, setSelectedHotel] = useState(null);

  const filteredHotels = useMemo(() => {
    if (activeCategory === "All Stays") return hotelListings;
    return hotelListings.filter((h) => h.category === activeCategory);
  }, [activeCategory]);

  function toggleFavorite(id) {
    setFavorites((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id]
    );
  }

  function handleOpenModal(hotel = null) {
    setSelectedHotel(hotel);
    setIsModalOpen(true);
  }

  return (
    <div className="py-10">
      {/* HEADER SECTION */}
      <section className="bg-slate-900 py-16 text-white mb-12">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="text-xs font-bold uppercase tracking-widest text-blue-400">
            Hospitality & Reservation Desk
          </p>
          <h1 className="mt-3 text-3xl font-black sm:text-5xl">
            Hotels & Accommodations Service
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
            Reserve verified hotels, beachfront resorts, guest lodges, and short-stay serviced apartments across Freetown, Bo, Makeni, and Kenema with transparent pricing.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-xs font-semibold text-blue-200">
            <span className="flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-2 backdrop-blur">
              <FaShieldAlt className="text-emerald-400" /> Inspected & Verified Properties
            </span>
            <span className="flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-2 backdrop-blur">
              <FaWifi className="text-emerald-400" /> Wi-Fi & Generator Backups
            </span>
            <span className="flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-2 backdrop-blur">
              <FaConciergeBell className="text-emerald-400" /> Direct Concierge Booking
            </span>
          </div>
        </div>
      </section>

      {/* CATEGORY SELECTOR CARDS */}
      <section className="mx-auto max-w-7xl px-5 py-6 sm:px-8">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Accommodation Types
            </p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">
              Select your ideal stay
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {accommodationCategories.map(({ name, icon: Icon }) => (
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

      {/* HOTEL LISTINGS */}
      <section className="bg-slate-50 py-16 border-t border-slate-100 mt-10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
                Available Directory
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Featured Hotels & Resorts
              </h2>
            </div>

            <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm">
              {filteredHotels.length} places found
            </span>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredHotels.map((hotel) => (
              <div
                key={hotel.id}
                className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-100 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div>
                  <div className="relative h-56 w-full overflow-hidden bg-slate-200">
                    <img
                      src={hotel.image}
                      alt={hotel.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-slate-700 shadow-sm">
                      {hotel.category}
                    </span>
                    {hotel.urgent && (
                      <span className="absolute bottom-4 left-4 rounded-full bg-amber-100 px-3 py-1.5 text-xs font-bold text-amber-800">
                        Top Rated
                      </span>
                    )}
                    <button
                      type="button"
                      onClick={() => toggleFavorite(hotel.id)}
                      className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md transition hover:scale-105"
                    >
                      <FaHeart
                        size={18}
                        className={favorites.includes(hotel.id) ? "text-red-500" : "text-slate-600"}
                      />
                    </button>
                  </div>

                  <div className="p-5">
                    <div className="mb-3 flex items-center justify-between gap-3 text-xs text-slate-500">
                      <span className="flex items-center gap-1.5">
                        <FaMapMarkerAlt className="text-blue-600" /> {hotel.location}
                      </span>
                      <span className="flex items-center gap-1 font-bold text-amber-600">
                        <FaStar size={12} /> {hotel.rating}
                      </span>
                    </div>

                    <h3 className="text-lg font-extrabold tracking-tight text-slate-900 group-hover:text-blue-600 transition">
                      {hotel.title}
                    </h3>
                    <p className="mt-2 min-h-[48px] text-sm leading-6 text-slate-500">
                      {hotel.description}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0 border-t border-slate-100 mt-4">
                  <div className="mt-4 flex items-center justify-between gap-3">
                    <div>
                      <p className="text-xs text-slate-400">Nightly Rate</p>
                      <p className="mt-1 text-base font-extrabold text-slate-900">
                        {hotel.price}
                      </p>
                    </div>
                    <button
                      onClick={() => handleOpenModal(hotel)}
                      className="rounded-xl bg-blue-600 px-5 py-2.5 text-xs font-bold text-white shadow-md shadow-blue-600/20 transition hover:bg-blue-700"
                    >
                      Reserve Hotel
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
              Request Custom Accommodation Booking <FaArrowRight />
            </button>
          </div>
        </div>
      </section>

      {/* RESERVATION MODAL */}
      <HotelBookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedHotel={selectedHotel}
      />
    </div>
  );
}