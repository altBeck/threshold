"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import AboutDropdown from "@/component/AboutDropdown";
import AcademicsDropdown from "./AcademicsDropdown";

const NavBar = () => {
  const [academicsOpen, setAcademicsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const academicsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      const target = e.target as Node;
      if (academicsRef.current && !academicsRef.current.contains(target)) {
        setAcademicsOpen(false);
      }
    }
    function handleEsc(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setAcademicsOpen(false);
        setMobileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <div>
      {/* Top color bars as before */}
      <div className="flex">
        <div className="w-1/3 py-1 bg-[#2F1A6C]" />
        <div className="w-1/3 py-1 bg-[#DC127A]" />
        <div className="w-1/3 py-1 bg-[#21B8F0]" />
      </div>

      <div className="w-full bg-white flex py-3 text-sm">
        <div className="w-full md:px-16 justify-between mx-auto flex flex-row items-center">

          <Image
            src="/images/international.png"
            alt="Threshold International logo"
            width={72}
            height={72}
            className="object-contain"
          />

          {/* Hamburger icon, visible on mobile only */}
          <button
            type="button"
            className="md:hidden flex items-center gap-3 px-3 py-2"
            onClick={() => setMobileOpen((o) => !o)}
          >
            <Image 
              src="/icons/dropdown.svg"
              alt="dropdown"
              width={20}
              height={20}
            />

            <span className="text-xl">Menu</span>
          </button>

          {/* Regular nav links, hidden on small screens */}
          <div className={`hidden md:flex justify-center mx-auto flex-row gap-10 font-light items-center`}>
            <Link href="/" className="flex uppercase">
              <span>Home</span>
            </Link>

            <div
              className="relative"
            >
              <AboutDropdown />
            </div>

            <AcademicsDropdown />

            {/* 
            
            <div className="relative" ref={academicsRef}>
              <button
                type="button"
                onClick={() => setAcademicsOpen((o) => !o)}
                aria-expanded={academicsOpen}
                aria-controls="academics-menu"
                className="flex uppercase items-center gap-2"
              >
                <span>Academics</span>
                <svg
                  className={`w-3 h-3 transition-transform ${academicsOpen ? "rotate-180" : "rotate-0"}`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
                </svg>
              </button>

              {academicsOpen && (
                <div
                  id="academics-menu"
                  role="menu"
                  className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md border border-gray-100 min-w-[12rem] z-50"
                >
                  <Link href="/academics/boarding" className="block px-4 py-2 hover:bg-gray-50">Boarding at T.T.C</Link>
                  <Link href="/academics/curriculum" className="block px-4 py-2 hover:bg-gray-50">Curriculum</Link>
                  <Link href="/academics/admissions" className="block px-4 py-2 hover:bg-gray-50">Admissions</Link>
                </div>
              )}
            </div>
            
            */}

            <Link href="/contact" className="flex uppercase">
              <span>Contact us</span>
            </Link>
            <Link href="/blog" className="flex uppercase">
              <span>Blog</span>
            </Link>
          </div>

        </div>
      </div>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="md:hidden absolute top-24 lg:top-full left-0 w-full bg-white shadow-lg z-40">
          <nav className="flex flex-col p-4 gap-4">
            <Link href="/" className="uppercase">Home</Link>
            <AboutDropdown />  {/* reuse the dropdown in mobile menu */}
            <button
              type="button"
              onClick={() => setAcademicsOpen((o) => !o)}
              className="flex uppercase items-center gap-2"
            >
              Academics
              <svg
                className={`w-3 h-3 transition-transform ${academicsOpen ? "rotate-180" : "rotate-0"}`}
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
              </svg>
            </button>
            {academicsOpen && (
              <div className="flex flex-col pl-4">
                <Link href="/academics/boarding" className="py-1">Boarding at TTC</Link>
                <Link href="/academics/curriculum" className="py-1">Curriculum</Link>
                <Link href="/academics/admissions" className="py-1">Admissions</Link>
              </div>
            )}
            <Link href="/contact" className="uppercase">Contact us</Link>
            <Link href="/blog" className="uppercase">Blog</Link>
          </nav>
        </div>
      )}
    </div>
  );
};

export default NavBar;
