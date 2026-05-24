"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, ImageIcon, School } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { achievements } from "@/lib/data";

export function AchievementsSection() {
  return (
    <section id="achievements" className="px-4 py-20 md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Achievements"
          title="Gallery-style proof of learning, discipline and results"
          description="Use this section for your school toppers, celebration photos, certificates, classroom activities and milestone moments."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            className="glass rounded-[1.75rem] p-6"
          >
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <Award className="h-6 w-6 text-[#d2af62]" />
                <p className="mt-3 text-3xl font-semibold">93+</p>
                <p className="mt-1 text-sm text-slate-300">Google reviews</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <School className="h-6 w-6 text-[#d2af62]" />
                <p className="mt-3 text-3xl font-semibold">4</p>
                <p className="mt-1 text-sm text-slate-300">Core academic tracks</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <ImageIcon className="h-6 w-6 text-[#d2af62]" />
                <p className="mt-3 text-3xl font-semibold">24/7</p>
                <p className="mt-1 text-sm text-slate-300">Peaceful library access</p>
              </div>
            </div>

            <div className="mt-6 rounded-3xl border border-white/10 bg-gradient-to-br from-white/8 to-transparent p-5">
              <h3 className="text-2xl font-semibold text-white">Photos can be replaced anytime</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                All gallery images are driven by one array, so you can swap them with your academy
                photos, certificates and event images without changing the design.
              </p>
            </div>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {achievements.map((item, index) => (
              <motion.figure
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#06111f] via-[#06111f]/20 to-transparent" />
                </div>
                <figcaption className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-sm font-semibold text-white">{item.title}</p>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
