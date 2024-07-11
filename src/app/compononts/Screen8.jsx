import React from "react";

const GoalCard = ({ title = "", description = "" }) => {
  return (
    <div className="border rounded-md border-white bg-white px-5 py-5">
      <h4 className="text-rose-400 ">{title}</h4>
      <br />

      <h6 className="text-sky-900">{description}</h6>
    </div>
  );
};

function Screen8() {
  return (
    <div className="bg-sky-300 min-h-[600px]">
      <div className="flex md:items-center md:pl-20 pl-6 md:pr-20 pr-6 md:pb-20 pb-9 md:pt-20 pt-9 md:flex-row flex-col">
        <div className="flex w-[50%] text-sky-900">
          <h3 className="text-[30px] font-semibold text-left mb-5">
            Next Steps
          </h3>
        </div>
        <div className="text-sky-900">
          <h5>
            Where do you go from here? Sustainability reports are not just about
            looking back, but also looking forward. This SDG Progress Report is
            a continuous work in progress, a way for your organization to track
            its impact and improvements over time.
          </h5>
        </div>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 md:gap-20 gap-8 md:px-10 px-8 md:pb-20 pb-8">
        <GoalCard
          title="Revisit current local partnerships"
          description="This space gives you more room to expound on your message. Remember that writing effectively is an art. Start by using simple, everyday words people can easily understand. Be clear and direct to the point.  "
        />
        <GoalCard
          title="Update progress on healthcare program"
          description="This space gives you more room to expound on your message. Remember that writing effectively is an art. Start by using simple, everyday words people can easily understand. Be clear and direct to the point. "
        />
        <GoalCard
          title="Implement Phase 4 of Info Campaign"
          description="This space gives you more room to expound on your message. Remember that writing effectively is an art. Start by using simple, everyday words people can easily understand. Be clear and direct to the point. "
        />
      </div>
    </div>
  );
}
export default Screen8;
