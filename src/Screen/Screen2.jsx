import React from "react";

const Screen2 = () => {
    return (


        <div class="container  w-screen h-screen grid grid-rows-3">
            <div class=" bg-cyan-100 flex items-center justify-center h-1/2">
                <span className="back-arrow"> </span>
                <div className="w-full h-full">
                    <img
                        className="w-full h-full"
                        alt=""
                        width="300"
                        height="150"
                        src={require("../Assets/png/Mobile-number.png")}
                    />
                </div>
            </div>
            <div class=" bg-white-400 top rounded shadow flex items-center justify-center h-2/3">
                <div className="flex flex-col items-center">
                    <small className="text-lg bold-500">Enter Your Mobile Number </small>

                    <div>
                        <form>
                            <div class="flex">
                                <button
                                    id="dropdown-button"
                                    data-dropdown-toggle="dropdown"
                                    class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 dark:border-gray-700 dark:text-white rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                                    type="button"
                                >
                                    +91{" "}
                                    <svg
                                        aria-hidden="true"
                                        className="w-4 h-4 ml-1"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clip-rule="evenodd"
                                        ></path>
                                    </svg>
                                </button>

                                <div class="relative w-full">
                                    <input
                                        type="search"
                                        id="search-dropdown"
                                        class="block p-2.5 w-full lg:px-32 z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-100 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                                        placeholder="Search"
                                        required
                                    />
                                </div>
                            </div>
                        </form>
                    </div>

                    <div>
                        <button
                            type="button"
                            style={{ borderColor: "blue" }}
                            className="  .w-max py-2.5 lg:px-40 px-28 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-blue rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                        >
                            Enter Your mobile Number
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Screen2;
