import React from "react";
import MainFeed from "./MainFeed";
import SideFeed from "./SideFeed";
import useWindowWidth from "../screenSize";

export default function MainContent() {

    const screenSize = useWindowWidth() >= 650;


  return (
    <div className="mt-8 container mx-auto">
      <main className="flex justify-between gap-10">
        <div className="">
            <MainFeed />
        </div>
        <div className={`${screenSize ? 'block':'hidden'}`}>
            <SideFeed />
        </div>
        
      </main>
    </div>
  );
}
