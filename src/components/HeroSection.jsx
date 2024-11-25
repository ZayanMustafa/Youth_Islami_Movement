import { Link } from "react-router-dom"
export default function HeroSection (){
    return (
        <section className="text-gray-400 bg-gray-900 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
      Your Warmly welcome to 
      <br />
      Youth Islami Movement
      </h1>
      <p className="mb-8 leading-relaxed">
      Youth Islami Movement (YIM) is a dynamic platform dedicated to inspiring a generation through Islam.
      We empower young individuals by providing knowledge, promoting community service, and encouraging personal growth,
      all guided by Islamic principles. Our mission is to inspire youth to actively participate in positive change, fostering
      unity, service, and a deeper connection with their faith.
      </p>
      <div className="flex justify-center">
       <Link to="/readmore">
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Read More
        </button>
       </Link>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img
        className="object-cover object-center rounded"
        alt="Logo Of Youth Islami Movement"
        src="./public/Images/YouthIslamiMovement.jpg"
      />
    </div>
  </div>
</section>

    )
}