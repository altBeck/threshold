import NavBar from "@/component/Navbar";
import Footer from "@/component/Footer";
import CEOMessage from "@/component/CEOMessage";
import AdmissionOpenCEO from "@/component/AdmissionOpenCEO";
import Admission from "@/component/Admission";

const CEO = () => {
  return (
    <div>
      <NavBar />
      <CEOMessage />
      <AdmissionOpenCEO />
      <Admission />
      <Footer />
    </div>
  )
}

export default CEO