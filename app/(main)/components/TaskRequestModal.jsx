
"use client";

import { useEffect, useState } from "react";
import {
  FiX,
  FiSend,
  FiCheckCircle,
  FiMapPin,
  FiLoader,
} from "react-icons/fi";

const initialFormData = {
  name: "",
  phone: "",
  email: "",
  taskTitle: "",
  category: "tech",
  location: "",
  budget: "",
  details: "",
};

export default function TaskRequestModal({
  isOpen,
  onClose,
  selectedService,
}) {
  const [formData, setFormData] = useState(initialFormData);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (isOpen) {
      setFormData({
        ...initialFormData,
        taskTitle: selectedService?.title || "",
        category: selectedService?.category || "tech",
      });
      setSubmitted(false);
      setError("");
      setIsSubmitting(false);
    }
  }, [isOpen, selectedService]);

  if (!isOpen) return null;

  function updateField(field, value) {
    setFormData((current) => ({
      ...current,
      [field]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");

    if (!formData.name.trim() || !formData.phone.trim()) {
      setError("Please enter your name and phone number.");
      return;
    }

    if (!formData.taskTitle.trim()) {
      setError("Please describe the task you need.");
      return;
    }

    setIsSubmitting(true);

    try {
      // This is the point where we will connect Firebase.
      // The form currently validates the request but does not save it.
      setSubmitted(true);
    } catch {
      setError("Unable to submit your request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleClose() {
    setFormData(initialFormData);
    setSubmitted(false);
    setError("");
    onClose();
  }

  const inputClass =
    "w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10";

  const labelClass =
    "mb-2 block text-sm font-semibold text-slate-700";

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-slate-950/70 p-4 backdrop-blur-sm"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          handleClose();
        }
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="task-request-title"
        className="relative my-auto max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl sm:p-8"
      >
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close request form"
          className="absolute right-5 top-5 rounded-xl p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-800"
        >
          <FiX size={22} />
        </button>

        {submitted ? (
          <div className="py-10 text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
              <FiCheckCircle size={42} />
            </div>

            <h2 className="mt-6 text-2xl font-extrabold text-slate-900">
              Request Received!
            </h2>

            <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-slate-500">
              Thank you for contacting All Task Solution Sierra Leone.
              Your form has been validated. Once the request is connected
              to our database, our team will be able to review and assign
              an approved worker.
            </p>

            <button
              type="button"
              onClick={handleClose}
              className="mt-7 rounded-xl bg-blue-600 px-8 py-3 font-bold text-white transition hover:bg-blue-700"
            >
              Done
            </button>
          </div>
        ) : (
          <>
            <div className="mb-7 pr-8">
              <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-700">
                <FiMapPin />
                Sierra Leone
              </span>

              <h2
                id="task-request-title"
                className="mt-4 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl"
              >
                Request a Task
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Tell us what you need. Our team will review your
                requirements and coordinate the appropriate service.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className={labelClass}>Your Full Name *</label>
                <input
                  type="text"
                  required
                  autoComplete="name"
                  value={formData.name}
                  onChange={(event) =>
                    updateField("name", event.target.value)
                  }
                  placeholder="Enter your full name"
                  className={inputClass}
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className={labelClass}>Phone Number *</label>
                  <input
                    type="tel"
                    required
                    autoComplete="tel"
                    value={formData.phone}
                    onChange={(event) =>
                      updateField("phone", event.target.value)
                    }
                    placeholder="+232 77 000000"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className={labelClass}>Email Address</label>
                  <input
                    type="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={(event) =>
                      updateField("email", event.target.value)
                    }
                    placeholder="name@example.com"
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className={labelClass}>Service Needed *</label>
                <input
                  type="text"
                  required
                  value={formData.taskTitle}
                  onChange={(event) =>
                    updateField("taskTitle", event.target.value)
                  }
                  placeholder="e.g. Website development, solar installation"
                  className={inputClass}
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className={labelClass}>Location *</label>
                  <input
                    type="text"
                    required
                    value={formData.location}
                    onChange={(event) =>
                      updateField("location", event.target.value)
                    }
                    placeholder="e.g. Freetown, Bo, Kenema"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className={labelClass}>
                    Estimated Budget (NLe)
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={formData.budget}
                    onChange={(event) =>
                      updateField("budget", event.target.value)
                    }
                    placeholder="Your budget"
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className={labelClass}>
                  Task Details and Requirements *
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.details}
                  onChange={(event) =>
                    updateField("details", event.target.value)
                  }
                  placeholder="Describe the work, preferred date, materials, or other requirements..."
                  className={`${inputClass} resize-y`}
                />
              </div>

              {error && (
                <p
                  role="alert"
                  className="rounded-xl bg-red-50 p-3 text-sm text-red-700"
                >
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-4 font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? (
                  <>
                    <FiLoader className="animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <FiSend />
                    Submit Task Request
                  </>
                )}
              </button>

              <p className="text-center text-xs leading-5 text-slate-400">
                Your request will need to be saved to the system before
                an agent can review and assign a worker.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
