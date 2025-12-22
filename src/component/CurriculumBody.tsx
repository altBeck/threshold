import Link from "next/link";

const CurriculumBody = () => {
  return (
    <div className="w-full bg-[#F3F3F3]">
      {/* Hero intro */}
      <div className="flex flex-col items-center justify-center bg-[#568FCE] py-10 md:py-12 lg:py-20">
        <div>
        <h1 className="text-[25px] md:text-4xl lg:text-6xl w-fit text-center font-display font-medium md:mb-5 mb-1 uppercase text-white">
            Curriculum
          </h1>

          <div className="w-full mx-auto p-0.5 md:p-1 bg-white mb-6" />
        </div>
        <p className="text-lg md:text-xl lg:text-2xl font-body text-white text-center max-w-4xl px-4">
        At The Threshold Schools, we believe in a curriculum that balances academic excellence, moral grounding, and global perspective. Our dual approach blends the Nigerian and British curricula into a future-focused program that equips students with the tools they need to succeed—locally and globally.
        </p>
      </div>

      {/* Academic Structure */}
      <div className="flex flex-col md:pt-32 pt-8 max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row">
          <div className="flex-1">
            <h2 className="text-2xl pb-4 md:pb-6 md:text-3xl lg:text-4xl font-medium uppercase text-[#242424]">
              Academic Structure
            </h2>

            <div className="flex flex-col gap-6 md:gap-16 md:flex-row">
              <div className="bg-white rounded-lg shadow-md p-6 space-y-5 h-fit">

                <div>
                  <h3 className="font-semibold text-xl">Junior Secondary School (JSS)</h3>
                  <p className="text-[#8F8E90] text-sm md:text-base">
                    Years 7–9
                  </p>
                </div>

                <div>
                  <p className="text-[#8F8E90] text-sm md:text-xl">
                  Laying a strong foundation across core disciplines through a blend of Nigerian and British learning frameworks.
                  </p>

                  <p className="text-[#8F8E90] text-sm md:text-xl pt-2">•  Broad-based curriculum aligned with Cambridge Key Stage 3 and Nigerian standards</p>

                  <p className="text-[#8F8E90] text-sm md:text-xl pt-2">•  Cambridge Checkpoint preparation in Year 9</p>

                  <p className="text-[#8F8E90] text-sm md:text-xl pt-2">•  Year 9 students begin to tailor subject choices based on interests and strengths</p>
                </div>

              </div>

              <div className="bg-white rounded-lg shadow-md p-6 space-y-5 h-fit">

              <div>
                  <h3 className="font-semibold text-xl">Senior Secondary School (SSS)</h3>
                  <p className="text-[#8F8E90] text-sm md:text-base">
                    Years 10–12
                  </p>
                </div>

                <div>
                  <p className="text-[#8F8E90] text-sm md:text-xl">
                  One path. Two directions. We offer national and international tracks that lead to both local and global opportunities.
                  </p>

                  <p className="text-[#8F8E90] text-sm md:text-xl pt-2">Students choose either:</p>

                  <p className="text-[#8F8E90] text-sm md:text-xl pt-2">•  <strong className="text-gray-900">Nigerian track</strong> (WASSCE/NECO)</p>

                  <p className="text-[#8F8E90] text-sm md:text-xl pt-2">•  <strong className="text-gray-900">International track</strong> (Cambridge IGCSE / GCE O-Level)</p>

                  <p className="text-[#8F8E90] text-sm md:text-xl pt-2">Students specialize in:</p>

                  <p className="text-[#8F8E90] text-sm md:text-xl pt-2"><strong className="text-gray-900">•  Science</strong></p>

                  <p className="text-[#8F8E90] text-sm md:text-xl pt-2"><strong className="text-gray-900">•  Social Science</strong></p>

                  <p className="text-[#8F8E90] text-sm md:text-xl pt-2"><strong className="text-gray-900">•  Arts & Humanities</strong></p>
                </div>

              </div>
            </div>

            
          </div>

        </div>
      </div>

      {/* Main content area */}
      <div className="w-full bg-[#F3F3F3] py-10 md:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex flex-col md:flex-row gap-12">

          {/* Left column — Admission Steps */}
          <div className="flex-1 space-y-8">

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium uppercase text-[#242424]">
            CORE & ELECTIVE SUBJECTS
            </h2>

            {/* Step card */}
            <div className="space-y-6">

              {/* Step 1 */}
              <div className="bg-white rounded-lg shadow-md p-6 space-y-5 h-fit">

                <p className="text-[#8F8E90] text-sm md:text-lg">A comprehensive subject range that prepares students for real-world success.</p>

                <div>
                  <h3 className="font-semibold text-xl">Core Academics</h3>
                  <p className="text-[#8F8E90] text-sm md:text-base">
                  English, Mathematics
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-xl">Sciences</h3>
                  <p className="text-[#8F8E90] text-sm md:text-base">
                  Biology, Chemistry, Physics, Agricultural Science, Basic Science, Further Mathematics
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-xl">Humanities</h3>
                  <p className="text-[#8F8E90] text-sm md:text-base">
                  Civic Education, History, Geography, Religious Studies, Sociology
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-xl">Business & Tech</h3>
                  <p className="text-[#8F8E90] text-sm md:text-base">
                  Economics, Accounting, Commerce, Computer Studies, Data Processing
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-xl">Languages</h3>
                  <p className="text-[#8F8E90] text-sm md:text-base">
                  French, German, Spanish, Mandarin
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-xl">Creative & Vocational</h3>
                  <p className="text-[#8F8E90] text-sm md:text-base">
                  Music, Art, Home Economics, Technical Drawing, Food & Nutrition
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-xl">Physical Development</h3>
                  <p className="text-[#8F8E90] text-sm md:text-base">
                  Physical & Health Education
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right column — Support + Brochure */}
          <div className="flex-1 space-y-8">

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium uppercase text-[#242424]">
              Admission Support
            </h2>
            <div className="bg-[#534D7D] text-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-xl mb-3">Enquiries</h3>
              <p className="text-sm md:text-base">
                Have questions or need help with the process? <br className="hidden md:block" /> Contact our Admissions Office:
              </p>
              <p className="mt-3 text-sm md:text-base">
                <strong>Phone:</strong> (+234) 8033097608
                <br />
                <strong>Email:</strong> admin@thresholdschoolsng.com
              </p>
            </div>

            {/* School Brochure */}
            <div className="bg-[#568FCE] text-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-xl mb-3">Download Our School Brochure</h3>
              <p className="text-sm md:text-base mb-4">
                Everything you need to know about Threshold Schools — our philosophy,
                curriculum, facilities, admissions, and co-curricular life; all in one
                beautifully designed brochure.
              </p>
              <ul className="text-sm md:text-base space-y-1 pb-4">
                <li>Our Academic Programs</li>
                <li>Boarding & Day Student Life</li>
                <li>Facilities Overview</li>
                <li>Co-Curricular & Leadership Opportunities</li>
                <li>Admissions Process & Requirements</li>
                <li>Testimonials & Success Stories</li>
              </ul>
              
              <Link href="https://thresholdschoolsng.com/college/images/application.pdf" className="flex w-fit mt-2 px-4 py-2  bg-white text-[#242423] rounded-md cursor-pointer font-medium">
                Get the brochure
              </Link>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default CurriculumBody;
