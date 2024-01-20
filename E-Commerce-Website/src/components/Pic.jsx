const Pic = ({ image, sizee, size, color = "white" }) => {
  const sizes = {
    sm: "w-1/4 h-[40px]",
    md: "w-1/2 h-[114px]",
    lg: "w-2/3 h-[315px]",
  };

  const siz = {
    sm: "w-2/3 h-2/3",
    md: "w-full h-[600px]",
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
