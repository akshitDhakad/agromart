import React from "react";
import Sidebar from "./Sidebar";
const people = [
  {
    name: "Leslie Alexander",
    email: "leslie.alexander@example.com",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
  {
    name: "Michael Foster",
    email: "michael.foster@example.com",
    role: "Co-Founder / CTO",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
  {
    name: "Dries Vincent",
    email: "dries.vincent@example.com",
    role: "Business Relations",
    imageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: null,
  },
  {
    name: "Lindsay Walton",
    email: "lindsay.walton@example.com",
    role: "Front-end Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
  {
    name: "Courtney Henry",
    email: "courtney.henry@example.com",
    role: "Designer",
    imageUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
  {
    name: "Tom Cook",
    email: "tom.cook@example.com",
    role: "Director of Product",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: null,
  },
];

const Header =()=>{
  return (
    <div className="my-10 flex flex-col justify-between items-center">
      <div>
        <div className="shadow-lg  border-b-2 min-w-full ">
          <form className="flex items-center ">
            <input
              type="text"
              className="border-0 outline-0 px-10 py-2 font-themeFontRegular bg-slate-100"
              placeholder="Search here ..."
              required
            />
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 "
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
      <div className="my-10 bg-slate-100 w-[90%] p-5 shadow-md text-gray-800">
        <form action="">
          <div className="flex items-center gap-x-5 hover:cursor-pointer my-3">
            <input
              id="sortbyName"
              type="checkbox"
              className="hover:cursor-pointer"
            />
            <label
              htmlFor={"sortbyName"}
              className="font-themeFontRegular hover:cursor-pointer"
            >
              sort by Name(A-Z)
            </label>
          </div>
          <div className="flex items-center gap-x-5 hover:cursor-pointer my-3">
            <input
              id="sortbyDistrict"
              type="checkbox"
              className="hover:cursor-pointer"
            />
            <label
              htmlFor="sortbyDistrict"
              className="font-themeFontRegular hover:cursor-pointer"
            >
              sort by District(A-Z)
            </label>
          </div>
          <div></div>
          <div>
            <button className="bg-blue-800 w-full text-white py-2 font-themeFontRegular font-bold">
              Apply
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default function SellerProdct() {
  return (
    <div className="my-2 grid grid-cols-7 gap-x-5 min-h-screen bg-white shadow-md">
      <ul role="list" className="divide-y col-span-5 divide-gray-100">
        {people.map((person) => (
          <li
            key={person.email}
            className="flex justify-between gap-x-6 py-5 shadow-md my-1 p-2"
          >
            <div className="flex min-w-0 gap-x-4 ">
              <img
                className="h-12 w-12 flex-none rounded-full bg-gray-50"
                src={person.imageUrl}
                alt=""
              />
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  {person.name}
                </p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                  {person.email}
                </p>
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p className="text-sm leading-6 text-gray-900">{person.role}</p>
              {person.lastSeen ? (
                <p className="mt-1 text-xs leading-5 text-gray-500">
                  Last seen{" "}
                  <time dateTime={person.lastSeenDateTime}>
                    {person.lastSeen}
                  </time>
                </p>
              ) : (
                <div className="mt-1 flex items-center gap-x-1.5">
                  <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  </div>
                  <p className="text-xs leading-5 text-gray-500">Online</p>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
      <div className="col-span-2 border shadow-xl">
        <Sidebar title={"Filters"} Content={<Header />} />
      </div>
    </div>
  );
}
