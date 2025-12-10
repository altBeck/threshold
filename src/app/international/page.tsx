import Principal from "@/component/Principal";
import IntlBody from "@/component/IntlBody";
import Navbar from "@/component/Navbar"; 
import Prompt from "@/component/Prompt";
import WhyChooseUsIntl from "@/component/WhyChooseUsIntl";
import Admission from "@/component/Admission";
import Footer from "@/component/Footer";
import Image from "next/image";

const International = () => {
  return (
    <div>
      <Navbar />
      <div className="relative w-full h-84 md:h-108 xl:h-180 font-body!">
        <Image 
          src="/images/threshold-international.jpg"
          alt="Threshold Schools Hero"
          fill
        />

        <div className="w-4xs mx-auto lg:w-fit absolute top-16 left-0 right-0 flex flex-col justify-center items-center text-white"> 
          
          <h1 className="text-2xl md:w-fit md:text-3xl lg:text-5xl lg:w-204 text-center font-display font-medium mb-2">
            Welcome to The Threshold International School
          </h1>
          <p className="text-lg md:text-xl lg:text-3xl font-medium font-body uppercase tracking-wide">
            FOSTERING EXCELLENCE
          </p>
        </div>
      </div>
      <Prompt />
      <IntlBody />
      <Principal />
      <WhyChooseUsIntl />
      <Admission />
      <Footer />
    </div>
  );
};

export default International;
