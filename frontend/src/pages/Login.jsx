import React from "react";
import "./Login.css";
import { useState } from "react";
import { toast } from "react-toastify";
import { useAuth } from '../store/auth';

function Login() {
  const URL = 'http://localhost:5000/api/auth/login';

  const [loginUser, setLoginUser] = useState({
    email: "",
    password: "",
  });

  const { storeTokenInLS } = useAuth();

  const handleInputData = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setLoginUser({
        ...loginUser,
        [name]: value,
    })
  };

  const submitLoginData = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(loginUser)
      });

      

      if(response.ok){
        alert("login successfully!")
        const login_data = await response.json()
        // store token in localStorage 
        storeTokenInLS(login_data.token);
        setLoginUser({
          email: "",
          password: "",
        });

        toast.success(login_data.msg)
      }else{
        alert('invalid credentials')
      }

    } catch (error) {
      console.log('Login Error', error);
    };
  };

  return (
    <div className="max-w-md relative flex flex-col p-4 rounded-md text-black bg-white">
      <div className="text-2xl font-bold mb-2 text-[#1e0e4b] text-center">
        Welcome back to <span className="text-[#7747ff]">App</span>
      </div>
      <div className="text-sm font-normal mb-4 text-center text-[#1e0e4b]">
        Log in to your account
      </div>
      <form className="flex flex-col gap-3" onSubmit={submitLoginData}>
        <div className="block relative">
          <label
            htmlFor="email"
            className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
          >
            Email
          </label>
          <input
            onChange={handleInputData}
            name="email"
            value={loginUser.email}
            type="text"
            id="email"
            required
            className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0"
          />
        </div>
        <div className="block relative">
          <label
            htmlFor="password"
            className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
          >
            Password
          </label>
          <input
            onChange={handleInputData}
            name="password"
            value={loginUser.password}
            type="text"
            id="password"
            required
            className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
          />
        </div>
        <div>
          <a className="text-sm text-[#7747ff]" href="#">
            Forgot your password?
          </a>
        </div>
        <input
          type="submit"
          value="Login"
          className="px-2 py-2 rounded text-white text-sm font-normal"
        />
        
      </form>
      <div className="text-sm text-center mt-[1.6rem]">
        Don’t have an account yet?{" "}
        <a className="text-sm text-[#7747ff]" href="#">
          Sign up for free!
        </a>
      </div>
    </div>
  );
}

export default Login;
