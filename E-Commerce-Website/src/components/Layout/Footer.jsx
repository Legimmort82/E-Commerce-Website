import send from "@/assets/icons/icon-send.svg";
import copy from "@/assets/icons/icon-copyright.svg";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col	gap-[60px] h-[440px] text-white	bg-black">
        <div className="w-[1170px] my-0 mx-auto flex pt-[80px] justify-between	items-start gap-[87px]">
          <div>
            <h1 className="text-[16px] not-italic	font-bold	leading-[24px]">
              Exclusive
            </h1>
            <h2 className="text-[12px] not-italic font-medium leading-[28px]">
              Subscribe
            </h2>
            <h2 className="text-[12px] not-italic font-medium leading-[28px]">
              Get 10% off your first order
            </h2>
            <div className="border-[1px] bg-black flex rounded-[3px]">
              <input
                type="text"
                placeholder="Enter your email"
                className="border-0  outline-none bg-black py-[10px] pr-0 pl-[16px]"
              />
              <img className="pr-[3px]" src={send} alt="pic" />
            </div>
          </div>
          <div>
            <h1 className="text-[16px] not-italic	font-bold	leading-[24px]">
              Support
            </h1>
            <h2 className="text-[12px] not-italic font-medium leading-[28px]">
              111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
            </h2>
            <h2 className="text-[12px] not-italic font-medium leading-[28px]">
              exclusive@gmail.com
            </h2>
            <h2 className="text-[12px] not-italic font-medium leading-[28px]">
              +88015-88888-9999
            </h2>
          </div>
          <div>
            <h1 className="text-[16px] not-italic	font-bold	leading-[24px]">
              Account
            </h1>
            <h2 className="text-[12px] not-italic font-medium leading-[28px]">
              My Account
            </h2>
            <h4 className="text-[12px] not-italic font-medium leading-[28px]">
              Login / Register
            </h4>
            <h2 className="text-[12px] not-italic font-medium leading-[28px]">
              Cart
            </h2>
            <h2 className="text-[12px] not-italic font-medium leading-[28px]">
              Wishlist
            </h2>
            <h2 className="text-[12px] not-italic font-medium leading-[28px]">
              Shop
            </h2>
          </div>
          <div>
            <h1 className="text-[16px] not-italic	font-bold	leading-[24px]">
              Quick Link
            </h1>
            <h2 className="text-[12px] not-italic font-medium leading-[28px]">
              Privacy Policy
            </h2>
            <h2 className="text-[12px] not-italic font-medium leading-[28px]">
              Terms Of Use
            </h2>
            <h2 className="text-[12px] not-italic font-medium leading-[28px]">
              FAQ
            </h2>
            <h2 className="text-[12px] not-italic font-medium leading-[28px]">
              Contact
            </h2>
          </div>
          <div>
            <h1 className="text-[16px] not-italic	font-bold	leading-[24px]">
              Download App
            </h1>
            <h2 className="text-[12px] not-italic font-medium leading-[28px]">
              Save $3 with App New User Only
            </h2>
          </div>
        </div>
        <div className="my-0 mx-auto flex pb-[24px]">
          <img className="w-[15px] pr-[3px]" src={copy} alt="pic" />
          <h2 className="tex-[12px]">
            Copyright Rimel 2022. All right reserved
          </h2>
        </div>
      </div>
    </>
  );
};

export default Footer;
