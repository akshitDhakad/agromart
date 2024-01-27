import React from "react";

function Certificates() {
  return (
    <div>
      <div className="grid grid-cols-4 justify-items-center items-center bg-white shadow-md">
        <div className="h-40 w-40 object-cover ">
          <img
            className="h-full w-full transition duration-500 ease-in-out transform hover:scale-110 hover:cursor-pointer"
            src="https://cdn.svgator.com/assets/landing-pages/static/common/61354450-0-Badge-ProductHunt.svg"
            alt="Argomart Product Hunt Badge"
          />
        </div>
        <div className="h-30 w-24 object-cover">
          <img
            className="h-full w-full transition duration-500 ease-in-out transform hover:scale-110 hover:cursor-pointer"
            src="https://cdn.svgator.com/assets/landing-pages/static/common/61354462-0-Badge-SoftwareSugges.svg"
            alt="Argomart Product Hunt Badge"
          />
        </div>
        <div className="h-30 w-24 object-cover">
          <img
            className="h-full w-full transition duration-500 ease-in-out transform hover:scale-110 hover:cursor-pointer"
            src="https://cdn.svgator.com/assets/landing-pages/static/common/61354483-0-Badge-ftp.svg"
            alt="Argomart Product Hunt Badge"
          />
        </div>
        <div className="h-40 w-40 object-cover ">
          <img
            className="h-full w-full transition duration-500 ease-in-out transform hover:scale-110"
            src="https://cdn.svgator.com/assets/landing-pages/static/common/61354498-0-Badge-FinancesOnline.svg"
            alt="Argomart Product Hunt Badge"
          />
        </div>
      </div>
      <div>
        <div className="text-3xl font-bold font-themFont text-center mt-5 ">
          Trusted by 1000+ Farmers
        </div>
        <div className="text-center mt-5">
          <p className="text-gray-600 font-themeFontRegular text-sm">
            We have been trusted by more than 1000+ Farmers and Traders across
            the globe and we are still counting.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Certificates;
