"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { CoursesSection } from "@/components/CoursesSection";
import { AchievementsSection } from "@/components/AchievementsSection";
import { StaffSection } from "@/components/StaffSection";
import { MapSection } from "@/components/MapSection";
import { Footer } from "@/components/Footer";
import { BookingModal } from "@/components/BookingModal";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SectionHeading } from "@/components/SectionHeading";
import { contact } from "@/lib/data";

type ModalState = {
  open: boolean;
  type: "coaching" | "library";
  course?: string;
};

export default function HomePage() {
  const [modal, setModal] = useState<ModalState>({
    open: false,
    type: "coaching",
  });

  const openCoaching = (course?: string) =>
    setModal({ open: true, type: "coaching", course });
  const openLibrary = () =>
    setModal({ open: true, type: "library" });

  return (
    <main className="relative overflow-x-hidden">
      <Header onBook={openCoaching} />
      <Hero onBookCoaching={openCoaching} onBookLibrary={openLibrary} />

      <section className="px-4 pb-6 pt-2 md:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/5 p-6 text-center backdrop-blur">
          <p className="text-sm uppercase tracking-[0.3em] text-[#d2af62]">Why parents trust us</p>
          <SectionHeading
            align="center"
            title="Serious learning environment, premium feel, visible results"
            description={`Students at ${contact.academyName} get disciplined classes, quiet library access, daily support and a modern website that looks premium on every screen.`}
          />
        </div>
      </section>

      <CoursesSection onBook={(title) => openCoaching(title)} />
      <AchievementsSection />
      <StaffSection />
      <MapSection />
      <Footer />
      <WhatsAppButton />

      <BookingModal
        open={modal.open}
        type={modal.type}
        selectedCourse={modal.course}
        onClose={() => setModal((prev) => ({ ...prev, open: false }))}
      />
    </main>
  );
}
