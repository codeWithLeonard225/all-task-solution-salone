// app/components/MainFooter.js
import Link from "next/link";
import { FaTools, FaArrowRight } from "react-icons/fa";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Building Materials", href: "#building-materials" },
  { name: "Browse Services", href: "#categories" },
  { name: "Featured Tasks", href: "#featured-tasks" },
  { name: "Portfolio Gallery", href: "#gallery" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "About Us", href: "#about" },
];

export default function Footer({ handleOpenModal }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-slate-100 bg-slate-950 text-white">

      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-2 lg:grid-cols-4">

        {/* BRANDING */}
        <div className="lg:col-span-2">

          <Link href="/" className="inline-flex items-center gap-3">

            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white">
              <FaTools size={23} />
            </span>

            <span>
              <span className="block text-xl font-extrabold">
                All Task Solution <span className="text-blue-400">SL</span>
              </span>

              <span className="mt-1 block text-xs font-semibold uppercase tracking-wider text-slate-400">
                Sierra Leone
              </span>
            </span>

          </Link>

          <p className="mt-5 max-w-md text-sm leading-7 text-slate-400">
            Connecting clients in Sierra Leone with skilled professionals
            and wholesale building materials for home, business, and
            everyday projects.
          </p>

          <button
            onClick={handleOpenModal}
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-700"
          >
            Request a Task <FaArrowRight />
          </button>

        </div>

        {/* QUICK LINKS */}
        <div>

          <h3 className="text-lg font-bold text-white">
            Quick Links
          </h3>

          <div className="mt-5 flex flex-col gap-3 text-sm text-slate-400">

            {quickLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="transition duration-200 hover:translate-x-1 hover:text-blue-400"
              >
                {link.name}
              </Link>
            ))}

          </div>

        </div>

        {/* ACTION */}
        <div>

          <h3 className="text-lg font-bold text-white">
            Get Started
          </h3>

          <p className="mt-5 text-sm leading-7 text-slate-400">
            Need a skilled worker or building materials? Send us your
            request and let our team help you.
          </p>

          <button
            onClick={handleOpenModal}
            className="mt-4 text-sm font-semibold text-blue-400 transition hover:text-white"
          >
            Submit Task Request →
          </button>

        </div>

      </div>

      {/* BOTTOM SECTION */}
      <div className="border-t border-white/10">

        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-xs text-slate-500 sm:px-8 md:flex-row md:items-center md:justify-between">

          <p>
            © {currentYear} All Task Solution Sierra Leone.
            All rights reserved.
          </p>

          <p>
            Built to connect people with skilled workers and materials across Sierra Leone.
          </p>

        </div>

      </div>

    </footer>
  );
}
