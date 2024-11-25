import { Link } from 'react-router-dom';
// import image from '../assets/images/YouthIslamiMovementIcon.jpg';
export default function NavBar() {
    return (
      <header className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a
            // href={image}
            className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
          >
            <img
            //   src="./assets/images/YouthIslamiMovementIcon.jpg" // Ensure this path is correct
              alt="Youth Islami Movement Logo"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            />
            <span className="ml-3 text-xl">Youth Islami Movement</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a href="/About" className="mr-5 hover:text-white">
              About
            </a>
            <a href="/Programs" className="mr-5 hover:text-white">
              Activities
            </a>
            <a href="/Team" className="mr-5 hover:text-white">
              Team
            </a>
            <a href="/Contact" className="mr-5 hover:text-white">
              Contact
            </a>
          </nav>
          <Link to={"team"}> Team </Link>
          <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
            Login
          </button>
        </div>
      </header>
    );
  }
  