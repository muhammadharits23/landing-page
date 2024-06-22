import Image from "next/image";
import React from "react";
import photoprofil from "../assets/photo-profil.png";
function Screen4() {
  return (
    <div className="bg-[#68C7FF]">
      <div className="md:flex items-center flex-none min-h-[600px] md:px-20 px-0">
        <div className="flex flex-col md:w-[50%] w-[100%] text-sky-900">
          <h3 className="text-[30px] font-semibold text-left mb-5 md:pl-0 pl-5">
            Massage From Our Leader
          </h3>
          <h5 className="md:pr-10 pr-6 md:p-0 p-6">
            Make your employees feel welcome and valued with a carefully crafted
            opening message. Aside from serving as a greeting, this space is
            also great for showing what your company culture is like by example.
            Share your thoughts on the company's beginnings and growth. Mention
            your vision for the company. Remember to express your appreciation
            and willingness to listen to everyone's ideas. And finally, remind
            each person how important they are to the bigger group.
          </h5>
        </div>
        <div className="flex justify-center flex-col md:pl-44 pl-0">
          <Image
            src={photoprofil}
            className="md:w-[400px] w-[100%] md:h-[400px] h-[300px] md:px-0 px-7"
            alt="Picture of the author"
          />

          <div className="md:pl-0 pl-5">
            <h4 className="font-semibold text-sky-900">
              Elliot Sterling, CEO & Co-founder
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Screen4;
