import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="font-body text-gray-900">
      <section className="relative w-full h-screen sm:h-[60vh] md:h-[70vh] lg:h-[88vh] overflow-hidden">
        <Image
          src="/images/threshold-main-hero.jpg"
          alt="Threshold Schools Hero"
          fill
          className="object-cover object-center"
          priority
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70" />

        {/* Logo */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-20">
          <Image
            src="/images/logo.png"
            alt="Threshold Schools logo"
            width={132}
            height={132}
            className="object-contain"
            priority
          />
        </div>

        
      </section>

      <section className="w-full flex flex-col md:flex-row border-b border-stone-200">
        {/* Headings + Buttons */}
          <div className="md:w-1/2 p-16 md:border-0 md:border-r border-stone-200 flex flex-col md:flex-row gap-8 border-b">
            <Image
              src="/images/international.png"
              alt="Threshold Schools logo"
              width={132}
              height={132}
              className="object-contain"
            />

            <div className="flex flex-col gap-4">
              <p className="font-body uppercase w-2xs text-3xl font-medium">The Threshold International School</p>
    
              <Link href="/international">
                <p className="px-4 w-fit sm:px-6 py-3 sm:py-3 bg-gray-800 hover:bg-gray-950 text-white rounded-md font-body text-sm sm:text-base md:text-lg transition uppercase">
                  Enter Website
                </p>
              </Link>
            </div>
          </div>
          

          <div className="md:w-1/2 p-12 flex flex-col md:flex-row gap-8 md:items-center">
            <Image
              src="/images/logo.png"
              alt="Threshold College logo"
              width={132}
              height={132}
              className="object-contain"
            />

            <div  className="flex flex-col gap-4">
              <p className="font-body uppercase w-2xs text-2xl font-medium">The Threshold College</p>
    
              <Link href="/college">
                <p className="px-4 w-fit sm:px-6 py-3 sm:py-3 bg-gray-800 hover:bg-gray-950 text-white rounded-md font-body text-sm sm:text-base md:text-lg transition uppercase">
                  Enter Website
                </p>
              </Link>
            </div>

          </div>
      </section>


      {/* Info section under hero */}
      <section className="py-8 px-4 sm:py-12 md:py-16 sm:px-6 md:px-8 max-w-3xl lg:max-w-5xl mx-auto">
        <div className="pb-4">
          <h2 className="text-2xl md:text-[40px] uppercase font-body font-medium text-center mb-2">
            The Threshold International Schools
          </h2>
          <div className="w-16 p-0.5 md:p-1 bg-black flex justify-center mx-auto" />
        </div>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed text-center">
          The Threshold School is a Co-Educational Private Christian school, consisting of the crèche, Pre-School, Nursery, Primary, College and A-Level for children between the ages of 3 months to 18 years. It was founded on the 20th of September 2004 by Pastor Bestman and Nkechi Nwoka to provide a balanced comprehensive educational curriculum for full development of children intellectually, spiritually and socially.
        </p>
      </section>

    </main>
  );
}
