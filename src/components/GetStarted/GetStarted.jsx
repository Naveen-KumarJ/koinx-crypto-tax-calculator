import React from "react";
import frame from "../../assets/Frame.png";
const GetStarted = () => {
  return (
    <div className="bg-blue-600 flex-1 p-2 py-8 rounded-xl">
      <div className="w-[90%] flex flex-col justify-center items-center text-center gap-2.5 mx-auto">
        <h1 className="text-white font-semibold text-xl">
          Get Started with KoinX for FREE
        </h1>
        <p className="text-neutral-100 text-sm">
          With our range of features that you can equip for free, KoinX allows
          you to be more educated and aware of your tax reports.
        </p>
        <img src={frame} alt="frame-img" className="my-4" />
        <button className="bg-white font-semibold px-4 py-1 rounded-md cursor-pointer hover:bg-slate-50">
          Get Started for FREE
        </button>
      </div>
    </div>
  );
};

export default GetStarted;
