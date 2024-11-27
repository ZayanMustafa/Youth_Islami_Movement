import LogoIcon from '../assets/images/YouthIslamiMovementIcon.jpg';
import GoogleIcon from '../assets/images/Google.png';
export default function RegisterForm() {
  return (
    <>
      <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 bg-gray-900">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Logo of Youth Islami Movement"
            src={LogoIcon}
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-6 text-center text-2xl font-bold tracking-tight text-gray-200">
            Create a New Account
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm bg-gray-800 p-6 rounded-lg shadow-lg">
          <button
            className="flex w-full items-center justify-center gap-2 rounded-md bg-indigo-500 mb-4 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <img
              src= { GoogleIcon}
              alt="Google Icon"
              className="w-5 h-5"
            />
            Sign in with Google
          </button>
          <span className="block text-center text-gray-400 text-xs mb-4">OR</span>
          <h3 className="mb-4 text-center text-gray-200 text-sm font-medium bg-indigo-500 rounded-md py-1">
            Fill This Form
          </h3>
          <form action="#" method="POST" className="space-y-4">
            {/* Full Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                placeholder="Enter your full name"
                className="mt-1 block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-gray-700 placeholder:text-gray-500 focus:ring-2 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="Enter your email"
                className="mt-1 block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-gray-700 placeholder:text-gray-500 focus:ring-2 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                autoComplete="new-password"
                placeholder="Enter a secure password"
                className="mt-1 block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-gray-700 placeholder:text-gray-500 focus:ring-2 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-300">
                Confirm Password
              </label>
              <input
                id="confirm-password"
                name="confirm-password"
                type="password"
                required
                placeholder="Re-enter your password"
                className="mt-1 block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-gray-700 placeholder:text-gray-500 focus:ring-2 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Register
              </button>
            </div>
          </form>

          {/* Already have an account? */}
          <p className="mt-6 text-center text-sm text-gray-400">
            Already have an account?{' '}
            <a
              href="/login"
              className="font-semibold text-indigo-400 hover:text-indigo-300"
            >
              Sign in here
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
