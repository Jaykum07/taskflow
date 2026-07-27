import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/common/Button";
import Input from "../../components/common/Input";
import logo from "../../assets/logo1.png";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">
        <div className="mb-4 flex flex-col items-center">
          <img src={logo} alt="TaskFlow Logo" className="h-24 w-24" />

          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            TaskFlow
          </h2>
        </div>

        <div className="mb-5 text-center">
          <p className="mt-2 text-black">
            Sign in to continue managing your tasks.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <Input
            name="email"
            label="Email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <Input
            name="password"
            label="Password"
            type="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
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
