import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/common/Button";
import Input from "../../components/common/Input";
import logo from "../../assets/logo1.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      password,
      email,
    });
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">
        <div className="mb-4 flex flex-col items-center">
          <img src={logo} alt="TaskFlow Logo" className="h-25 w-25" />

          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            TaskFlow
          </h2>
        </div>

        <div className="mb-5">
          <p className="mt-2">Sign in to continue managing your tasks.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <Input
            label="Email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmail}
            required
          />

          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={handlePassword}
            required
          />

          <div className="text-right">
            <button
              type="button"
              className="text-sm text-indigo-600 hover:underline cursor-pointer"
            >
              Forgot Password?
            </button>
          </div>

          <Button type="submit" className="w-full">
            Login
          </Button>

          <p className="text-center text-sm">
            Don't have an account?
            <Link
              to="/register"
              className="ml-1 cursor-pointer text-indigo-600 hover:underline"
            >
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
