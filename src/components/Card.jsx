import React, { useState, useEffect } from "react";


function Card({product}) {
  const [Verified, setVerified] = useState(false);
  const productName = product.productName.split(" ").slice(0, 6).join(" ");

  useEffect(() => {
    if (product.verified) {
      setVerified(true);
    }
  })

  return (
    <div className="bg-white border border-1 rounded-lg  h-[250px] w-[200px] p-2 shadow-md">
      <div className="h-[80%] relative flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img
          className="object-cover h-full w-full bg-white rounded-lg transition  duration-500 ease-in-out transform hover:scale-105 hover:cursor-pointer"
          src={`${product.imageUrl[0]}`}
          alt=""
        />
        {Verified ? (
          <div className="absolute top-2 right-[-8px] flex justify-center items-center bg-green-700 p-1">
            <span className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                />
              </svg>
            </span>
            <span className="text-sm text-white font-themeFontRegular">
              Verified
            </span>
          </div>
        ) : null}
      </div>
      <div className="my-2">
        <div className="grid grid-cols-2">
          <div className=" font-themeFontRegular">{(product.productName).slice(0,6)}</div>
          <div className="text-end flex justify-end items-center">
            <span className="text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
            </span>
            <span className=" font-themeFontRegular">Raisen,M.P</span>
          </div>
          <div className=" font-themeFontRegular"></div>
          <div>
            <p className="text-end text-xs text-gray-700 font-themeFontRegular">
              Jan 20
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
