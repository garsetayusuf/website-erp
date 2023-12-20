import React from "react";

const Login = () => {
  return (
    <div className="h-[100svh] flex justify-center items-center px-5">
      <div className="w-[500px] rounded-lg border bg-card shadow-sm max-w-md mx-auto mt-10">
        <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="font-semibold tracking-tight text-3xl text-center">
            Welcome Back!
          </h3>
          <p className="text-sm text-center text-gray-500">
            Please login to your account.
          </p>
        </div>
        <div className="p-6 space-y-4">
          <div className="space-y-2">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm  file:border-0 file:bg-transparent file:text-sm file:font-medium  focus-visible:outline-none focus-visible:ring-2  focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              id="username"
              placeholder="Enter your username"
              required=""
              type="text"
            />
          </div>
          <div className="space-y-2">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm  file:border-0 file:bg-transparent file:text-sm file:font-medium  focus-visible:outline-none focus-visible:ring-2  focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              id="password"
              placeholder="Enter your password"
              required=""
              type="password"
            />
          </div>
        </div>
        <div className="items-center p-6 flex justify-center">
          <button className="inline-flex items-center justify-center rounded-md text-sm font-medium text-white bg-[#1c65ffcb]">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
