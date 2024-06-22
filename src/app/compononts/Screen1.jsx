import React from "react";
import picture from "../assets/picture.png";
import Image from "next/image";
import "../styles/Screen1.css";
function Screen1() {
  return (
    <div className="bg-[#68C7FF]">
      <div className="flex items-center min-h-[600px] md:flex-row flex-col pt-10">
        <div className="w-[50%]">
          <div className="flex justify-center">
            <Image src={picture} width={400} height={400} />
          </div>
        </div>
        <div className="flex flex-col items-center md:w-[50%] w-[100%]">
          <h5 className="text-red-500 bg-white py-2 md:px-5 mt-5">
            DEMPSEY + DELTA
          </h5>
          <h3 className="text-sky-900 text-[50px] font-semibold md:text-center text-center">
            Sustainability Initiatives
          </h3>
          <h6 className="text-black mt-10">Sustainable Progress Goals</h6>
          <h6 className="text-black">Report December 2025</h6>
        </div>
      </div>
    </div>
  );
}

export default Screen1;
