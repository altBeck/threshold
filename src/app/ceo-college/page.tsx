import NavbarCollege from "@/component/NavbarCollege";
import FooterCollege from "@/component/FooterCollege";
import CEOMessage from "@/component/CEOMessage";
import AdmissionOpenCEO from "@/component/AdmissionOpenCEO";
import AdmissionCollege from "@/component/AdmissionCollege";

const CEOCollege = () => {
  return (
    <div>
      <NavbarCollege />
      <CEOMessage />
      <AdmissionOpenCEO />
      <AdmissionCollege />
      <FooterCollege />
    </div>
  );
};

export default CEOCollege;
