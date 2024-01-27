import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";



export default function Advertisement() {
  return (
    <div className="">
      <Navbar />
      <div className="bg-white w-[98%] m-auto my-2 px-5 py-5">
        <div className="flex flex-col items-center justify-center min-h-screentext-gray-700  md:p-20">
          <h2 className="text-2xl font-bold font-themeFont">
            Our Advertisement Plans
          </h2>
          <p className="my-5 font-themeFontRegular text-justify justify-center-last">
            Expand Your Business Horizons and Achieve New Heights of Success
            with Our Comprehensive Advertising Solutions. Our Customized Plans
            are Specifically Designed to Cater to Your Unique Marketing Needs,
            Ensuring Maximum Reach and Impact. Explore a Range of Options
            Tailored to Different Budgets and Goals, and Let Us Help You Craft a
            Powerful Advertising Strategy That Drives Growth and Enhances Your
            Brand Visibility.
          </p>

          {/* <!-- Component Start --> */}
          <div className="flex flex-wrap items-center justify-center w-full max-w-5xl mt-8">
            {/* Tile 1 */}
            <div className="flex flex-col flex-grow mt-8 overflow-hidden bg-white rounded-lg shadow-lg">
              <div className="flex flex-col items-center p-10 bg-blue-800 text-white">
                <span className="font-semibold">Prepaid Plans</span>
                <div className="flex items-center">
                  <span className="text-3xl">₹</span>
                  <span className="text-5xl font-bold">500</span>
                  <span className="text-2xl text-white">/mo</span>
                </div>
              </div>
              <div className="p-10">
                <ul>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-600 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span className="ml-2">Website Advertisement</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-600 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span className="ml-2">Robe</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-600 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span className="ml-2">Insurance</span>
                  </li>
                </ul>
              </div>
              <div className="flex px-10 pb-10 justfy-center">
                <button className="flex items-center justify-center w-full h-12 px-6 text-sm uppercase bg-blue-600 text text-white rounded-lg">
                  Join now
                </button>
              </div>
            </div>

            {/* <!-- Tile 2 --> */}
            <div className="z-10 flex flex-col flex-grow mt-8 overflow-hidden transform bg-white rounded-lg shadow-xl md:scale-110">
              <div className="flex flex-col items-center p-10 bg-blue-900 text-white">
                <span className="font-semibold text-3xl">Master Plan</span>
                <div className="flex items-center">
                  <span className="text-3xl">₹</span>
                  <span className="text-6xl font-bold">1000</span>
                  <span className="text-2xl text-white">/mo</span>
                </div>
              </div>
              <div className="p-10">
                <ul>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-600 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span className="ml-2 italic">Mobile Messages</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-600 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span className="ml-2">Website Advertisement</span>
                  </li>

                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-600 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span className="ml-2">Utility belt</span>
                  </li>
                </ul>
              </div>

              <div className="flex px-10 pb-10 justfy-center">
                <button className="flex items-center justify-center w-full h-12 px-6 text-sm uppercase bg-blue-600 text-white rounded-lg">
                  Join now
                </button>
              </div>
            </div>

            {/* <!-- Tile 3 --> */}
            <div className="flex flex-col flex-grow overflow-hidden bg-white rounded-lg shadow-lg mt-19">
              <div className="flex flex-col items-center p-10 bg-blue-800 text-white">
                <span className="font-semibold">Jedi Master</span>
                <div className="flex items-center">
                  <span className="text-3xl">₹</span>
                  <span className="text-5xl font-bold">99</span>
                  <span className="text-2xl text-white">/mo</span>
                </div>
              </div>
              <div className="p-10">
                <ul>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-600 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span className="ml-2 italic">Jedi Knight +</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-600 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span className="ml-2">Sit on council</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-600 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span className="ml-2">Stock options</span>
                  </li>
                </ul>
              </div>
              <div className="flex px-10 pb-10 justfy-center">
                <button className="flex items-center justify-center w-full h-12 px-6 text-sm uppercase bg-blue-600 rounded-lg text-white">
                  Join now
                </button>
              </div>
            </div>
          </div>

          {/* <!-- Component End  --> */}
        </div>
        <div className="mb-5">
          <h2 className="text-black font-bold text-2xl text-center">Terms and Condition Apply</h2>
        </div>
        <div className="">
          <span className="font-bold">Note* : </span>
          <span
            className="text-gray-800 For those who wish to have their advertisements displayed for
            extended periods, please note that the rates will be adjusted
            accordingly. This approach is beneficial for sustained visibility
            and prolonged audience engagement, helping to build a stronger brand
            presence over time."
          >
            If you are looking to run a quick, impactful campaign, we offer
            short-term advertising at cost-effective rates. This option is
            perfect for promoting time-sensitive offers or events.
          </span>
        </div>
        <div className="my-2">
          <span className="font-bold">Note* : </span>
          <span className="text-gray-800 font-themeFontRegular ">
            For those who wish to have their advertisements displayed for
            extended periods, please note that the rates will be adjusted
            accordingly. This approach is beneficial for sustained visibility
            and prolonged audience engagement, helping to build a stronger brand
            presence over time.
          </span>
        </div>
      </div>
      <Footer />
    </div>
  );
}
