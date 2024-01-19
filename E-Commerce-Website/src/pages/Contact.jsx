import Phone from "@/assets/icons/icons-phone.png";
import Mail from "@/assets/icons/icons-mail.png";
import RoutePage from "@/components/PageRoutes/RoutePage";
import Button from "@/components/Button";
import { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  
  const handleName = (e) => {
    setFirstName(e.target.value);
  };
  const handleEmail = (e) => {
    setMail(e.target.value);
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  const SendComment = () => {
    const data = {
      Name: firstName,
      Email: mail,
      Phone: phone,
      Message: message,
    };
    axios.post(
      "https://65a3cc63a54d8e805ed40200.mockapi.io/shop/Comments",
      data
    );
  };
  return (
    <div className="pt-20 pb-36 px-[135px]">
      <RoutePage>Contact</RoutePage>
      <div className="flex gap-[20px] items-center md:max-lg:flex md:max-lg:flex-col">
        <div className="px-[35px] md:px-3 sm:px-1 pt-10 pb-[51px] h-full bg-white shadow-md mt-20">
          <div className="flex gap-4 items-center mb-6">
            <img src={Phone} alt="" />
            <p className="font-medium">Call To Us</p>
          </div>
          <p className="mb-4 text-[14px]">
            We are available 24/7, 7 days a week.
          </p>
          <p className="text-[14px]">Phone: +8801611112222</p>
          <div className="w-full h-[1px] bg-black opacity-50 my-8"></div>
          <div className="flex gap-4 items-center mb-6">
            <img src={Mail} alt="" />
            <p className="font-medium">Write To US</p>
          </div>
          <p className="mb-4 text-[14px]">
            Fill out our form and we will contact you within 24 hours.
          </p>
          <p className="mb-4 text-[14px]">Emails: customer@exclusive.com</p>
          <p className="text-[14px]">Emails: support@exclusive.com</p>
        </div>
        <div className="bg-white shadow-md sm:px-3 px-8 h-full py-10 mt-20">
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-1/3 sm:w-full h-[50px] rounded-sm pl-4 bg-[#F5F5F5]"
              value={firstName}
              onChange={handleName}
            />
            <input
              type="text"
              placeholder="Your Email"
              className="w-1/3 h-[50px] sm:w-full rounded-sm pl-4 bg-[#F5F5F5]"
              value={mail} 
              onChange={handleEmail}
            />
            <input
              type="text"
              placeholder="Your Phone"
              className="w-1/3 h-[50px] sm:w-full rounded-sm pl-4 bg-[#F5F5F5]"
              value={phone}
              onChange={handlePhone}
            />
          </div>
          <textarea
            className="w-full bg-[#F5F5F5] h-[207px] my-8 pl-4 pt-3 rounded-sm"
            placeholder="Your Massage"
            value={message}
            onChange={handleMessage}
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <div className="flex justify-end">
            <button className="px-12 py-4 bg-red-500 rounded" onClick={SendComment}>
              Send Massage
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
