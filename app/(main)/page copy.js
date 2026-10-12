// app/(main)/page.jsx
"use client";

import { useMemo, useState } from "react";
import {
  FaSearch,
  FaMapMarkerAlt,
  FaArrowRight,
  FaArrowUp,
  FaHeart,
  FaShieldAlt,
  FaClock,
  FaCheckCircle,
  FaBars,
  FaTimes,
  FaTools,
  FaBroom,
  FaTruck,
  FaBolt,
  FaTint,
  FaPaintBrush,
  FaTree,
  FaGraduationCap,
  FaEllipsisH,
  FaUsers,
  FaClipboardList,
  FaWallet,
  FaHammer,
  FaPaperPlane,
} from "react-icons/fa";

// Integrated Task Request Modal
function TaskRequestModal({ isOpen, onClose, selectedService }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    taskTitle: "",
    category: "Home Repair",
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
      taskTitle: "",
      category: "Home Repair",
      details: "",
    });
    onClose();
  };

  const currentTitle = selectedService ? selectedService.title : formData.taskTitle;

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
              Request a Task
            </h3>
            <p className="mb-6 text-sm text-slate-500 dark:text-slate-400">
              Tell us what you need done and our agent team will assign the right specialist.
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
                  onChange={(e) => setFormData({ ...formData, taskTitle: e.target.value })}
                  placeholder="e.g. Electrical Wiring, Plumbing Fix"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:ring-blue-900"
                />
              </div>

              <div>
                <label className="mb-1 block text-xs font-semibold uppercase text-slate-600 dark:text-slate-300">
                  Task Details & Requirements
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

const steps = [
  {
    number: "01",
    title: "Tell Us What You Need",
    description: "Describe your task, choose a service category and tell us where the work is needed.",
    icon: FaClipboardList,
  },
  {
    number: "02",
    title: "Get Matched",
    description: "Our team reviews your request and assigns a suitable, approved skilled worker.",
    icon: FaUsers,
  },
  {
    number: "03",
    title: "Get the Job Done",
    description: "Coordinate with your assigned worker and follow the progress of your task.",
    icon: FaCheckCircle,
  },
  {
    number: "04",
    title: "Pay with Confidence",
    description: "Follow the agreed payment process and keep a record of your transaction.",
    icon: FaWallet,
  },
];

export default function HomePage() {
  const [searchText, setSearchText] = useState("");
  const [location, setLocation] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [favorites, setFavorites] = useState([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const filteredTasks = useMemo(() => {
    const search = searchText.trim().toLowerCase();
    const place = location.trim().toLowerCase();

    return tasks.filter((task) => {
      const matchesCategory =
        activeCategory === "All" || task.category === activeCategory;

      const matchesSearch =
        !search ||
        task.title.toLowerCase().includes(search) ||
        task.category.toLowerCase().includes(search) ||
        task.description.toLowerCase().includes(search);

      const matchesLocation =
        !place || task.location.toLowerCase().includes(place);

      return matchesCategory && matchesSearch && matchesLocation;
    });
  }, [searchText, location, activeCategory]);

  function toggleFavorite(id) {
    setFavorites((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  }

  function scrollToTasks() {
    document.getElementById("featured-tasks")?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  }

  function selectCategory(name) {
    setActiveCategory(name);
    setSearchText("");
    scrollToTasks();
  }

  function clearFilters() {
    setSearchText("");
    setLocation("");
    setActiveCategory("All");
  }

  function handleOpenModal(task = null) {
    setSelectedService(task);
    setIsModalOpen(true);
  }

  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-900">
      {/* NAVIGATION */}
      <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="/" className="flex items-center gap-2.5">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white">
              <FaTools size={23} />
            </span>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight leading-none">
                All Task Solution <span className="text-blue-600">SL</span>
              </span>
              <span className="text-[10px] font-semibold text-slate-400 tracking-wider uppercase mt-1">
                Sierra Leone
              </span>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
            <a href="/" className="text-blue-600">
              Home
            </a>
            <button onClick={scrollToTasks} className="transition hover:text-blue-600">
              Browse Tasks
            </button>
            <a href="#how-it-works" className="transition hover:text-blue-600">
              How It Works
            </a>
            <a href="#about" className="transition hover:text-blue-600">
              About Us
            </a>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <button
              onClick={() => handleOpenModal()}
              className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
            >
              Request a Task <FaArrowRight className="ml-1 inline" />
            </button>
          </div>

          <button
            className="rounded-lg p-2 md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <FaTimes size={23} /> : <FaBars size={23} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-slate-100 bg-white px-5 py-5 md:hidden">
            <nav className="flex flex-col gap-4 text-sm font-semibold">
              <a href="/" onClick={() => setMobileMenuOpen(false)}>
                Home
              </a>
              <button onClick={scrollToTasks} className="text-left">
                Browse Tasks
              </button>
              <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)}>
                How It Works
              </a>
              <a href="#about" onClick={() => setMobileMenuOpen(false)}>
                About Us
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleOpenModal();
                }}
                className="rounded-xl bg-blue-600 p-3 text-center font-bold text-white"
              >
                Request a Task
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section className="relative isolate min-h-[590px] bg-slate-950">
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2200&q=90')",
          }}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/30" />

        <div className="mx-auto grid min-h-[590px] max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="max-w-2xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-blue-100 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              All Task Solution Sierra Leone
            </div>

            <h1 className="text-4xl font-black leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Find Skilled Workers
              <span className="mt-2 block text-blue-400">for Any Task.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              From home repairs to cleaning and professional services, tell us what you need.
              We connect you with vetted workers across Sierra Leone to get the job done right.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3 text-sm text-white/90">
              <span className="flex items-center gap-2">
                <FaShieldAlt size={18} className="text-emerald-400" /> Approved workers
              </span>
              <span className="mx-1 text-white/30">•</span>
              <span className="flex items-center gap-2">
                <FaCheckCircle size={18} className="text-emerald-400" /> Managed assignments
              </span>
              <span className="mx-1 text-white/30">•</span>
              <span className="flex items-center gap-2">
                <FaClock size={18} className="text-emerald-400" /> Convenient service
              </span>
            </div>
          </div>

          {/* SEARCH & DIRECT REQUEST PANEL */}
          <div className="rounded-3xl border border-white/40 bg-white p-6 shadow-2xl sm:p-8">
            <div className="mb-6">
              <p className="text-sm font-bold text-blue-600">LET'S GET STARTED</p>
              <h2 className="mt-2 text-2xl font-extrabold tracking-tight">
                What do you need help with?
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Search for a service or request a task directly.
              </p>
            </div>

            <form
              onSubmit={(event) => {
                event.preventDefault();
                scrollToTasks();
              }}
              className="space-y-4"
            >
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-slate-700">
                  Service or task
                </span>
                <span className="flex items-center gap-3 rounded-xl border border-slate-200 px-4 focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-50">
                  <FaSearch size={18} className="shrink-0 text-slate-400" />
                  <input
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    placeholder="e.g. plumbing, painting..."
                    className="h-12 w-full bg-transparent text-sm outline-none"
                  />
                </span>
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-slate-700">
                  Location
                </span>
                <span className="flex items-center gap-3 rounded-xl border border-slate-200 px-4 focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-50">
                  <FaMapMarkerAlt size={18} className="shrink-0 text-slate-400" />
                  <input
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="e.g. Freetown, Lumley..."
                    className="h-12 w-full bg-transparent text-sm outline-none"
                  />
                </span>
              </label>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 rounded-xl bg-slate-900 py-3.5 font-bold text-white transition hover:bg-slate-800"
                >
                  <FaSearch size={15} /> Find Tasks
                </button>
                <button
                  type="button"
                  onClick={() => handleOpenModal()}
                  className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 py-3.5 font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
                >
                  Request Now <FaArrowRight size={15} />
                </button>
              </div>
            </form>

            <div className="mt-6 border-t border-slate-100 pt-5">
              <p className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-400">
                Popular searches
              </p>
              <div className="flex flex-wrap gap-2">
                {["Cleaning", "Plumbing", "Painting", "Electrical"].map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => {
                      setSearchText(item);
                      setActiveCategory("All");
                      scrollToTasks();
                    }}
                    className="rounded-full bg-slate-100 px-3 py-2 text-xs font-semibold text-slate-600 transition hover:bg-blue-50 hover:text-blue-700"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST INDICATORS */}
      <section className="border-b border-slate-100 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-5 py-7 sm:px-8 md:grid-cols-4">
          {[
            { value: "10+", label: "Service categories" },
            { value: "Local SL", label: "Skilled professionals" },
            { value: "Managed", label: "Task assignments" },
            { value: "Reliable", label: "Support and records" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <p className="text-xl font-extrabold text-slate-900">{item.value}</p>
              <p className="mt-1 text-xs text-slate-500 sm:text-sm">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICE CATEGORIES */}
      <section id="categories" className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
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
      <section id="featured-tasks" className="bg-slate-50 py-20">
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
                Try a different service or location.
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

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Simple and convenient
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            How All Task Solution Works
          </h2>
          <p className="mt-4 leading-7 text-slate-500">
            From your first request to job completion, we help make finding skilled workers easier.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ number, title, description, icon: Icon }) => (
            <div
              key={number}
              className="relative rounded-2xl border border-slate-100 bg-white p-6 transition hover:border-blue-200 hover:shadow-lg"
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Icon size={23} />
                </span>
                <span className="text-3xl font-black text-slate-100">{number}</span>
              </div>
              <h3 className="text-lg font-extrabold">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-500">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section id="about" className="px-5 pb-20 sm:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-blue-600 px-6 py-12 sm:px-12 sm:py-16">
          <div className="absolute -right-16 -top-24 h-72 w-72 rounded-full border-[40px] border-white/10" />
          <div className="absolute -bottom-32 right-1/3 h-64 w-64 rounded-full bg-blue-500/70" />

          <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-widest text-blue-100">
                Let's get to work
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
                Have a task that needs doing?
              </h2>
              <p className="mt-4 leading-7 text-blue-100">
                Submit your request and let All Task Solution Sierra Leone match and assign the best skilled worker for you.
              </p>
            </div>

            <button
              onClick={() => handleOpenModal()}
              className="shrink-0 rounded-xl bg-white px-6 py-4 font-bold text-blue-700 shadow-lg transition hover:bg-blue-50"
            >
              Request a Service <FaArrowRight className="ml-2 inline" />
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-100 bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <a href="/" className="inline-flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600">
                <FaTools size={21} />
              </span>
              <span className="text-xl font-extrabold">
                All Task Solution <span className="text-blue-400">SL</span>
              </span>
            </a>
            <p className="mt-5 max-w-md text-sm leading-7 text-slate-400">
              Connecting clients in Sierra Leone with skilled professionals for home, business, and everyday tasks. Your request, our coordination, the right worker.
            </p>
          </div>

          <div>
            <h3 className="font-bold">Quick Links</h3>
            <div className="mt-4 flex flex-col gap-3 text-sm text-slate-400">
              <a href="#categories" className="hover:text-white">Browse Services</a>
              <a href="#featured-tasks" className="hover:text-white">Featured Tasks</a>
              <a href="#how-it-works" className="hover:text-white">How It Works</a>
            </div>
          </div>

          <div>
            <h3 className="font-bold">Action</h3>
            <div className="mt-4 flex flex-col gap-3 text-sm text-slate-400">
              <button onClick={() => handleOpenModal()} className="text-left hover:text-white">
                Submit Task Request
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-xs text-slate-500 sm:px-8 md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} All Task Solution Sierra Leone. All rights reserved.</p>
            <p>Built to connect people with skilled workers across Sierra Leone.</p>
          </div>
        </div>
      </footer>

      {/* Task Request Modal */}
      <TaskRequestModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedService={selectedService}
      />
    </main>
  );
}