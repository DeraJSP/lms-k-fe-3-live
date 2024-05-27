/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import google from "../../assets/google.svg";
import facebook from "../../assets/facebook.png";

export default function Login() {
  return (
    <>
      <div className="flex items-center justify-center h-[1100px] w-full bg-yellow-300">
        <div className="px-[200px] py-[100px] rounded-xl bg-white">
          <div className="bg-white rounded-xl w-[676px]">
            <form action="/register" method="post">
              <div className="mb-2">
                <input
                  type="email"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  placeholder="Email Address"
                  className="p-4 w-full font-medium text-[24px] mb-6 rounded-xl text-[#6B6B69] border-2 border-[#130E5D] bg-[#FFF0B6]"
                />
              </div>
              <div className="mb-2">
                <input
                  type="password"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  name="password"
                  placeholder="Password"
                  className="p-4 w-full font-medium text-[24px]  mb-6 rounded-xl text-[#6B6B69] border-2 border-[#130E5D] bg-[#FFF0B6]"
                />
              </div>
              <div className="flex justify-end items-center">
                <a
                  href="#"
                  className="text-2xl font-bold no-underline text-[#130E5D] ml-2"
                ></a>
                <Link to="/ForgotPassword">
                  <p className="font-medium text-right text-2xl text-[#130E5D]">
                    Forgot password
                  </p>
                </Link>
              </div>
              <ToastContainer />
              <Link to="/Learningpage">
                <button
                  type="submit"
                  className="w-full h-[78px] mt-20 px-4 py-2 text-[32px] bg-[#FFD012] text-[#04031C] font-bold py-2 px-4 mb-2 rounded-xl"
                >
                  Continue
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
