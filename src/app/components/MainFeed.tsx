import React from "react";
import PostCard from "./PostCard"; // Import the PostCard component

import postImg1 from "../../images/post-img/Rectangle 5.png";
import postImg2 from "../../images/post-img/Rectangle 5-2.png";
import postImg3 from "../../images/post-img/Rectangle 5-1.png";

import avatar1 from "../../images/avatar/Rectangle 3-1.png";
import avatar2 from "../../images/avatar/Rectangle 3-2.png";
import avatar3 from "../../images/avatar/Rectangle 3-3.png";
import avatar4 from "../../images/avatar/Rectangle 3-4.png";
import PostCard2 from "./PostCard2";

export default function MainFeed() {
  return (
    <div className="w-full border-b-4 border-slate-200">
      <div className="border-b-4 border-slate-200 md:border-[1px] md:rounded mb-2">
        <PostCard
          postImage={postImg2}
          category="✍️Article"
          title="What if famous brands had regular fonts? Meet RegulaBrands!"
          content="I've worked in UX for the better part of a decade."
          userImage={avatar4}
          username="Sarthak Kamra"
          views="1.4k"
        />
      </div>
      <div className="border-b-4 border-slate-200 mb-2 md:border-[1px] md:rounded">
        <PostCard
          postImage={postImg1}
          category="🔬Education"
          title="Tax Benefits for Investment under National Pension Scheme launched by Government"
          content="I've worked in UX for the better part of a decade."
          userImage={avatar1}
          username="Sarah West"
          views="4.8k"
        />
      </div>
      <div className="border-b-4 border-slate-200 mb-2 md:border-[1px] md:rounded">
        <PostCard2
          postImage={postImg3}
          category="📅Meetup"
          title="Finance & Investment Elite Social Mixer @Lujiazui"
          item1="📅Fri,12 Oct, 2023"
          item2="Ahmedabad, India"
          buttonName="Vist Website"
          userImage={avatar2}
          username="Ronal Jones"
          views="800"
        />
      </div>
      <div className="border-b-4 border-slate-200 mb-2 md:border-[1px] md:rounded">
        <PostCard2
          
          category="💼Job"
          title="Finance & Investment Elite Social Mixer @Lujiazui"
          item1="💼Innovaccer Anaytic.."
          item2="Nodia, India"
          buttonName="Apply on Timesjobs"
          userImage={avatar3}
          username="Joseph Gray"
          views="1.7k"
        />
      </div>
    </div>
  );
}
