import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = ({setUserAuthenticated}) => {
  const [storedData, setStoredData] = useState(null);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    const dataFromLocalStorage = localStorage.getItem("registrationData");
    if (dataFromLocalStorage) {
      setStoredData(JSON.parse(dataFromLocalStorage));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      storedData &&
      formData.email === storedData.email &&
      formData.password === storedData.password
    ) {
      setUserAuthenticated(true);
      alert("Login successful");
      navigate('/home')
    } else {
      alert("Login failed, Check your credentials");
    }
  };

  return (
    <div className="h-[100vh] flex items-center justify-center w-full">
      <div className="p-6 shadow-xl flex flex-1 flex-col gap-6 max-w-[420px]">
        <h1 className="text-orange-500 text-center font-bold text-[48px]">
          Login
        </h1>

        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Email"
            className="p-3 w-full outline rounded-md"
          />

          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            className="p-3 w-full outline rounded-md"
            onChange={handleChange}
            required
            placeholder="Password"
          />

          <button
            type="submit"
            className="w-full bg-orange-500 text-white font-bold py-4 rounded-md"
          >
            Login
          </button>

          <p className="text-center">OR</p>

          <Link to="/register">
            <button
              type="submit"
              className="w-full border-2 border-black text-orange-500 font-bold py-4 rounded-md"
            >
              Create An Account
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
