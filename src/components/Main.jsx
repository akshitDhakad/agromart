import React, { useState } from "react";
import Card from './card';
import CardDetails from './CardDetails';
import Sidebar from "./Sidebar";



function Main() {
  const [visiableCard, setvisiableCard] = useState(false);
  const [visiableFilter, setvisiableFilter] = useState(false);
  const sideBarCss =
    "fixed inset-0 shadow-lg bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center";
  const sideBarCssContent =
    "relative bg-white h-4/5 w-2/6 rounded-lg shadow-lg px-2 py-5 overflow-y-scroll";

  const Content =()=>{
    return(
      <div className="my-5 bg-slate-100 h-full">
          Hello World
      </div>
    )
  }

  return (
    <div className="relative w-full min-h-screen  gap-4 my-2 shadow">
      <div className="flex justify-end items-center bg-white">
        <button
          onClickCapture={() => setvisiableFilter(!visiableFilter)}
          className="flex items-center rounded-md px-3 py-1 border text-gray-500 border-gray-400 "
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
              />
            </svg>
          </span>
          <span>Filters</span>
        </button>
      </div>
      <div className="col-span-3 grid grid-cols-5 gap-x-5  gap-y-10 bg-white p-2 ">
        <div onClick={() => setvisiableCard(!visiableCard)}>
          <Card />
        </div>
      </div>
      {visiableCard ? (
        <div className="absolute top-0">
          {
            <CardDetails
              setvisiableCard={setvisiableCard}
              visiableCard={visiableCard}
            />
          }
        </div>
      ) : null}
      {visiableFilter ? (
        <div className="absolute top-0">
          <Sidebar
            sideBarCss={sideBarCss}
            sideBarCssContent={sideBarCssContent}
            title={"Filter"}
            Content={<Content />}
          />
        </div>
      ) : null}
    </div>
  );
}

export default Main