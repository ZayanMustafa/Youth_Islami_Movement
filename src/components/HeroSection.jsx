import { Link } from "react-router-dom"
import LogoIcon from '../assets/images/YouthIslamiMovementIcon.jpg';

export default function HeroSection (){
    return (
      <section className="text-gray-400 bg-gray-900 body-font h-screen">
  <div className="container mx-auto flex flex-wrap h-full">
    {/* Text Section */}
    <div className="w-full md:w-1/2 flex flex-col justify-center px-8">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
        Your Warm Welcome to 
        <br />
        <span className="text-indigo-500">Youth Islami Movement</span>
      </h1>
      <p className="mb-8 leading-relaxed">
        Youth Islami Movement (YIM) is a dynamic platform dedicated to inspiring a generation through Islam.
        We empower young individuals by providing knowledge, promoting community service, and encouraging personal growth,
        all guided by Islamic principles. Our mission is to inspire youth to actively participate in positive change, fostering
        unity, service, and a deeper connection with their faith.
      </p>
      <div className="flex">
        <Link to="/readmore">
          <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Read More
          </button>
        </Link>
      </div>
    </div>

    {/* Image Section */}
    <div className="w-full md:w-1/2 h-full">
      <img
        className="object-cover object-center h-full w-full"
        alt="Logo Of Youth Islami Movement"
        src={LogoIcon} // Ensure this is the correct path to your image
      />
    </div>
  </div>
</section>


    )
}