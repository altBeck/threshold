import Link from "next/link";

const AdmissionBody = () => {
  return (
    <div className="w-full">
      {/* Hero intro */}
      <div className="flex flex-col items-center justify-center bg-[#DC127A] py-10 md:py-12 lg:py-20">
        <p className="text-lg md:text-xl lg:text-2xl font-body text-white text-center max-w-3xl px-4">
          At The Threshold Schools, we believe every child deserves a nurturing and
          structured environment to thrive. We’re excited to welcome new students into
          our caring community.
        </p>
      </div>

      {/* Main content area */}
      <div className="w-full bg-[#F3F3F3] py-10 md:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex flex-col md:flex-row gap-12">

          {/* Left column — Admission Steps */}
          <div className="flex-1 space-y-8">

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium uppercase text-[#242424]">
              Admission Steps
            </h2>

            {/* Step card */}
            <div className="space-y-6">

              {/* Step 1 */}
              <div className="bg-white rounded-lg shadow-md p-6 space-y-3 h-fit">
                <h3 className="font-semibold text-xl">Step 1: Download the Admissions Form</h3>
                <p className="text-gray-700 text-sm md:text-base">
                  To begin the admission process, a non-refundable processing fee of
                  <strong> ₦15,000</strong> is required. Once payment is made, you will
                  be able to download the official admissions form.
                </p>
                <Link href="https://thresholdschoolsng.com/college/images/application.pdf" className="flex w-fit mt-2 px-4 py-2 bg-black text-white rounded-md">
                  Download form
                </Link>
              </div>

              {/* Step 2 */}
              <div className="bg-white rounded-lg shadow-md p-6 space-y-3 h-fit">
                <h3 className="font-semibold text-xl">Step 2: Complete the Form at Home</h3>
                <p className="text-gray-700 text-sm md:text-base">
                  Fill in all sections of the form carefully. This includes basic student
                  and guardian details, intended entry class, and medical information.
                </p>
              </div>

              {/* Step 3 */}
              <div className="bg-white rounded-lg shadow-md p-6 space-y-3 h-fit">
                <h3 className="font-semibold text-xl">Step 3: Prepare Required Documents</h3>
                <p className="text-gray-700 text-sm md:text-base">
                  Bring the completed form to the school along with the following original documents:
                </p>
                <ul className="list-disc list-inside text-gray-700 text-sm md:text-base space-y-1">
                  <li>Birth Certificate</li>
                  <li>2 Recent Passport Photographs</li>
                  <li>Immunization/Medical Records</li>
                  <li>Previous School Report (if applicable)</li>
                  <li>Parent/Guardian ID</li>
                </ul>
              </div>

              {/* Step 4 */}
              <div className="bg-white rounded-lg shadow-md p-6 space-y-3 h-fit">
                <h3 className="font-semibold text-xl">Step 4: Submit in Person at the School Office</h3>
                <p className="text-gray-700 text-sm md:text-base">
                  Visit Threshold Schools with the completed form and required documents.
                  Our admissions team will guide you through the final steps, including any
                  assessments or interviews where applicable.
                </p>
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

export default AdmissionBody;
