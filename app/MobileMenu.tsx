"use client";

import Link from "next/link";
import { useRef } from "react";

type MenuItem = {
  label: string;
  href: string;
  external: boolean;
};

export default function MobileMenu({
  menuItems,
}: {
  menuItems: MenuItem[];
}) {
  const mobileMenuRef = useRef<HTMLDetailsElement | null>(null);

  const closeMobileMenu = () => {
    if (mobileMenuRef.current) {
      mobileMenuRef.current.open = false;
    }
  };

  return (
    <details ref={mobileMenuRef} className="relative">
      <summary className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded border border-white/15 text-white">
        <span className="text-[22px] leading-none">☰</span>
      </summary>

      <div className="absolute right-0 mt-3 w-[260px] rounded border border-white/10 bg-[#111111] p-4 shadow-xl">
        <nav className="flex flex-col gap-4">
          {menuItems.map((item) =>
            item.external ? (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobileMenu}
                className="text-[14px] font-semibold uppercase text-white transition hover:opacity-75"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                onClick={closeMobileMenu}
                className="text-[14px] font-semibold uppercase text-white transition hover:opacity-75"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="mt-6 flex justify-center">
          <a
            href="#"
            aria-label="Facebook"
            onClick={closeMobileMenu}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1f63d8] transition hover:scale-105"
          >
            <span className="text-[22px] font-bold leading-none text-black">
              f
            </span>
          </a>
        </div>
      </div>
    </details>
  );
}