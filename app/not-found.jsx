"use client";
import { useEffect, useState } from "react";
import Footer from "./blog/footer/footer";
import Navbar from "./blog/navbar/navbar";
import FallingText from "@/components/falling";

export default function Error() {
  let [pathname, setPathname] = useState("");
  useEffect(() => {
    setPathname(window.location.pathname);
  });
  return (
    <>
      <Navbar />
      <div className="full flex flex-col items-center h-screen">
        <div className="w-[80%] flex-1 flex flex-col justify-center items-center">
          <FallingText
            text={` 404 ${pathname} does not exists.`}
            highlightWords={["404"]}
            highlightClass="highlighted"
            trigger="hover"
            backgroundColor="transparent"
            wireframes={false}
            gravity={0.56}
            fontSize="2rem"
            mouseConstraintStiffness={0.9}
          />
        </div>
        <Footer />
      </div>
    </>
  );
}
