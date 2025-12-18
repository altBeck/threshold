"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const AcademicsDropdown = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <div className="relative inline-block" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex items-center uppercase font-light gap-2"
      >
        School
        <svg
          className={`w-4 h-4 transition-transform ${open ? "rotate-180" : "rotate-0"}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {open && (
        <div
          className="fixed top-32 left-1/2 transform -translate-x-1/2 bg-white rounded-md w-auto shadow-lg z-50"
        >
          <div className="px-6 py-4">
            <h3 className="font-medium font-display md:w-136 text-3xl">
              Explore The Threshold Schools — Campus Overview
            </h3>
          </div>
          <ul className="py-4">
            <li>
              <Link href="/boarding" className="block px-6 py-2">
                <div className="hover:bg-gray-50 rounded-sm px-3 pt-3">

                  <div className="font-medium flex gap-1">Boarding at T.T.C
                    <Image 
                      src="/icons/arrow-link.svg"
                      alt="link"
                      width={20}
                      height={20}
                    />
                  </div>
                  <div className="text-sm text-gray-500">View Our Boarding Facilities</div>
                  <div className="border-b border-[#E2E2E2] pt-3"/>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/curriculum" className="block px-6 py-2 ">
                <div className="hover:bg-gray-50 rounded-sm px-3 pt-3">
                <div className="font-medium flex gap-1">Curriculum
                    <Image 
                      src="/icons/arrow-link.svg"
                      alt="link"
                      width={20}
                      height={20}
                    />
                  </div>
                  <div className="text-sm text-gray-500">View our School Curriculum</div>
                  <div className="border-b border-[#E2E2E2] pt-3"/>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/admissions" className="block px-6 py-2">
                <div className="hover:bg-gray-50 rounded-sm px-3 pt-3">
                <div className="font-medium flex gap-1">Admissions
                    <Image 
                      src="/icons/arrow-link.svg"
                      alt="link"
                      width={20}
                      height={20}
                    />
                  </div>
                  <div className="text-sm text-gray-500">Get More Information on Admissions</div>
                  <div className="pt-3"/>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default AcademicsDropdown;
