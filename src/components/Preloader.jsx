import React from "react";
import "./style.css"

function Preloader() {
  return (
    <div className=" h-screen flex justify-center items-center backdrop-blur-sm relative">
      <div className="flex flex-col gap-y-3 justify-center items-center bg-white h-4/6 w-3/12">
        <div className="flex items-center  justify-center ">
          <div className="relative">
            <div className="animate-spin rounded-full h-48 w-48 border-b-4 border-orange-500  "></div>
            <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
              <p className="text-lg font-semibold text-blue-500">
                <img src="/img/agromart-logo.png" alt="" />
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="relative text-center">
            <div className="wavy">
              {["L", "o", "a", "d", "i", "n", "g", ".", ".", "."].map(
                (letter, index) => (
                  <span
                    key={index}
                    className="tracking-widest inline-block text-orange-600 text-xl"
                    style={{
                      animation: "animate 1s ease-in-out infinite",
                      animationDelay: `${0.1 * (index + 1)}s`,
                    }}
                  >
                    {letter}
                  </span>
                )
              )}
            </div>
          </div>
          <style>
            {`
            @keyframes animate {
              0% {
                transform: translateY(0px);
                color: yellow;
                opacity: 0.2;
              }
              20% {
                transform: translateY(-20px);
                color: red;
                opacity: 0.3;
              }
              40%, 100% {
                transform: translateY(0px);
              }
            }
          `}
          </style>
        </div>
        <div className="text-gray-800 font-semibold">
          Connecting Farmers to the Marketplace
        </div>
      </div>
    </div>
  );
}

export default Preloader;
