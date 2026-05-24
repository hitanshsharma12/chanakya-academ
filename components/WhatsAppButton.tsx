"use client";

import { MessageCircle } from "lucide-react";
import { contact } from "@/lib/data";

export function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
        `Hello, I want to know more about ${contact.academyName}.`
      )}`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-40 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#25d366] shadow-[0_20px_40px_rgba(37,211,102,0.35)] transition hover:scale-105"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-8 w-8 text-white" />
    </a>
  );
}
