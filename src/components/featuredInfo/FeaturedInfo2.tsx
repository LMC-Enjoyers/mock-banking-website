import React from "react";
import "./featuredInfo.css";

export default function FeaturedInfo2() {
  return (
    <div className="flex flex-row h-full w-full flex-wrap">
      <div className="flex flex-col flex-grow">
        <div className="flex h-1/2 items-end justify-center mb-1">
          <div className="flex h-5/6 w-5/6 bg-bank-black border rounded-3xl shadow"></div>
        </div>
        <div className="flex h-1/2 items-start justify-center mt-1">
          <div className="flex h-5/6 w-5/6 bg-white border rounded-3xl shadow"></div>
        </div>
      </div>
      <div className="flex flex-grow items-start mt-28 justify-center">
        <div className="flex h-5/6 w-3/4 bg-white border rounded-3xl shadow"></div>
      </div>
    </div>
  );
}
