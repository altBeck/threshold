import Image from "next/image"
import Link from "next/link"

const Principal = () => {
  return (
    <div className="py-16 md:px-12 px-0">
      <div className="lg:max-w-7xl md:max-w-2xl justify-center mx-auto flex flex-col p-4 md:p-0 md:flex-row md:gap-8 xl:gap-12">
        <div className="xl:w-[404px] md:w-1/2 md:gap-2 flex flex-col">  
          <Image 
            src="/images/international/principal.png"
            alt="Principal"
            width={520}
            height={440}
            className="md:w-full"
          />

          <div className="pt-4">
            <h1 className="xl:text-4xl md:text-3xl text-gray-950 font-medium">Babawole Olaniyan</h1>
            <p className="text-2xl text-[#8F8E90]">Principal</p>
          </div>
        </div>

        <div className="xl:max-w-3xl md:w-1/2">
          <div className="flex flex-col gap-2 pb-6 font-body">  
            <h1 className="lg:text-4xl md:text-xl font-body md:font-semibold lg:font-medium ">Welcome Message from the Principal</h1>
            <p className="lg:text-3xl text-[#8F8E90] pb-4 font-extralight">It is with much pleasure and humility that I welcome you to The Threshold School. I feel honored to be given the responsibility of heading and managing this gr...</p>
          </div>

          <Link href="/principal" className="bg-black px-5 py-3 rounded-md">
            <span className="uppercase text-white font-semibold">Read More</span>
          </Link>
        </div>
      </div>

    </div>
  )
}

export default Principal