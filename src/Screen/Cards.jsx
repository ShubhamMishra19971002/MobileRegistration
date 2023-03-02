import React from 'react'

const Cards = () => {
    return (
       
       
       <div>
         <small className="text-lg text-gray-600 subpixel-antialiased  grid grid-rows-2 mx-6  my-2 font-bold ">
            Lets Get Started
            </small>

            <div className="z-10  bg-white divide-y divide-gray-100 rounded-lg shadow  dark:bg-gray-700 dark:divide-gray-600"
             data-popper-placement="top"
              >
                <ul class="p-3 space-y-1 h-screen  w-screen text-sm grid text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHelperRadioButton">
              <li>
                <div class="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                  <div class="flex items-center h-5">
                      <input id="helper-radio-4" name="helper-radio" type="radio" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                  </input>
                  </div>
                  <div class="ml-2 text-sm">
                      <label  class="font-medium text-gray-900 dark:text-gray-300">
                        <div>Individual</div>
                        <p id="helper-radio-text-4" class="text-xs font-normal text-gray-500 dark:text-gray-300">Some helpful instruction goes over here.</p>
                      </label>
                  </div>
                </div>
              </li>
              <li>
                <div class="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                  <div class="flex items-center h-5">
                      <input id="helper-radio-5" name="helper-radio" type="radio" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                  </input>
                  </div>
                  <div class="ml-2 text-sm">
                      <label class="font-medium text-gray-900 dark:text-gray-300">
                        <div>Company</div>
                        <p id="helper-radio-text-5" class="text-xs font-normal text-gray-500 dark:text-gray-300">Some helpful instruction goes over here.</p>
                      </label>
                  </div>
                </div>
              </li>
              <li>
                <div class="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                  <div class="flex items-center h-5">
                      <input id="helper-radio-6" name="helper-radio" type="radio" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                  </input>
                  </div>
                  <div class="ml-2 text-sm">
                      <label class="font-medium text-gray-900 dark:text-gray-300">
                        <div>Non profit</div>
                        <p id="helper-radio-text-6" class="text-xs font-normal text-gray-500 dark:text-gray-300">Some helpful instruction goes over here.</p>
                      </label>
                  </div>
                </div>
              </li>
            </ul>
            </div>
        </div>
        /* <div  class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-60 dark:bg-gray-700 dark:divide-gray-600" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top" style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(522.5px, 6119.5px, 0px);">
            <ul class="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHelperRadioButton">
              <li>
                <div class="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                  <div class="flex items-center h-5">
                      <input id="helper-radio-4" name="helper-radio" type="radio" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                  </input>
                  </div>
                  <div class="ml-2 text-sm">
                      <label  class="font-medium text-gray-900 dark:text-gray-300">
                        <div>Individual</div>
                        <p id="helper-radio-text-4" class="text-xs font-normal text-gray-500 dark:text-gray-300">Some helpful instruction goes over here.</p>
                      </label>
                  </div>
                </div>
              </li>
              <li>
                <div class="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                  <div class="flex items-center h-5">
                      <input id="helper-radio-5" name="helper-radio" type="radio" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                  </input>
                  </div>
                  <div class="ml-2 text-sm">
                      <label class="font-medium text-gray-900 dark:text-gray-300">
                        <div>Company</div>
                        <p id="helper-radio-text-5" class="text-xs font-normal text-gray-500 dark:text-gray-300">Some helpful instruction goes over here.</p>
                      </label>
                  </div>
                </div>
              </li>
              <li>
                <div class="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                  <div class="flex items-center h-5">
                      <input id="helper-radio-6" name="helper-radio" type="radio" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                  </input>
                  </div>
                  <div class="ml-2 text-sm">
                      <label class="font-medium text-gray-900 dark:text-gray-300">
                        <div>Non profit</div>
                        <p id="helper-radio-text-6" class="text-xs font-normal text-gray-500 dark:text-gray-300">Some helpful instruction goes over here.</p>
                      </label>
                  </div>
                </div>
              </li>
            </ul>
        </div> */

    )
}

export default Cards
