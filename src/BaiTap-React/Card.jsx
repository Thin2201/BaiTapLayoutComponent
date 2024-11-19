// import React from "react";

const Card = () => {
  return (
    <div>
      <div className="Card border-4 border-purple-700">
        <div className="Img text-lg bg-slate-500 py-10">
          <h1>500 x 325</h1>
        </div>
        <div className="Item py-4 px-2">
          <h1 className="p-2 font-bold text-lg">Card title</h1>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
            laboriosam.
          </p>
        </div>
        <div className="btn bg-slate-400   ">
          <button className="inline-block m-2 p-1 rounded-md bg-blue-600">
            Find Out More!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
