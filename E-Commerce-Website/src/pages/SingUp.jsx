import signUp from "@/assets/icons/login.png";
import Button from "@/components/Button";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/Firebase/Firebase";
const SingUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleName = (e) => {
    setName(e.target.value);
  };
  const createAccount = () => {
    createUserWithEmailAndPassword(auth, email, password);
    navigate("/signIn");
  };
  return (
    <div className="flex justify-center gap-8 pt-[60px] pb-[140px] items-center">
      <img src={signUp} alt="" className="w-1/2 h-[500px]" />
      <div>
        <p className="text-3xl font-medium mb-6">Create an account</p>
        <p className="mb-12">Enter your details below</p>
        <div className="flex flex-col gap-10 mb-10">
          <input
            type="text"
            placeholder="Name"
            className="w-[300px] border-b-2 py-2 outline-none px-1"
            value={name}
            onChange={handleName}
          />
          <input
            type="text"
            placeholder="Email or Phone Number"
            className="w-[300px] border-b-2 py-2 outline-none px-1"
            value={email}
            onChange={handleEmail}
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
          <Button paint="red" size="xxl" onClick={createAccount}>
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
