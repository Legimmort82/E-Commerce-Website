import Button from "../components/Button";
import RoutePage from "../components/RoutePage";

const Page404 = () => {
  return (
    <div className="pt-20 pb-36 px-32">
      <RoutePage>404 Error</RoutePage>
      <div className="flex flex-col items-center gap-10 mt-36 font-medium">
        <p className="text-8xl">404 Not Found</p>
        <p className="mb-10">
          Your visited page not found. You may go home page.
        </p>
        <Button paint="red" size="xxxl" text="white">
          Back to home page
        </Button>
      </div>
    </div>
  );
};

export default Page404;
