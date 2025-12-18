import Admission from '@/component/Admission'
import Footer from '@/component/Footer'
import Navbar from '@/component/Navbar'
import FounderMessage from '@/component/FounderMessage'
import AdmissionOpen from '@/component/AdmissionOpen'

const Founder = () => {
  return (
    <div>
      <Navbar />
      <FounderMessage />
      <AdmissionOpen />
      
      <Admission />
      <Footer />
    </div>
  )
}

export default Founder