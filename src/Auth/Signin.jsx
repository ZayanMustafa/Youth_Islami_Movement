import { Link, useNavigate } from "react-router-dom";
import LogoIcon from '../assets/images/YouthIslamiMovementIcon.jpg';
import GoogleIcon from '../assets/images/Google.png';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";  // Correct import
// import { firebaseApp } from "../firebase";  // Assuming you have initialized Firebase in a separate file.

export default function RegisterForm() {
  const navigate = useNavigate();

  // Initialize Firebase Authentication
  const auth = getAuth(firebaseApp); // Initialize auth using your Firebase app

  const handleSignInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    provider.addScope("https://www.googleapis.com/auth/contacts.readonly");

    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;

        console.log(user, "Google user signed in");

        // Redirect to the main page ("/") after successful sign-in
        navigate("/");  // This will redirect to the homepage
      })
      .catch((error) => {
        console.error("Error during Google Sign-In: ", error.message);
      });
  };

  return (
    <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 bg-gray-900">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          alt="Logo of Youth Islami Movement"
          src={LogoIcon}
          className="mx-auto h-10 w-auto"
        />
        <h2 className="mt-6 text-center text-2xl font-bold tracking-tight text-gray-200">
          Sign in with Google
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm bg-gray-800 p-6 rounded-lg shadow-lg">
        <button
          className="flex w-full items-center justify-center gap-2 rounded-md bg-indigo-500 mb-4 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          onClick={handleSignInWithGoogle}
        >
          <img src={GoogleIcon} alt="Google Icon" className="w-5 h-5" />
          Sign in with Google
        </button>

        {/* Already have an account? */}
        <p className="mt-6 text-center text-sm text-gray-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-semibold text-indigo-400 hover:text-indigo-300"
          >
            Sign in here
          </Link>
        </p>
      </div>
    </div>
  );
}
