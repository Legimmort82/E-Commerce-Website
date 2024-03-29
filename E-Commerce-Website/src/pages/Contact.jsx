import Phone from "@/assets/icons/icons-phone.png";
import Mail from "@/assets/icons/icons-mail.png";
import RoutePage from "@/components/PageRoutes/RoutePage";
import { useContext, useState } from "react";
import { commentContext } from "@/Providers/CommentProvider";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/Firebase/Firebase";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const { comments, setComments } = useContext(commentContext);

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

  const sendComment = async (e) => {
    if ((firstName && mail && phone && message) !== "") {
      e.preventDefault();
      const data = await addDoc(collection(db, "comments"), {
        name: firstName,
        massage: message,
        phone: phone,
        email: mail,
      });
      setComments([...comments, data]);
      setFirstName("");
      setMail("");
      setMessage("");
      setPhone("");
      setSuccess(true);
    }
  };

  return (
    <div className="pt-20 pb-36 flex flex-col justify-center items-center">
      <RoutePage>Contact</RoutePage>
      {success && (
        <p className="text-green-500 text-xl mt-3">
          Your Comment Received Successfully !!!{" "}
        </p>
      )}
      <div className="flex gap-[20px] items-center sm:max-lg:flex sm:max-lg:flex-col">
        <div className="px-[35px] md:max-lg:w-full pt-10 pb-[51px] h-full bg-white shadow-md mt-20">
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
        <form
          onSubmit={sendComment}
          className="bg-white shadow-md px-8 h-full py-7 sm:max-md:w-full md:max-lg:mt-5 mt-20"
        >
          <div className="flex gap-4 sm:max-md:flex sm:max-md:flex-col">
            <input
              type="text"
              placeholder="Your Name"
              className="w-1/3 sm:max-md:w-full h-[50px] rounded-sm pl-4 bg-[#F5F5F5]"
              value={firstName}
              onChange={handleName}
              required
            />
            <input
              type="text"
              placeholder="Your Email"
              className="w-1/3 sm:max-md:w-full h-[50px] rounded-sm pl-4 bg-[#F5F5F5]"
              value={mail}
              onChange={handleEmail}
              required
            />
            <input
              type="text"
              placeholder="Your Phone"
              className="w-1/3 sm:max-md:w-full h-[50px] rounded-sm pl-4 bg-[#F5F5F5]"
              value={phone}
              onChange={handlePhone}
              required
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
            required
          ></textarea>
          <div className="flex justify-end">
            <button className="px-12 py-4 bg-red-500 rounded" type="submit">
              Send Massage
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
