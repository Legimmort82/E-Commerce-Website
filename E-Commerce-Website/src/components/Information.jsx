const Information = ({ image, text, number,font, color = "white" }) => {
  const colors = {
    red: "bg-red-500",
    white: "bg-white",
  };
  return (
    <div
      className={`w-[260px] h-[230px] py-[30px] ${colors[color]} flex flex-col items-center gap-6 rounded `}
    >
      <img src={image} alt="" />
      <div className="flex flex-col items-center gap-3">
        <p className={`text-[${font}] font-bold`}>{number} </p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Information;
