import { Link } from 'react-router-dom';
import LogoIcon from '../assets/images/YouthIslamiMovementIcon.jpg';

export default function NavBar() {
    return (
        <header className="text-gray-400 bg-gray-900 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                {/* Logo Section */}
                <Link to="/"
                    className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
                >
                    <img
                        src={LogoIcon}
                        alt="Youth Islami Movement Logo"
                        className="w-10 h-10 text-white  rounded-full"
                    />

                    <span className="ml-3 text-xl">Youth Islami Movement</span>
                </Link>

                <div className="md:ml-auto flex items-center">
                    <Link to="/login">
                        <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
                            Login
                        </button>
                    </Link>
                </div>
            </div>
        </header>
    );
}
