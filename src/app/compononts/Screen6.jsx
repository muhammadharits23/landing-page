import React from "react";

const HeadCard = ({ title = "", ...rest }) => {
  return (
    <div {...rest}>
      <h6 className="text-[#68c7ff] font-bold">{title}</h6>
    </div>
  );
};

const ListCard = ({ title = "", ...rest }) => {
  return (
    <div className="" {...rest}>
      <h6 className="text-white">{title}</h6>
    </div>
  );
};

const Column = ({ headName = "", listItems = [], columnNumber = 0 }) => {
  return (
    <div className="grid grid-rows-4 items-center ">
      <HeadCard
        className="border border-white  h-full flex items-center p-4"
        style={{
          borderTopColor: "transparent",
          borderLeftColor: "transparent",
          borderRightColor: columnNumber !== 3 ? "white" : "transparent",
        }}
        title={headName}
      />
      {listItems?.map((item, index) => {
        return (
          <ListCard
            key={index}
            style={{
              borderTopColor: "transparent",
              borderLeftColor: "transparent",
              borderRightColor: columnNumber !== 3 ? "white" : "transparent",
              borderBottomColor: index !== 2 ? "white" : "transparent",
            }}
            className="border border-white p-3"
            title={item}
          />
        );
      })}
    </div>
  );
};

function Screen6() {
  return (
    <div className="bg-[#004B84] min-h-[600px] md:p-0 p-3">
      <div className="flex items-center md:flex-row flex-col md:pl-10 md:pt-48">
        <div className="md:w-[50%] w-[100%] md:mb-0 mb-5 text-left text-white">
          <h3 className="text-[30px] font-semibold mb-5">Our Progress</h3>
          <h6>
            Performance goals are a good way to monitor and measure progress.
            Reporting performance can include details such as indicators
            identified, data collected, and SDG-related activities accomplished.
            <br />
            Clear and concrete performance goals make it easier to generate
            relevant, consistent, and comparable data over time, in formats that
            your audience can understand and appreciate.
          </h6>
        </div>
        <div className="grid grid-cols-3 bg-[#156CAD] border-transparent rounded-xl md:mx-7">
          {/* <HeadCard title="Key Indicator" /> */}
          <Column
            columnNumber={1}
            headName="Key Indicator"
            listItems={[
              "Your Key Performance Indicator goes here",
              "Your Key Performance Indicator goes here",
              "Your Key Performance Indicator goes here",
            ]}
          />
          <Column
            columnNumber={2}
            headName="Activity / Project"
            listItems={[
              "Your Key Performance Indicator goes here",
              "Your Key Performance Indicator goes here",
              "Your Key Performance Indicator goes here",
            ]}
          />
          <Column
            columnNumber={3}
            headName="Data / Outcome"
            listItems={[
              "Your Key Performance Indicator goes here",
              "Your Key Performance Indicator goes here",
              "Your Key Performance Indicator goes here",
            ]}
          />

          {/* <HeadCard title="Actifity / Project" />
          <HeadCard title="Data / Aoutcome" />
          <ListCard title="Your Key Performance Indicator goes here" />
          <ListCard title="Add a few details describing the related activities" />
          <ListCard
            title="What results did you obtain from your project? 
Write them here."
          />
          <ListCard title="Your Key Performance Indicator goes here" />
          <ListCard title="Your Key Performance Indicator goes here" />
          <ListCard title="Add a few details describing the related activities" />
          <ListCard title="Add a few details describing the related activities" />
          <ListCard
            title="What results did you obtain from your project? 
Write them here."
          />
          <ListCard
            title="What results did you obtain from your project? 
Write them here."
          /> */}
        </div>
      </div>
    </div>
  );
}

export default Screen6;
