import {React,useState, Fragment, useEffect } from "react";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";
import Dropdown from "./Dropdown";


const headerData = [
  {
    name: "wheat",
    imgURl:
      "https://media.istockphoto.com/id/827465154/photo/white-rice-in-burlap-sack-bag-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=be5ELHFTbZ3DlBcAnPgCX4AkLjA867Mc7nBRjWKqNkI=",
  },
  {
    name: "paddy",
    imgURl:
      "https://5.imimg.com/data5/SELLER/Default/2021/7/GA/VT/CU/31410204/rice-grain-paddy-seeds-500x500.jpg",
  },
  {
    name: "tuar",
    imgURl:
      "https://rukminim2.flixcart.com/image/832/832/xif0q/plant-seed/q/h/3/100-t-1-na-tuar-beej-original-imagz42rpxttvxrw.jpeg?q=70",
  },
  {
    name: "mustard",
    imgURl:
      "https://5.imimg.com/data5/SELLER/Default/2023/7/322275295/AN/DD/LP/20804870/mustard-yellow-seed-1000x1000.jpeg",
  },
  {
    name: "moong",
    imgURl:
      "https://www.poshtik.in/cdn/shop/products/com1807919906847Poshtik_Moong_dal.png?v=1626004323",
  },
  {
    name: "chana",
    imgURl:
      "https://5.imimg.com/data5/SELLER/Default/2023/10/351770133/HX/EG/VU/41440697/brown-chickpeas-seeds-500x500.jpeg",
  },
  {
    name: "sugar cane",
    imgURl:
      "https://rukminim2.flixcart.com/image/850/1000/kwqq1zk0/plant-seed/i/o/q/10-sugarcane-plant-natural-sugarcane-ganna-eekh-fresh-plant-original-imag9cqzmabnxvnf.jpeg?q=20",
  },
  {
    name: "Soya bean",
    imgURl: "https://tofoh.co.in/wp-content/uploads/2020/08/soybean.jpg",
  },
];

export default function Header() {
   const itemsToShow = 8; // Number of items to show at once
   const headerLength = headerData.length;
   const [currentIndex, setCurrentIndex] = useState(0);

   const handleLeftClick = () => {
     setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
   };

   const handleRightClick = () => {
     setCurrentIndex((prevIndex) =>
       Math.min(prevIndex + 1, headerLength - itemsToShow)
     );
   };

   const displayData = headerData.slice(
     currentIndex,
     currentIndex + itemsToShow
   );

  const HeaderGrid = ({ name, imgURl }) => (
    <div className="flex flex-col justify-center hover:cursor-pointer">
      <div className="w-16 h-16 overflow-hidden bg-white border border-gray-400 rounded-full">
        <img
          className="object-cover h-full w-full rounded-full p-1 transition duration-500 ease-in-out transform hover:scale-110"
          src={imgURl}
          alt={`${name}` + "-img"}
        />
      </div>
      <span className="text-center text-gray-600 text-sm font-themeFont">
        {name && name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()}
      </span>
    </div>
  );

  return (
    <div className="bg-white p-1 my-2 min-h-min rounded-sm">
      <div className="h-full w-full m-auto flex items-center py-2 justify-between">
        <button onClick={handleLeftClick}>
          <FaCircleArrowLeft className="text-2xl" />
        </button>
        {displayData.map((header) => (
          <HeaderGrid
            key={header.name}
            name={header.name}
            imgURl={header.imgURl}
          />
        ))}
        {/* Right button */}
        <button onClick={handleRightClick}>
          <FaCircleArrowRight className="text-2xl" />
        </button>
      </div>
    </div>
  );
}