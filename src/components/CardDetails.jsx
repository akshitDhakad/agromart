import React from 'react'
import { FaWhatsapp } from "react-icons/fa6";

function CardDetails({ visiableCard, setvisiableCard }) {


  return (
    <div className="fixed inset-0 shadow-lg bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center">
      <div className="relative bg-white h-4/5 w-5/6 rounded-lg shadow-lg p-2 overflow-y-scroll">
        <div className="grid grid-cols-3 gap-x-3 w-full h-full ">
          {/* Images section */}
          <div className="bg-slate-100 col-span-2 row-span-3 grid grid-cols-3 gap-x-5 gap-y-2 p-2 rounded-lg w-full h-full">
            <div className="col-span-2 row-span-3 full">
              <img
                className="object-cover h-full w-full bg-white rounded-lg transition  duration-500 ease-in-out transform hover:scale-105 hover:cursor-pointer shadow-md border border-gray-1300 "
                src="https://images.unsplash.com/photo-1559668772-786155c8cdf2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdoZWF0JTIwY3JvcHxlbnwwfHwwfHx8MA%3D%3D"
                alt=""
              />
            </div>
            <div>
              <img
                className="shadow-md border border-gray-600 rounded-lg"
                src="https://media.istockphoto.com/id/965148388/photo/green-ripening-soybean-field-agricultural-landscape.webp?b=1&s=170667a&w=0&k=20&c=SogoDgaaJ0vOtxnET994Qbh90OKRZmNvFVdMLVeGlmo="
                alt=""
              />
            </div>
            <div>
              <img
                className="shadow-md border border-gray-600 rounded-lg"
                src="https://media.istockphoto.com/id/1421187500/photo/a-field-of-corn-at-dusk.webp?b=1&s=170667a&w=0&k=20&c=ireRQpHoNEHotYxij7Sxj9eP8eTIW6b4tY3iNVVcnD4="
                alt=""
              />
            </div>
            <div>
              <img
                className="shadow-md border border-gray-600 rounded-lg"
                src="https://media.istockphoto.com/id/1402597686/photo/green-small-corn-sprouts-in-cultivated-agricultural-field-low-angle-view-agriculture-and.webp?b=1&s=170667a&w=0&k=20&c=i8W-9rGQgF_DlYd-RvRduYIlH33CK6lT_50qEjWYFxA="
                alt=""
              />
            </div>
          </div>
          {/* Conten section  */}
          <div className="bg-slate-100 flex flex-col justify-between p-2 rounded-lg w-full h-full">
            {/* Product Name  */}
            <div className="text-center">
              <h1 className="text-center text-2xl font-themeFont font-bold">
                Wheat
              </h1>
            </div>
            {/* Product Model Name */}
            <div className="mt-5 w-full p-2 bg-white grid grid-cols-2 items-center">
              <span className="font-themeFontRegular">model Name :</span>
              <span className="text-center">
                <h2 className="text-center text-xl font-themeFont font-bold text-gray-800">
                  Wheat 303
                </h2>
              </span>
            </div>
            {/* Prouct Quantity */}
            <div className="mt-2 w-full p-2 bg-white grid grid-cols-2 items-center">
              <span className="font-themeFontRegular">Arrox Quantity :</span>
              <span className="text-center">
                <h2 className="text-center text-xl font-themeFont font-bold text-gray-800">
                  25 Quiental
                </h2>
              </span>
            </div>
            {/* Product Price */}
            <div className="mt-2 w-full p-2 bg-white grid grid-cols-2 items-center">
              <span className="font-themeFontRegular">
                Price/100Kg(per Quiental):
              </span>
              <span className="text-center">
                <h2 className="text-center text-xl font-themeFont font-bold text-gray-800">
                  ₹ 2150
                </h2>
              </span>
            </div>
            {/* Product Address */}
            <div className="mt-2 w-full p-2 bg-white grid grid-cols-2 items-center">
              <span className="font-themeFontRegular">address :</span>
              <span className="text-center">
                <h2 className="text-center text-sm font-themeFontRegulartext-gray-800 flex-grow">
                  kaniwada Raisen Raisen, M.P
                </h2>
              </span>
            </div>
            {/* Call Button  */}
            <button className="mt-2 w-full p-2 flex items-center justify-center gap-x-5 bg-blue-600 text-white ">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>
              </span>
              <span className="text-lg font-themeFontRegular font-bold">
                Call Now
              </span>
            </button>
            {/* WhatsApp button */}
            <button className="mt-2 w-full p-2 flex items-center justify-center gap-x-5 bg-green-600 text-white ">
              <span>
                <FaWhatsapp className="text-2xl" />
              </span>
              <span className="text-lg font-themeFontRegular font-bold">
                WhatsApp Me
              </span>
            </button>
          </div>
        </div>
        <div
          onClick={() => setvisiableCard(!visiableCard)}
          className="absolute top-1 right-1  bg-white bg-opacity-50 backdrop-blur-sm hover:cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default CardDetails