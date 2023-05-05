import { Link } from "react-router-dom"

export default function Login() {
  return (
    <>
      <div className="flex items-center min-h-screen bg-gray-50">
        <div className="flex-1 h-full max-w-screen-xl mx-auto bg-white rounded-lg shadow-xl">
          <div className="flex flex-col md:flex-row">

            <div className="h-32 md:h-auto md:w-1/2">
              <img className="object-cover w-full h-full" src="https://source.unsplash.com/user/erondu/1600x900" alt="img" />
            </div>

            <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
              <div className="w-full h-100">
                <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">Welcome Back !</h1>
                <h2 className="text-gray-400">Login your account now</h2>

                <form className="mt-6" action="#" method="POST">
                  <div>
                    <label className="block text-gray-700">Email Address</label>
                    <input type="email" name="" id="email" placeholder="Enter Email Address" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autoFocus autoComplete="false" required />
                  </div>

                  <div className="mt-4">
                    <label className="block text-gray-700">Password</label>
                    <input type="password" name="" id="password" placeholder="Enter Password" minLength="6" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" required />
                  </div>

                  <div className="text-right mt-2">
                    <a href="#" className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">Forgot Password?</a>
                  </div>

                  <button type="submit" className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-[#1F43CF] border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue">
                    Log In
                  </button>
                </form>

                <hr className="my-6 border-gray-300 w-full" />
                
                <button type="button" className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-gray-900 transition-colors duration-150 bg-white border rounded-lg active:bg-gray-100 hover:bg-gray-200 focus:outline-none focus:shadow-outline-blue">
                  <div className="flex items-center justify-center">
                    <svg aria-hidden="true" className="octicon octicon-mark-github" height="24" version="1.1" viewBox="0 0 16 16" width="24">
                    <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                    </svg>
                    <span className="ml-4">
                      Log in with Github
                    </span>
                  </div>
                </button>
                <p className="mt-8 text-center">Don't have an account? <Link to={'/register'} className="text-[#1F43CF] hover:text-blue-700 font-semibold">Sign Up</Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
