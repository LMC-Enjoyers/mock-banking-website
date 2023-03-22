import React from "react";
import "./featuredInfo.css";

export default function FeaturedInfo2() {
  return (
    <div className="flex flex-row h-full w-full">
      <div className="flex flex-col flex-grow">
        <div className="flex flex-col h-full">
          <div className="flex mt-8 ml-28 h-2/5 w-5/6  bg-bank-black border rounded-3xl shadow"></div>
          <div className="flex mt-6 ml-28 h-2/5 w-5/6 bg-white border rounded-3xl shadow"></div>
        </div>
      </div>
      <div className="flex flex-grow items-start justify-end">
        <div className="flex mt-8 mr-28 h-5/6 w-5/6 bg-white border rounded-3xl shadow"></div>
      </div>
    </div>
  );
}
