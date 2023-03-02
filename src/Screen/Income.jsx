import React from 'react'

const Income = () => {
    return (
        <div>
            <div className='flex flex-col'>
                <span className="text-lg .subpixel-antialiased  mx-12  font-bold ">
                    Let’s get you started
                </span>
                <div className=''>


                    <div class="flex m-1 items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
                        <input id="bordered-radio-1" type="radio" value="" name="bordered-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label for="bordered-radio-1" class="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Default radio</label>
                    </div>
                    <div class="flex items-center m-1 pl-4 border border-gray-200 rounded dark:border-gray-700">
                        <input checked id="bordered-radio-2" type="radio" value="" name="bordered-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label for="bordered-radio-2" class="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Checked state</label>
                    </div>

                    <div className="">
                <button
                  type="button"
                  style={{ borderColor: "blue" }}
                  className="bg-white-500  items-center hover:bg-blue-700 text-black font-bold py-2.5 px-0 border border-blue-700 rounded"
                >
                  Skip
                </button>
                
              </div>
                </div>

            </div>

        </div>
    )
}

export default Income