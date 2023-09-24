import React, { useState } from "react";
import crossImg from "../../images/icon/cross.png";
import editImg from "../../images/icon/edit.png";
import thumbImg from "../../images/icon/thumb.png";
import { BiInfoCircle } from "react-icons/bi";
import avatar1 from "../../images/Rectangle 6.png";
import avatar2 from "../../images/Rectangle 6-1.png";
import avatar3 from "../../images/Rectangle 6-2.png";
import avatar4 from "../../images/Rectangle 6-3.png";

import {RxCross2} from "react-icons/rx"
import {MdModeEditOutline} from "react-icons/md"

export default function SideFeed() {
  const [location, setLoaction] = useState("Noida, India");
  const [pen, setPen] = useState(false);
  const [follow, setFollow] = useState("Follow");

 

  function FollowHandler() {
    setFollow((prevFollow)=> (prevFollow === "Follow" ? "Followed": "Follow"))
  }
  

  const followed = follow === "Followed" ? "black-btn": "grey-btn"

  const icon = pen ? crossImg : editImg;

  const [isCrossIcon, setIsCrossIcon] = useState(false);

function clickHandler() {
  setIsCrossIcon(!isCrossIcon);
}

  return (
    <div className=" w-[250px]">
      <div className=" loaction-bar flex">
        <input
          className=" border-b px-5 sideFeed-serchbar"
          value={location}
          onChange={(e) => setLoaction(e.target.value)}
          onClick={clickHandler}
        />
        <div className="mt-1">
        {isCrossIcon ? <RxCross2/> : <MdModeEditOutline />}
        </div>
      </div>

      <div className="flex gap-2 mt-10">
        <BiInfoCircle className="w-10 mt-1 info-icon" />
        <p className="info-para">
          Your location will help us serve better and extend a personalised
          experience
        </p>
      </div>

      <div className="groups mt-10">
        <h1 className="flex gap-2 sideBar-h1">
          <img src={thumbImg.src} alt="thumbIcon" className="w-6" />
          RECOMMENDED GROUPS
        </h1>

        <div className="mt-5 flex justify-between">
          <div className="flex gap-3">
            <img src={avatar1.src}
            alt="avatar"
            className=""
            />
            <h2 className=" self-center">
              Leisure
            </h2>
          </div>
          <button 
          onClick={FollowHandler}
          className={`${followed} px-3 hover:bg-black hover:text-white`}>
            {follow}
          </button>
        </div>

        <div className="mt-5 flex justify-between">
          <div className="flex gap-3">
            <img src={avatar2.src}
            alt="avatar"
            className=""
            />
            <h2 className=" self-center">
              Activism
            </h2>
          </div>
          <button 
          
          className={`grey-btn px-3 hover:bg-black hover:text-white`}>
            Follow
          </button>
        </div>

        <div className="mt-5 flex justify-between">
          <div className="flex gap-3">
            <img src={avatar3.src}
            alt="avatar"
            className=""
            />
            <h2 className=" self-center">
              MBA
            </h2>
          </div>
          <button 
         
          className={`grey-btn px-3 hover:bg-black hover:text-white`}>
            Follow
          </button>
        </div>

        <div className="mt-5 flex justify-between">
          <div className="flex gap-3">
            <img src={avatar4.src}
            alt="avatar"
            className=""
            />
            <h2 className=" self-center">
              Philosophy
            </h2>
          </div>
          <button 
          
          className={`grey-btn px-3 hover:bg-black hover:text-white`}>
            Follow
          </button>
        </div>

        <div className="mt-16 flex justify-end">
          <p>See More..</p>
        </div>
      </div>
    </div>
  );
}
