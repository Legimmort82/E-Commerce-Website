import Pic from "@/components/Pic";
import ProductRoute from "@/components/PageRoutes/ProductRoute";
import React from "react";
import pic1 from "@/assets/icons/image 57.svg";
import pic2 from "@/assets/icons/image 58.svg";
import pic3 from "@/assets/icons/image 59.svg";
import pic4 from "@/assets/icons/image 61.svg";
import pic5 from "@/assets/icons/image 63.svg";
import star from "@/assets/icons/Vector.svg";
import pic7 from "@/assets/icons/Vector (1).svg";
import Money from "@/components/Money";
import minus from "@/assets/icons/icon-minus.svg";
import plus from "@/assets/icons/icon-plus.svg";
import love from "@/assets/icons/Wishlist.svg";
import Delivery from "@/components/Delivery";
import deliveryone from "@/assets/icons/icon-delivery.svg";
import Iconreturn from "@/assets/icons/Icon-return.svg";
import Products from "@/components/Products";
import game from "@/assets/icons/g92-2-500x500 1.svg";
import keyboard from "@/assets/icons/ak-900-01-500x500 1.svg";
import monitor from "@/assets/icons/g27cq4-500x500 1.svg";
import microphone from "@/assets/icons/gammaxx-l240-argb-1-500x500 1.svg";

const ProductDetails = () => {
  return (
    <div className="w-[1170px] my-0 mx-auto flex flex-col gap-[50px]">
      <ProductRoute>Havic HV G-92 Gamepad</ProductRoute>

      <div className="flex items-end gap-[70px]">
        <div className="flex items-start ">
          <div className="flex flex-col gap-4">
            <Pic image={pic1} size="sm" sizee="md" color="grey" />
            <Pic image={pic2} size="sm" sizee="md" color="grey" />
            <Pic image={pic3} size="sm" sizee="md" color="grey" />
            <Pic image={pic4} size="sm" sizee="md" color="grey" />
          </div>
          <div className="pl-[30px]">
            <Pic image={pic5} size="md" color="grey" />
          </div>
        </div>
        <div className="w-[399px]">
          <h1 className="text-[24px] font-semibold	mb-[16px]">
            Havic HV G-92 Gamepad
          </h1>
          <div className="flex gap-2">
            <Pic image={star} />
            <Pic image={star} />
            <Pic image={star} />
            <Pic image={star} />
            <Pic image={star} />
          </div>
          <Money cost="192.00" />
          <h2 className="w-[373px] h-[63px] text-[14px] font-normal leading-[21px]">
            PlayStation 5 Controller Skin High quality vinyl with air channel
            adhesive for easy bubble free install & mess free removal Pressure
            sensitive.
          </h2>
          <hr className="my-[24px]  border-black" />
          <div className="flex mb-[24px]">
            <label className="text-[20px] font-normal leading-[20px] h-[20px]">
              Color:
            </label>
            <div className="border-2 w-[20px] h-[20px] border-black rounded-[50%] ml-[24px] mr-[8px] bg-blue-300"></div>
            <div className="border-2 w-[20px] h-[20px] border-black rounded-[50%] bg-red-300"></div>
          </div>
          <div className="flex items-start mb-[24px]">
            <label className="text-[20px] font-normal leading-[20px] mr-[24px]">
              Size :
            </label>
            <div className="flex gap-4">
              <button className="border-black text-[14px] font-medium	 border-[1px] w-[32px] h-[32px] flex items-center justify-center rounded-md">
                XS
              </button>
              <button className="border-black border-[1px] text-[14px] font-medium w-[32px] h-[32px] flex items-center justify-center rounded-md">
                S
              </button>
              <button className="border-blackborder-[1px] text-[14px] font-medium w-[32px] h-[32px] flex items-center justify-center bg-red-600 text-white rounded-md">
                M
              </button>
              <button className="border-black border-[1px] text-[14px] font-medium w-[32px] h-[32px] flex items-center justify-center rounded-md">
                L
              </button>
              <button className="border-black border-[1px] text-[14px] font-medium w-[32px] h-[32px] flex items-center justify-center rounded-md">
                XL
              </button>
            </div>
          </div>
          <div className="flex items-center mb-[24px]">
            <div className=" w-[161px]  h-[44px] border-[1px]  border-black rounded-sm flex items-center justify-center">
              <div className="w-[40px] h-[44px] flex items-center justify-center py-[10px] px-[8px] border-r-[1px]	border-black">
                <img src={minus} alt="pic" />
              </div>
              <div className="w-[80px] h-[40px] text-[20px] font-medium flex items-center justify-center">
                2
              </div>
              <div className="w-[41px] bg-red-700 h-[44px] flex items-center justify-center py-[10px] px-[8px] border-l-[1px]	border-black">
                <img src={plus} alt="pic" />
              </div>
            </div>
            <button className="w-[156px] h-[44px] ml-[16px] mr-[23px] bg-red-600 rounded-sm py-[10px] px-[48px] text-[14px] font-semibold	text-white">
              Buy Now
            </button>
            <button className="w-[40px] h-[40px] rounded-md border-black border-[1px] flex justify-center items-center">
              <img className="w-[32px] h-[32px] " src={love} alt="pic" />
            </button>
          </div>
          <div className="w-[399px] h-[180px] border-[1px] border-black flex flex-col rounded-sm">
            <Delivery
              image={deliveryone}
              text1="Free Delivery"
              text2="Enter your postal code for Delivery Availability"
            />
            <hr className="w-[398px] h-[1px]   border-black" />
            <Delivery
              image={Iconreturn}
              text1="Return Delivery"
              text2="Free 30 Days Delivery Returns. Details"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-[60px] pb-[50px]">
        <div className="flex items-center gap-3">
          <div className="w-[20px] h-[40px] bg-red-500"></div>
          <p className="text-[16px] font-semibold">Related Item</p>
        </div>
        <div className="flex gap-[30px]">
          <Products
            text="HAVIT HV-G92 Gamepad"
            cost1="120"
            cost2="160"
            image1={star}
            image2={pic7}
            image3={game}
            number="88"
            ok={true}
            percent="-40%"
          />
          <Products
            text="AK-900 Wired Keyboard"
            cost1="960"
            cost2="1160"
            image1={star}
            image2={pic7}
            image3={keyboard}
            number="75"
            ok={true}
            percent="-35%"
          />
          <Products
            text="IPS LCD Gaming Monitor"
            cost1="370"
            cost2="400"
            image1={star}
            image2={pic7}
            image3={monitor}
            number="99"
            ok={true}
            percent="-25%"
          />
          <Products
            text="IPS LCD Gaming Monitor"
            cost1="160"
            cost2="170"
            image1={star}
            image2={pic7}
            image3={microphone}
            number="65"
            ok={false}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
