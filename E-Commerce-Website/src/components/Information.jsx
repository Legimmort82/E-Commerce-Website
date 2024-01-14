const Information = ({ image, text, number, color = "white" }) => {
  const colors = {
    red: "bg-red-500",
    white: "bg-white",
  };
  return (
    <div
      className={`w-[260px] h-[230px] py-[30px] ${colors[color]} flex flex-col items-center gap-6 rounded border-[1px] border-black border-opacity-30`}
    >
      <img src={image} alt="" />
      <div className="flex flex-col items-center gap-3">
        <p className="text-2xl font-bold">{number}k </p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Information;
