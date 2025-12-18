import React from "react";
import Image from "next/image";

const CEOMessage = () => {
  return (
    <div className="lg:max-w-7xl mx-auto md:py-8 p-4 md:px-12 xl:p-0">
      <div className="flex flex-col mx-auto justify-center items-center py-4">
        <div className="flex flex-col gap-4 text-center">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold text-[#2F1A6C] font-body">
            Nkechi Ibiene Nnwoka
          </h1>
          <div className="w-12 p-0.5 bg-black mx-auto" />
          <p className="uppercase font-body pb-4 md:pb-12">CEO</p>
        </div>
        <div>
          <Image
            src="/images/ceo.png"
            alt="CEO"
            width={520}
            height={720}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="text-center py-4">
          <h3 className="py-2 uppercase font-semibold font-body text-[#2F1A6C] text-xl">
            CEO&apos;S MESSAGE
          </h3>
        </div>

        <div>
          <div className="w-full p-0.25 bg-[#E8E8E8] mx-auto" />

          <div className="text-lg max-w-xl pt-16 md:text-xl font-body text-[#424242]">
            <p>Dear Parents and Students</p>
            <br />
            <p>
              It is with much pleasure that I welcome you to The Threshold School,
              an Institution that herald a new chapter in the provision and
              delivery of high quality education.
            </p>
            <br />
            <p>
              Over the decades, we have witnessed deterioration in the quality of
              education in Nigeria. Therefore, the major force driving us in The
              Threshold School is the desire to reverse this trend.
            </p>
            <br />
            <p>
              We seek to provide a platform for education that will meet and in
              due course surpass the most demanding standard available anywhere in
              the world. It is our firm belief that Primary/Secondary Education
              remains one of the most important phases of a child&apos;s
              educational journey. It is therefore important that the experience
              of the child at this crucial period be solid, rewarding and
              pleasurable.
            </p>
            <br />
            <p>
              The Threshold School is an impressive purpose -built school for
              pupils/students age 3 months -18years with Crèche, Nursery, Primary,
              Junior/Senior High School and A- Level. Our magnificent school is
              located in a quiet and serene area of GRA in Port Harcourt, Rivers
              State, Nigeria with outstanding facilities and equipment that are
              provided to support learning.
            </p>
            <br />
            <p>
              Thank you for your interest in The Threshold School.
            </p>
          </div>
         

        </div>
      </div>

    </div>
  );
};

export default CEOMessage;