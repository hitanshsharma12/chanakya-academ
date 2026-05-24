"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { contact } from "@/lib/data";

type HeroProps = {
  onBookCoaching: () => void;
  onBookLibrary: () => void;
};

export function Hero({ onBookCoaching, onBookLibrary }: HeroProps) {
  return (
    <section
      id="home"
      className="relative h-[100svh] min-h-[580px] w-full overflow-hidden rounded-b-[2rem] md:rounded-b-[2.5rem]"
    >
      {/* ── FULL BLEED BACKGROUND IMAGE ── */}
      <div className="absolute inset-0 -z-10">
   <Image
src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2070&auto=format&fit=crop"
  alt="Professional woman speaking at podium"
  fill
  priority
  className="object-cover object-top"
/>
        {/* Dark scrim — heavier at bottom-left where text lives */}
        <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/50 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
      </div>

      {/* ── BOTTOM-LEFT CONTENT ── */}
      <div className="absolute bottom-0 left-0 right-0 flex flex-col justify-end px-5 pb-10 pt-0 sm:px-8 sm:pb-12 md:px-10 md:pb-14 lg:px-14 lg:pb-16">

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-4 text-sm font-medium tracking-wide text-white/60 md:text-base"
        >
          {contact.academyName} · Rohru, HP
        </motion.p>

        {/* Big Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[90vw] font-serif text-[2.4rem] font-bold leading-[1.06] tracking-tight text-white sm:text-5xl md:max-w-[65vw] md:text-6xl lg:max-w-[55vw] lg:text-7xl"
        >
          Prepare Smart.{" "}
          <span className="block">Study Premium.</span>
          <span className="block">Rise with Confidence.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.38 }}
          className="mt-5 max-w-lg text-sm font-light leading-relaxed text-white/65 md:text-base"
        >
          HP Government exams, JEE, Board prep and peaceful library study — all
          under one premium roof in the heart of Rohru.
        </motion.p>

        {/* CTA Buttons — white pill with arrow icon, exactly like reference */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.52 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <button
            type="button"
            onClick={onBookCoaching}
            className="group flex items-center gap-2.5 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition-all duration-200 hover:bg-white/90 hover:scale-[1.03] active:scale-[0.97] md:px-7 md:py-4 md:text-base"
          >
            Enroll for Coaching
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-black text-white transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 md:h-6 md:w-6">
              <ArrowUpRight className="h-3 w-3 md:h-3.5 md:w-3.5" />
            </span>
          </button>

          <button
            type="button"
            onClick={onBookLibrary}
            className="group flex items-center gap-2.5 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all duration-200 hover:bg-white/20 hover:border-white/50 active:scale-[0.97] md:px-7 md:py-4 md:text-base"
          >
            Reserve Library Seat
            <span className="flex h-5 w-5 items-center justify-center rounded-full border border-white/40 text-white transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 md:h-6 md:w-6">
              <ArrowUpRight className="h-3 w-3 md:h-3.5 md:w-3.5" />
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}