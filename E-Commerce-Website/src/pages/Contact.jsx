import phone from "@/assets/icons/icons-phone.png";
import mail from "@/assets/icons/icons-mail.png";
import RoutePage from "@/components/PageRoutes/RoutePage";
import Button from "@/components/Button";

const Contact = () => {
  return (
    <div className="pt-20 pb-36 px-32">
      <RoutePage>Contact</RoutePage>
      <div className="flex gap-[30px] items-center">
        <div className="px-9 py-10 w-[340px] bg-white shadow-md mt-20">
          <div className="flex gap-4 items-center mb-6">
            <img src={phone} alt="" />
            <p className="font-medium">Call To Us</p>
          </div>
          <p className="mb-4 text-[14px]">
            We are available 24/7, 7 days a week.
          </p>
          <p className="text-[14px]">Phone: +8801611112222</p>
          <div className="w-full h-[1px] bg-black opacity-50 my-8"></div>
          <div className="flex gap-4 items-center mb-6">
            <img src={mail} alt="" />
            <p className="font-medium">Write To US</p>
          </div>
          <p className="mb-4 text-[14px]">
            Fill out our form and we will contact you within 24 hours.
          </p>
          <p className="mb-4 text-[14px]">Emails: customer@exclusive.com</p>
          <p className="text-[14px]">Emails: support@exclusive.com</p>
        </div>
        <div className="w-[800px] h-[457px] bg-white shadow-md mt-20 px-8 py-10">
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-1/3 h-[50px] rounded-sm pl-4 bg-[#F5F5F5]"
            />
            <input
              type="text"
              placeholder="Your Email"
              className="w-1/3 h-[50px] rounded-sm pl-4 bg-[#F5F5F5]"
            />
            <input
              type="text"
              placeholder="Your Phone"
              className="w-1/3 h-[50px] rounded-sm pl-4 bg-[#F5F5F5]"
            />
          </div>
          <textarea
            className="w-full bg-[#F5F5F5] h-1/2 my-8 pl-4 pt-3 rounded-sm"
            placeholder="Your Massage"
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <div className="flex justify-end">
            <Button paint="red" text="white" size="lg">
              Send Massage
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
