import Image from "next/image"

const AdmissionOpenPrincipal = () => {
  return (
    <div>
      <div>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium uppercase bg-black text-white text-center py-16">Admissions Are Open</h1>
      </div>

      <div className="w-full">
        <div className="flex flex-col md:flex-row">
          
          {/* Image column */}
          <div className="md:w-1/2 w-full">
            <Image
              src="/images/admission/class.png"
              alt="Students in a classroom"
              width={720}
              height={565}
              className="w-full h-full object-cover"
              priority
            />
          </div>

          {/* Text column */}
          <div className="md:w-1/2 w-full flex items-center">
            <div className="max-w-xl px-6 py-6 md:py-0 md:px-12">
              <h1 className="text-xl font-semibold pb-2 text-[#242424]">
                SCHOOL LIFE AT THRESHOLD
              </h1>
              <p className="text-base lg:text-xl leading-relaxed text-[#949494] font-normal">
                At The Threshold Schools, we fully grasp the value of nurturing our students’ academic capabilities, as well as their moral, physical, and emotional wellness.
              </p>
            </div>
          </div>

        </div>


        <div className="flex flex-col-reverse md:flex-row">

          {/* Text column */}
          <div className="md:w-1/2 w-full flex items-center">
            <div className="max-w-xl px-6 py-6 md:py-0 md:px-12">
              <h1 className="text-xl font-semibold pb-2 text-[#242424]">
                BOARDING AT THRESHOLD
              </h1>
              <p className="text-base lg:text-xl leading-relaxed text-[#949494] font-normal">
              Our boarding houses are allocated for our male and female students. Each house offers a safe and nourishing environment, as well as excellent facilities.
              </p>
            </div>
          </div>

          {/* Image column */}
          <div className="md:w-1/2 w-full">
            <Image
              src="/images/admission/boarding-3.png"
              alt="Students in a dorm"
              width={720}
              height={565}
              className="w-full h-full object-cover"
              priority
            />
          </div>

        </div>

      </div>
    </div>
  )
}

export default AdmissionOpenPrincipal