"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const SecPrompt = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-[#030096] text-white z-50"> 
      {/* fixed to viewport bottom, full width, above other content */}
      <div className="py-6 px-6 xl:px-0 flex flex-col md:flex-row items-start md:items-center justify-between xl:max-w-7xl mx-auto">
        <h1 className="text-2xl pb-8 md:pb-0 lg:text-3xl font-body">Secondary School Admissions Now Open!</h1>

        <div className="flex flex-row gap-6 items-center justify-between w-full md:w-fit">
          <Link 
            href="/admissions"
            className="flex flex-row gap-2 px-6 py-4 bg-white rounded-md"
          >
            <span className="text-[#030096] font-semibold font-body">Enquire Now</span>
            <Image 
              src="/icons/arrow-up-right.svg"
              width={18}
              height={18}
              alt="Arrow logo"
            />
          </Link>

          {/* Close Button */}
          <button
            onClick={() => setVisible(false)}
            className="px-6 py-5 bg-[#4240B0] rounded-md hover:bg-[#7170b5] cursor-pointer"
            aria-label="Close prompt"
          >
            <Image 
              src="/icons/close.svg"
              width={18}
              height={18}
              alt="Close button"
            />
          </button>
        </div>

      </div>
    </div>
  );
};

export default SecPrompt;
