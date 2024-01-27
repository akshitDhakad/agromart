import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const navigation = [
  { name: "Dashboard", href: "#", current: false },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-white">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 shadow">
            <div className="flex items-center justify-between h-16">
              {/* Brand  */}
              <div>
                <Link
                  to={"/"}
                  className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"
                >
                  <div className="flex flex-shrink-0 items-center">
                    <img
                      className="h-16 w-auto"
                      src="/img/agromart-logo-bg.png"
                      alt="Agromart"
                    />
                  </div>
                </Link>
              </div>
              {/* Search button  */}
              <div className="-mr-48">
                <div className="shadow-lg  border-b-2 min-w-full ">
                  <form className="flex items-center ">
                    <input
                      type="text"
                      className="border-0 outline-0 px-10 py-2 font-themeFontRegular bg-slate-100"
                      placeholder="Search here ..."
                    />
                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 text-gray-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                        />
                      </svg>
                    </button>
                  </form>
                </div>
              </div>

              <div className="flex justify-between items-center gap-x-8">
                {/* Location   */}
                <div className="relative py-2 flex justify-between gap-x-1 items-center">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-gray-500"
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
                  <span className="text-gray-700 font-themeFont">
                    Raisen,M.P
                  </span>
                </div>
                {/* cart button  */}
                {/* <div className="relative py-2">
                  <div className="t-0 absolute left-3">
                    <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">
                      3
                    </p>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="file: mt-4 h-6 w-6 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>
                </div> */}
                {/* Login button  */}
                <Link
                  to={"/login"}
                  className="flex justify-between gap-x-1 items-center"
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-7 h-7 font-semibold text-gray-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </span>
                  <span className="font-themeFont text-gray-700 hover:text-gray-800">
                    Login
                  </span>
                </Link>
                {/* seller button  */}
                <div className="p-1 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded">
                  <Link
                    to={"/seller-dashboard"}
                    className="px-2 flex justify-between items-center gap-x-1  bg-white"
                  >
                    <span className="text-gray-500">
                      <FaPlus />
                    </span>
                    <span className="text-gray-700 font-themeFont">Seller</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
