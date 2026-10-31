
"use client";

import { useState } from "react";
import {
  FaPiggyBank,
  FaShieldAlt,
  FaChartLine,
  FaHandHoldingUsd,
  FaCheckCircle,
  FaTimes,
  FaPaperPlane,
  FaLock,
  FaCoins,
  FaWallet,
  FaArrowRight,
  FaBriefcase,
  FaMobileAlt,
  FaBullseye,
  FaUsers,
} from "react-icons/fa";

// ==========================================
// SAVINGS ENROLLMENT MODAL
// ==========================================

function SavingsModal({ isOpen, onClose, selectedPlan }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    occupation: "",
    savingsPlan: "",
    weeklyAmount: "",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const currentPlanTitle = selectedPlan
    ? selectedPlan.title
    : formData.savingsPlan;

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
      occupation: "",
      savingsPlan: "",
      weeklyAmount: "",
      notes: "",
    });
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/70 p-4 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleReset();
      }}
    >
      <div className="relative my-auto w-full max-w-lg rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl dark:border-slate-800 dark:bg-slate-900 sm:p-8">
        <button
          onClick={handleReset}
          className="absolute right-5 top-5 rounded-full p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-slate-800 dark:hover:text-white"
          aria-label="Close modal"
        >
          <FaTimes />
        </button>

        {submitted ? (
          <div className="py-8 text-center">
            <FaCheckCircle className="mx-auto mb-5 h-16 w-16 text-emerald-500" />

            <h3 className="text-2xl font-black text-slate-900 dark:text-white">
              Request Submitted!
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              Thank you for your interest in the Workers Savings Scheme.
              Your request has been recorded in this session. Please contact
              All Task Solution SL to confirm your enrollment.
            </p>

            <button
              onClick={handleReset}
              className="mt-7 rounded-xl bg-blue-600 px-8 py-3 font-bold text-white transition hover:bg-blue-700"
            >
              Done
            </button>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-400">
                <FaPiggyBank size={27} />
              </div>

              <p className="text-xs font-bold uppercase tracking-widest text-blue-600">
                Workers Financial Services
              </p>

              <h3 className="mt-2 text-2xl font-black text-slate-900 dark:text-white">
                Join Workers Savings
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                Complete the form below to express your interest in joining
                our workers savings scheme.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="mb-1.5 block text-xs font-bold uppercase text-slate-600 dark:text-slate-300">
                  Full Name *
                </label>

                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Enter your full name"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-xs font-bold uppercase text-slate-600 dark:text-slate-300">
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
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-bold uppercase text-slate-600 dark:text-slate-300">
                    Email Address
                  </label>

                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="example@email.com"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-bold uppercase text-slate-600 dark:text-slate-300">
                  Trade / Profession *
                </label>

                <input
                  type="text"
                  required
                  value={formData.occupation}
                  onChange={(e) =>
                    setFormData({ ...formData, occupation: e.target.value })
                  }
                  placeholder="e.g. Electrician, Plumber, Driver"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-bold uppercase text-slate-600 dark:text-slate-300">
                  Selected Savings Plan *
                </label>

                <input
                  type="text"
                  required
                  value={currentPlanTitle}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      savingsPlan: e.target.value,
                    })
                  }
                  placeholder="Choose a savings plan"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-bold uppercase text-slate-600 dark:text-slate-300">
                  Intended Deposit Amount (NLe) *
                </label>

                <input
                  type="text"
                  required
                  value={formData.weeklyAmount}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      weeklyAmount: e.target.value,
                    })
                  }
                  placeholder="e.g. NLe 50 daily or NLe 300 weekly"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-bold uppercase text-slate-600 dark:text-slate-300">
                  Additional Notes
                </label>

                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) =>
                    setFormData({ ...formData, notes: e.target.value })
                  }
                  placeholder="Tell us about your savings goals..."
                  className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3.5 font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
              >
                <FaPaperPlane />
                Submit Enrollment Request
              </button>

              <p className="text-center text-[11px] leading-relaxed text-slate-400">
                Submitting this form expresses your interest. It does not
                create a savings account or authorize a deposit.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

// ==========================================
// SAVINGS PLANS
// ==========================================

const savingsPlans = [
  {
    id: 1,
    title: "Esusu & Daily Target Savings",
    subtitle: "Flexible micro-deposits",
    description:
      "Build a savings habit by setting aside small amounts daily or weekly. Choose a contribution schedule that suits your earnings.",
    icon: FaPiggyBank,
    highlight: "Flexible contributions",
  },
  {
    id: 2,
    title: "Emergency & Medical Savings",
    subtitle: "Prepare for unexpected needs",
    description:
      "Set aside money for medical expenses, family support, urgent repairs, and other unexpected situations.",
    icon: FaShieldAlt,
    highlight: "Emergency preparation",
  },
  {
    id: 3,
    title: "Tools & Equipment Savings",
    subtitle: "Invest in your profession",
    description:
      "Save towards purchasing professional tools, equipment, machinery, and other resources that can improve your work.",
    icon: FaCoins,
    highlight: "Build your career",
  },
  {
    id: 4,
    title: "Worker Financial Support",
    subtitle: "Explore financing opportunities",
    description:
      "Workers with a consistent savings history may inquire about available financing or advance options, subject to eligibility and approved terms.",
    icon: FaHandHoldingUsd,
    highlight: "Financial opportunities",
  },
];

// ==========================================
// MAIN PAGE
// ==========================================

export default function WorkersSavingsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleOpenModal = (plan = null) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  const scrollToPlans = () => {
    document.getElementById("savings-plans")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="overflow-hidden bg-white dark:bg-slate-950">

      {/* ==========================================
          PROFESSIONAL HERO SECTION
      ========================================== */}

      <section className="relative isolate flex min-h-[540px] items-center overflow-hidden bg-slate-950 py-24 text-white sm:min-h-[600px]">

        {/* Background Image */}
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2000&q=85')",
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/50" />

        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl">

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-blue-300 backdrop-blur-md">
              <FaCoins />
              Financial Inclusion & Empowerment
            </div>

            <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Workers Savings &
              <span className="block text-blue-400">
                Financial Empowerment
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Your hard work deserves a brighter future. Build a consistent
              savings habit, prepare for emergencies, and work towards your
              financial goals with All Task Solution SL.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <button
                onClick={() => handleOpenModal()}
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-blue-600 px-7 py-4 text-sm font-bold text-white shadow-xl shadow-blue-600/20 transition hover:-translate-y-1 hover:bg-blue-700"
              >
                Start Saving
                <FaArrowRight />
              </button>

              <button
                onClick={scrollToPlans}
                className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/30 bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur-md transition hover:bg-white/20"
              >
                Explore Savings Plans
              </button>
            </div>

            {/* Hero Highlights */}
            <div className="mt-12 grid grid-cols-1 gap-5 border-t border-white/15 pt-8 sm:grid-cols-3">

              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-400">
                  <FaLock size={19} />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">
                    Transparent Records
                  </p>
                  <p className="mt-1 text-xs text-slate-400">
                    Clear contribution records
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/15 text-blue-400">
                  <FaWallet size={19} />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">
                    Flexible Savings
                  </p>
                  <p className="mt-1 text-xs text-slate-400">
                    Daily or weekly options
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-500/15 text-amber-400">
                  <FaChartLine size={19} />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">
                    Financial Growth
                  </p>
                  <p className="mt-1 text-xs text-slate-400">
                    Work towards your goals
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Decorative Shape */}
        <div className="pointer-events-none absolute -bottom-32 -right-20 -z-10 h-96 w-96 rounded-full border border-blue-400/10" />
      </section>

      {/* ==========================================
          INTRODUCTION
      ========================================== */}

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-2">

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
              Built for Workers
            </p>

            <h2 className="mt-3 text-3xl font-black leading-tight tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Your Savings.
              <span className="block text-blue-600">
                Your Future.
              </span>
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base">
              All Task Solution SL Workers Savings is designed to encourage
              financial discipline among skilled workers, artisans, domestic
              staff, and independent service providers.
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base">
              Whether you earn daily, weekly, or monthly, you can work towards
              your financial goals by planning your contributions and keeping
              track of your savings.
            </p>

            <button
              onClick={() => handleOpenModal()}
              className="mt-8 inline-flex items-center gap-3 rounded-xl bg-slate-900 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700"
            >
              Join the Scheme
              <FaArrowRight />
            </button>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&q=85"
              alt="Person managing personal savings"
              className="h-[350px] w-full rounded-3xl object-cover shadow-2xl sm:h-[430px]"
            />

            <div className="absolute -bottom-6 left-5 right-5 rounded-2xl border border-slate-100 bg-white p-5 shadow-xl dark:border-slate-700 dark:bg-slate-900 sm:left-auto sm:right-5 sm:w-72">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-400">
                  <FaBullseye size={23} />
                </div>

                <div>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">
                    Save with a Purpose
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Every contribution counts.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ==========================================
          SAVINGS PLANS
      ========================================== */}

      <section
        id="savings-plans"
        className="scroll-mt-20 bg-slate-50 py-20 dark:bg-slate-900/50"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
              Flexible Savings Options
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Choose Your Savings Plan
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-slate-500 dark:text-slate-400 sm:text-base">
              Select a savings option that matches your income, profession,
              and personal financial goals.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {savingsPlans.map((plan) => {
              const Icon = plan.icon;

              return (
                <div
                  key={plan.id}
                  className="group flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl dark:border-slate-800 dark:bg-slate-950"
                >
                  <div>
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition duration-300 group-hover:bg-blue-600 group-hover:text-white dark:bg-blue-950 dark:text-blue-400">
                      <Icon size={25} />
                    </div>

                    <span className="mb-4 inline-block rounded-full bg-blue-50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-blue-600 dark:bg-blue-950 dark:text-blue-400">
                      {plan.highlight}
                    </span>

                    <h3 className="text-lg font-extrabold leading-snug text-slate-900 transition group-hover:text-blue-600 dark:text-white">
                      {plan.title}
                    </h3>

                    <p className="mt-2 text-xs font-semibold text-slate-400">
                      {plan.subtitle}
                    </p>

                    <p className="mt-4 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                      {plan.description}
                    </p>
                  </div>

                  <div className="mt-7 border-t border-slate-100 pt-5 dark:border-slate-800">
                    <button
                      onClick={() => handleOpenModal(plan)}
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 py-3 text-xs font-bold text-white transition hover:bg-blue-600 dark:bg-slate-800 dark:hover:bg-blue-600"
                    >
                      Select This Plan
                      <FaArrowRight />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==========================================
          BENEFITS
      ========================================== */}

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
        <div className="mb-12 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
            The Benefits
          </p>

          <h2 className="mt-3 text-3xl font-black text-slate-900 dark:text-white sm:text-4xl">
            Why Make Saving a Habit?
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {[
            {
              icon: FaWallet,
              title: "Financial Discipline",
              description:
                "Develop a consistent habit of setting money aside for the future.",
            },
            {
              icon: FaShieldAlt,
              title: "Emergency Preparation",
              description:
                "Prepare financially for unexpected expenses and urgent needs.",
            },
            {
              icon: FaBriefcase,
              title: "Professional Growth",
              description:
                "Plan towards purchasing tools and equipment for your trade.",
            },
            {
              icon: FaUsers,
              title: "Worker Empowerment",
              description:
                "Encourage workers to take greater control of their financial future.",
            },
          ].map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <div
                key={index}
                className="rounded-2xl border border-slate-100 bg-white p-6 transition hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-400">
                  <Icon size={22} />
                </div>

                <h3 className="font-bold text-slate-900 dark:text-white">
                  {benefit.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                  {benefit.description}
                </p>
              </div>
            );
          })}

        </div>
      </section>

      {/* ==========================================
          HOW IT WORKS
      ========================================== */}

      <section className="border-y border-slate-100 bg-slate-50 py-20 dark:border-slate-800 dark:bg-slate-900/50">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">

          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
              Simple Process
            </p>

            <h2 className="mt-3 text-3xl font-black text-slate-900 dark:text-white sm:text-4xl">
              How Workers Savings Work
            </h2>

            <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
              Getting started is simple. Follow these three steps.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">

            <div className="relative rounded-2xl border border-slate-100 bg-white p-7 shadow-sm dark:border-slate-800 dark:bg-slate-950">
              <span className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-lg font-black text-white">
                01
              </span>

              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Register & Choose a Plan
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                Submit your details, choose your preferred savings plan,
                and indicate your intended contribution.
              </p>
            </div>

            <div className="relative rounded-2xl border border-slate-100 bg-white p-7 shadow-sm dark:border-slate-800 dark:bg-slate-950">
              <span className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-lg font-black text-white">
                02
              </span>

              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Make Contributions
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                Follow the approved contribution arrangements and keep
                records of your deposits and receipts.
              </p>
            </div>

            <div className="relative rounded-2xl border border-slate-100 bg-white p-7 shadow-sm dark:border-slate-800 dark:bg-slate-950">
              <span className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-lg font-black text-white">
                03
              </span>

              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Work Towards Your Goals
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                Monitor your savings progress and plan how to use your
                accumulated funds according to the agreed terms.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ==========================================
          FINAL CTA
      ========================================== */}

      <section className="relative overflow-hidden bg-blue-700 py-20 text-white">
        <div className="absolute -right-20 -top-32 h-96 w-96 rounded-full border border-white/10" />
        <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full border border-white/10" />

        <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">

          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 text-white backdrop-blur">
            <FaPiggyBank size={32} />
          </div>

          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-200">
            Your Future Starts Today
          </p>

          <h2 className="mt-3 text-3xl font-black sm:text-5xl">
            Start Building Your Savings Today.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-blue-100 sm:text-base">
            Take the first step towards better financial planning.
            Join the All Task Solution SL Workers Savings Scheme and
            make every contribution count.
          </p>

          <button
            onClick={() => handleOpenModal()}
            className="mt-9 inline-flex items-center gap-3 rounded-xl bg-white px-8 py-4 text-sm font-black text-blue-700 shadow-xl transition hover:-translate-y-1 hover:bg-blue-50"
          >
            Join Workers Savings
            <FaArrowRight />
          </button>

        </div>
      </section>

      {/* ==========================================
          ENROLLMENT MODAL
      ========================================== */}

      <SavingsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedPlan={selectedPlan}
      />

    </div>
  );
}
