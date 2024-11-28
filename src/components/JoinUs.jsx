import React, { useState } from "react";

export default function JoinUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Display success message
    setSuccessMessage(
      "Your request to join us has been submitted successfully! May Allah (SWT) accept your intention and make you a source of goodness and inspiration for the Ummah. ✨"
    );
    // Clear form inputs
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    // Automatically hide the message after 3 seconds
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  // Check if the submit button should be disabled
  const isSubmitDisabled =
    !formData.name.trim() || !formData.email.trim() || !formData.message.trim();

  return (
    <section className="text-gray-400 bg-gray-900 body-font relative">
      {/* Success Message at the Top */}
      {successMessage && (
        <div className="fixed top-0 left-0 w-full bg-green-500 text-white py-3 text-center font-bold shadow-md z-50">
          {successMessage}
        </div>
      )}

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
          <form className="flex flex-wrap -m-2" onSubmit={handleSubmit}>
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
                  value={formData.name}
                  onChange={handleChange}
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
                  value={formData.email}
                  onChange={handleChange}
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
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-500 h-32 text-base outline-none text-gray-100 py-2 px-4 resize-none transition duration-200 ease-in-out"
                  placeholder="How would you like to contribute?"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="p-2 w-full">
              <button
                type="submit"
                disabled={isSubmitDisabled}
                className={`flex mx-auto text-white py-2 px-8 rounded-lg text-lg transition duration-200 ease-in-out ${
                  isSubmitDisabled
                    ? "bg-gray-700 cursor-not-allowed"
                    : "bg-indigo-500 hover:bg-indigo-600"
                }`}
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
