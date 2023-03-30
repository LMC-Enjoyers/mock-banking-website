import React from "react";
import { PieChart, Pie, Cell } from "recharts";
import { AiFillBank } from "react-icons/ai";
import { BiTrendingDown } from "react-icons/bi";
import { BiTrendingUp } from "react-icons/bi";
import { IoMdWallet } from "react-icons/io";

export default function FeaturedInfo() {
  //measures the rate by which the money in your bank account has increases / decreased
  // if it has increased it will show a positive trend line, otherwise it will show a negative trend line
  const moneyRate: number = 10.3;
  let moneyRateIcon: any;
  let moneyRateString: string = moneyRate as unknown as string;
  if (moneyRate > 0) {
    moneyRateIcon = <BiTrendingUp color="white" size="36" />;
    moneyRateString = "+" + moneyRate;
  } else if (moneyRate < 0) {
    moneyRateIcon = <BiTrendingDown size="20" />;
  }

  // colours used for the pie chart
  const colours = ["#1e1e1e", "#565656", "#a4a5a5"];
  // data for the pie chart
  const data = [
    { name: "Electronics", value: 400 },
    { name: "Laptops", value: 700 },
    { name: "Phones", value: 200 },
  ];
  return (
    <div className="flex flex-col 2xl:flex-row h-full w-screen sm:w-full overflow-hidden overflow-y-scroll bg-bank-background-grey">
      <div className="flex flex-col h-fit w-screen sm:w-full 2xl:w-1/2">
        <div className="flex flex-col items-center sm:items-start h-full">
          {/* Black "main account" card */}
          <div className="flex flex-col mt-8 sm:ml-8 md:ml-16 lg:ml-28 h-80 w-5/6 sm:w-5/6 flex-shrink-0 bg-bank-black border rounded-3xl shadow">
            <div className="flex flex-row ml-12 mr-12 mt-8">
              <div className="flex items-center h-full mr-8">
                <div className="flex bg-bank-light-grey p-2 rounded-2xl shadow">
                  <AiFillBank color="white" size="50" />
                </div>
              </div>
              <div className="flex justify-center flex-col">
                <div className="mb-2 mt-2 text-lg font-semibold text-white">
                  NAME HERE
                </div>
                <div className="text-base font-semibold whitespace-nowrap text-bank-light-grey">
                  ACC_NO | SORT_CODE
                </div>
              </div>
            </div>
            <div className="flex ml-12 mr-12 mt-12">
              <div className="text-4xl text-white font-semibold">$1,984.00</div>
            </div>
            <div className="flex flex-row ml-12 mr-12 mt-12">
              <div className="flex w-24 sm:w-40 flex-row">
                {moneyRateIcon}
                <div className="ml-2 text-white text-xl">
                  {moneyRateString}%
                </div>
              </div>
              <div className="flex flex-row ml-12 text-white text-xl">
                +1.4k
                <span className="text-bank-letter-grey whitespace-nowrap ml-1">this week</span>
              </div>
            </div>
          </div>

          {/* White "Savings" card */}
          <div className="flex flex-col mt-10 sm:ml-8 md:ml-16 lg:ml-28 h-80 w-5/6 sm:w-5/6 flex-shrink-0 bg-white border rounded-3xl shadow">
            <div className="flex flex-row ml-12 mr-12 mt-8">
              <div className="flex items-center h-full mr-8">
                <div className="flex bg-bank-lighter-grey p-2 rounded-2xl shadow">
                  <IoMdWallet size="50" />
                </div>
              </div>
              <div className="flex justify-center flex-col">
                <div className="mb-2 mt-2 text-lg font-semibold">
                  ACCOUNT NAME
                </div>
                <div className="text-base font-semibold text-bank-light-grey">
                  STARTING DATE
                </div>
              </div>
            </div>
            <div className="flex ml-12 mr-12 mt-12">
              <div className="text-4xl font-semibold">1,984.00</div>
            </div>
            <div className="flex flex-row ml-12 mr-12 mt-12">
              <div className="flex flex-row">
                <div className="flex w-24 sm:w-40 text-xl">
                  5%
                  <span className="text-bank-letter-grey whitespace-nowrap ml-1">
                    interest
                  </span>
                </div>
              </div>
              <div className="flex flex-row ml-12 text-xl">
                +500
                <span className="text-bank-letter-grey whitespace-nowrap ml-1">this month</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-full w-screen sm:w-full 2xl:w-1/2 items-start justify-center sm:justify-start 2xl:justify-end">
        {/* Pie chart card */}
        <div className="flex flex-col pb-24 pt-12 mt-8 mb-4 sm:ml-8 md:ml-16 lg:ml-28 2xl:ml-0 2xl:mr-24 w-5/6 bg-white border rounded-3xl shadow">
          <div className="text-center text-3xl">Top Categories</div>
          <div className="flex flex-shrink-0 justify-center">
            <PieChart width={500} height={500}>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={130}
                outerRadius={160}
                fill="#1e1e1e"
                paddingAngle={2}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colours[index]} />
                ))}
              </Pie>
            </PieChart>
          </div>
        </div>
      </div>
    </div>
  );
}
