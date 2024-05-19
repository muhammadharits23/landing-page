import React from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const MessageCard = ({
  text = "Message from our Leader",
  link = "https://react-icons.github.io/react-icons",
}) => {
  return (
    <div className="flex justify-between items-center w-[470px] bg-[#156CAD] border-[#004B84] rounded-[10px]">
      <h5 className="text-[25px] pl-4 py-8 uppercase">{text}</h5>
      <a href={link} className="pr-4">
        <FaRegArrowAltCircleRight size={30} />
      </a>
    </div>
  );
};

function Screen2() {
  return (
    <div className="bg-[#004B84] min-h-[700px]">
      <h2 className="text-center pt-20 text-[50px]">Quick Links</h2>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-2 gap-6 mt-6">
          <MessageCard text="Message from our Leader" />
          <MessageCard text="Next Steps" />
          <MessageCard text="Overview" />
          <MessageCard text="Progress" />
          <MessageCard
            text="Sustainability Development
Goals"
          />
          <MessageCard text="Summary" />
        </div>
      </div>
    </div>
  );
}

export default Screen2;
