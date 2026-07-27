import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/common/Button";
import Input from "../../components/common/Input";
import logo from "../../assets/logo1.png";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
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

        <div className="mb-3 text-center">
          <p className="mt-2 text-black">
            Create your account to start organizing your tasks.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <Input
            name="name"
            label="Name"
            type="text"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />

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

          <Input
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            placeholder="Enter your password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />

          <Button type="submit" className="w-full">
            Create Account
          </Button>

          <p className="text-center text-sm">
            Already have an account?
            <Link
              to="/login"
              className="ml-1 cursor-pointer text-indigo-600 hover:underline"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
