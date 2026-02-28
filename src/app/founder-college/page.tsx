import NavbarCollege from "@/component/NavbarCollege";
import FooterCollege from "@/component/FooterCollege";
import FounderMessage from "@/component/FounderMessage";
import AdmissionOpen from "@/component/AdmissionOpen";
import AdmissionCollege from "@/component/AdmissionCollege";

const FounderCollege = () => {
  return (
    <div>
      <NavbarCollege />
      <FounderMessage />
      <AdmissionOpen />
      <AdmissionCollege />
      <FooterCollege />
    </div>
  );
};

export default FounderCollege;
