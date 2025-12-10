import Image from "next/image"
import Link from "next/link"

const FooterCol = () => {
  return (
    <div
      className="w-full"
    >
      <div className='lg:max-w-7xl mx-auto md:py-16'>
        <div className="p-4 md:p-0">
          <div className="pb-10">
            <h1 className="font-semibold pb-2">OUR PARTNERS</h1>
            <div className="w-12 p-0.5 bg-black"/>
          </div>

          <div
            className="py-4 flex md:flex-row gap-12 w-full items-center"
          >
            <div>
              <Image 
                src="/icons/footer/waec.png"
                width={150}
                height={150}
                alt="WAEC icon"
              />
            </div>

            <div>
              <Image 
                src="/icons/footer/cobis.png"
                width={152}
                height={56}
                alt="Cobis icon"
              />
            </div>

            <div>
              <Image 
                src="/icons/footer/cb.png"
                width={152}
                height={56}
                alt="WAEC icon"
                className="w-16 h-auto md:w-auto"
              />
            </div>

            <div>
              <Image 
                src="/icons/footer/bc.png"
                width={250}
                height={56}
                alt="British Council icon"
              />
            </div>

          </div>
        </div>


        <div className="py-10 flex flex-col md:flex-row gap-10 md:gap-16 p-4 md:p-0">
          <div className="flex flex-col">
            <div className="pb-5">
              <h1 className="font-semibold pb-2 uppercase">about us</h1>
              <div className="w-12 p-0.5 bg-black"/>
            </div>

            <div className="flex flex-col gap-3 text-[#5B5A5A]"> 
              <div>
                <Link href="/founder">
                  <span className="uppercase">founder&apos;s message</span>
                </Link>
              </div>

              <div>
                <Link href="/ceo">
                  <span className="uppercase">ceo&apos;s message</span>
                </Link>
              </div>

              <div>
                <Link href="/principal">
                  <span className="uppercase">principal&apos;s message</span>
                </Link>
              </div>

              <div>
                <Link href="/facilities">
                  <span className="uppercase">school facilities</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="pb-5">
              <h1 className="font-semibold pb-2 uppercase">academics</h1>
              <div className="w-12 p-0.5 bg-black"/>
            </div>

            <div className="flex flex-col gap-3 text-[#5B5A5A]"> 
              <div>
                <Link href="/boarding">
                  <span className="uppercase">boarding at the threshold</span>
                </Link>
              </div>

              <div>
                <Link href="/curriculum">
                  <span className="uppercase">curriculum</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="pb-5">
              <h1 className="font-semibold pb-2 uppercase">school</h1>
              <div className="w-12 p-0.5 bg-black"/>
            </div>

            <div className="flex flex-col gap-3 text-[#5B5A5A]"> 
              <div>
                <Link href="/portal">
                  <span className="uppercase">school portal</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="pb-5">
              <h1 className="font-semibold pb-2 uppercase">contact</h1>
              <div className="w-12 p-0.5 bg-black"/>
            </div>

            <div className="flex flex-col gap-3 text-[#5B5A5A]"> 
              <div>
                <Link href="/contact">
                  <span className="uppercase">contact us</span>
                </Link>
              </div>   
            </div>
          </div>
        </div>

        <div>
          <Image 
            src="/images/logo.png"
            alt="The Threshold School logo"
            width={100}
            height={100}
          />
        </div>

        
      </div>
        <div className="w-full text-center text-white bg-[#534D7D] py-4">
          <span className="font-body">The Threshold International School © 2025</span>
        </div>
    </div>
  )
}

export default FooterCol