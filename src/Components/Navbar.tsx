'use client';

import { usePlan } from '@/context/PlanContext'
import { Zap } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();
  const { plan, saved } = usePlan();

  const links = [
    { name: 'WORK OUT', href: '/' },
    { name: 'MY PLAN', href: '/my-plan' },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0a0a0a]/95 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 md:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2.5"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#ccff00] shadow-[0_0_18px_rgba(204,255,0,0.12)] transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_24px_rgba(204,255,0,0.25)]">
            <Zap className="h-5 w-5 fill-black text-black transition-transform duration-300 group-hover:rotate-6" />
          </div>

          <span className="relative font-oswald text-xl font-bold tracking-[0.15em] text-white">
            FITLOG
            <span className="absolute left-0 -bottom-1 h-[2px] w-full rounded-full bg-[#ccff00]" />
          </span>
        </Link>

        {/* Navigation */}
        <ul className="hidden items-center gap-2 md:flex">
          {links.map((link) => {
            const isActive = pathname === link.href;

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative block rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? 'bg-[#ccff00]/10 text-[#ccff00]'
                      : 'text-gray-400 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {link.name}

                  {isActive && (
                    <span className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-[#ccff00]" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Counters */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/my-plan"
            className="group flex items-center gap-1.5 rounded-full border border-[#ccff00]/10 bg-white/[0.03] px-2 py-1.5 transition-all duration-300 hover:border-[#ccff00]/30 hover:bg-[#ccff00]/5 sm:px-3"
          >
            <span className="hidden text-xs font-medium text-gray-400 transition-colors group-hover:text-white sm:inline">
              Plan
            </span>

            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#ccff00] text-xs font-bold text-black shadow-[0_0_12px_rgba(204,255,0,0.12)]">
              {plan.length}
            </span>
          </Link>

          <Link
            href="/my-plan"
            className="group flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-2 py-1.5 transition-all duration-300 hover:border-white/20 hover:bg-white/5 sm:px-3"
          >
            <span className="hidden text-xs font-medium text-gray-400 transition-colors group-hover:text-white sm:inline">
              Saved
            </span>

            <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/20 bg-white/[0.03] text-xs font-bold text-white">
              {saved.length}
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;