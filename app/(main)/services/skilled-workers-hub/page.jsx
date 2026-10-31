// app/(main)/services/skilled-workers-hub/page.jsx
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
  FaTools,
  FaBroom,
  FaTruck,
  FaHammer,
  FaBolt,
  FaTint,
  FaPaintBrush,
  FaTree,
  FaGraduationCap,
  FaEllipsisH,
} from "react-icons/fa";

// Task Request Modal Component
function TaskRequestModal({ isOpen, onClose, selectedItem }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    itemTitle: "",
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
      itemTitle: "",
      details: "",
    });
    onClose();
  };

  const currentTitle = selectedItem ? selectedItem.title : formData.itemTitle;

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
              Task Request Submitted!
            </h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              The All Task Solution Sierra Leone agent team will review your request and contact you shortly to assign a vetted worker.
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
              Request a Skilled Specialist
            </h3>
            <p className="mb-6 text-sm text-slate-500 dark:text-slate-400">
              Tell us what you need done and our agent team will assign the right specialist across Sierra Leone.
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
                  placeholder="e.g. Mariama Sesay"
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
                    placeholder="+232 77 000000"
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
                    placeholder="name@example.com"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:ring-blue-900"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1 block text-xs font-semibold uppercase text-slate-600 dark:text-slate-300">
                  Task Needed *
                </label>
                <input
                  type="text"
                  required
                  value={currentTitle}
                  onChange={(e) => setFormData({ ...formData, itemTitle: e.target.value })}
                  placeholder="e.g. Electrical Wiring, Plumbing Fix"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:ring-blue-900"
                />
              </div>

              <div>
                <label className="mb-1 block text-xs font-semibold uppercase text-slate-600 dark:text-slate-300">
                  Task Details & Location
                </label>
                <textarea
                  rows={3}
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  placeholder="Describe location, budget expectation, or specific timeline..."
                  className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:ring-blue-900"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3.5 font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
              >
                <FaPaperPlane className="h-4 w-4" /> Submit Task Request
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

const categories = [
  { name: "Home Repair", icon: FaTools },
  { name: "Cleaning", icon: FaBroom },
  { name: "Moving", icon: FaTruck },
  { name: "Handyman", icon: FaHammer },
  { name: "Electrical", icon: FaBolt },
  { name: "Plumbing", icon: FaTint },
  { name: "Painting", icon: FaPaintBrush },
  { name: "Landscaping", icon: FaTree },
  { name: "Tutoring", icon: FaGraduationCap },
  { name: "Other", icon: FaEllipsisH },
];

const tasks = [
  {
    id: 1,
    title: "Interior Wall Painting",
    category: "Painting",
    location: "Freetown",
    price: "Le 1,500–3,000",
    posted: "2 hours ago",
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=900&q=85",
    description: "Looking for an experienced painter to refresh a living room.",
    urgent: false,
  },
  {
    id: 2,
    title: "Deep Home Cleaning",
    category: "Cleaning",
    location: "Lumley, Freetown",
    price: "Le 800–1,500",
    posted: "4 hours ago",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=85",
    description: "Professional cleaning for a three-bedroom family home.",
    urgent: false,
  },
  {
    id: 3,
    title: "Furniture Assembly",
    category: "Handyman",
    location: "Aberdeen, Freetown",
    price: "Le 500–1,000",
    posted: "Yesterday",
    image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=900&q=85",
    description: "Need help assembling bedroom and living room furniture.",
    urgent: true,
  },
  {
    id: 4,
    title: "Fix a Leaking Faucet",
    category: "Plumbing",
    location: "Wilkinson Road",
    price: "Le 300–700",
    posted: "Yesterday",
    image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=900&q=85",
    description: "A plumber is needed to inspect and repair a leaking tap.",
    urgent: false,
  },
  {
    id: 5,
    title: "Garden Maintenance",
    category: "Landscaping",
    location: "Juba, Freetown",
    price: "Le 400–900",
    posted: "2 days ago",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=85",
    description: "Trim the lawn, tidy flower beds and remove garden waste.",
    urgent: false,
  },
  {
    id: 6,
    title: "Home Electrical Repairs",
    category: "Electrical",
    location: "Hill Station",
    price: "Le 500–1,200",
    posted: "2 days ago",
    image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=900&q=85",
    description: "Qualified electrician needed for minor household repairs.",
    urgent: true,
  },
];

export default function SkilledWorkersHubPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [favorites, setFavorites] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const filteredTasks = useMemo(() => {
    if (activeCategory === "All") return tasks;
    return tasks.filter((t) => t.category === activeCategory);
  }, [activeCategory]);

  function toggleFavorite(id) {
    setFavorites((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id]
    );
  }

  function scrollToTasks() {
    document.getElementById("featured-tasks")?.scrollIntoView({ behavior: "smooth" });
  }

  function selectCategory(name) {
    setActiveCategory(name);
    scrollToTasks();
  }

  function clearFilters() {
    setActiveCategory("All");
  }

  function handleOpenModal(task = null) {
    setSelectedTask(task);
    setIsModalOpen(true);
  }

  return (
    <div className="py-10">
      {/* PAGE HEADER */}
    {/* PROFESSIONAL HERO HEADER */}
<section className="relative isolate overflow-hidden bg-slate-950 text-white">
  {/* Background Image */}
  <div
    className="absolute inset-0 -z-20 bg-cover bg-center"
    style={{
      backgroundImage:
        "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2000&q=85')",
    }}
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/40" />

  <div className="mx-auto flex min-h-[500px] max-w-7xl items-center px-5 py-20 sm:px-8">
    <div className="max-w-3xl">
      <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-blue-300">
        <FaTools />
        Professional & Trade Services
      </div>

      <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
        Skilled Workers Hub
        <span className="mt-2 block text-blue-400">
          The Right Skills. The Right People.
        </span>
      </h1>

      <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
        Find skilled electricians, plumbers, painters, carpenters,
        technicians and other professionals for your home, business
        and construction projects across Sierra Leone.
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <button
          onClick={scrollToTasks}
          className="inline-flex items-center justify-center gap-3 rounded-xl bg-blue-600 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
        >
          Explore Skilled Workers
          <FaArrowRight />
        </button>

        <button
          onClick={() => handleOpenModal()}
          className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/30 bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white hover:text-slate-900"
        >
          Request a Specialist
          <FaTools />
        </button>
      </div>

      <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/15 pt-7 text-sm text-slate-300">
        <span className="flex items-center gap-2">
          <FaCheckCircle className="text-blue-400" />
          Skilled Professionals
        </span>

        <span className="flex items-center gap-2">
          <FaCheckCircle className="text-blue-400" />
          Multiple Trade Services
        </span>

        <span className="flex items-center gap-2">
          <FaCheckCircle className="text-blue-400" />
          Easy Service Requests
        </span>
      </div>
    </div>
  </div>
</section>

      {/* SERVICE CATEGORIES */}
      <section id="categories" className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Explore services
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              What can we help you with?
            </h2>
            <p className="mt-3 max-w-xl text-slate-500">
              Find the right service for your home, business or personal needs.
            </p>
          </div>

          <button
            onClick={() => {
              clearFilters();
              scrollToTasks();
            }}
            className="text-sm font-bold text-blue-600 hover:text-blue-800"
          >
            Browse all tasks <FaArrowRight className="ml-1 inline" />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5 lg:gap-5">
          {categories.map(({ name, icon: Icon }) => (
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

      {/* FEATURED TASKS */}
      <section id="featured-tasks" className="bg-slate-50 py-20 border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
                Discover opportunities
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Featured Tasks
              </h2>
              <p className="mt-3 max-w-xl text-slate-500">
                Explore sample jobs and see the kinds of services available on our platform.
              </p>
            </div>

            <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm">
              {filteredTasks.length} tasks found
            </span>
          </div>

          {/* CATEGORY FILTERS */}
          <div className="mb-8 flex gap-2 overflow-x-auto pb-2">
            {["All", ...categories.map((c) => c.name)].map((name) => (
              <button
                key={name}
                onClick={() => setActiveCategory(name)}
                className={`shrink-0 rounded-full px-4 py-2.5 text-sm font-semibold transition ${
                  activeCategory === name
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                    : "border border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:text-blue-600"
                }`}
              >
                {name}
              </button>
            ))}
          </div>

          {/* TASK CARDS */}
          {filteredTasks.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredTasks.map((task) => (
                <article
                  key={task.id}
                  className="group overflow-hidden rounded-2xl border border-slate-100 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative h-56 overflow-hidden bg-slate-200">
                    <img
                      src={task.image}
                      alt={task.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />

                    <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-slate-700 shadow-sm">
                      {task.category}
                    </span>

                    {task.urgent && (
                      <span className="absolute bottom-4 left-4 rounded-full bg-amber-100 px-3 py-1.5 text-xs font-bold text-amber-800">
                        Needs attention
                      </span>
                    )}

                    <button
                      type="button"
                      onClick={() => toggleFavorite(task.id)}
                      aria-label="Favorite"
                      className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md transition hover:scale-105"
                    >
                      <FaHeart
                        size={18}
                        className={
                          favorites.includes(task.id) ? "text-red-500" : "text-slate-600"
                        }
                      />
                    </button>
                  </div>

                  <div className="p-5">
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <span className="flex items-center gap-1.5 text-xs text-slate-500">
                        <FaMapMarkerAlt />
                        {task.location}
                      </span>
                      <span className="text-xs text-slate-400">{task.posted}</span>
                    </div>

                    <h3 className="text-lg font-extrabold tracking-tight transition group-hover:text-blue-600">
                      {task.title}
                    </h3>

                    <p className="mt-2 min-h-[48px] text-sm leading-6 text-slate-500">
                      {task.description}
                    </p>

                    <div className="mt-5 flex items-center justify-between gap-3 border-t border-slate-100 pt-4">
                      <div>
                        <p className="text-xs text-slate-400">Estimated budget</p>
                        <p className="mt-1 text-base font-extrabold text-slate-900">
                          {task.price}
                        </p>
                      </div>

                      <button
                        onClick={() => handleOpenModal(task)}
                        className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition hover:bg-blue-600 hover:text-white"
                        aria-label={`Request ${task.title}`}
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
              <h3 className="mt-4 text-lg font-bold">No matching tasks found</h3>
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
              Request Custom Task <FaArrowRight />
            </button>
          </div>
        </div>
      </section>

      {/* REQUEST MODAL */}
      <TaskRequestModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedItem={selectedTask}
      />
    </div>
  );
}