"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BriefcaseBusiness, GraduationCap, Users } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { staff } from "@/lib/data";

export function StaffSection() {
  return (
    <section id="staff" className="px-4 py-20 md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Faculty"
          title="Experienced teachers who make difficult topics feel simple"
          description="Show your actual staff photos later by updating the image links in one file. The layout stays the same."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {staff.map((person, index) => (
            <motion.article
              key={person.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.05 }}
              className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5"
            >
              <div className="relative aspect-[4/5]">
                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  sizes="(max-width: 1280px) 100vw, 25vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06111f] via-transparent to-transparent" />
              </div>
              <div className="p-5">
                <p className="text-xs uppercase tracking-[0.28em] text-[#d2af62]">{person.role}</p>
                <h3 className="mt-2 text-2xl font-semibold text-white">{person.name}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{person.description}</p>
                <div className="mt-5 flex items-center gap-3 text-xs text-slate-400">
                  <span className="inline-flex items-center gap-1">
                    <Users className="h-3.5 w-3.5 text-[#d2af62]" />
                    Student friendly
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <GraduationCap className="h-3.5 w-3.5 text-[#d2af62]" />
                    Result focused
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <BriefcaseBusiness className="h-3.5 w-3.5 text-[#d2af62]" />
                    Premium batch
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
