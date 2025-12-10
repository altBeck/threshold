import Link from "next/link"
import Image from "next/image"

const ColBody = () => {
  return (
    <div className="bg-[#534D7D] w-full h-fit">
      <div className="lg:max-w-4xl xl:max-w-7xl lg:gap-16 gap-8 md:max-w-3xl py-8 md:pt-12 lg:py-24 mx-auto flex flex-col px-5 md:px-0 md:flex-row md:p-12">
        <div>
          <p className="text-3xl text-white">The Threshold School is a Co-Educational Private Christian school, consisting of the crèche, Pre-School, Nursery, Primary, College and A- Level for children between the ages of 3 months to 18 years.</p>

          <div className="w-full mt-16 py-8 border-y-2 border-[#E8E8E8]">
            <h1 className="uppercase text-white py-4 text-3xl font-semibold">Explore</h1>

            <Link 
              href="/curriculum"
              className="flex flex-row gap-2 py-4 my-0.5 w-fit"
            >
              <span className="text-white text-xl uppercase font-medium font-body">Curriculum</span>
              <Image 
                src="/icons/arrow-up-right-white.svg"
                width={20}
                height={20}
                alt="Arrow logo"
              />
            </Link>


            <Link 
              href="/boarding"
              className="flex flex-row gap-2 py-4 my-0.5 w-fit"
            >
              <span className="text-white text-xl uppercase font-medium font-body">BOARDING AT T.T.C</span>
              <Image 
                src="/icons/arrow-up-right-white.svg"
                width={20}
                height={20}
                alt="Arrow logo"
              />
            </Link>


            <Link 
              href="/admissions"
              className="flex flex-row gap-2 py-4 my-0.5 w-fit"
            >
              <span className="text-white text-xl uppercase font-medium font-body">ADMISSIONS</span>
              <Image 
                src="/icons/arrow-up-right-white.svg"
                width={20}
                height={20}
                alt="Arrow logo"
              />
            </Link>

          </div>
        </div>

        <div>
          <p className="text-3xl text-white">As a Christian school, we believe every child is endowed with innate abilities to learn, excel, and express their uniqueness. We provide a safe, stimulating environment where children grow into healthy, responsible, respectful, tolerant, and confident individuals with an appreciation for the arts.</p>
        </div>
      </div>


      <div
        className="grid grid-cols-1 md:grid-cols-3 mx-auto lg:max-w-7xl py-16 gap-4 p-4"
      >
        <div>
          <Image 
            src="/images/college/col-1.png"
            width={426}
            height={430}
            alt="School Images"
          />
        </div>
        <div>
          <Image 
            src="/images/college/col-2.png"
            width={426}
            height={430}
            alt="School Images"
          />
        </div>
        <div>
          <Image 
            src="/images/college/col-3.png"
            width={426}
            height={430}
            alt="School Images"
          />
        </div>
        <div>
          <Image 
            src="/images/college/col-4.png"
            width={426}
            height={430}
            alt="School Images"
          />
        </div>
        <div>
          <Image 
            src="/images/college/col-5.png"
            width={426}
            height={430}
            alt="School Images"
          />
        </div>
        <div>
          <Image 
            src="/images/college/col-6.png"
            width={426}
            height={430}
            alt="School Images"
          />
        </div>
      </div>
    </div>
  )
}

export default ColBody