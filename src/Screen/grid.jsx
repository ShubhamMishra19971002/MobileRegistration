import React from 'react'

const Grid = () => {
  return (

    <div class="container  w-screen h-screen grid grid-rows-2">
      <div class="p-12 bg-cyan-100 flex items-center justify-center">
      <span className="back-arrow"> </span>
      <div className="w-full h-full">
          <img
            className="w-full h-full"
            alt=""
            src={require("../Assets/Mpocket.jpg")}
          />
        </div>
      </div>
      <div class="p-12 bg-white-400 top rounded shadow flex items-center justify-center">
      <div className=" w-full h-full">
          <div className="flex flex-col items-center">
            <small className="text-lg bold-500">Sign Up With Mpocket </small>
            <div>
              <button
                type="button"
                style={{ borderColor: "blue" }}
                className="  .w-max py-2.5 lg:px-40 px-28 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-blue rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                Enter Your mobile Number
              </button>
            </div>
            <div>
              <button
                type="button"
                style={{ borderColor: "blue" }}
                className="  .w-max py-2.5 lg:px-40 px-28 mr-2 mb-2 text-center inline-flex items-center text-sm font-medium text-gray-900 focus:outline-none bg-blue rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                <svg
                  class="w-4 h-4 mr-2 -ml-1"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="google"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 488 512"
                >
                  <path
                    fill="currentColor"
                    d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                  ></path>
                </svg>
                <span className="inline-flex ">Continue with Google</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Grid