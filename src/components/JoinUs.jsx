export default function JoinUs() {
  return (
    <section className="text-gray-400 bg-gray-900 body-font relative">
      <div className="container px-5 py-24 mx-auto">
        {/* Section Header */}
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-4xl text-3xl font-bold title-font mb-4 text-white">
            Join Us
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-400">
            Become a part of our journey and work together to make your Akhirah better!
          </p>
        </div>

        {/* Form Section */}
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <form className="flex flex-wrap -m-2">
            {/* Name Input */}
            <div className="p-2 w-1/2">
              <div className="relative">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-400"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-500 text-base outline-none text-gray-100 py-2 px-4 transition duration-200 ease-in-out"
                  placeholder="Your Name"
                />
              </div>
            </div>

            {/* Email Input */}
            <div className="p-2 w-1/2">
              <div className="relative">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-400"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-500 text-base outline-none text-gray-100 py-2 px-4 transition duration-200 ease-in-out"
                  placeholder="Your Email"
                />
              </div>
            </div>

            {/* Message Input */}
            <div className="p-2 w-full">
              <div className="relative">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-gray-400"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-500 h-32 text-base outline-none text-gray-100 py-2 px-4 resize-none transition duration-200 ease-in-out"
                  placeholder="How would you like to contribute?"
                />
              </div>
            </div>

            <div className="p-2 w-full">
              <button
                type="submit"
                className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded-lg text-lg transition duration-200 ease-in-out"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
