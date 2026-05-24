"use client";

import { useEffect, useMemo, useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Send, PhoneCall } from "lucide-react";
import { contact, courses } from "@/lib/data";

type BookingType = "coaching" | "library";

type BookingModalProps = {
  open: boolean;
  type: BookingType;
  selectedCourse?: string;
  onClose: () => void;
};

export function BookingModal({ open, type, selectedCourse, onClose }: BookingModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [batch, setBatch] = useState(selectedCourse ?? "HP Govt Exams Prep");
  const [notes, setNotes] = useState("");

  useEffect(() => {
    if (selectedCourse) setBatch(selectedCourse);
  }, [selectedCourse, open]);

  const title = type === "coaching" ? "Coaching Enrollment" : "Library Enrollment";
  const subtitle =
    type === "coaching"
      ? "Send your admission request directly on WhatsApp."
      : "Reserve your library seat and study peacefully.";

  const whatsappMessage = useMemo(() => {
    const details = [
      `Hello, I want to enquire about ${type === "coaching" ? "coaching admission" : "library admission"} at ${contact.academyName}.`,
      `Name: ${name || "Not entered"}`,
      `Phone: ${phone || "Not entered"}`,
      `Program: ${type === "coaching" ? batch : "Library Membership"}`,
      notes ? `Notes: ${notes}` : null,
    ].filter(Boolean);
    return encodeURIComponent(details.join("\n"));
  }, [batch, name, notes, phone, type]);

  function submitForm(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const url = `https://wa.me/${contact.whatsapp}?text=${whatsappMessage}`;
    window.open(url, "_blank", "noopener,noreferrer");
    onClose();
  }

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 p-3 backdrop-blur-md md:items-center md:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={onClose}
        >
          <motion.div
            className="relative w-full max-w-2xl overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#081221] shadow-2xl"
            initial={{ opacity: 0, y: 28, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 180, damping: 22 }}
            onMouseDown={(e) => e.stopPropagation()}
          >
            <div className="absolute inset-0 bg-hero-radial opacity-60" />
            <div className="relative p-5 md:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d2af62]">
                    {title}
                  </p>
                  <h3 className="mt-2 text-3xl font-semibold text-white">{subtitle}</h3>
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-full border border-white/10 bg-white/5 p-2 text-slate-300 transition hover:text-white"
                  aria-label="Close booking form"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <form onSubmit={submitForm} className="mt-6 grid gap-4 md:grid-cols-2">
                <label className="grid gap-2">
                  <span className="text-sm text-slate-300">Student / Parent Name</span>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-[#d2af62]/40"
                    placeholder="Enter full name"
                    required
                  />
                </label>

                <label className="grid gap-2">
                  <span className="text-sm text-slate-300">Mobile Number</span>
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-[#d2af62]/40"
                    placeholder="10 digit mobile number"
                    required
                  />
                </label>

                {type === "coaching" ? (
                  <label className="grid gap-2 md:col-span-2">
                    <span className="text-sm text-slate-300">Choose Course</span>
                    <select
                      value={batch}
                      onChange={(e) => setBatch(e.target.value)}
                      className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-[#d2af62]/40"
                    >
                      {courses.map((course) => (
                        <option key={course.title} value={course.title} className="bg-[#081221]">
                          {course.title}
                        </option>
                      ))}
                    </select>
                  </label>
                ) : (
                  <div className="rounded-2xl border border-dashed border-[#d2af62]/30 bg-[#d2af62]/8 px-4 py-4 text-sm text-slate-200 md:col-span-2">
                    Library membership selected. Quiet reading cabins and Wi-Fi access included.
                  </div>
                )}

                <label className="grid gap-2 md:col-span-2">
                  <span className="text-sm text-slate-300">Message / Preferred Time</span>
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="min-h-[120px] rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-[#d2af62]/40"
                    placeholder="Write your preferred timing, class, or any query."
                  />
                </label>

                <div className="flex flex-col gap-3 md:col-span-2 md:flex-row md:items-center md:justify-between">
                  <p className="inline-flex items-center gap-2 text-sm text-slate-400">
                    <PhoneCall className="h-4 w-4 text-[#d2af62]" />
                    We will open WhatsApp chat on submit.
                  </p>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d2af62] px-6 py-3 text-sm font-semibold text-[#06111f] transition hover:bg-[#ebc979]"
                  >
                    Send on WhatsApp
                    <Send className="h-4 w-4" />
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
