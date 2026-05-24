"use client";

import { MapPinned, PhoneCall } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { contact } from "@/lib/data";

export function MapSection() {
  return (
    <section id="location" className="px-4 py-20 md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Location"
          title="Find the academy quickly"
          description="The embedded map, address and contact details are all in one place so parents can reach the academy easily."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="glass rounded-[1.75rem] p-6">
            <div className="flex items-start gap-4">
              <div className="rounded-2xl border border-[#d2af62]/20 bg-[#d2af62]/10 p-3 text-[#d2af62]">
                <MapPinned className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white">{contact.academyName}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">{contact.address}</p>
                <p className="mt-2 text-sm text-slate-400">Plus code: {contact.plusCode}</p>
              </div>
            </div>

            <div className="mt-6 space-y-3 text-sm text-slate-300">
              <p>Phone: <a className="text-white hover:text-[#d2af62]" href={`tel:${contact.phone}`}>{contact.phone}</a></p>
              <p>WhatsApp: <a className="text-white hover:text-[#d2af62]" href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noreferrer">{contact.whatsapp}</a></p>
            </div>

            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.academyName + ", Rohru")}`}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#06111f] transition hover:bg-[#d2af62]"
            >
              Open in Google Maps
            </a>
          </div>

          <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6176.674763673914!2d77.7434523768217!3d31.200668014461765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3905fb35eca70bef%3A0xcddd5e24810925bd!2sChanakyam%20Coaching%20and%20Library!5e1!3m2!1sen!2sin!4v1779601444951!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[420px] w-full md:h-[520px]"
              title="Chanakyam Coaching and Library Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
