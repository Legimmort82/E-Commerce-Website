import React, { useState } from "react";
import love from "@/assets/icons/Wishlist.svg";
import eye from "@/assets/icons/Fill Eye.svg";
import Pic from "./Pic";



const Products = ({text,cost1,cost2,image1,image3,number,ok,percent}) => {
  const [show,setShow]=useState(ok)
  
  return (
    <div className="w-[270px] h-[355px] border-[1px]  flex flex-col gap-4">
      <div className=" relative w-[270px] h-[250px] bg-gray-100">
        
        {show && <button className="w-[55px] h-[26px] absolute top-3 left-3	 bg-red-400 rounded-[4px] text-[12px] text-white font-normal">
            {percent}
          </button> }  
          <div className="absolute right-3 top-3">
            <img src={love} alt="pic" />
            <img src={eye} alt="pic" />
          </div>
        
        <div className=" absolute top-[50px] left-[49px] right-[49px] ">
          <img src={image3} alt="pic" className="my-0 mx-auto" />
        </div>
        <button className="bg-black absolute top-[209px] text-white w-full h-[41px] rounded-sm">
          Add To Cart
        </button>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-[16px] font-medium">{text}</p>
        <div>
          <p className="text-[16px] font-medium flex gap-3">
            <span className="text-red-500">${cost1}</span>
            <span>
              <del className="text-gray-400">${cost2}</del>
            </span>
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <div className="flex gap-1 ">
            <Pic image={image1} />
            <Pic image={image1} />
            <Pic image={image1} />
            <Pic image={image1} />
            <Pic image={image1} />
          </div>
          <p className="text-[14px] font-medium text-gray-400">({number})</p>
        </div>
      </div>
    </div>
  );
};

export default Products;
