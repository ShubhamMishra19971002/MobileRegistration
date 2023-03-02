import React from 'react'

const Card = () => {
    return (
        <div>
            <div className='flex flex-col '>
                <span className="text-lg .subpixel-antialiased  mx-12  font-bold ">
                    Let’s get you started
                </span>
                <span className="text-lg .subpixel-antialiased   mx-12  ">

                    Select your current status
                </span>


            </div>
            <div class="max-w-sm m-3 p-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                {/* <div class=" items-end">
                    <input checked id="default-radio-2" type="radio" value="" name="default-radio"
                        class="mx-72 w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-1 dark:bg-gray-700 dark:border-gray-600" />
                </div> */}
                <div className='flex'>
                    {/* <svg class="w-10 h-10 mb-2 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clip-rule="evenodd"></path><path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path></svg> */}
                    <img
                        className="w-10"

                        alt=""
                        src={require("../Assets/png/salaried.png")}
                    />
                    <h5 class=" mb-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">I'm a Salaried Employee</h5>
                    <input checked id="default-radio-2" type="radio" value="" name="default-radio"
                        class="mx-4 float-right
 w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-1 dark:bg-gray-700 dark:border-gray-600" />

                </div>


                <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Go to this step by step guideline process on how to certify for your weekly benefits:</p>

            </div>

            <div class="max-w-sm m-3 p-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                {/* <div class=" items-end">
    <input checked id="default-radio-2" type="radio" value="" name="default-radio"
        class="mx-72 w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-1 dark:bg-gray-700 dark:border-gray-600" />
</div> */}
                <div className='flex'>
                    {/* <svg class="w-10 h-10 mb-2 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clip-rule="evenodd"></path><path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path></svg> */}
                    <img
                        className="w-10"

                        alt=""
                        src={require("../Assets/png/salaried.png")}
                    />
                    <h5 class=" mb-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">I'm a Salaried Employee</h5>
                    <input checked id="default-radio-2" type="radio" value="" name="default-radio"
                        class="mx-12 float-right
w-5 h-5 text-blue-600 bg-cyan-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-1 dark:bg-gray-700 dark:border-gray-600" />

                </div>


                <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Go to this step by step guideline process on how to certify for your weekly benefits:</p>

            </div>

            <div class="max-w-sm m-3 p-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                {/* <div class=" items-end">
    <input checked id="default-radio-2" type="radio" value="" name="default-radio"
        class="mx-72 w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-1 dark:bg-gray-700 dark:border-gray-600" />
</div> */}
                <div className='flex'>
                    {/* <svg class="w-10 h-10 mb-2 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clip-rule="evenodd"></path><path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path></svg> */}
                    <img
                        className="w-10"

                        alt=""
                        src={require("../Assets/png/salaried.png")}
                    />
                    <h5 class=" mb-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">I'm a Salaried Employee</h5>
                    <input checked id="default-radio-2" type="radio" value="" name="default-radio"
                        class="mx-4 float-right
w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-1 dark:bg-gray-700 dark:border-gray-600" />

                </div>


                <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Go to this step by step guideline process on how to certify for your weekly benefits:</p>

            </div>

        </div>
    )
}

export default Card