import RoutePage from "@/components/PageRoutes/RoutePage";
import React from "react";

const Acount = () => {
  return (
    <div className="px-[135px]">
      <div className="flex justify-between py-10">
        <RoutePage>My Acount</RoutePage>
        <p>
          Welcome! <span className="text-red-600">Md Rimel</span>
        </p>
      </div>
      <div>
        <div className="flex gap-10">
          <div className="flex flex-col">
            <p className="text-[16px] font-medium">Manage My Account</p>
            <div>
              <p className="text-[16px] font-normal">My Profile</p>
              <p className="text-[16px] font-normal">Address Book</p>
              <p className="text-[16px] font-normal">My Payment Options</p>
            </div>
            <p className="text-[16px] font-medium">My Orders</p>
            <div>
              <p className="text-[16px] font-normal">My Returns</p>
              <p className="text-[16px] font-normal">My Cancellations</p>
            </div>
            <p className="text-[16px] font-medium">My WishList</p>
          </div>
          <div className="flex flex-col">
            <p className="text-[20px] text-red-500 font-medium">Edit Your Profile</p>
            <div className="flex">
              <div className="flex flex-col">
                <label className="text-[16px] font-normal">First Name</label>
                <input type="text" placeholder="MD" />
              </div>
              <div>
                <label className="text-[16px] font-normal">Last Name</label>
                <input type="text" placeholder="Rimel" />
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col">
                <label className="text-[16px] font-normal">Email</label>
                <input type="text" placeholder="rimel1111@gmail.com" />
              </div>
              <div>
                <label className="flex flex-col">Address</label>
                <input type="text" placeholder="Kingston, 5236, United State" />
              </div>
            </div>
            <div className="flex flex-col">
              <label className="text-[16px] font-normal">Password Changes</label>
              <input type="text" placeholder="Current Password" />
              <input type="text" placeholder="New Password" />
              <input type="text" placeholder="Confirm New Password" />
            </div>
          </div>
        </div>
        <div>
          <button>Cancel</button>
          <button>Save Changes</button>
        </div>
      </div>
    </div>
  );
};

export default Acount;
