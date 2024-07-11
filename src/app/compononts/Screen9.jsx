import React from "react";

const GoalCard = ({ title = "", description = "" }) => {
  return (
    <div className="  p-24 px-3 py-3">
      <h4 className="text-rose-400 ">{title}</h4>
      <br />

      <h6 className="text-white">{description}</h6>
    </div>
  );
};

function Screen9() {
  return (
    <div className="bg-sky-900 min-h-[600px] md:pt-20 pt-6 md:px-10 px-6 ">
      <div className="flex md:items-center md:flex-row flex-col">
        <div className="flex w-[50%] text-white pr-10">
          <h3 className="text-[30px] font-semibold text-left mb-5">Summary</h3>
        </div>
        <div className="text-white mb-16">
          <h5>
            End your report with a review of the highlights, and a renewed
            commitment to continue working on making the SDGs attainable by
            2030. A vision statement, call-to-action or quote from your leaders
            are powerful ways to conclude your progress report. Leave your
            audience inspired, and motivated to help your organization achieve
            its SDG-aligned goals!
          </h5>
        </div>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 rounded-md mx-4 bg-[#156CAD] p-5 md:pb-0 pb-9">
        <GoalCard
          title="Infrastructure Initiative: 45%"
          description="Summarize the key points here.
        Add a bullet point here
        Add as many as you need
        Add a bullet point here
        Add as many as you need
        Add a bullet point here"
        />
        <GoalCard
          title="Ocean Protection Program: 55%"
          description="Summarize the key points here.
        Add a bullet point here
        Add as many as you need
        Add a bullet point here
        Add as many as you need
        Add a bullet point here"
        />
        <GoalCard
          title="Healthcare Initiative: 60%"
          description="Summarize the key points here.
        Add a bullet point here
        Add as many as you need
        Add a bullet point here
        Add as many as you need
        Add a bullet point here"
        />
      </div>
    </div>
  );
}
export default Screen9;
