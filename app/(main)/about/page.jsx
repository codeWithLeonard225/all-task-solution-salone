
"use client";

import React from "react";
import Link from "next/link";
import {
  FaBullseye,
  FaEye,
  FaHandshake,
  FaShieldAlt,
  FaUsers,
  FaCheckCircle,
  FaCar,
  FaBuilding,
  FaTools,
  FaTruck,
  FaArrowRight,
  FaLightbulb,
  FaAward,
  FaHeadset,
  FaGlobeAfrica,
} from "react-icons/fa";

const values = [
  {
    icon: <FaHandshake />,
    title: "Integrity",
    description:
      "We believe in honesty, transparency, and doing business with integrity.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Reliability",
    description:
      "We aim to provide dependable services that customers can trust.",
  },
  {
    icon: <FaAward />,
    title: "Quality Service",
    description:
      "We focus on delivering quality solutions and professional service.",
  },
  {
    icon: <FaLightbulb />,
    title: "Innovation",
    description:
      "We embrace practical ideas and technology to make services easier to access.",
  },
  {
    icon: <FaUsers />,
    title: "Customer Focus",
    description:
      "Our customers' needs guide the way we plan and deliver our services.",
  },
  {
    icon: <FaGlobeAfrica />,
    title: "Community Impact",
    description:
      "We aim to contribute positively to businesses, workers, and communities.",
  },
];

const services = [
  {
    icon: <FaCar />,
    title: "Vehicle Rental",
    description:
      "Vehicle rental solutions for personal, business, and travel needs.",
    link: "/services/vehicle-rental",
  },
  {
    icon: <FaBuilding />,
    title: "Building Materials",
    description:
      "Supply and sourcing of construction materials and hardware products.",
    link: "/services/building-materials",
  },
  {
    icon: <FaUsers />,
    title: "Workers Savings",
    description:
      "Savings-related services designed around workers and their financial goals.",
    link: "/services/workers-savings",
  },
  {
    icon: <FaTools />,
    title: "Procurement & General Services",
    description:
      "Procurement, equipment sourcing, logistics, and general business support.",
    link: "/services/procurement-general-services",
  },
];

const reasons = [
  "Multiple services under one platform.",
  "Convenient access to service information.",
  "Customer-focused service approach.",
  "Solutions for individuals and businesses.",
  "Commitment to professionalism and reliability.",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-slate-800">

      {/* HERO SECTION */}
      <section className="relative isolate flex min-h-[420px] items-center overflow-hidden bg-slate-950 py-20 text-white">

        <div
          className="absolute inset-0 -z-20 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=85')",
          }}
        />

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/50" />

        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl">

            <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-blue-300">
              <FaGlobeAfrica />
              About All Task Solution SL
            </span>

            <h1 className="mt-6 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              Making Everyday
              <span className="block text-blue-400">
                Services Easier.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              We are a service-oriented company focused on connecting
              individuals and businesses with practical services,
              supplies, and solutions to meet their everyday needs.
            </p>

            <Link
              href="/contact"
              className="mt-9 inline-flex items-center gap-3 rounded-xl bg-blue-600 px-7 py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-blue-700"
            >
              Contact Our Team
              <FaArrowRight />
            </Link>

          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:px-10">

          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Who We Are
            </span>

            <h2 className="mt-3 text-3xl font-black leading-tight text-slate-900 sm:text-4xl">
              One Platform.
              <span className="block text-blue-600">
                Multiple Solutions.
              </span>
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              All Task Solution SL is a service-oriented business
              established to make it easier for individuals,
              organizations, and businesses to access different
              services through one platform.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              From vehicle rental and building materials to workers'
              savings, procurement, and general services, we aim to
              provide convenient access to practical solutions.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Our approach is built around customer needs,
              professionalism, convenience, and the commitment to
              continually improve how services are delivered.
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85"
                alt="Professionals working together"
                className="h-[400px] w-full object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -left-3 rounded-2xl bg-blue-600 p-6 text-white shadow-xl sm:-left-6">
              <FaHandshake className="mb-3 text-3xl" />
              <p className="text-lg font-black">Service With Purpose</p>
              <p className="mt-1 text-sm text-blue-100">
                Solutions that matter.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* MISSION AND VISION */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Our Purpose
            </span>
            <h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">
              What Drives Us
            </h2>
          </div>

          <div className="grid gap-7 md:grid-cols-2">

            <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-2xl text-blue-600">
                <FaBullseye />
              </div>

              <h3 className="mt-6 text-2xl font-black text-slate-900">
                Our Mission
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                To provide convenient, reliable, and customer-focused
                services that connect individuals and businesses with
                practical solutions while creating opportunities for
                growth and development.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-100 text-2xl text-indigo-600">
                <FaEye />
              </div>

              <h3 className="mt-6 text-2xl font-black text-slate-900">
                Our Vision
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                To become a trusted and recognized service solutions
                provider in Sierra Leone, known for convenience,
                professionalism, innovation, and positive impact.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* OUR SERVICES */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
                What We Do
              </span>
              <h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">
                Our Services
              </h2>
              <p className="mt-4 max-w-2xl text-slate-600">
                We bring different service categories together to make
                accessing everyday solutions more convenient.
              </p>
            </div>

            <Link
              href="/services"
              className="inline-flex items-center gap-2 font-bold text-blue-600 hover:text-blue-800"
            >
              View All Services
              <FaArrowRight />
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <Link
                href={service.link}
                key={index}
                className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-2xl text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                  {service.icon}
                </div>

                <h3 className="mt-6 text-lg font-black text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {service.description}
                </p>

                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-blue-600">
                  Learn More
                  <FaArrowRight />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:px-10">

          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-blue-400">
              Why All Task Solution SL
            </span>

            <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
              A Convenient Way to Access
              <span className="block text-blue-400">
                Multiple Services.
              </span>
            </h2>

            <p className="mt-6 leading-8 text-slate-300">
              We understand that finding dependable service providers
              and sourcing the right products can take time. Our goal
              is to simplify that process by bringing different
              solutions together.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-3 rounded-xl bg-blue-600 px-6 py-4 text-sm font-bold transition hover:bg-blue-700"
            >
              Get In Touch
              <FaArrowRight />
            </Link>
          </div>

          <div className="space-y-5">
            {reasons.map((reason, index) => (
              <div key={index} className="flex items-start gap-4">
                <FaCheckCircle className="mt-1 shrink-0 text-xl text-blue-400" />
                <p className="leading-7 text-slate-200">{reason}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              What We Believe In
            </span>
            <h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">
              Our Core Values
            </h2>
            <p className="mt-4 text-slate-600">
              The principles that guide our decisions and relationships
              with customers and partners.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => (
              <div
                key={index}
                className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-xl text-blue-600">
                  {value.icon}
                </div>

                <h3 className="mt-5 text-lg font-black text-slate-900">
                  {value.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-5 pb-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-blue-600 px-7 py-14 text-center text-white sm:px-12">

          <FaHeadset className="mx-auto text-4xl text-blue-200" />

          <h2 className="mt-5 text-3xl font-black sm:text-4xl">
            Let's Help You Find the Right Solution
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-blue-100">
            Whether you are an individual, business, or institution,
            we are ready to discuss your service needs.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-3 rounded-xl bg-white px-7 py-4 text-sm font-black text-blue-700 transition hover:-translate-y-1 hover:bg-blue-50"
          >
            Contact Us Today
            <FaArrowRight />
          </Link>

        </div>
      </section>

    </main>
  );
}
