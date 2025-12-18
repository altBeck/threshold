import Link from "next/link"
import Image from "next/image"

const IntlBody = () => {
  return (
    <div className="bg-[#568FCE] w-full h-fit">
      <div className="lg:max-w-4xl xl:max-w-7xl lg:gap-16 gap-8 md:max-w-2xl py-8 md:pt-12 lg:py-24 mx-auto flex flex-col px-5 md:px-0 md:flex-row md:p-12">
        <div>
          <p className="md:text-lg lg:text-3xl text-white">The Threshold School is a Co-Educational Private Christian school, consisting of the crèche, Pre-School, Nursery, Primary, College and A- Level for children between the ages of 3 months to 18 years.</p>

          <div className="hidden md:block w-full mt-16 py-8 border-y-2 border-[#E8E8E8]">
            <h1 className="uppercase text-white py-4 md:text-2xl lg:text-3xl font-semibold">Explore</h1>

            <Link 
              href="/curriculum"
              className="flex flex-row gap-2 py-2 lg:py-4 my-0.5 w-fit"
            >
              <span className="text-white md:text-base lg:text-xl uppercase font-medium font-body">Curriculum</span>
              <Image 
                src="/icons/arrow-up-right-white.svg"
                width={20}
                height={20}
                alt="Arrow logo"
              />
            </Link>


            <Link 
              href="/boarding"
              className="flex flex-row gap-2 py-2 lg:py-4 my-0.5 w-fit"
            >
              <span className="text-white md:text-base lg:text-xl uppercase font-medium font-body">BOARDING AT T.T.C</span>
              <Image 
                src="/icons/arrow-up-right-white.svg"
                width={20}
                height={20}
                alt="Arrow logo"
              />
            </Link>


            <Link 
              href="/admissions"
              className="flex flex-row gap-2 py-2 lg:py-4 my-0.5 w-fit"
            >
              <span className="text-white md:text-base lg:text-xl uppercase font-medium font-body">ADMISSIONS</span>
              <Image 
                src="/icons/arrow-up-right-white.svg"
                width={20}
                height={20}
                alt="Arrow logo"
              />
            </Link>


            <Link 
              href="/college"
              className="flex flex-row gap-2 py-2 lg:py-4 my-0.5 w-full"
            >
              <span className="text-white md:text-base lg:text-xl uppercase font-medium font-body">THE THRESHOLD COLLEGE</span>
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
          <p className="md:text-lg lg:text-3xl text-white">As a Christian school, we believe every child is endowed with innate abilities to learn, excel, and express their uniqueness. We provide a safe, stimulating environment where children grow into healthy, responsible, respectful, tolerant, and confident individuals with an appreciation for the arts.</p>
        </div>

        <div className="md:hidden w-full mt-16 py-8 border-y-2 border-[#E8E8E8]">
            <h1 className="uppercase text-white py-4 md:text-2xl lg:text-3xl font-semibold">Explore</h1>

            <Link 
              href="/curriculum"
              className="flex flex-row gap-2 py-2 lg:py-4 my-0.5 w-fit"
            >
              <span className="text-white md:text-base lg:text-xl uppercase font-medium font-body">Curriculum</span>
              <Image 
                src="/icons/arrow-up-right-white.svg"
                width={20}
                height={20}
                alt="Arrow logo"
              />
            </Link>


            <Link 
              href="/boarding"
              className="flex flex-row gap-2 py-2 lg:py-4 my-0.5 w-fit"
            >
              <span className="text-white md:text-base lg:text-xl uppercase font-medium font-body">BOARDING AT T.T.C</span>
              <Image 
                src="/icons/arrow-up-right-white.svg"
                width={20}
                height={20}
                alt="Arrow logo"
              />
            </Link>


            <Link 
              href="/admissions"
              className="flex flex-row gap-2 py-2 lg:py-4 my-0.5 w-fit"
            >
              <span className="text-white md:text-base lg:text-xl uppercase font-medium font-body">ADMISSIONS</span>
              <Image 
                src="/icons/arrow-up-right-white.svg"
                width={20}
                height={20}
                alt="Arrow logo"
              />
            </Link>


            <Link 
              href="/college"
              className="flex flex-row gap-2 py-2 lg:py-4 my-0.5 w-full"
            >
              <span className="text-white md:text-base lg:text-xl uppercase font-medium font-body">THE THRESHOLD COLLEGE</span>
              <Image 
                src="/icons/arrow-up-right-white.svg"
                width={20}
                height={20}
                alt="Arrow logo"
              />
            </Link>
          </div>
      </div>


      <div
        className="grid grid-cols-1 md:grid-cols-3 mx-auto md:max-w-3xl lg:max-w-4xl xl:max-w-7xl md:py-12 lg:pb-24 gap-4 p-4 md:p-12 lg:p-0"
      >
        <div>
          <Image 
            src="/images/international/intl-1.png"
            width={426}
            height={430}
            alt="School Images"
          />
        </div>
        <div>
          <Image 
            src="/images/international/intl-2.png"
            width={426}
            height={430}
            alt="School Images"
          />
        </div>
        <div>
          <Image 
            src="/images/international/intl-3.png"
            width={426}
            height={430}
            alt="School Images"
          />
        </div>
        <div>
          <Image 
            src="/images/international/intl-4.png"
            width={426}
            height={430}
            alt="School Images"
          />
        </div>
        <div>
          <Image 
            src="/images/international/intl-5.png"
            width={426}
            height={430}
            alt="School Images"
          />
        </div>
        <div>
          <Image 
            src="/images/international/intl-6.png"
            width={426}
            height={430}
            alt="School Images"
          />
        </div>
      </div>
    </div>
  )
}

export default IntlBody