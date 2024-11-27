import { Link } from "react-router-dom";
import Caligraply from '../assets/images/Caligraphy.jpg';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-900 text-gray-200 px-6">
      <h1 className="text-5xl font-extrabold text-indigo-500 mb-4">
        404 - Page Not Found
      </h1>
      <p className="text-xl font-medium text-center max-w-md">
        "Perhaps you were looking for something, but Allah guides to the straight path whom He wills." 
        <br />
        <span className="text-indigo-400">[Qur'an 2:213]</span>
      </p>
      <p className="mt-4 text-gray-400 text-center">
        The page you’re looking for doesn’t exist. Let’s find our way back to the right path.
      </p>
      <Link to="/">
        <button className="mt-6 px-6 py-3 rounded-md bg-indigo-600 text-white text-lg font-semibold hover:bg-indigo-500 shadow-lg">
          Go Back to Home
        </button>
      </Link>
      <div className="mt-8">
        <img
          src={Caligraply}
          alt="Islamic Calligraphy with a Crescent Moon"
          className="max-w-xs"
        />
      </div>
    </div>
  );
}
