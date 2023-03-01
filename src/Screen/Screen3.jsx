import React from 'react'

const Screen3 = () => {
    return (


        <div class="container  w-screen h-screen grid grid-rows-2">
            <div class=" bg-cyan-100 flex items-center justify-center">
                <span className="back-arrow"> </span>
                <div className="w-full h-full">
                    <img
                        className="w-full h-full"
                        alt=""
                        src={require("../Assets/Mpocket.jpg")}
                    />
                </div>
            </div>
            <div class=" bg-white-400 top rounded shadow flex items-center justify-center">
                <div class="mx-auto">
                    <div class="">
                        <div class="w-full">
                            <div class="bg-white h-64 py-3 rounded text-center">
                                <h1 class="text-2xl font-bold">OTP Verification</h1>
                                <div class="flex flex-col mt-4">
                                    <span>Enter the OTP you received at</span>
                                    <span class="font-bold">+91 ******876</span>
                                </div>

                                <div id="otp" class="flex flex-row justify-center text-center px-2 mt-5">
                                    <input class="m-2 border h-10 w-10 text-center form-control rounded" type="text" id="first" maxlength="1" />
                                    <input class="m-2 border h-10 w-10 text-center form-control rounded" type="text" id="second" maxlength="1" />
                                    <input class="m-2 border h-10 w-10 text-center form-control rounded" type="text" id="third" maxlength="1" />
                                    <input class="m-2 border h-10 w-10 text-center form-control rounded" type="text" id="fourth" maxlength="1" />
                                    <input class="m-2 border h-10 w-10 text-center form-control rounded" type="text" id="fifth" maxlength="1" />
                                    <input class="m-2 border h-10 w-10 text-center form-control rounded" type="text" id="sixth" maxlength="1" />
                                </div>

                                <div class="flex justify-center text-center mt-5">
                                    <a class="flex items-center text-blue-700 hover:text-blue-900 cursor-pointer"><span class="font-bold">Resend OTP</span><i class='bx bx-caret-right ml-1'></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )

}

export default Screen3