import NavbarCollege from "@/component/NavbarCollege";
import FooterCollege from "@/component/FooterCollege";
import PrincipalMessage from "@/component/PrincipalMessage";
import AdmissionOpenPrincipal from "@/component/AdmissionOpenPrincipal";
import AdmissionCollege from "@/component/AdmissionCollege";

const PrincipalCollege = () => {
  return (
    <div>
      <NavbarCollege />
      <PrincipalMessage />
      <AdmissionOpenPrincipal />
      <AdmissionCollege />
      <FooterCollege />
    </div>
  );
};

export default PrincipalCollege;
