import React from "react";
import { PiDotsThreeOutlineFill } from "react-icons/pi";
import { BsFillShareFill } from "react-icons/bs";
import {AiOutlineEye} from "react-icons/ai"

type PostCardProps = {
  postImage:any;
  category:string;
  title:string;
  content:string;
  userImage:any;
  username:string;
  views:string;
};

const PostCard = ({
  postImage,
  category,
  title,
  content,
  userImage,
  username,
  views,
}:PostCardProps) => {
  return (
    <div className="PostCard">
      <img src={postImage.src} alt="Post" className="md:w-full" />
      <div className="px-2 my-2">
        <h2 className="">
           {category}
        </h2>
        <div className="flex justify-between">
          <h1 className="mt-2">{title}</h1>
          <PiDotsThreeOutlineFill className="text-3xl mt-2" />
        </div>
        <p className="mt-2">{content}</p>
        <div className="user-wrapper mt-3">

          <div className="flex justify-between">
            <div className="flex gap-2">
              <img src={userImage.src} alt="User" className="m-1 w-10 h-10" />
              <div className="user-details mt-1 flex flex-col  md:flex-row md:justify-between">
                <h2 className="Mainfeed-username">{username}</h2>
                <p className="text-sm md:hidden">{views} views</p>
              </div>
            </div>
            <div>
              <div className="flex gap-5">
              <p className="text-sm self-center flex gap-2 view-screen-hidden">
              <AiOutlineEye className="self-center"/>
                {views} views
              </p>
                <button className="grey-btn-sm text-sm m-1 flex py-1">
                <BsFillShareFill className="m-1" />
                <span className="share-screen-hidden">Share</span>
              </button>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
