import React, { useState,useEffect } from "react";
import Card from './card';
import CardDetails from './CardDetails';
import Sidebar from "./Sidebar";
import Preloader from "./Preloader";
// Redux code 
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/productAction";


function Main() {
  const [visiableCard, setvisiableCard] = useState(false);
  const [visiableFilter, setvisiableFilter] = useState(false);
  const [cardDetail ,setCardDetail] = useState({});

  // fetch data from axios
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.data);
  const isFetching = useSelector((state) => state.product.isFetching);
  const error = useSelector((state) => state.product.error);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (isFetching) {
    return (
      <div className="h-full w-full">
        <Preloader />
      </div>
    );
  }

  // content data
  const sideBarCss =
    "fixed inset-0 shadow-lg bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center";
  const sideBarCssContent =
    "relative bg-white h-3/5 w-2/6 rounded-lg shadow-lg px-2 py-5 overflow-y-auto border border-gray-300";

  const Content = () => {
    return (
      <>
        <form action="">
          <div className="my-5 bg-slate-100 h-full rounded-lg p-5">
            <div className="my-2 flex items-center gap-x-2">
              <input
                id="sortByPrice"
                type="radio"
                className="hover:cursor-pointer"
              />
              <label htmlFor="sortByPrice" className="font-themeFontRegular">
                Sort by Price
              </label>
            </div>
            <div className="my-2 flex items-center gap-x-2">
              <input
                id="sortByDate"
                name="sortOption"
                type="radio"
                className="hover:cursor-pointer"
              />
              <label htmlFor="sortByDate " className="font-themeFontRegular">
                Sort by Date
              </label>
            </div>
            <div className="my-2 flex gap-x-2">
              <input
                id="sortByDate"
                type="radio"
                name="sortOption"
                className="hover:cursor-pointer"
              />
              <label htmlFor="sortByDate" className="font-themeFontRegular">
                Same Distric
              </label>
              <input
                id="sortByRelevance"
                className="hover:cursor-pointer"
                type="radio"
                name="sortOption"
              />
              <label
                htmlFor="sortByRelevance"
                className="font-themeFontRegular"
              >
                Any Where
              </label>
            </div>
            <div className="my-2 flex gap-x-2 font-thin">
              <select
                name=""
                id="selectModel"
                className="bg-white shadow border border-gray-500 rounded-lg hover:cursor-pointer text-gray-500 font-themeFontRegular  px-5 py-2"
              >
                <option
                  value=""
                  className="font-thin text-gray-500 font-themeFontRegular"
                >
                  select model
                </option>
                <option
                  value=""
                  className="font-thin text-gray-500 font-themeFontRegular"
                >
                  Sabarmati 303
                </option>
                <option
                  value=""
                  className="font-thin text-gray-500 font-themeFontRegular"
                >
                  Sabarmati 303
                </option>
                <option
                  value=""
                  className="font-thin text-gray-500 font-themeFontRegular"
                >
                  Sabarmati 303
                </option>
              </select>
            </div>
          </div>
          <div>
            <button className="bg-blue-700 rounded-lg p-2 w-full text-white">
              Apply
            </button>
          </div>
        </form>
        <button
          onClick={() => setvisiableFilter(!visiableFilter)}
          className="absolute  top-2 right-2 hover:bg-slate-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-gray-600 text-bold"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
      </>
    );
  };

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
        {products.map((product) => (
          <div key={product._id} onClick={() => {setCardDetail(product), setvisiableCard(!visiableCard);}}>
            <Card product={product} />
          </div>
        ))}
      </div>
      {visiableCard ? (
        <div className="absolute top-0">
          {
            <CardDetails
              cardDetail={cardDetail}
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