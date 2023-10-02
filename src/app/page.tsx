"use client";

import Navbar from "./components/Navbar";
import Heropage from "./components/Heropage";
import useWindowWidth from "./screenSize";
import SubNavbar from "./components/SubNavbar";
import MainContent from "./components/MainContent";

export default function Home() {
  const screenSize = useWindowWidth() >= 650;

  return (
    <>
      <div className={`${screenSize ? "block h-12" : "hidden"} sticky top-0 bg-white border-b`}>
        <Navbar />
      </div>
      <Heropage />
      <div className="">
        <SubNavbar />
      </div>

      <MainContent />
    </>
  );
}
