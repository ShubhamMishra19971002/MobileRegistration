import React from "react";

const Referral = () => {
  return (
    <div class="container  w-screen h-screen grid grid-rows-2">
      <div class=" bg-white-100 flex items-center justify-center">
        <span className="back-arrow"> </span>
        <div className="w-full h-full">
          <img
            className="w-full h-full"
            alt=""
            src={require("../Assets/png/refer.png")}
          />
        </div>
      </div>
      <div class=" bg-white-400 top rounded shadow flex items-center justify-center">
        <div className=" w-full h-full">
          <div className="flex flex-col ">
            <small className="text-lg .subpixel-antialiased  mx-6  my-2 font-bold ">
              How do you recieve your income ?
            </small>
            <small className="text-lg .subpixel-antialiased   mx-6 my-3 ">
              Do You have a referral code ?
            </small>

            <div>
              <input
                type="text"
                id="referal"
                class="mx-6 w-5/6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Referral Code "
                required
              ></input>

              <div className="mx-6 my-2 w-5/6 space-x-0">
                <button
                  type="button"
                  style={{ borderColor: "blue" }}
                  className="bg-white-500   mx-3 w-36  items-center hover:bg-blue-700 text-black font-bold py-2.5 px-0 border border-blue-700 rounded"
                >
                  Skip
                </button>
                {/* bg-blue-500 my-6 py-2.5 lg:px-40 px-28 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-blue rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" */}
                <button
                  type="button"
                  style={{ borderColor: "blue" }}
                  className="bg-blue-500  w-36 items-center hover:bg-blue-700 text-white font-bold py-2.5 px-0 border border-blue-700 rounded "
                >
                  Apply
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>

  );
};

export default Referral;
