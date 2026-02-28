import Image from "next/image";
import AdmissionBodyCollege from "@/component/AdmissionBodyCollege";
import FooterCollege from "@/component/FooterCollege";
import NavbarCollege from "@/component/NavbarCollege";

const Admissions = () => {
  return (
    <div>
      <NavbarCollege />
      <div className="relative w-full h-84 md:h-108 xl:h-188 font-body!">
        <Image
          src="/images/college/admissions-college-kid.jpeg"
          alt="Admissions Hero"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute top-6 md:top-22 w-fit mx-auto left-0 right-0 flex flex-col justify-center items-center text-white">
          <h1 className="text-[25px] md:text-4xl lg:text-6xl w-fit text-center font-display font-medium md:mb-5 mb-1 uppercase">
            Admissions
          </h1>

          <div className="w-full mx-auto p-0.5 md:p-1 bg-white" />
        </div>
      </div>
      <AdmissionBodyCollege />
      <FooterCollege />
    </div>
  );
};

export default Admissions;
