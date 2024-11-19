// import React from "react";
import Banner from "./Banner";
import Card from "./Card";

const Body = () => {
  return (
    <>
      <div className="body  w-4/5">
        <div className="banner my-4">
          <Banner />
        </div>
        <div className="Items flex justify-between py-4 ">
          <div className="w-1/5">
            <Card />
          </div>
          <div className="w-1/5">
            <Card />
          </div>
          <div className="w-1/5">
            <Card />
          </div>
          <div className="w-1/5">
            <Card />
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
