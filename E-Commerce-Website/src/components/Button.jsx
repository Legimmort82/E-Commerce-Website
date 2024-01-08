const Button = ({ children, onClick, paint, size,text }) => {
  const sizes = {
    sm: "w-12",
    md: "w-24",
    lg: "w-32",
    xl: "w-44",
    xxl: "w-56",
    xxxl: "px-12 py-4",
  };
  const colors = {
    red: "bg-red-500",
    green: "bg-green-500",
    yellow: "bg-yellow-500",
    blue: "bg-blue-500",
    pink: "bg-pink-500",
  };
  const textColor = {
    white: "text-white font-medium",
    black: "text-black",
  };
  return (
    <button
      onClick={onClick}
      className={`h-14 px ${sizes[size]} ${textColor[text]}  rounded-md ${colors[paint]}`}
    >
      {children}
    </button>
  );
};

export default Button;
