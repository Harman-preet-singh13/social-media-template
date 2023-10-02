import logo from "../../images/whole.png";
import modalbg from "../../images/group.png";
import { useState } from "react";
import LoginModal from "./LoginModal";

import { AiOutlineSearch, AiFillCaretDown } from "react-icons/ai";
import { AiFillCloseCircle } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <nav className="flex justify-between  mx-20 mt-5 navbar-color">
        <div className="logo self-center">
          <img src={logo.src} alt="logo" />
        </div>
        <div className="">
          <form className=" ">
            <AiOutlineSearch className="searchbar-icon" />
            <input
              className="searchbar-input text-center p-2 rounded-full w-[400px]"
              placeholder="Search for your favorite groups in ATG"
            />
          </form>
        </div>
        <div className="account self-center">
          <button onClick={openModal} className="flex ">
            <h1 className=" md:text-xs lg:text-base">
              Create account.
              <span className="text-blue">It's free!</span>
            </h1>
            <AiFillCaretDown className="m-1 " />
          </button>

          <div className="Modal-navbar">
            <LoginModal
              isOpen={isModalOpen}
              onRequestClose={closeModal}
              contentLabel="Login modal"
            >
              
              <div className="sigin-modal">
                
                <nav className="sigin-modal-nav px-5 py-2 bg-green-100">
                  <h2 className="">
                    Let's learn, shate & inspire each other with our passion for
                    computer engineering. Sign up now🤘
                  </h2>
                </nav>
                <main className="flex">
                  <div className="modal-left px-5 py-5">
                    <header className="">
                      <h1>Create Account</h1>
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
                      </div>
                      <AiOutlineEye className="eye-icon text-slate-500" />

                      <input placeholder="Confirm Password" type="text" />
                    </form>

                    <div className=" mt-5">
                      <button className="blue-btn w-full">
                        Create Account
                      </button>
                    </div>

                    <section className="mt-5">
                      <button className=" flex justify-center w-full gap-2 border py-2">
                        <BsFacebook className="text-blue-500 self-center" />
                        <span className=" text-sm font-semibold">
                          Sign up with Facebook
                        </span>
                      </button>
                      <button className=" mt-4 flex justify-center w-full gap-2 border py-2">
                        <FcGoogle className="text-blue-500 self-center" />
                        <span className="text-sm font-semibold">
                          Sign up with Google
                        </span>
                      </button>
                    </section>
                  </div>
                  <div className="modal-right mx-4 mt-5">
                    <section className="flex flex-col">
                      <a className="mt-1 self-end">
                        Alredy have an account?{" "}
                        <span className="text-blue-600">Sign in</span>
                      </a>
                      <img src={modalbg.src} className=" mt-8" alt="Group" />
                      <footer className="mt-16  flex justify-center text-center ">
                        <p className="mt-3">
                          By signing up, you agree to our
                          <span className="hover:underline">
                            {" "}
                            Terms & Conditions, Privacy policy
                          </span>
                        </p>
                      </footer>
                    </section>
                  </div>
                </main>
              </div>
            </LoginModal>
          </div>
        </div>
      </nav>
    </>
  );
}
