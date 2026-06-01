"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { contact } from "@/lib/data";

type HeroProps = {
  onBookCoaching: () => void;
  onBookLibrary: () => void;
};

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export function Hero({
  onBookCoaching,
  onBookLibrary,
}: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden rounded-b-[2rem] md:rounded-b-[2.5rem]"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2070&auto=format&fit=crop"
          alt="Students studying together"
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-tr from-black/85 via-black/55 to-black/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="flex min-h-screen items-end px-5 pb-10 sm:px-8 md:px-10 lg:px-14">
        <div className="max-w-4xl">

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.1}
            className="mb-4 text-sm font-medium tracking-wide text-white/65"
          >
            {contact?.academyName ?? "Academy"} · Rohru, HP
          </motion.p>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.2}
            className="font-serif text-[2.5rem] font-bold leading-[1.05] text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Prepare Smart.
            <span className="block">
              Study Premium.
            </span>
            <span className="block">
              Rise with Confidence.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.35}
            className="mt-5 max-w-xl text-sm leading-relaxed text-white/70 md:text-base"
          >
            HP Government exams, JEE, board preparation and
            peaceful library study — all under one premium roof.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.5}
            className="mt-8 flex flex-wrap gap-4"
          >
            <button
              onClick={onBookCoaching}
              className="group flex items-center gap-3 rounded-full bg-white px-7 py-4 font-semibold text-black transition hover:scale-[1.02]"
            >
              Enroll for Coaching

              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-white">
                <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </button>

            <button
              onClick={onBookLibrary}
              className="group flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-7 py-4 text-white backdrop-blur-md transition hover:bg-white/20"
            >
              Reserve Library Seat

              <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/40">
                <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}