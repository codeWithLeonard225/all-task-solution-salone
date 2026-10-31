
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FaTools,
  FaBars,
  FaTimes,
  FaChevronDown,
} from "react-icons/fa";

const serviceLinks = [
  {
    name: "Building Materials Supply",
    href: "/services/building-materials",
  },
  {
    name: "Skill Workers Hub",
    href: "/services/skilled-workers-hub",
  },
  {
    name: "House Help Service",
    href: "/services/house-help-service",
  },
  {
    name: "Cleaning & Fumigation Service",
    href: "/services/cleaning-fumigation",
  },
  {
    name: "Vehicle Rental Service",
    href: "/services/vehicle-rental",
  },
  {
    name: "Workers Savings",
    href: "/services/workers-savings",
  },
  {
    name: "Procurement & General Services",
    href: "/services/procurement-general-services",
  },
];

export default function MainNavbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
    setServicesOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white shadow-sm">

      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">

        {/* BRAND */}
        <Link
          href="/"
          onClick={closeMenu}
          className="flex shrink-0 items-center gap-2.5"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white">
            <FaTools size={23} />
          </span>

          <span className="flex flex-col">
            <span className="whitespace-nowrap text-lg font-extrabold leading-none tracking-tight sm:text-xl">
              All Task Solution{" "}
              <span className="text-blue-600">SL</span>
            </span>

            <span className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
              Sierra Leone
            </span>
          </span>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden items-center gap-8 text-sm font-semibold text-slate-600 md:flex">

          <Link
            href="/"
            className="transition hover:text-blue-600"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="transition hover:text-blue-600"
          >
            About
          </Link>

          {/* SERVICES DROPDOWN */}
          <div className="group relative">

            <button
              type="button"
              className="flex items-center gap-2 py-7 transition hover:text-blue-600"
            >
              Services
              <FaChevronDown
                size={11}
                className="transition-transform group-hover:rotate-180"
              />
            </button>

            <div className="invisible absolute left-0 top-full z-50 w-72 translate-y-2 rounded-xl border border-slate-100 bg-white p-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">

              <p className="px-3 py-2 text-xs font-bold uppercase tracking-wider text-slate-400">
                Our Services
              </p>

              {serviceLinks.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-blue-50 hover:text-blue-600"
                >
                  {service.name}
                </Link>
              ))}

            </div>
          </div>

          <Link
            href="/latest-updates"
            className="whitespace-nowrap transition hover:text-blue-600"
          >
            Latest Updates
          </Link>

          <Link
            href="/contact"
            className="transition hover:text-blue-600"
          >
            Contact
          </Link>

        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <FaTimes size={23} /> : <FaBars size={23} />}
        </button>

      </div>

      {/* MOBILE NAVIGATION */}
      {open && (
        <div className="max-h-[80vh] overflow-y-auto border-t border-slate-200 bg-white px-5 py-4 shadow-xl md:hidden">

          <div className="flex flex-col gap-1 text-sm font-semibold text-slate-700">

            <Link
              href="/"
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 hover:bg-blue-50"
            >
              Home
            </Link>

            <Link
              href="/about"
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 hover:bg-blue-50"
            >
              About
            </Link>

            {/* MOBILE SERVICES DROPDOWN */}
            <div>

              <button
                type="button"
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-left hover:bg-blue-50"
                aria-expanded={servicesOpen}
              >
                Services

                <FaChevronDown
                  className={`transition-transform ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {servicesOpen && (
                <div className="ml-4 mt-1 border-l-2 border-blue-100 pl-3">

                  {serviceLinks.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      onClick={closeMenu}
                      className="block rounded-lg px-3 py-3 text-sm font-medium text-slate-600 hover:bg-blue-50 hover:text-blue-600"
                    >
                      {service.name}
                    </Link>
                  ))}

                </div>
              )}

            </div>

            <Link
              href="/latest-updates"
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 hover:bg-blue-50"
            >
              Latest Updates
            </Link>

            <Link
              href="/contact"
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 hover:bg-blue-50"
            >
              Contact
            </Link>

          </div>
        </div>
      )}

    </nav>
  );
}
