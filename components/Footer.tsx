"use client";

import { contact } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050b14] px-5 py-10">
      
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        
        {/* Left */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold text-white">
            {contact.academyName}
          </h3>

          <p className="mt-2 text-sm text-slate-400">
            Premium Learning • Library Discipline • Result Driven
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4">

          {/* Instagram */}
          <a
            href="#"
            aria-label="Instagram"
            className="rounded-full border border-white/10 bg-white/5 p-3 text-slate-300 transition hover:border-[#d2af62] hover:text-[#d2af62]"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zm-5 3.5A5.5 5.5 0 1 0 17.5 13 5.5 5.5 0 0 0 12 7.5zm0 2A3.5 3.5 0 1 1 8.5 13 3.5 3.5 0 0 1 12 9.5z" />
            </svg>
          </a>

          {/* Facebook */}
          <a
            href="#"
            aria-label="Facebook"
            className="rounded-full border border-white/10 bg-white/5 p-3 text-slate-300 transition hover:border-[#d2af62] hover:text-[#d2af62]"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M22 12A10 10 0 1 0 10.4 21.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.3.2 2.3.2v2.5H15.2c-1.2 0-1.6.7-1.6 1.5V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12z" />
            </svg>
          </a>

          {/* YouTube */}
          <a
            href="#"
            aria-label="YouTube"
            className="rounded-full border border-white/10 bg-white/5 p-3 text-slate-300 transition hover:border-[#d2af62] hover:text-[#d2af62]"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.8 15.5v-7L16 12l-6.2 3.5z" />
            </svg>
          </a>

        </div>
      </div>

      {/* Bottom */}
      <div className="mt-8 border-t border-white/10 pt-5 text-center text-sm text-slate-500">
        © 2026 {contact.academyName}. All rights reserved.
      </div>
    </footer>
  );
}