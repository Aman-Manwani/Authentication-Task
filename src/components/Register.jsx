import React from "react";
import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";


const Register = () => {

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

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('registrationData', JSON.stringify(formData));
    alert('Register Successful')
    navigate('/login')
  };

  return (
    <div className="h-[100vh] flex items-center justify-center w-full">
      <div className="p-6 shadow-xl flex flex-1 flex-col gap-6 max-w-[420px]">
        <h1 className="text-orange-500 text-center font-bold text-[48px]">Register</h1>

        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Name"
            className="p-3 w-full outline rounded-md"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Email"
            className="p-3 w-full outline rounded-md"
          />

          <input
            type="password"
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
            Register
          </button>

          <p className="text-center">OR</p>

          <Link to='/login'>
            <button
              type="submit"
              className="w-full border-2 border-black text-orange-500 font-bold py-4 rounded-md"
            >
              Already Have An Account
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
