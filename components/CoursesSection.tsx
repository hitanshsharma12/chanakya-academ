"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { courses } from "@/lib/data";

type CoursesSectionProps = {
  onBook: (title: string) => void;
};

export function CoursesSection({ onBook }: CoursesSectionProps) {
  return (
    <section id="courses" className="px-4 py-20 md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Courses"
          title="A premium coaching structure for every goal"
          description="The section is fully editable from one data file, so you can change batches, images and content anytime without touching the layout."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {courses.map((course, index) => (
            <motion.article
              key={course.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.06 }}
              className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 shadow-2xl shadow-black/20"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  sizes="(max-width: 1280px) 100vw, 25vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06111f] via-[#06111f]/10 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-[#d2af62] px-3 py-1 text-xs font-semibold text-[#06111f]">
                  {course.badge}
                </span>
              </div>

              <div className="p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-[#d2af62]">{course.subtitle}</p>
                <h3 className="mt-2 text-2xl font-semibold text-white">{course.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{course.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {course.features.map((feature) => (
                    <span
                      key={feature}
                      className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs text-slate-200"
                    >
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#d2af62]" />
                      {feature}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => onBook(course.title)}
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-4 py-3 text-sm font-semibold text-[#07111f] transition hover:bg-[#d2af62]"
                >
                  Enroll now
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
