"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { CoursesSection } from "@/components/CoursesSection";
import { StudentAccessSection } from "@/components/StudentAccessSection";
import { AchievementsSection } from "@/components/AchievementsSection";
import { StaffSection } from "@/components/StaffSection";
import { MapSection } from "@/components/MapSection";
import { Footer } from "@/components/Footer";
import { BookingModal } from "@/components/BookingModal";
import { WhatsAppButton } from "@/components/WhatsAppButton";

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

      <Hero
        onBookCoaching={openCoaching}
        onBookLibrary={openLibrary}
      />

      <CoursesSection
        onBook={(title) => openCoaching(title)}
      />

      <StudentAccessSection whatsappNumber="7018796714" />

      <AchievementsSection />

      <StaffSection />

      <MapSection />

      <Footer />

      <WhatsAppButton />

      <BookingModal
        open={modal.open}
        type={modal.type}
        selectedCourse={modal.course}
        onClose={() =>
          setModal((prev) => ({ ...prev, open: false }))
        }
      />
    </main>
  );
}