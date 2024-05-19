import React from "react";
import Image from "next/image";
function Screen3() {
  return (
    <div className="bg-rose-400 flex pt-[50px] min-h-[600px]">
      <div className="w-[50%]">
        <h3 className="text-[20px] font-semibold text-center pr-[136px] mb-7 text-sky-900">
          Overview
        </h3>
        <div className="flex justify-center">
          <Image
            src="https://totalcrane.co.id/wp-content/uploads/2021/11/bagian-bagian-crawler-crane-281x300.png"
            width={200}
            height={300}
            alt="Picture of the author"
          />
        </div>
      </div>
      <div className="w-[50%] pr-[50px]">
        <h5 className="">
          The Sustainable Development Goals (SDGs), also known as Global Goals,
          are a set of 17 integrated and interrelated goals to end poverty,
          protect the planet , and ensure that humanity enjoys peace and
          prosperity by 2030.
          <br />
          <br />
          <br />
          Reporting on the SDGs is important in communicating to stakeholders
          the company's commitment to contributing to the Global Goals, claiming
          accountability and responsibility to take the necessary actions, and
          measuring progress over time.
          <br />
          <br />
          <br />
          SDG Progress Reports cater to a variety of audiences, so it's best to
          adjust it accordingly. First, identify your target reader. Next, you
          can shift your focus on what they need to know. For example, your
          action plans are in the interest of your beneficiaries. Your investors
          might prefer details like timelines or budgets, while others like your
          external stakeholders will be more interested in the impact made, the
          challenges you encountered, and the lessons you learned from them.
        </h5>
      </div>
    </div>
  );
}

export default Screen3;
