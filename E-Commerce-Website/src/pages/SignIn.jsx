import signIn from "@/assets/icons/login.png";
import Button from "@/components/Button";
import { useState } from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div className="flex gap-[129px] pt-[60px] pb-[140px] items-center">
      <img src={signIn} alt="" className="w-[700px] h-[500px]" />
      <div>
        <p className="text-3xl font-medium mb-6">Log in to Exclusive</p>
        <p className="mb-12">Enter your details below</p>
        <div className="flex flex-col gap-10 mb-10">
          <input
            type="text"
            placeholder="Email or Phone Number"
            className="w-[300px] border-b-2 py-2 outline-none px-1"
            value={username}
            onChange={handleUsername}
          />
          <input
            type="text"
            placeholder="Password"
            className="w-[300px] border-b-2 py-2 outline-none px-1"
            value={password}
            onChange={handlePassword}
          />
        </div>
        <div className="w-full flex justify-center">
          <Button paint="red" size="xxl">
            Login
          </Button>
        </div>
        <div className="flex gap-4 mt-8 px-10">
          <p>Don't have an account?</p>
          <Link to="/signUp">
            <p>SignUp</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
