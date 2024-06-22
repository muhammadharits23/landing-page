import React from "react";

const GoalCard = ({ title = "", description = "" }) => {
  return (
    <div className="border rounded-md border-sky-900 px-3 py-3">
      <h4 className="text-rose-400 ">{title}</h4>
      <br />

      <h6 className="text-sky-900">{description}</h6>
    </div>
  );
};

function Screen5() {
  return (
    <div className="bg-white min-h-[600px]">
      <div className="md:flex items-center flex-none md:p-20 p-7">
        <div className="md:flex flex-none md:w-[50%] w-[100%] text-sky-900">
          <h3 className="text-[30px] font-semibold text-left mb-5 pr-8">
            Sustainability Development Goals
          </h3>
        </div>
        <div className="text-sky-900">
          <h5>
            There are 17 SDGs and 169 targets in total. While they are all
            important and interrelated, some will be more relevant to your
            business than others. This section can identify the specific SDGs
            and targets your organization is prioritizing, and demonstrate how
            they align with your own business strategy and goals.
          </h5>
        </div>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 md:gap-20 gap-8 px-10 pb-20">
        <GoalCard
          title="industry, innovation, and infrastructure"
          description="This space gives you more room to expound on your message. Remember that writing effectively is an art. Start by using simple, everyday words people can easily understand. Be clear and direct to the point. "
        />
        <GoalCard
          title="life below water"
          description="This space gives you more room to expound on your message. Remember that writing effectively is an art. Start by using simple, everyday words people can easily understand. Be clear and direct to the point. "
        />
        <GoalCard
          title="good health and well-being"
          description="This space gives you more room to expound on your message. Remember that writing effectively is an art. Start by using simple, everyday words people can easily understand. Be clear and direct to the point. "
        />
      </div>
    </div>
  );
}

export default Screen5;
