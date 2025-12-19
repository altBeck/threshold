import Image from 'next/image'

const BoardingBody = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center bg-[#534D7D] py-10 md:py-12 lg:py-20">
        <p className="text-lg max-w-3xl md:text-xl font-body text-white text-center">Our boarding builds on The Threshold College’s tradition of fostering excellence.  Our highly experienced staff offer exceptional pastoral care and academic guidance. The Threshold College accommodation facilities is designed to replicate a home away from home environment, furnished and equipped with private reading tables and lamps, personal wardrobes, air conditioners, flat-screen TV connected for news and other entertainment.</p>
      </div>

      <div>
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex flex-col-reverse md:flex-row md:pt-10">
            
            {/* Text column */}
            <div className="md:w-1/2 w-full flex items-center">
              <div className="max-w-xl px-6 py-6 md:py-0 md:px-12">
                <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold pb-2 text-[#242424]">
                  Dorms  Designed for Growth
                </h1>
                <p className="text-base lg:text-xl leading-relaxed text-[#949494] font-normal">
                Students settle into cozy, thoughtfully furnished rooms that balance comfort, privacy, and study time—with house staff close by to support and guide them.
                </p>
              </div>
            </div>

            {/* Image column */}
            <div className="md:w-1/2 w-full">
              <Image
                src="/images/boarding/dorm-1.png"
                alt="empty dorm"
                width={599}
                height={399}
                className="w-full h-full object-cover"
                priority
              />
            </div>


          </div>

          <div className="flex flex-col md:flex-row md:pt-10">
            
            {/* Image column */}
            <div className="md:w-1/2 w-full">
              <Image
                src="/images/boarding/court.png"
                alt="empty tennis court"
                width={599}
                height={399}
                className="w-full h-full object-cover"
                priority
              />
            </div>

            {/* Text column */}
            <div className="md:w-1/2 w-full flex items-center">
              <div className="max-w-xl px-6 py-6 md:py-0 md:px-12">
                <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold pb-2 text-[#242424]">
                A Court Full of Movement and Momentum
                </h1>
                <p className="text-base lg:text-xl leading-relaxed text-[#949494] font-normal">
                Here, every serve, jump, or sprint is more than play—it’s expression, energy, and learning in motion, all under one dynamic roof.
                </p>
              </div>
            </div>

          </div>


          <div className="flex md:pt-10 flex-col-reverse md:flex-row">

            {/* Text column */}
            <div className="md:w-1/2 w-full flex items-center">
              <div className="max-w-xl px-6 py-6 md:py-0 md:px-12">
                <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold pb-2 text-[#242424]">
                A Gym That Gives The Space to Sweat, Stretch, and Strengthen
                </h1>
                <p className="text-base lg:text-xl leading-relaxed text-[#949494] font-normal">
                From focused workouts to bursts of energy, the gym supports wellness in all forms—encouraging students to challenge themselves and stay active.
                </p>
              </div>
            </div>

            {/* Image column */}
            <div className="md:w-1/2 w-full">
              <Image
                src="/images/boarding/gym.png"
                alt="Students in a gym"
                width={720}
                height={565}
                className="w-full h-full object-cover"
                priority
              />
            </div>

          </div>


          <div className="flex flex-col md:flex-row md:pt-10">
            
            {/* Image column */}
            <div className="md:w-1/2 w-full">
              <Image
                src="/images/boarding/ball.png"
                alt="Student playing with a football"
                width={599}
                height={399}
                className="w-full h-full object-cover"
                priority
              />
            </div>

            {/* Text column */}
            <div className="md:w-1/2 w-full flex items-center">
              <div className="max-w-xl px-6 py-6 md:py-0 md:px-12">
                <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold pb-2 text-[#242424]">
                  Where Passion Meets the Pitch
                </h1>
                <p className="text-base lg:text-xl leading-relaxed text-[#949494] font-normal">
                On the field, students build more than skills—they develop confidence, teamwork, and grit with every kick, sprint, and shared goal.
                </p>
              </div>
            </div>

          </div>

          <div className="flex flex-col md:flex-row md:pt-10">
            
            {/* Image column */}
            <div className="md:w-1/2 w-full">
              <Image
                src="/images/boarding/books.png"
                alt="Students in the school library"
                width={599}
                height={399}
                className="w-full h-full object-cover"
                priority
              />
            </div>

            {/* Text column */}
            <div className="md:w-1/2 w-full flex items-center">
              <div className="max-w-xl px-6 py-6 md:py-0 md:px-12">
                <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold pb-2 text-[#242424]">
                  Pages That Open Up Possibilities
                </h1>
                <p className="text-base lg:text-xl leading-relaxed text-[#949494] font-normal">
                Our library is a quiet hub where students explore ideas, discover new worlds, and deepen their love for learning.
                </p>
              </div>
            </div>

          </div>

          <div className="flex pt-10 flex-col-reverse md:flex-row">

            {/* Text column */}
            <div className="md:w-1/2 w-full flex items-center">
              <div className="max-w-xl px-6 py-6 md:py-0 md:px-12">
                <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold pb-2 text-[#242424]">
                  Learning Through Every Stir and Sizzle
                </h1>
                <p className="text-base lg:text-xl leading-relaxed text-[#949494] font-normal">
                In our student kitchen, cooking is a chance to learn life skills, explore creativity, and enjoy the simple joy of making something from scratch.
                </p>
              </div>
            </div>

            {/* Image column */}
            <div className="md:w-1/2 w-full">
              <Image
                src="/images/boarding/cook.png"
                alt="Students cooking"
                width={720}
                height={565}
                className="w-full h-full object-cover"
                priority
              />
            </div>

          </div>


          <div className="flex flex-col md:flex-row md:py-10 md:pb-24">
            
            {/* Image column */}
            <div className="md:w-1/2 w-full">
              <Image
                src="/images/boarding/rest.png"
                alt="Students in the school library"
                width={599}
                height={399}
                className="w-full h-full object-cover"
                priority
              />
            </div>

            {/* Text column */}
            <div className="md:w-1/2 w-full flex items-center">
              <div className="max-w-xl px-6 py-6 md:py-0 md:px-12">
                <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold pb-2 text-[#242424]">
                  A Place to Unwind and Just Be
                </h1>
                <p className="text-base lg:text-xl leading-relaxed text-[#949494] font-normal">
                The student lounge is where friends gather, laughter flows, and downtime becomes part of the rhythm of school life.
                </p>
              </div>
            </div>

          </div>

          

        </div>
      </div>
    </div>
  )
}

export default BoardingBody