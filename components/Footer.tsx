"use client";

import { contact } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-4 py-10 md:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
        <p>© 2026 {contact.academyName}. All rights reserved.</p>
        <p className="text-slate-300">Premium learning • Library discipline • Result driven</p>
      </div>
    </footer>
  );
}
