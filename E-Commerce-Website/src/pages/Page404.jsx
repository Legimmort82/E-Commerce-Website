import Button from "../components/Button";
import RoutePage from "../components/PageRoutes/RoutePage";

const Page404 = () => {
  return (
    <div className="pt-20 pb-36 px-[135px] lg:px-20 md:px-16 sm:px-12">
      <RoutePage>404 Error</RoutePage>
      <div className="flex flex-col items-center justify-center gap-10 mt-36 font-medium">
        <p className="text-8xl lg:text-7xl md:text-6xl sm:text-5xl">404 Not Found</p>
        <p className="mb-10">
          Your visited page not found
        </p>
        <Button paint="red" size="xxxl" text="white">
          Back to home page
        </Button>
      </div>
    </div>
  );
};

export default Page404;
