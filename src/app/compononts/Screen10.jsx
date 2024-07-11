import Image from "next/image";
import React from "react";
import photoprofil from "../assets/photo-profil.png";
import carlyferris from "../assets/carly-ferris.png";
import ingridcorrea from "../assets/ingrid-correa.png";
import yuhuilin from "../assets/yuhui-lin.png";
import muradnaser from "../assets/murad-naser.png";

const Profile = ({
  image = {},
  name = "",
  position = "",
  description = "",
}) => {
  return (
    <div className="">
      <div className="flex justify-center ">
        <Image
          className="rounded-full"
          src={image}
          width={100}
          height={100}
          alt="picture"
        />
      </div>

      <div>
        <h3 className="text-rose-400 font-semibold">{name}</h3>
      </div>
      <div className="text-[15px] text-[#004B84]">
        <h6>
          {position} <br /> <div className="text-[10px]">{description}</div>
        </h6>
      </div>
    </div>
  );
};

function Screen10() {
  return (
    <div className="bg-[#D6E7F7] min-h-[600px] items-center place-content-center">
      <div className="text-[#004B84] text-center p-10">
        <h3 className="text-[30px] font-semibold pb-4">Acknowledgements</h3>
        <h5>
          Most reports conclude with a page acknowladging the contributions of
          the poeple who worked tirelessly on the projects mentioned
          within.Bellow, list down the names of those committed to these
          projects, such as:
        </h5>
      </div>
      <div className="grid md:grid-cols-5 grid-cols-1 md:gap-0 gap-6 items-center text-center ">
        <Profile
          image={photoprofil}
          name="Elliot Sterling"
          position="CEO & Co-Founder"
          description="Add details in 
          1-2 sentences"
        />
        <Profile
          image={carlyferris}
          name="CARLY FERRIS"
          position="COO"
          description="Add details in 
          1-2 sentences"
        />
        <Profile
          image={ingridcorrea}
          name="INGRID CORREA"
          position="Marketing VP"
          description="Add details in 1-2 sentences"
        />
        <Profile
          image={yuhuilin}
          name="YUHUI LIN"
          position="Administrtion VP"
          description="Add details in 1-2 sentences"
        />
        <Profile
          image={muradnaser}
          name="MURAS NASER"
          position="Sustainability Officer"
          description="Add details in 1-2 sentences"
        />
      </div>
    </div>
  );
}
export default Screen10;
