import signUp from "@/assets/icons/login.png";
import Button from "@/components/Button";
import { Link } from "react-router-dom";
const SingUp = () => {
  return (
    <div className="flex gap-[129px] pt-[60px] pb-[140px] items-center">
      <img src={signUp} alt="" className="w-[700px] h-[500px]" />
      <div>
        <p className="text-3xl font-medium mb-6">Create an account</p>
        <p className="mb-12">Enter your details below</p>
        <div className="flex flex-col gap-10 mb-10">
          <input
            type="text"
            placeholder="Name"
            className="w-[300px] border-b-2 py-2 outline-none px-1"
          />
          <input
            type="text"
            placeholder="Email or Phone Number"
            className="w-[300px] border-b-2 py-2 outline-none px-1"
          />
          <input
            type="text"
            placeholder="Password"
            className="w-[300px] border-b-2 py-2 outline-none px-1"
          />
        </div>
        <div className="w-full flex justify-center">
          <Button paint="red" size="xxl">
            Create Account
          </Button>
        </div>
        <div className="flex gap-4 mt-8 px-10">
          <p>Already have account?</p>
          <Link to="/signIn">
            <p>Login</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
