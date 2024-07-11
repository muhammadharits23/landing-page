import Image from "next/image";
import React from "react";

function Screen11() {
  return (
    <div className="bg-[#004B84]">
      <div className="flex items-center md:flex-row flex-col min-h-[600px]">
        <div className="md:w-[50%] w-[100%] md:pt-0 pt-7">
          <div className="flex justify-center">
            <Image
              src={
                "https://img.freepik.com/free-vector/emergency-rescue-team-help-people-cartoon-style_1308-96770.jpg"
              }
              width={300}
              height={300}
            />
          </div>
        </div>
        <div className=" md:w-[50%] md:pt-80 pt-10 md:pl-48 text-start">
          <h4 className="text-white text-[30px] font-semibold text-start">
            Contact Information
          </h4>
          <h6 className="text-rose-500 mt-3 text-[15px]">
            +123-456-7890 <br /> hello@reallygreatsite.com <br /> 123 Anywhere
            St., Any City <br />
            www.reallygreatsite.com
          </h6>
        </div>
      </div>
    </div>
  );
}

export default Screen11;
