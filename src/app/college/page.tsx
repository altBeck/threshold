import Admission from '@/component/Admission'
import SecPrompt from '@/component/SecPrompt'
import Footer from '@/component/Footer'
import ColBody from '@/component/ColBody'
import WhyChooseUsColl from '@/component/WhyChooseUsColl'
import NavBar from '@/component/Navbar'
import Image from 'next/image'
import React from 'react'

const College = () => {
  return (
    <div>
      <NavBar />
      <div className="relative w-full h-84 md:h-108 xl:h-188 font-body!">
        <Image 
          src="/images/dsc-4735-1.jpg"
          alt="Threshold College Hero"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute top-22 w-fit mx-auto left-0 right-0 flex flex-col justify-center items-center text-white"> 
          
          <h1 className="text-3xl md:text-4xl lg:text-6xl w-fit text-center font-display font-medium mb-2">
            Welcome to The Threshold College
          </h1>
          <p className="text-lg md:text-3xl font-medium font-body uppercase tracking-wide">
            FOSTERING EXCELLENCE
          </p>
        </div>
      </div>
      <SecPrompt />
      <ColBody />
      <WhyChooseUsColl />
      <Admission />
      <Footer />
      
    </div>
  )
}

export default College