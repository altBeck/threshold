import Link from "next/link"
import Image from "next/image"

const Admission = () => {
  return (
    <div className="w-full bg-[#534D7D] py-10 md:py-12 lg:py-20">
      <div className="flex flex-col font-body text-white justify-center mx-auto items-center text-center md:max-w-2xl lg:max-w-3xl pb-5">
        <h1 className="uppercase font-semibold text-xl md:text-2xl lg:text-3xl pb-2">
          admission
        </h1>

        <p className="lg:text-lg p-4 md:p-8 font-light lg:pb-4">The Threshold International Schools has been dedicated to fostering excellence in committed professionals and encourage to provide a balanced comprehensive educational curriculum for full development of children intellectually, spiritually and socially.</p>
      </div>

      <Link 
        href="/admissions"
        className="flex flex-row gap-2 py-3 px-4 rounded-md my-0.5 justify-center w-fit mx-auto bg-white"
        >
        <span className="text-[#030096] white md:text-base lg:text-xl font-medium font-body">Enquire Now</span>
        <Image 
          src="/icons/arrow-up-right.svg"
          width={20}
          height={20}
          alt="Arrow logo"
        />
      </Link>



    </div>
  )
}

export default Admission