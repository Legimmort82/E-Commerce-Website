import React from "react";
import searchPicture from "@/assets/icons/Component 2.svg";
import love from "@/assets/icons/Wishlist.svg";
import user from "@/assets/icons/user.svg";
import buy from "@/assets/icons/Cart1 with buy.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="w-full mt-10 flex items-center px-6 justify-between rounded-sm">
        <div>
          <p className="m-0 text-black text-[24px] font-bold">
            ShoppingWithLove
          </p>
        </div>
        <div>
          <ul className="flex items-center	gap-6 list-none w-full	">
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
        <div className="flex items-center">
          <div className="w-ful rounded-[5px] flex justify-between items-center">
            <input
              className="w-full py-2 pl-2 bg-slate-300 rounded border-0	outline-0	"
              type="search"
              placeholder="looking for?"
            />
            <img className="w-[24px] h-[32px] mr-2" src={searchPicture} alt="pic" />
            <img className="w-[32px] h-[32px]" src={love} alt="pic" />
            <img className="w-[32px] h-[32px]" src={buy} alt="pic" />
            <img className="w-[32px] h-[32px]" src={user} alt="pic" />
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] mt-4 bg-black bg-opacity-50"></div>
    </>
  );
};

export default Header;
