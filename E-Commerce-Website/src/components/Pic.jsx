const Pic = ({ image, sizee, size, color = "white" }) => {
  const sizes = {
    sm: "w-[40px] h-[40px]",
    md: "w-[121px] h-[114px]",
    lg: "w-[446px] h-[315px]",
  };

  const siz = {
    sm: "w-[170px] h-[138px]",
    md: "w-[500px] h-[600px]",
  };
  const colors = {
    grey: "bg-slate-300",
  };
  return (
    <div
      className={`${siz[size]} flex items-center justify-center ${colors[color]}`}
    >
      <img src={image} alt="pic" className={`${sizes[sizee]}`} />
    </div>
  );
};

export default Pic;
