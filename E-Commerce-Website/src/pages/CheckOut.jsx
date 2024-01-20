import ProductRoute from "@/components/PageRoutes/ProductRoute";
import game from "@/assets/icons/g92-2-500x500 1.svg";
import monitor from "@/assets/icons/g27cq4-500x500 1.svg";
import bkash from "@/assets/icons/Bkash.svg";
import visa from "@/assets/icons/Visa.svg";
import Mastercard from "@/assets/icons/Mastercard.svg";
import Nagad from "@/assets/icons/Nagad.svg";
import React from "react";

const CheckOut = () => {
  return (
    <div className="px-[135px]">
      <div>
        <ProductRoute>
          <span className="text-[14px] font-normal">My Account /</span>
          <span className="text-[14px] font-normal"> Product /</span>
          <span className="text-[14px] font-normal"> View Cart /</span>
          <span className="text-[14px] font-normal"> CheckOut</span>
        </ProductRoute>
      </div>
      <p className="text-[36px] font-medium pb-[48px] pt-[50px]">
        Billing Details
      </p>
      <div className="flex gap-[173px] items-start">
        <dv className="flex flex-col gap-8 w-[470px]">
          <div className="flex flex-col gap-[8px]">
            <label className="text-[16px] font-normal">First Name*</label>
            <input type="text" className="bg-gray-300 h-[50px] rounded" />
          </div>
          <div className="flex flex-col gap-[8px]">
            <label className="text-[16px] font-normal">Company Name</label>
            <input type="text" className="bg-gray-300 h-[50px] rounded" />
          </div>
          <div className="flex flex-col gap-[8px]">
            <label className="text-[16px] font-normal">Street Address*</label>
            <input type="text" className="bg-gray-300 h-[50px] rounded" />
          </div>
          <div className="flex flex-col gap-[8px]">
            <label className="text-[16px] font-normal">
              Apartment, floor, etc. (optional)
            </label>
            <input type="text" className="bg-gray-300 h-[50px] rounded" />
          </div>
          <div className="flex flex-col gap-[8px]">
            <label className="text-[16px] font-normal">Town/City*</label>
            <input type="text" className="bg-gray-300 h-[50px] rounded" />
          </div>
          <div className="flex flex-col gap-[8px]">
            <label className="text-[16px] font-normal">Phone Number*</label>
            <input type="text" className="bg-gray-300 h-[50px] rounded" />
          </div>
          <div className="flex flex-col gap-[8px]">
            <label className="text-[16px] font-normal">Email Address*</label>
            <input type="text" className="bg-gray-300 h-[50px] rounded" />
          </div>
        </dv>

        <div className="flex flex-col gap-8 pt-[20px]">
          <div className="flex items-center gap-[204px]">
            <div className="flex items-center gap-6">
              <img src={game} alt="pic" className="w-[54px] h-[54px]" />
              <p className="text-[16px] font-normal">LCD Monitor</p>
            </div>
            <p className="text-[16px] font-normal">$650</p>
          </div>
          <div className="flex items-center gap-[204px]">
            <div className="flex items-center gap-6">
              <img src={monitor} alt="pic" className="w-[54px] h-[54px]" />
              <p className="text-[16px] font-normal">H1 Gamepad</p>
            </div>
            <p className="text-[16px] font-normal">$1100</p>
          </div>

          <div>
            <div className="flex gap-[314px] border-b-[1px] pb-[16px]">
              <p className="text-[16px] font-normal">Subtotal:</p>
              <p className="text-[16px] font-normal">$1750</p>
            </div>
            <div className="flex gap-[314px] border-b-[1px] py-[16px]">
              <p className="text-[16px] font-normal">Shipping:</p>
              <p className="text-[16px] font-normal">Free</p>
            </div>
            <div className="flex gap-[335px] pt-[16px]">
              <p className="text-[16px] font-normal">Total:</p>
              <p className="text-[16px] font-normal">$1750</p>
            </div>
          </div>
          <div className="flex items-center gap-[155px]">
            <div className="flex items-center gap-4">
              <input type="radio" className="w-[24px] h-[24px]" />
              <p className="text-[16px] font-normal">Bank</p>
            </div>
            <div className="flex gap-2">
              <img src={bkash} alt="pic" />
              <img src={visa} alt="pic" />
              <img src={Mastercard} alt="pic" />
              <img src={Nagad} alt="pic" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <input type="radio" className="w-[24px] h-[24px]" />
            <p className="text-[16px] font-normal">Cash on delivery</p>
          </div>
          <div className="flex gap-[10px]">
            <input
              type="text"
              placeholder="Coupon Code"
              className="w-[300px] h-[56px] border-[1px] rounded pl-[24px]"
            />
            <button className="py-4 px-[48px] w-[211px] h-[56px] text-[16px] font-normal bg-red-500 text-white justify-center items-center rounded">
              Apply Coupon
            </button>
          </div>
         <button className="py-4 px-[48px] h-[56px]  bg-red-500 text-white font-normal justify-center items-center rounded w-[190px]">Place Order</button>
        </div>
      </div>
      <div className="flex gap-4 items-center pt-[24px] pb-[80px]">
        <input type='checkbox' className="w-[24px] h-[24px]"/>
        <p className="text-[16px] font-normal">Save this information for faster check-out next time</p>
      </div>
    </div>
  );
};

export default CheckOut;
