import { Zap } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="relative mt-16 overflow-hidden border-t border-white/10 bg-[#0a0a0a]">
      {/* Subtle accent glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-24 w-72 -translate-x-1/2 rounded-full bg-[#ccff00]/5 blur-3xl" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-4 py-9 sm:flex-row sm:px-6 md:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 transition-opacity duration-300 hover:opacity-90"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#ccff00]/20 bg-[#ccff00] shadow-[0_0_20px_rgba(204,255,0,0.12)] transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_25px_rgba(204,255,0,0.25)]">
            <Zap className="h-4 w-4 fill-black text-black transition-transform duration-300 group-hover:rotate-6" />
          </div>

          <span className="font-oswald text-lg font-bold tracking-[0.18em] text-white">
            FITLOG
          </span>
        </Link>

        {/* Copyright */}
        <p className="text-center text-xs tracking-wide text-gray-500 sm:text-right">
          © 2026 FitLog — Workout Library.{' '}
          <span className="text-gray-400">Train hard, log honest.</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;