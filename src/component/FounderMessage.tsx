import Image from "next/image"

const FounderMessage = () => {
  return (
    <div
    className='lg:max-w-7xl mx-auto md:py-8 p-4 md:px-12 xl:p-0'
    >
      <div className="flex flex-col mx-auto justify-center items-center py-4">
        <div className="flex flex-col gap-4 text-center">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold text-[#2F1A6C] font-body">Bestman Nwoka Esq.</h1>
          <div className="w-12 p-0.5 bg-black mx-auto" />
          <p className="uppercase font-body">Founder</p>
        </div>
        <div>
          <Image 
            src="/images/founder.png"
            alt="Founder"
            width={520}
            height={720}
            className="w-full h-full object-cover"
          />


        </div>

        <div className="text-center py-4">
          <h3 className="py-2 uppercase font-semibold font-body text-[#2F1A6C] text-xl">FOUNDER&apos;S MESSAGE</h3>
        </div>

        <div>
          <div className="w-full p-0.25 bg-[#E8E8E8] mx-auto" />

          <p className="text-lg max-w-xl pt-16 md:text-xl font-body text-[#424242]">
          The Threshold School is a Co-Educational Private Christian school, consisting of the crèche, Pre-School, Nursery, Primary, College and A- Level for children between the ages of 3 months to 18 years. It was founded on the 20th of September 2004 by Pastor Bestman and Nkechi Nnwoka to provide a balanced comprehensive educational curriculum for full development of children intellectually, spiritually and socially. We believe that the Nigerian child should have the benefit of a quality education while in the local environment.
          </p>

          <p className="text-lg max-w-xl py-4 md:text-xl font-body text-[#424242]">
          Towards the achievement of these objectives, therefore we seek to provide a platform for education that will meet and in due course surpass the most demanding standards available anywhere in the world.
          </p>
        </div>
      </div>
      
      <div></div>
      
    </div>
  )
}

export default FounderMessage