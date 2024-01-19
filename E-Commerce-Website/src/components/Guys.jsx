import twitter from "@/assets/icons/Icon-Twitter.svg";
import instagram from "@/assets/icons/icon-instagram.svg";
import linkdein from "@/assets/icons/Icon-Linkedin.svg";

const Guys = ({ name, work, image }) => {
  return (
    <div className="w-[370px] h-[520px]  flex flex-col gap-8 rounded-[4px]">
      <div className=" flex items-center justify-center">
        <img className="w-[236px] h-[350px]" src={image} alt="pic" />
      </div>

      <div className="flex flex-col gap-4 ">
        <div className="flex flex-col gap-2">
          <p className="text-[32px] font-medium">{name}</p>
          <p className="text-[16px] font-normal">{work}</p>
        </div>

        <div className="flex gap-4">
          <img src={twitter} className="w-[24px] h-[24px]" alt="pic" />
          <img src={instagram} className="w-[24px] h-[24px]" alt="pic" />
          <img src={linkdein} className="w-[24px] h-[24px]" alt="pic" />
        </div>
      </div>
    </div>
  );
};

export default Guys;
