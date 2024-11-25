export default function Programs (){
    return(
        <section className="text-gray-400 bg-gray-900 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
        Programs by Youth Islami Movement
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
        At Youth Islami Movement, we aim to create a strong bond among the youth
        through engaging and spiritually enriching programs.
      </p>
    </div>
    <div className="flex flex-wrap -m-4">
      {/* Masjid Night */}
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img
            alt="Masjid Night"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="https://dummyimage.com/600x360"
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1">
              SPIRITUAL PROGRAM
            </h2>
            <h1 className="title-font text-lg font-medium text-white mb-3">
              Masjid Night
            </h1>
            <p className="leading-relaxed">
              A night full of prayer, Quran recitation, and engaging Islamic
              discussions to spiritually uplift the youth.
            </p>
          </div>
        </div>
      </div>
      {/* Cricket Match */}
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img
            alt="Cricket Match"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="https://dummyimage.com/601x361"
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1">
              FUTURE PLANNING
            </h2>
            <h1 className="title-font text-lg font-medium text-white mb-3">
              Cricket Match
            </h1>
            <p className="leading-relaxed">
              Upcoming events include a friendly cricket match to build teamwork
              and brotherhood among participants.
            </p>
          </div>
        </div>
      </div>
      {/* Chai Gatherings */}
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img
            alt="Chai Gatherings"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="https://dummyimage.com/603x363"
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1">
              FUTURE PLANNING
            </h2>
            <h1 className="title-font text-lg font-medium text-white mb-3">
              Chai Gatherings
            </h1>
            <p className="leading-relaxed">
              Informal chai gatherings to encourage open dialogue and foster
              connections within the community.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    )
}