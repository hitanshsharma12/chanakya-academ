"use client";

import {
  useEffect,
  useMemo,
  useState,
  type FormEvent,
} from "react";

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

export function BookingModal({
  open,
  type,
  selectedCourse,
  onClose,
}: BookingModalProps) {
  const defaultCourse =
    selectedCourse || "HP Govt Exams Prep";

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [batch, setBatch] = useState(defaultCourse);
  const [notes, setNotes] = useState("");

  useEffect(() => {
    setBatch(selectedCourse || defaultCourse);
  }, [selectedCourse, open]);

  useEffect(() => {
    if (!open) {
      setName("");
      setPhone("");
      setNotes("");
      return;
    }

    document.body.style.overflow = "hidden";

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener(
        "keydown",
        handleEsc
      );
    };
  }, [open, onClose]);

  const title =
    type === "coaching"
      ? "Coaching Enrollment"
      : "Library Enrollment";

  const subtitle =
    type === "coaching"
      ? "Send your admission request directly on WhatsApp."
      : "Reserve your library seat and study peacefully.";

  const whatsappUrl = useMemo(() => {
    const msg = [
      `Hello, I want information about ${
        type === "coaching"
          ? "coaching admission"
          : "library admission"
      } at ${contact.academyName}`,
      `Name: ${name || "NA"}`,
      `Phone: ${phone || "NA"}`,
      `Program: ${
        type === "coaching"
          ? batch
          : "Library Membership"
      }`,
      notes && `Notes: ${notes}`,
    ]
      .filter(Boolean)
      .join("\n");

    return `https://wa.me/${
      contact.whatsapp
    }?text=${encodeURIComponent(msg)}`;
  }, [type, name, phone, batch, notes]);

  function submitForm(
    e: FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    if (!/^[6-9]\d{9}$/.test(phone)) {
      alert("Enter valid mobile number");
      return;
    }

    window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer"
    );

    onClose();
  }

  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          key="booking-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 p-3 backdrop-blur-md md:items-center md:p-6"
          onMouseDown={onClose}
        >
          <motion.div
            key={`booking-modal-${type}`}
            initial={{
              opacity: 0,
              y: 35,
              scale: 0.97,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 35,
              scale: 0.97,
            }}
            transition={{
              type: "spring",
              stiffness: 220,
              damping: 24,
            }}
            onMouseDown={(e) =>
              e.stopPropagation()
            }
            className="relative w-full max-w-2xl overflow-hidden rounded-[28px] border border-white/10 bg-[#081221] shadow-2xl"
          >
            <div className="relative p-5 md:p-8">
              <div className="flex justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-[#d2af62]">
                    {title}
                  </p>

                  <h2 className="mt-2 text-3xl font-semibold text-white">
                    {subtitle}
                  </h2>
                </div>

                <button
                  onClick={onClose}
                  className="rounded-full p-2 text-slate-300 hover:text-white"
                >
                  <X />
                </button>
              </div>

              <form
                onSubmit={submitForm}
                className="mt-6 grid gap-4 md:grid-cols-2"
              >
                <input
                  required
                  value={name}
                  onChange={(e) =>
                    setName(e.target.value)
                  }
                  placeholder="Full Name"
                  className="rounded-2xl bg-white/5 p-4 text-white"
                />

                <input
                  required
                  value={phone}
                  onChange={(e) =>
                    setPhone(
                      e.target.value.replace(
                        /\D/g,
                        ""
                      )
                    )
                  }
                  maxLength={10}
                  placeholder="Mobile Number"
                  className="rounded-2xl bg-white/5 p-4 text-white"
                />

                {type === "coaching" && (
                  <select
                    value={batch}
                    onChange={(e) =>
                      setBatch(e.target.value)
                    }
                    className="rounded-2xl bg-white/5 p-4 text-white md:col-span-2"
                  >
                    {courses.map(
                      (course, index) => (
                        <option
                          key={`${course.title}-${index}`}
                          value={course.title}
                          className="bg-[#081221]"
                        >
                          {course.title}
                        </option>
                      )
                    )}
                  </select>
                )}

                <textarea
                  value={notes}
                  onChange={(e) =>
                    setNotes(e.target.value)
                  }
                  placeholder="Any message"
                  className="min-h-[120px] rounded-2xl bg-white/5 p-4 text-white md:col-span-2"
                />

                <div className="flex flex-col gap-3 md:col-span-2 md:flex-row md:justify-between">
                  <p className="flex items-center gap-2 text-sm text-slate-400">
                    <PhoneCall size={16} />
                    Opens WhatsApp after submit
                  </p>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-full bg-[#d2af62] px-6 py-3 font-semibold text-black"
                  >
                    Send on WhatsApp
                    <Send size={16} />
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}