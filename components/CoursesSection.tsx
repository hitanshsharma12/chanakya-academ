"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { courses } from "@/lib/data";

type CoursesSectionProps = {
  onBook: (title: string) => void;
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.95,
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      delay: i * 0.08,
      ease: "easeOut",
    },
  }),
};

export function CoursesSection({
  onBook,
}: CoursesSectionProps) {
  return (
    <section
      id="courses"
      className="relative overflow-hidden bg-[#030712] px-4 py-24 md:px-6 lg:px-8"
    >
      {/* Background Blur Effects */}

      <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-[#d2af62]/10 blur-[150px]" />

      <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-blue-500/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Courses"
          title="Premium Coaching Programs"
          description="Structured learning experiences designed to help students achieve top results."
        />

        <div className="mt-16 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {courses.map((course, index) => (
            <motion.article
              key={course.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.25,
              }}
              whileHover={{
                y: -12,
              }}
              className="
              group
              relative
              overflow-hidden
              rounded-[32px]
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              transition-all
              duration-500
              hover:border-[#d2af62]/40
              hover:shadow-[0_20px_60px_rgba(210,175,98,0.15)]
            "
            >
              {/* Image */}

              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  sizes="(max-width:1280px)100vw,25vw"
                  className="
                  object-cover
                  transition
                  duration-700
                  group-hover:scale-110
                "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/30 to-transparent" />

                <span
                  className="
                  absolute
                  left-5
                  top-5
                  rounded-full
                  border
                  border-[#d2af62]/30
                  bg-[#d2af62]/15
                  px-4
                  py-1.5
                  text-xs
                  font-semibold
                  text-[#f5d58b]
                  backdrop-blur
                "
                >
                  {course.badge}
                </span>
              </div>

              {/* Content */}

              <div className="p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-[#d2af62]">
                  {course.subtitle}
                </p>

                <h3 className="mt-3 text-2xl font-bold text-white">
                  {course.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {course.description}
                </p>

                {/* Features */}

                <div className="mt-5 flex flex-wrap gap-2">
                  {course.features.map((feature) => (
                    <div
                      key={feature}
                      className="
                      flex
                      items-center
                      gap-2
                      rounded-full
                      border
                      border-white/10
                      bg-black/30
                      px-3
                      py-2
                      text-xs
                      text-slate-200
                    "
                    >
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#d2af62]" />

                      {feature}
                    </div>
                  ))}
                </div>

                {/* Button */}

                <motion.button
                  whileTap={{
                    scale: 0.95,
                  }}
                  whileHover={{
                    scale: 1.02,
                  }}
                  onClick={() =>
                    onBook(course.title)
                  }
                  className="
                  mt-7
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-2xl
                  bg-gradient-to-r
                  from-[#d2af62]
                  to-[#b99242]
                  px-5
                  py-3.5
                  font-semibold
                  text-[#08101d]
                  transition
                  duration-300
                  hover:shadow-lg
                "
                >
                  Enroll Now

                  <ArrowRight className="h-4 w-4" />
                </motion.button>
              </div>

              {/* Glow Border */}

              <div
                className="
                pointer-events-none
                absolute
                inset-0
                rounded-[32px]
                opacity-0
                transition
                duration-500
                group-hover:opacity-100
                bg-[radial-gradient(circle_at_top,rgba(210,175,98,0.15),transparent_60%)]
              "
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}