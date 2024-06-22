import React from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const MessageCard = ({
  text = "Message from our Leader",
  link = "https://react-icons.github.io/react-icons",
}) => {
  return (
    <div className="flex justify-between items-center md:w-[470px] w-[100%] bg-[#156CAD] border-[#004B84] rounded-[10px]">
      <h5 className="text-[25px] pl-4 py-8 uppercase">{text}</h5>
      <a href={link} className="pr-4">
        <FaRegArrowAltCircleRight size={30} />
      </a>
    </div>
  );
};

function Screen2() {
  return (
    <div className="bg-[#004B84] min-h-[600px]">
      <h2 className="text-center pt-9 text-[50px]">Quick Links</h2>
      <div className="flex justify-center items-center">
        <div className="grid md:grid-cols-2 gap-6 mt-6 grid-cols-1 md:px-0 px-5 md:pb-0 pb-5">
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
