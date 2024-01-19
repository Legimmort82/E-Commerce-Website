import RoutePage from "@/components/PageRoutes/RoutePage";
import React from "react";

const Account = () => {
  return (
    <div className="px-[135px]">
      <div className="flex justify-between py-10">
        <RoutePage>My Acount</RoutePage>
        <p>
          Welcome! <span className="text-red-600">Md Rimel</span>
        </p>
      </div>
      <div>
        <div className="flex gap-10 pb-11 ">
          <div className="flex flex-col basis-1/4 gap-3	">
            <p className="text-[16px] font-medium">Manage My Account</p>
            <div className="pl-[35px] flex flex-col gap-2">
              <p className="text-[16px] font-normal">My Profile</p>
              <p className="text-[16px] font-normal">Address Book</p>
              <p className="text-[16px] font-normal">My Payment Options</p>
            </div>
            <p className="text-[16px] font-medium">My Orders</p>
            <div className="pl-[35px] flex flex-col gap-2">
              <p className="text-[16px] font-normal">My Returns</p>
              <p className="text-[16px] font-normal">My Cancellations</p>
            </div>
            <p className="text-[16px] font-medium">My WishList</p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-[20px] text-red-500 font-medium">Edit Your Profile</p>
            <div className="flex gap-[50px]">
              <div className="flex flex-col">
                <label className="text-[16px] font-normal">First Name</label>
                <input type="text" placeholder="MD" className="bg-gray-300 w-[330px] h-[50px] rounded pl-[16px] py-[13px]"  />
              </div>
              <div className="flex flex-col">
                <label className="text-[16px] font-normal">Last Name</label>
                <input type="text" placeholder="Rimel"  className="bg-gray-300 w-[330px] h-[50px] rounded pl-[16px] py-[13px]"/>
              </div>
            </div>
            <div className="flex gap-[50px]">
              <div className="flex flex-col ">
                <label className="text-[16px] font-normal">Email</label>
                <input type="text" placeholder="rimel1111@gmail.com" className="bg-gray-300 w-[330px] h-[50px] rounded pl-[16px] py-[13px]" />
              </div>
              <div>
                <label className="flex flex-col">Address</label>
                <input type="text" placeholder="Kingston, 5236, United State" className="bg-gray-300 w-[330px] h-[50px] rounded pl-[16px] py-[13px]" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[16px] font-normal">Password Changes</label>
              <div className="flex flex-col gap-[16px] ">
              <input type="text" placeholder="Current Password"  className="bg-gray-300 w-[710px] h-[50px] rounded pl-[16px] py-[13px]"/>
              <input type="text" placeholder="New Password"  className="bg-gray-300 w-[710px] h-[50px] rounded pl-[16px] py-[13px]"/>
              <input type="text" placeholder="Confirm New Password" className="bg-gray-300 w-[710px] h-[50px] rounded pl-[16px] py-[13px]" />
              </div>
            </div>
            <div className="flex flex-row-reverse gap-8	">
          <button className="w-[200px] h-[56px] bg-red-500 rounded text-white text-[16px] font-medium">Save Change</button>
          <button className="text-[14px] font-normal">Cancel</button>
        </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Account;
