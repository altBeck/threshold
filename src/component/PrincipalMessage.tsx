import Image from 'next/image'

const PrincipalMessage = () => {
  return (
    <div className="lg:max-w-7xl mx-auto md:py-8 p-4 md:px-12 xl:p-0">
      <div className="flex flex-col mx-auto justify-center items-center py-4">
        <div className="flex flex-col gap-4 text-center">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold text-[#2F1A6C] font-body">
          Babawole Olaniyan
          </h1>
          <div className="w-12 p-0.5 bg-black mx-auto" />
          <p className="uppercase font-body pb-4 md:pb-12">Principal</p>
        </div>
        <div>
          <Image
            src="/images/principal.jpg"
            alt="Principal"
            width={520}
            height={720}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="text-center py-4">
          <h3 className="py-2 uppercase font-semibold font-body text-[#2F1A6C] text-xl">
            PRINCIPAL&apos;S MESSAGE
          </h3>
        </div>

        <div>
          <div className="w-full p-0.25 bg-[#E8E8E8] mx-auto" />

          <div className="text-lg max-w-xl pt-10 md:pt-16 md:text-xl font-body text-[#424242]">
            <p>It is with much pleasure and humility that I welcome you to The Threshold School. I feel honored to be given the responsibility of heading and managing this great school.</p>
            <br />
            <p>
            The Threshold School exists to provide excellence in all facets of learning; it offers a broad and balanced education in a friendly, caring and happy environment.
            </p>
            <br />
            <p>
            At The Threshold, we have a mission to catch young minds from the cradle and nurture them through the precarious age of adolescence where they will know the difference between good and evil and have the strength of character to choose good.
            </p>
            <br />
            <p>
            I will endeavor, along with the support from all members of staff to further develop and improve the school so that it can achieve the demanding standard available anywhere in the world.
            </p>
            
          </div>
         

        </div>
      </div>

    </div>
  )
}

export default PrincipalMessage