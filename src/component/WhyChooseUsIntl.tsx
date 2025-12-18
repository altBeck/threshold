import Image from "next/image";

const WhyChooseUsIntl = () => {
  return (

    <div className="md:bg-white border-y border-[#e0e0e0]">
      <div className="lg:p-12 md:p-10 rounded-sm">
        <div className="md:flex md:flex-row">
          <div className="bg-[#030096] md:rounded-tl p-6 py-12 lg:py-36 text-center md:flex md:flex-col text-white md:justify-center md:items-center md:w-1/2">
            <h1 className="text-2xl pb-2 md:pb-0 lg:text-3xl md:text-2xl font-medium">WHY CHOOSE US</h1>
            <p className="lg:pt-2.5">
              Threshold International Schools has been dedicated to fostering excellence in
              committed professionals and encourage to provide a balanced comprehensive
              educational curriculum for full development of children intellectually, spiritually
              and socially.
            </p>
          </div>

          <div className="relative md:w-1/2 w-full lg:h-auto md:h-75"> 
            {/* Parent has relative + fixed/responsive height */}
            <Image
              src="/images/international/intl-students.png"
              alt="Students"
              fill
              className="object-cover rounded-tr-sm"
              sizes="(max-width: 768px) 100vw, (min-width: 768px) 50vw"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 bg-[#2F1A6C] md:rounded-bl py-8 md:py-18 lg:py-32 text-white flex flex-col items-center justify-center">
            <p className="uppercase text-center"><span className="text-4xl lg:text-5xl">21</span> <br />YEARS OF EXCELLENCE </p>
          </div>
          <div className="md:w-1/3 bg-[#DC127A] py-8 md:py-18 lg:py-32 text-white flex flex-col items-center justify-center">
            <p className="uppercase text-center"><span className="text-4xl lg:text-5xl">10</span> <br />ACCREDITATIONS</p>
          </div>
          <div className="md:w-1/3 bg-[#21B8F0] md:rounded-br py-8 md:py-18 lg:py-32 text-white flex flex-col items-center justify-center">
            <p className="uppercase text-center"><span className="text-4xl lg:text-5xl">29,924</span> <br />STUDENTS ENROLLED</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUsIntl;