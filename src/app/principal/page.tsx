import NavBar from '@/component/Navbar'
import Footer from '@/component/Footer'
import PrincipalMessage from '@/component/PrincipalMessage'
import Admission from '@/component/Admission'
import AdmissionOpenPrincipal from '@/component/AdmissionOpenPrincipal'

const Principal = () => {
  return (
    <div>
      <NavBar />
      <PrincipalMessage />
      <AdmissionOpenPrincipal />
      <Admission />
      <Footer />
    </div>
  )
}

export default Principal