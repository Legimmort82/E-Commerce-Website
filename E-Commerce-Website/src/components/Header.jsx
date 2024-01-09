import React from "react";
import searchpic from "../assets/icons/Component 2.svg";
import love from "../assets/icons/Wishlist.svg";
import buy from "../assets/icons/Cart1 with buy.svg";

const Header = () => {
  return (
    <>
      <div className="w-[1170px] my-0 mx-auto p-0 flex items-center h-[38px] bg-blue-600 rounded-sm overflow-hidden	">
        <div>
          <p className="m-0 text-blac text-[24px] not-italic	font-bold leading-6	">
            Exclusive
          </p>
        </div>
        <div className="ml-[190px] mr-[148px]">
          <ul className="m-0 flex items-center	gap-[48px] list-none w-[367px]	">
            <li className="w-[48px] h-[24px]">Home</li>
            <li className="w-[48px] h-[24px]">Contact</li>
            <li className="w-[48px] h-[24px]">About</li>
            <li className="w-[61px] h-[24px]">Sign Up</li>
          </ul>
        </div>
        <div className="flex  h-[38px] items-center">
          <div className="w-[243px] h-[38px] bg-slate-300 rounded-[5px] flex justify-center	items-center p-0">
            <input
              className="w-full h-[18px] py-[7px] pl-[20px]  bg-slate-300 border-0	outline-0	"
              type="search"
              placeholder="What are you looking for?"
            />
            <img
              className="w-[24px] h-[24px] mr-[2px]"
              src={searchpic}
              alt="pic"
            />
          </div>
          <img
            className="w-[32px] h-[32px] ml-[24px] mr-[16px] "
            src={love}
            alt="pic"
          />
          <img className="w-[32px] h-[32px]" src={buy} alt="pic" />
        </div>
      </div>
    </>
  );
};

export default Header;
