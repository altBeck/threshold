import Admission from "@/component/Admission";
import Footer from "@/component/Footer";
import NavBar from "@/component/NavBar";
import FounderMessage from "@/component/FounderMessage";
import AdmissionOpen from "@/component/AdmissionOpen";

const Founder = () => {
  return (
    <div>
      <NavBar />
      <FounderMessage />
      <AdmissionOpen />

      <Admission />
      <Footer />
    </div>
  );
};

export default Founder;
