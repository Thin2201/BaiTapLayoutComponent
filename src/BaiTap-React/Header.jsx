// import React from "react";

const Header = () => {
  return (
    <>
      <div className="bg-slate-600 text-white flex">
        <div className="title w-1/2">Start Bootstrap</div>
        <div className="navbar w-1/2 ">
          <ul className="flex text-gray-400 text-center justify-center">
            <li className="px-4 hover:text-white">
              <a href="#">Home</a>
            </li>
            <li className="px-4 hover:text-white">
              <a href="#">About </a>
            </li>
            <li className="px-4 hover:text-white">
              <a href="#">Services</a>
            </li>
            <li className="px-4 hover:text-white">
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
