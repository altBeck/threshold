import Image from 'next/image'
import NavBar from '@/component/Navbar'
import SecPrompt from '@/component/SecPrompt'
import Admission from '@/component/Admission'
import Footer from '@/component/Footer'
import BoardingBody from '@/component/BoardingBody'
const Boarding = () => {
  return (
    <div>
      <NavBar />
      <div className="relative w-full h-84 md:h-108 xl:h-188 font-body!">
        <Image 
          src="/images/boarding/boarding-hero.png"
          alt="Boarding Hero"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute top-6 md:top-22 w-fit mx-auto left-0 right-0 flex flex-col justify-center items-center text-white"> 
          <h1 className="text-[25px] md:text-4xl lg:text-6xl w-fit text-center font-display font-medium mb-5">
            Boarding at The Threshold
          </h1>

          <div className="md:w-full w-xs mx-auto p-0.5 md:p-1 bg-white" />

          <p className="text-lg max-w-xl pt-6 md:text-xl font-body text-white text-center">At The Threshold Schools, we’ve built more than just classrooms—we’ve created a vibrant, nurturing environment where students can learn, grow, and thrive. </p>
        </div>
      </div>
      <SecPrompt />
      
      <BoardingBody />
      <Admission />
      <Footer />
    </div>
  )
}

export default Boarding