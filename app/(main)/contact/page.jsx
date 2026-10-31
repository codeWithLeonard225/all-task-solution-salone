
"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
  FaArrowRight,
  FaCheckCircle,
  FaHeadset,
  FaQuestionCircle,
} from "react-icons/fa";

const WHATSAPP_NUMBER = "232XXXXXXXX";
const CONTACT_EMAIL = "info@alltasksolutionsl.com";
const CONTACT_PHONE = "+232 XX XXX XXX";
const COMPANY_ADDRESS = "Freetown, Sierra Leone";

const services = [
  "Vehicle Rental",
  "Building Materials & Hardware Supply",
  "Workers Savings",
  "Procurement & General Services",
  "Other Enquiries",
];

const faqs = [
  {
    question: "How can I request a service?",
    answer:
      "You can contact us by phone, WhatsApp, or email. You can also submit the enquiry form on this page.",
  },
  {
    question: "Do you serve businesses and individuals?",
    answer:
      "Yes. Our services are designed to support individuals, businesses, and institutions.",
  },
  {
    question: "How do I get a quotation?",
    answer:
      "Contact us with details about the service or products you need. Our team can review your request and discuss the next steps.",
  },
  {
    question: "Can I contact you through WhatsApp?",
    answer:
      "Yes. You can use the WhatsApp button to send us your enquiry directly.",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    subject: "",
    message: "",
  });

  const [openFaq, setOpenFaq] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
Hello All Task Solution SL,

I would like to make an enquiry.

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Service: ${formData.service}
Subject: ${formData.subject}

Message:
${formData.message}
    `.trim();

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  const contactCards = [
    {
      icon: <FaPhoneAlt />,
      title: "Call Us",
      description: "Speak directly with our team.",
      value: CONTACT_PHONE,
      href: `tel:${CONTACT_PHONE.replace(/\s/g, "")}`,
      color: "bg-blue-50 text-blue-600",
    },
    {
      icon: <FaWhatsapp />,
      title: "WhatsApp",
      description: "Send us a message anytime.",
      value: "Chat with us",
      href: `https://wa.me/${WHATSAPP_NUMBER}`,
      color: "bg-green-50 text-green-600",
    },
    {
      icon: <FaEnvelope />,
      title: "Email Us",
      description: "Send your questions or requests.",
      value: CONTACT_EMAIL,
      href: `mailto:${CONTACT_EMAIL}`,
      color: "bg-indigo-50 text-indigo-600",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Our Location",
      description: "Find us in Sierra Leone.",
      value: COMPANY_ADDRESS,
      href: "https://www.google.com/maps/search/?api=1&query=Freetown+Sierra+Leone",
      color: "bg-orange-50 text-orange-600",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-800">

      {/* HERO */}
      <section className="relative isolate flex min-h-[390px] items-center overflow-hidden bg-slate-950 py-20 text-white">

        <div
          className="absolute inset-0 -z-20 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&w=2000&q=85')",
          }}
        />

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/50" />

        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl">

            <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-blue-300">
              <FaHeadset />
              We Are Here to Help
            </span>

            <h1 className="mt-6 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              Get In Touch
              <span className="block text-blue-400">
                With Our Team.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Have a question, need a quotation, or looking for a
              reliable service? Contact All Task Solution SL.
              We would be happy to hear from you.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-xl bg-green-600 px-6 py-4 text-sm font-bold text-white transition hover:bg-green-700"
              >
                <FaWhatsapp className="text-lg" />
                WhatsApp Us
              </a>

              <a
                href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-3 rounded-xl border border-white/30 bg-white/10 px-6 py-4 text-sm font-bold text-white transition hover:bg-white/20"
              >
                <FaPhoneAlt />
                Call Us
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* CONTACT INFORMATION */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Contact Information
            </span>
            <h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">
              Let's Connect
            </h2>
            <p className="mt-4 text-slate-600">
              Choose your preferred way to reach All Task Solution SL.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {contactCards.map((card, index) => (
              <a
                key={index}
                href={card.href}
                target={card.title === "WhatsApp" || card.title === "Our Location" ? "_blank" : undefined}
                rel={card.title === "WhatsApp" || card.title === "Our Location" ? "noopener noreferrer" : undefined}
                className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl text-xl ${card.color}`}>
                  {card.icon}
                </div>

                <h3 className="mt-5 font-black text-slate-900">
                  {card.title}
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  {card.description}
                </p>

                <p className="mt-4 break-words text-sm font-bold text-blue-600">
                  {card.value}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-5 lg:px-10">

          {/* LEFT INFORMATION */}
          <div className="lg:col-span-2">
            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Send Us a Message
            </span>

            <h2 className="mt-3 text-3xl font-black leading-tight text-slate-900 sm:text-4xl">
              How Can We
              <span className="block text-blue-600">
                Help You?
              </span>
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Tell us what you need, and our team can review your
              enquiry and discuss the next steps with you.
            </p>

            <div className="mt-9 space-y-6">

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                  <FaClock />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">
                    Business Enquiries
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Contact us to discuss your requirements and
                    service arrangements.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-600">
                  <FaWhatsapp />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">
                    Direct WhatsApp Support
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Send your service enquiry directly through WhatsApp.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
                  <FaCheckCircle />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">
                    Clear Communication
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Provide your details so we can better understand
                    your request.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* FORM */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-9 lg:col-span-3">

            <h3 className="text-2xl font-black text-slate-900">
              Send an Enquiry
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Complete the form below to prepare your WhatsApp message.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">

              <div className="grid gap-5 sm:grid-cols-2">

                <div>
                  <label className="mb-2 block text-sm font-bold text-slate-700">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-slate-700">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter phone number"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">

                <div>
                  <label className="mb-2 block text-sm font-bold text-slate-700">
                    Service Required *
                  </label>
                  <select
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-slate-700">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Enter subject"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700">
                  Your Message *
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us more about what you need..."
                  className="w-full resize-y rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-blue-600 px-6 py-4 text-sm font-bold text-white transition hover:bg-blue-700 sm:w-auto"
              >
                Send via WhatsApp
                <FaPaperPlane />
              </button>

              <p className="text-xs leading-5 text-slate-500">
                Submitting this form opens WhatsApp with your message
                prepared. You must send the message in WhatsApp to
                complete your enquiry.
              </p>

            </form>
          </div>

        </div>
      </section>

      {/* LOCATION */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <div className="mb-9 text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Find Us
            </span>
            <h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">
              Our Location
            </h2>
            <p className="mt-4 text-slate-600">
              Serving customers in Freetown and beyond.
            </p>
          </div>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Freetown+Sierra+Leone"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex min-h-[280px] items-center justify-center overflow-hidden rounded-3xl bg-slate-200"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1524666041070-9a8762e6f3d2?auto=format&fit=crop&w=1600&q=85')",
              }}
            />

            <div className="absolute inset-0 bg-slate-950/60" />

            <div className="relative text-center text-white">
              <FaMapMarkerAlt className="mx-auto text-4xl text-blue-400" />
              <h3 className="mt-4 text-2xl font-black">
                Freetown, Sierra Leone
              </h3>
              <p className="mt-2 text-sm text-slate-200">
                View location on Google Maps
              </p>
              <span className="mt-5 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold">
                Open Google Maps
                <FaArrowRight />
              </span>
            </div>
          </a>

        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">

          <div className="mb-10 text-center">
            <FaQuestionCircle className="mx-auto text-3xl text-blue-600" />
            <h2 className="mt-4 text-3xl font-black text-slate-900">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-slate-600">
              Some quick answers to common enquiries.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenFaq(openFaq === index ? -1 : index)
                  }
                  className="flex w-full items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="font-bold text-slate-900">
                    {faq.question}
                  </span>

                  <span className="text-xl font-bold text-blue-600">
                    {openFaq === index ? "−" : "+"}
                  </span>
                </button>

                {openFaq === index && (
                  <div className="border-t border-slate-100 px-5 py-4 text-sm leading-7 text-slate-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl rounded-3xl bg-blue-600 px-7 py-12 text-center text-white sm:px-12">

          <h2 className="text-3xl font-black sm:text-4xl">
            We Would Love to Hear From You
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-blue-100">
            Let us know what you need. Contact All Task Solution SL
            and let's discuss how we can assist you.
          </p>

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-3 rounded-xl bg-white px-7 py-4 text-sm font-black text-blue-700 transition hover:bg-blue-50"
          >
            <FaWhatsapp className="text-lg" />
            Chat With Us
          </a>

        </div>
      </section>

    </main>
  );
}
