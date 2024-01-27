import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaGooglePlay,
  FaApple,
} from "react-icons/fa";

function Footer() {
  const CurrentDate = new Date().getFullYear();
  return (
    <div className="min-h-min pt-20">
      {/* Upper Footer Section*/}
      <div className="w-[98%] m-auto grid grid-cols-5 gap-x-5 ">
        {/* POPULAR LOCATIONS */}
        <div>
          <div className="text-Slate-900 text-md font-themeFont">
            POPULAR LOCATIONS
          </div>
          <div className="mt-5 flex flex-col gap-y-1">
            <p className="text-gray-600 hover:text-gray-700 hover:cursor-pointer font-themeFontRegular text-sm">
              Chennai
            </p>
            <p className="text-gray-600 hover:text-gray-700 hover:cursor-pointer font-themeFontRegular text-sm">
              Delhi
            </p>
            <p className="text-gray-600 hover:text-gray-700 hover:cursor-pointer font-themeFontRegular text-sm">
              Mumbai
            </p>
            <p className="text-gray-600 hover:text-gray-700 hover:cursor-pointer font-themeFontRegular text-sm">
              Kolkata
            </p>
            <p className="text-gray-600 hover:text-gray-700 hover:cursor-pointer font-themeFontRegular text-sm">
              Bhopal
            </p>
          </div>
        </div>
        {/* TRENDING LOCATIONS */}
        <div>
          <div className="text-Slate-900 text-md font-themeFont">
            TRENDING LOCATIONS
          </div>
          <div className="mt-5 flex flex-col gap-y-1">
            <p className="text-gray-600 hover:text-gray-700 hover:cursor-pointer font-themeFontRegular text-sm">
              Raisen
            </p>
            <p className="text-gray-600 hover:text-gray-700 hover:cursor-pointer font-themeFontRegular text-sm">
              Bhopal
            </p>
            <p className="text-gray-600 hover:text-gray-700 hover:cursor-pointer font-themeFontRegular text-sm">
              Indore
            </p>
            <p className="text-gray-600 hover:text-gray-700 hover:cursor-pointer font-themeFontRegular text-sm">
              Jabalpur
            </p>
          </div>
        </div>
        {/* ABOUT US */}
        <div>
          <div className="text-Slate-900 text-md font-themeFont">ABOUT US</div>
          <Link to={"/contact-us"} className="mt-5 flex flex-col gap-y-2">
            <p className="text-gray-600 hover:text-gray-700 hover:cursor-pointer font-themeFontRegular text-sm">
              Contact Us
            </p>
          </Link>
          {/* Advertisement plans */}
          <Link
            to={"/advertisement-plans"}
            className="mt-1 flex flex-col gap-y-2"
          >
            <p className="text-gray-600 hover:text-gray-700 hover:cursor-pointer font-themeFontRegular text-sm">
              Advertisement
            </p>
          </Link>
        </div>
        {/* AgroMart */}
        <div>
          <div className="text-Slate-900 text-md font-themeFont">AgroMart</div>
          <div className="mt-5 flex flex-col gap-y-1">
            <p className="text-gray-600 hover:text-gray-700 hover:cursor-pointer font-themeFontRegular text-sm">
              Help
            </p>
            <p className="text-gray-600 hover:text-gray-700 hover:cursor-pointer font-themeFontRegular text-sm">
              Sitemap
            </p>
            <p className="text-gray-600 hover:text-gray-700 hover:cursor-pointer font-themeFontRegular text-sm">
              Legal & Privacy information
            </p>
            <p className="text-gray-600 hover:text-gray-700 hover:cursor-pointer font-themeFontRegular text-sm">
              Vulnerability Disclosure Program
            </p>
          </div>
        </div>
        <div>
          <div className="text-Slate-900 text-md font-themeFont">FOLLOW US</div>
          <div className="mt-5 flex gap-x-5">
            <div>
              <FaFacebookF className="text-lg text-gray-600 hover:text-gray-700 hover:cursor-pointer" />
            </div>
            <div>
              <FaInstagram className="text-lg text-gray-600 hover:text-gray-700 hover:cursor-pointer" />
            </div>
            <div>
              <FaTwitter className="text-lg text-gray-600 hover:text-gray-700 hover:cursor-pointer" />
            </div>
            <div>
              <FaYoutube className="text-lg text-gray-600 hover:text-gray-700 hover:cursor-pointer" />
            </div>
          </div>
          <div className="mt-5 grid grid-cols-2 gap-x-1">
            <button className="flex items-center justify-center gap-x-1 bg-black text-white px-1 py-2 rounded-md border-0 shadow">
              <span>
                <FaGooglePlay className="text-xl" />
              </span>
              <span className="text-sm">Google Play</span>
            </button>
            <button className="flex items-center justify-center gap-x-1 bg-black text-white px-1 py-2 rounded-md border-0 shadow">
              <span>
                <FaApple className="text-xl" />
              </span>
              <span className="text-sm">App Store</span>
            </button>
          </div>
        </div>
      </div>

      {/* Lower Footer Section	 */}
      <div className="bg-slate-900 flex justify-between px-4 py-5">
        <div className="text-sm text-white font-themeFont">Help - Sitemap</div>

        <div className="flex gap-x-1 text-sm text-white">
          <div className="font-themeFont">All rights reserved</div>
          <div className="font-themeFont">© 2023-{CurrentDate}</div>
          <div className="font-themeFont">
            <Link to="/">Agromart</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
