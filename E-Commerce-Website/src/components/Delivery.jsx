import Pic from "./Pic";

const Delivery = ({ image, text1, text2 }) => {
  return (
    <div className="flex  w-full h-[50px] ml-[16px] mr-[51px] my-[20px] items-center 	">
      <Pic image={image} sizee="sm" />
      <div className="ml-[16px]">
        <h1 className="text-[16px] font-medium mb-[8px]	">{text1}</h1>
        <h2 className="text-[12px] font-medium	">{text2}</h2>
      </div>
    </div>
  );
};

export default Delivery;
