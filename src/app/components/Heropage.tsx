"use client";

import HeroMobileImg from "../../images/hero-bg-mobile.png";
import HeroDesktopImg from "../../images/hero-bg-desktop.png";
import useWindowWidth from "../screenSize";

import { BiArrowBack } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";

import { useState } from "react";

import LoginModal from "./LoginModal";

export default function Heropage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const heroUrl = useWindowWidth() >= 650 ? HeroDesktopImg : HeroMobileImg;

  const screenSize = useWindowWidth() >= 650;

  return (
    <div>
      <img src={heroUrl.src} alt="Heropage" className="hero-img" />

      <div
        className={`${screenSize ? "hidden" : "block"} mobile-hero-btn w-full`}
      >
        <div className="flex justify-between">
          <div>
            <BiArrowBack className="hero-back" />
          </div>
          <div>
            <button
              onClick={openModal}
              className="hero-btn px-2 py-1 border rounded-md"
            >
              Join Group
            </button>
            <div className="Modal-navbar">
              <LoginModal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Login modal"
              >
                <div className="sigin-modal">
                  <header className="flex justify-between">
                    <h1>Create Account</h1>
                    <button onClick={closeModal}>
                      <AiFillCloseCircle className="text-2xl text-slate-600" />
                    </button>
                  </header>

                  <form className=" w-80 mt-5">
                    <div className="flex">
                      <input 
                      placeholder="First Name" 
                      type="text"
                      className=""
                      />
                      <input placeholder="Last Name" type="text" />
                    </div>

                    <input placeholder="Email" type="text" />
                    <div className="modal-password">
                      <input placeholder="Password" type="text" />
                      
                    </div><AiOutlineEye className="eye-icon text-slate-500" />

                    <input placeholder="Confirm Password" type="text" />
                  </form>

                  <div className="flex justify-between mt-5">
                    <button className="blue-btn">
                      Create Account
                    </button>
                    <a className="underline self-center">or, Sign In</a>
                  </div>

                  <section className="mt-5">
                    <button className=" flex justify-center w-full gap-2 border py-2">
                      <BsFacebook className="text-blue-500 self-center" />
                      <span className=" text-sm font-semibold">Sign up with Facebook</span>
                    </button>
                    <button className=" mt-4 flex justify-center w-full gap-2 border py-2">
                      <FcGoogle className="text-blue-500 self-center" />
                      <span className="text-sm font-semibold">Sign up with Google</span>
                    </button>
                  </section>

                  <footer className="mt-5 flex justify-center text-center ">
                    <p className="px-10">
                      By signing up, you agree to our
                      <span className="hover:underline">
                        {" "}
                        Terms & Conditions, Privacy policy
                      </span>
                    </p>
                  </footer>
                </div>
              </LoginModal>
            </div>
          </div>
        </div>
      </div>

      <header className="hero-heading">
        <h1 className={` ${screenSize ? "fs-2xl" : "fs-nr"}`}>
          Computer Engineering
        </h1>
        <p className={` ${screenSize ? "fs-sm" : "fs-xs"} text-gray-300`}>
          142,765 Coumputer Engineets follow this
        </p>
      </header>
    </div>
  );
}
