"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  CalendarDays,
  Clock3,
  LockOpen,
  MessageCircle,
  NotebookPen,
  Sparkles,
  Users,
} from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

type CoursesSectionProps = {
  onBook?: (title: string) => void;
  whatsappNumber?: string;
};

type AttendanceForm = {
  name: string;
  phone: string;
  batch: string;
  date: string;
  status: "Present" | "Late" | "Absent";
  notes: string;
};

type LibraryForm = {
  name: string;
  phone: string;
  seatType: string;
  date: string;
  timeSlot: string;
  duration: string;
  notes: string;
};

const DEFAULT_WHATSAPP = "7018796714";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 28, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

function openWhatsApp(phone: string, message: string) {
  const cleanPhone = phone.replace(/\D/g, "");
  const url = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

// Change this line at the bottom:
export function StudentAccessSection({   // ← rename from CoursesSection
  whatsappNumber = DEFAULT_WHATSAPP,
}: CoursesSectionProps) {
  const today = useMemo(() => {
    return new Date().toISOString().split("T")[0];
  }, []);

  const [attendance, setAttendance] = useState<AttendanceForm>({
    name: "",
    phone: "",
    batch: "",
    date: today,
    status: "Present",
    notes: "",
  });

  const [library, setLibrary] = useState<LibraryForm>({
    name: "",
    phone: "",
    seatType: "Single Study Seat",
    date: today,
    timeSlot: "4:00 PM - 6:00 PM",
    duration: "2 Hours",
    notes: "",
  });

  const handleAttendanceSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const message = [
      "📌 Attendance Request",
      "",
      `Name: ${attendance.name}`,
      `Phone: ${attendance.phone}`,
      `Batch/Class: ${attendance.batch}`,
      `Date: ${attendance.date}`,
      `Status: ${attendance.status}`,
      `Notes: ${attendance.notes || "N/A"}`,
      "",
      "Please mark my attendance.",
    ].join("\n");

    openWhatsApp(whatsappNumber, message);
  };

  const handleLibrarySubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const message = [
      "📚 Library Seat Booking",
      "",
      `Name: ${library.name}`,
      `Phone: ${library.phone}`,
      `Seat Type: ${library.seatType}`,
      `Date: ${library.date}`,
      `Time Slot: ${library.timeSlot}`,
      `Duration: ${library.duration}`,
      `Notes: ${library.notes || "N/A"}`,
      "",
      "Please confirm my library booking.",
    ].join("\n");

    openWhatsApp(whatsappNumber, message);
  };

  return (
    <section
      id="courses"
      className="relative overflow-hidden bg-[#030712] px-4 py-24 md:px-6 lg:px-8"
    >
      <div className="pointer-events-none absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-[#d2af62]/10 blur-[160px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[360px] w-[360px] rounded-full bg-sky-500/10 blur-[160px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.04),transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={item} className="mb-8 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-xs font-semibold text-emerald-300 backdrop-blur">
              <LockOpen className="h-3.5 w-3.5" />
              Unlocked
            </span>

            <span className="inline-flex items-center gap-2 rounded-full border border-[#d2af62]/20 bg-[#d2af62]/10 px-4 py-2 text-xs font-semibold text-[#f5d58b] backdrop-blur">
              <MessageCircle className="h-3.5 w-3.5" />
              WhatsApp Live Status
            </span>

            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-slate-200 backdrop-blur">
              <BadgeCheck className="h-3.5 w-3.5 text-[#d2af62]" />
              Simple and Fast
            </span>
          </motion.div>

          <SectionHeading
            eyebrow="Student Access"
            title="Attendance and library booking made elegant"
            description="Students can fill their details, mark attendance, and book a library seat directly through WhatsApp. No PINs, no clutter, just a clean live section."
          />

          <div className="mt-12 grid gap-8 xl:grid-cols-[1.05fr_0.95fr]">
            <motion.article
              variants={item}
              className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/25 backdrop-blur-xl md:p-8"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(210,175,98,0.12),transparent_35%)] opacity-0 transition duration-500 group-hover:opacity-100" />

              <div className="relative flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-[#d2af62]">
                    Attendance
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold text-white md:text-3xl">
                    Mark attendance in one tap
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
                    Students fill the form below, then the attendance message is sent directly to WhatsApp.
                  </p>
                </div>

                <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-right">
                  <div className="flex items-center justify-end gap-2 text-sm font-semibold text-emerald-300">
                    <Users className="h-4 w-4" />
                    Attendance Open
                  </div>
                  <p className="mt-1 text-xs text-slate-300">Status: Live now</p>
                </div>
              </div>

              <form onSubmit={handleAttendanceSubmit} className="relative mt-8 grid gap-4 md:grid-cols-2">
                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-slate-200">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={attendance.name}
                    onChange={(e) =>
                      setAttendance((prev) => ({ ...prev, name: e.target.value }))
                    }
                    placeholder="Enter student name"
                    className="w-full rounded-2xl border border-white/10 bg-black/25 px-4 py-3.5 text-white outline-none transition placeholder:text-slate-500 focus:border-[#d2af62]/50 focus:ring-2 focus:ring-[#d2af62]/20"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-200">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={attendance.phone}
                    onChange={(e) =>
                      setAttendance((prev) => ({ ...prev, phone: e.target.value }))
                    }
                    placeholder="Enter phone number"
                    className="w-full rounded-2xl border border-white/10 bg-black/25 px-4 py-3.5 text-white outline-none transition placeholder:text-slate-500 focus:border-[#d2af62]/50 focus:ring-2 focus:ring-[#d2af62]/20"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-200">
                    Batch / Class
                  </label>
                  <input
                    type="text"
                    required
                    value={attendance.batch}
                    onChange={(e) =>
                      setAttendance((prev) => ({ ...prev, batch: e.target.value }))
                    }
                    placeholder="Example: 10th, JEE, Library"
                    className="w-full rounded-2xl border border-white/10 bg-black/25 px-4 py-3.5 text-white outline-none transition placeholder:text-slate-500 focus:border-[#d2af62]/50 focus:ring-2 focus:ring-[#d2af62]/20"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-200">
                    Date
                  </label>
                  <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/25 px-4 py-3.5 text-white">
                    <CalendarDays className="h-4 w-4 text-[#d2af62]" />
                    <input
                      type="date"
                      required
                      value={attendance.date}
                      onChange={(e) =>
                        setAttendance((prev) => ({ ...prev, date: e.target.value }))
                      }
                      className="w-full bg-transparent outline-none [color-scheme:dark]"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-200">
                    Status
                  </label>
                  <select
                    value={attendance.status}
                    onChange={(e) =>
                      setAttendance((prev) => ({
                        ...prev,
                        status: e.target.value as AttendanceForm["status"],
                      }))
                    }
                    className="w-full rounded-2xl border border-white/10 bg-black/25 px-4 py-3.5 text-white outline-none transition focus:border-[#d2af62]/50 focus:ring-2 focus:ring-[#d2af62]/20"
                  >
                    <option>Present</option>
                    <option>Late</option>
                    <option>Absent</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-slate-200">
                    Other Details
                  </label>
                  <textarea
                    rows={4}
                    value={attendance.notes}
                    onChange={(e) =>
                      setAttendance((prev) => ({ ...prev, notes: e.target.value }))
                    }
                    placeholder="Any extra note for attendance"
                    className="w-full rounded-2xl border border-white/10 bg-black/25 px-4 py-3.5 text-white outline-none transition placeholder:text-slate-500 focus:border-[#d2af62]/50 focus:ring-2 focus:ring-[#d2af62]/20"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="md:col-span-2 mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#d2af62] to-[#b99142] px-5 py-4 text-sm font-semibold text-[#07111f] shadow-lg shadow-[#d2af62]/20 transition hover:shadow-[#d2af62]/30"
                >
                  Send Attendance on WhatsApp
                  <ArrowRight className="h-4 w-4" />
                </motion.button>
              </form>
            </motion.article>

            <motion.aside
              variants={item}
              className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/25 backdrop-blur-xl md:p-8"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(210,175,98,0.12),transparent_35%)] opacity-0 transition duration-500 group-hover:opacity-100" />

              <div className="relative flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-[#d2af62]">
                    Library Booking
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold text-white md:text-3xl">
                    Book a seat for the library
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
                    Students can reserve a seat, choose time, and send the booking to WhatsApp with a single submit.
                  </p>
                </div>

                <div className="rounded-2xl border border-[#d2af62]/20 bg-[#d2af62]/10 px-4 py-3 text-right">
                  <div className="flex items-center justify-end gap-2 text-sm font-semibold text-[#f5d58b]">
                    <BookOpen className="h-4 w-4" />
                    Library Open
                  </div>
                  <p className="mt-1 text-xs text-slate-300">Seats can be booked live</p>
                </div>
              </div>

              <form onSubmit={handleLibrarySubmit} className="relative mt-8 grid gap-4 md:grid-cols-2">
                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-slate-200">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={library.name}
                    onChange={(e) =>
                      setLibrary((prev) => ({ ...prev, name: e.target.value }))
                    }
                    placeholder="Enter student name"
                    className="w-full rounded-2xl border border-white/10 bg-black/25 px-4 py-3.5 text-white outline-none transition placeholder:text-slate-500 focus:border-[#d2af62]/50 focus:ring-2 focus:ring-[#d2af62]/20"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-200">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={library.phone}
                    onChange={(e) =>
                      setLibrary((prev) => ({ ...prev, phone: e.target.value }))
                    }
                    placeholder="Enter phone number"
                    className="w-full rounded-2xl border border-white/10 bg-black/25 px-4 py-3.5 text-white outline-none transition placeholder:text-slate-500 focus:border-[#d2af62]/50 focus:ring-2 focus:ring-[#d2af62]/20"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-200">
                    Seat Type
                  </label>
                  <select
                    value={library.seatType}
                    onChange={(e) =>
                      setLibrary((prev) => ({ ...prev, seatType: e.target.value }))
                    }
                    className="w-full rounded-2xl border border-white/10 bg-black/25 px-4 py-3.5 text-white outline-none transition focus:border-[#d2af62]/50 focus:ring-2 focus:ring-[#d2af62]/20"
                  >
                    <option>Single Study Seat</option>
                    <option>Silent Zone Seat</option>
                    <option>Group Table</option>
                    <option>Reading Corner</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-200">
                    Date
                  </label>
                  <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/25 px-4 py-3.5 text-white">
                    <CalendarDays className="h-4 w-4 text-[#d2af62]" />
                    <input
                      type="date"
                      required
                      value={library.date}
                      onChange={(e) =>
                        setLibrary((prev) => ({ ...prev, date: e.target.value }))
                      }
                      className="w-full bg-transparent outline-none [color-scheme:dark]"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-200">
                    Time Slot
                  </label>
                  <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/25 px-4 py-3.5 text-white">
                    <Clock3 className="h-4 w-4 text-[#d2af62]" />
                    <select
                      value={library.timeSlot}
                      onChange={(e) =>
                        setLibrary((prev) => ({ ...prev, timeSlot: e.target.value }))
                      }
                      className="w-full bg-transparent outline-none"
                    >
                      <option>8:00 AM - 10:00 AM</option>
                      <option>10:00 AM - 12:00 PM</option>
                      <option>12:00 PM - 2:00 PM</option>
                      <option>2:00 PM - 4:00 PM</option>
                      <option>4:00 PM - 6:00 PM</option>
                      <option>6:00 PM - 8:00 PM</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-200">
                    Duration
                  </label>
                  <select
                    value={library.duration}
                    onChange={(e) =>
                      setLibrary((prev) => ({ ...prev, duration: e.target.value }))
                    }
                    className="w-full rounded-2xl border border-white/10 bg-black/25 px-4 py-3.5 text-white outline-none transition focus:border-[#d2af62]/50 focus:ring-2 focus:ring-[#d2af62]/20"
                  >
                    <option>1 Hour</option>
                    <option>2 Hours</option>
                    <option>3 Hours</option>
                    <option>Half Day</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-slate-200">
                    Other Details
                  </label>
                  <textarea
                    rows={4}
                    value={library.notes}
                    onChange={(e) =>
                      setLibrary((prev) => ({ ...prev, notes: e.target.value }))
                    }
                    placeholder="Any extra note for your library booking"
                    className="w-full rounded-2xl border border-white/10 bg-black/25 px-4 py-3.5 text-white outline-none transition placeholder:text-slate-500 focus:border-[#d2af62]/50 focus:ring-2 focus:ring-[#d2af62]/20"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="md:col-span-2 mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-white to-[#d2af62] px-5 py-4 text-sm font-semibold text-[#07111f] shadow-lg shadow-black/20 transition hover:shadow-[#d2af62]/20"
                >
                  Book Seat on WhatsApp
                  <ArrowRight className="h-4 w-4" />
                </motion.button>
              </form>

              <div className="relative mt-6 rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="flex items-center gap-2 text-sm font-medium text-slate-200">
                  <Sparkles className="h-4 w-4 text-[#d2af62]" />
                  Live status panel
                </div>

                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-emerald-300">
                      Attendance
                    </p>
                    <p className="mt-1 text-sm text-white">Open for marking</p>
                  </div>

                  <div className="rounded-2xl border border-[#d2af62]/20 bg-[#d2af62]/10 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-[#f5d58b]">
                      Library
                    </p>
                    <p className="mt-1 text-sm text-white">Seats available live</p>
                  </div>
                </div>

                <p className="mt-4 text-xs leading-6 text-slate-400">
                  Submitted details are sent directly to WhatsApp on{" "}
                  <span className="text-slate-200">{whatsappNumber}</span>.
                </p>
              </div>
            </motion.aside>
          </div>
        </motion.div>
      </div>
    </section>
  );
}