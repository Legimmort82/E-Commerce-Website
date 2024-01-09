const RoutePage = ({ children }) => {
  return (
    <p>
      <span className="opacity-50">Home / </span> 
      {children}
    </p>
  );
};

export default RoutePage;
