import React,{useEffect, useState} from 'react'
import { IoIosArrowForward} from "react-icons/io";
const CourselImgGrid = [
  {
    imgURl:
      "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/10476191a413d7c8.jpg?q=20",
  },
  {
    imgURl:
      "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/b6d0f4b7a5e55fbc.jpg?q=20",
  },
  {
    imgURl:
      "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/bd4e7bd1406a534e.jpg?q=20",
  },
  {
    imgURl:
      "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/585a93b0ebfd39c2.jpg?q=20",
  },
];


function Coursel() {
    const [current, setCurrent] = useState(0);
    const lenghtGrid = CourselImgGrid.length;
    const fowardImg=()=>{
        if(current<lenghtGrid-1){
            setCurrent(current+1)
        }
        else{
            setCurrent(0)
        }
    }
    const backImg=()=>{
        if(current>0){
            setCurrent(current-1)
        }
        else{
            setCurrent(lenghtGrid-1)
        }
    }
    useEffect(()=>{
        const interval=setInterval(()=>{
            if(current<lenghtGrid-1){
                setCurrent(current+1)
            }
            else{
                setCurrent(0)
            }
        },4000)
        return ()=>clearInterval(interval)
    
    })
    
      return (
        <div className="relative">
          <button
            onClick={() => backImg()}
            className="absolute z-1 left-0 top-[25%] bg-white h-20 w-[25px] rounded-r-md flex justify-center items-center"
          >
            <IoIosArrowForward className="text-lg font-extrabold rotate-180" />
          </button>
          <div className="object-cover h-50 w-100">
            <img
              className={`h-full w-full object-cover`}
              src={CourselImgGrid[current].imgURl}
              alt="AfroMart Offers"
              
            />
          </div>
          <button
            onClick={() => fowardImg()}
            className="absolute z-1 right-0 top-[25%] bg-white h-20 w-[25px] rounded-l-md flex justify-center items-center"
          >
            <IoIosArrowForward className="text-lg font-extrabold " />
          </button>
        </div>
      );
}

export default Coursel