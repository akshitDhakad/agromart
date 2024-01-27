import React, { useState } from "react";
import Footer from "./Footer";
import SellerNavbar from "./sellerNavbar";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { MdModeEdit } from "react-icons/md";

function SellerPofile() {
  const [products, setProducts] = useState(true);
  return (
    <div className="flex flex-col min-h-screen">
      <SellerNavbar products={products} setProducts={setProducts} />
      <div className="m-auto w-[98%]  p-2 my-2 flex-grow">
        <div className="bg-white py-10 px-5 shadow border-b-2">
          <form>
            <div className="space-y-12">
              <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-center text-lg font-themeFont font-semibold leading-7 text-gray-900">
                  Personal Information
                </h2>
                <div className="col-span-full text-center">
                  {/* <label
                  htmlFor="photo"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Photo
                </label> */}
                  <div className="mt-2 flex items-center gap-x-3 justify-center">
                    <UserCircleIcon
                      className="h-24 w-24 text-gray-300 "
                      aria-hidden="true"
                    />
                    <button
                      type="button"
                      className="flex items-center justify-center gap-x-1 rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    >
                      <span>
                        <MdModeEdit className="text-lg" />
                      </span>
                      <span>Change</span>
                    </button>
                  </div>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  {/* First Name  */}
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      First name ...<span className="text-red-500">*</span>
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        placeholder="Enter Your First Name"
                        required
                        autoComplete="given-name"
                        className="w-full py-3 px-5 border-b-2 outline-0 font-themeFontRegular shadow-lg bg-slate-100"
                      />
                    </div>
                  </div>
                  {/* Last Name  */}
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Last name<span className="text-red-500">*</span>
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        placeholder="Enter Your Last Name"
                        required
                        autoComplete="family-name"
                        className="w-full py-3 px-5 border-b-2 outline-0 font-themeFontRegular shadow-lg bg-slate-100"
                      />
                    </div>
                  </div>
                  {/* Email Address  */}
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter Your Email Address..."
                        autoComplete="email"
                        className="w-full py-3 px-5 border-b-2 outline-0 font-themeFontRegular shadow-lg bg-slate-100"
                      />
                    </div>
                  </div>
                  {/* Contact Number  */}
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="contact-number"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Contact Number<span className="text-red-500">**</span>
                    </label>
                    <div className="mt-2">
                      <input
                        id="contact-number"
                        name="contact-number"
                        type="number"
                        maxLength={10}
                        minLength={10}
                        required
                        placeholder="Enter Your Contact Number..."
                        autoComplete="email"
                        className="w-full py-3 px-5 border-b-2 outline-0 font-themeFontRegular shadow-lg bg-slate-100"
                      />
                    </div>
                  </div>
                  {/* Country  */}
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Country
                    </label>
                    <div className="mt-2">
                      <select
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        className="w-full py-3 px-5 border-b-2 outline-0 font-themeFontRegular shadow-lg bg-slate-100"
                      >
                        <option>India</option>
                      </select>
                    </div>
                  </div>
                  {/* State  */}
                  <div className="col-span-full">
                    <label
                      htmlFor="street-address"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Street /House address
                      <span className="text-red-500">*</span>
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="street-address"
                        id="street-address"
                        placeholder="Enter Your House Address ...."
                        required
                        autoComplete="street-address"
                        className="w-full py-3 px-5 border-b-2 outline-0 font-themeFontRegular shadow-lg bg-slate-100"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2 sm:col-start-1">
                    <label
                      htmlFor="city"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      City / Tehsil / District
                      <span className="text-red-500">*</span>
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="city"
                        placeholder="Enter Your City/Tehsil/ District Name ..."
                        id="city"
                        required
                        autoComplete="address-level2"
                        className="w-full py-3 px-5 border-b-2 outline-0 font-themeFontRegular shadow-lg bg-slate-100"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="region"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      State / Province<span className="text-red-500">*</span>
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="region"
                        id="region"
                        placeholder="Enter Your State/Province Name ..."
                        required
                        autoComplete="address-level1"
                        className="w-full py-3 px-5 border-b-2 outline-0 font-themeFontRegular shadow-lg bg-slate-100"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="postal-code"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      ZIP / Postal / Area Pin code
                      <span className="text-red-500">*</span>
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="postal-code"
                        id="postal-code"
                        placeholder="Enter Your ZIP/Postal/Area Pin Code ..."
                        required
                        autoComplete="postal-code"
                        className="w-full py-3 px-5 border-b-2 outline-0 font-themeFontRegular shadow-lg bg-slate-100"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
              <button
                type="button"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SellerPofile;
