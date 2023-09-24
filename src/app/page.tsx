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
      <div className={`${screenSize ? "block" : "hidden"} sticky top-0 border-b`}>
        <Navbar />
      </div>
      <Heropage />
      <div className="sticky top-12 mt-4">
        <SubNavbar />
      </div>

      <MainContent />
    </>
  );
}
