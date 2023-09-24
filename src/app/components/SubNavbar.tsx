import React, { useState } from "react";
import { AiFillCaretDown, AiOutlineUsergroupAdd } from "react-icons/ai";
import useWindowWidth from "../screenSize";

export default function SubNavbar() {
  const [activeNavItem, setActiveNavItem] = useState(0);

  const handleNavItemClick = (index:number) => {
    setActiveNavItem(index);
  };

  const screenSize = useWindowWidth() >= 650;

  return (
    <div className="container mx-auto sideNavbar-color">
      <div
        className={` mobile-screen ${screenSize ? "hidden" : "block"}
        mx-4 mt-4 flex justify-between`}
      >
        <h1 className="text-sm">Posts(368)</h1>
        <button className="grey-btn-sm text-sm flex gap-3">
          Filter:All
          <AiFillCaretDown className="m-1" />
        </button>
      </div>

      <div
        className={`desktop-screen ${screenSize ? "block" : "hidden"}
        
        `}
      >
        
        <div className="flex justify-between">
          <ul className="topnav pt-2 text-gray-400 flex gap-5">
            
            {["All Posts(32)", "Article", "Event", "Education", "Job"].map(
              (item, index) => (
                <li
                  key={index}
                  className={`nav-item ${
                    index === activeNavItem ? "active" : ""
                  }`}
                  onClick={() => handleNavItemClick(index)}
                >
                  {item}
                </li>
              )
            )}
            
            
          </ul>
          
          <ul className="flex gap-2 mb-2">
            <li className="grey-btn flex gap-3 px-2">
              <span className=" self-center">Write a Post</span>
              <AiFillCaretDown className=" self-center" />
            </li>
            <li className="blue-btn flex">
              <AiOutlineUsergroupAdd className="mb-1 text-xl" />
              Join Group
            </li>
          </ul>
          
        </div>
        
        <hr />
      </div>
    </div>
  );
}
