import React from "react";
import searchPicture from "@/assets/icons/Component 2.svg";
import love from "@/assets/icons/Wishlist.svg";
import user from "@/assets/icons/user.svg";
import buy from "@/assets/icons/Cart1 with buy.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="w-full  px-[135px] mt-10 flex items-center h-[38px] rounded-sm overflow-hidden	">
        <div>
          <p className="m-0 text-black text-[24px] not-italic	font-bold leading-6	">
            Exclusive
          </p>
        </div>
        <div className="ml-[70px] mr-[30px]">
          <ul className="m-0 flex items-center	gap-8 list-none w-[367px]	">
            <Link to="/">
              <li className="w-[48px] h-[24px]">Home</li>
            </Link>
            <Link to="/contact">
              <li className="w-[48px] h-[24px]">Contact</li>
            </Link>
            <Link to="/about">
              <li className="w-[48px] h-[24px]">About</li>
            </Link>
            <Link to="/signUp">
              <li className="w-[61px] h-[24px]">Sign Up</li>
            </Link>
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
              src={searchPicture}
              alt="pic"
            />
          </div>
          <img
            className="w-[32px] h-[32px] ml-[24px] mr-[16px] "
            src={love}
            alt="pic"
          />
          <img className="w-[32px] h-[32px]" src={buy} alt="pic" />
          <img className="w-[32px] h-[32px] ml-4" src={user} alt="pic" />
        </div>
      </div>
      <div className="w-full h-[1px] mt-4 bg-black bg-opacity-50"></div>
    </>
  );
};

export default Header;
