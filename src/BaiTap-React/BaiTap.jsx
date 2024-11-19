// import React from "react";
import Header from "./Header";
import Footer from "./footer";
import Body from "./Body";

const BaiTap = () => {
  return (
    <>
      <div className="BaiTap">
        <Header />
        <div className="body flex justify-center">
          <Body />
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
};

export default BaiTap;
