import React from "react";
import "./featuredInfo.css";
import { PieChart, Pie, Cell } from "recharts";
import { AiFillBank } from "react-icons/ai";
import { BiTrendingDown } from "react-icons/bi";
import { BiTrendingUp } from "react-icons/bi";

export default function FeaturedInfo2() {
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
    <div className="flex flex-row flex-grow w-full bg-bank-background-grey overflow-auto">
      <div className="flex flex-col h-full w-1/2">
        <div className="flex flex-col h-full">
          <div className="flex flex-col mt-8 ml-28 h-80 w-5/6 flex-shrink-0 bg-bank-black border rounded-3xl shadow">
            <div className="flex flex-row ml-12 mt-8">
              <div className="flex items-center h-full mr-8">
                <div className="flex bg-bank-light-grey p-2 rounded-2xl shadow">
                  <AiFillBank color="white" size="50" />
                </div>
              </div>
              <div className="flex justify-center flex-col">
                <div className="mb-2 mt-2 text-lg font-semibold text-white">
                  NAME HERE
                </div>
                <div className="text-base font-semibold text-bank-light-grey">
                  ACC_NO | SORT_CODE
                </div>
              </div>
            </div>
            <div className="flex ml-12 mt-12">
              <div className="text-4xl text-white font-semibold">$1,984.00</div>
            </div>
            <div className="flex flex-row ml-12 mt-12">
              <div className="flex flex-row">
                {moneyRateIcon}
                <div className="ml-2 text-white text-xl">
                  {moneyRateString}%
                </div>
              </div>
              <div className="flex flex-row ml-12 text-white text-xl">
                +1.4k
                <span className="text-bank-letter-grey ml-1">this week</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-10 ml-28 h-80 w-5/6 flex-shrink-0 bg-white border rounded-3xl shadow">
            <div className="flex flex-row ml-12 mt-8">
              <div className="flex items-center h-full mr-8">
                <div className="flex bg-bank-lighter-grey p-2 rounded-2xl shadow">
                  <AiFillBank size="50" />
                </div>
              </div>
              <div className="flex justify-center flex-col">
                <div className="mb-2 mt-2 text-lg font-semibold">
                  NAME HERE
                </div>
                <div className="text-base font-semibold text-bank-light-grey">
                  ACC_NO | SORT_CODE
                </div>
              </div>
            </div>
            <div className="flex ml-12 mt-12">
              <div className="text-4xl font-semibold">$1,984.00</div>
            </div>
            <div className="flex flex-row ml-12 mt-12">
              <div className="flex flex-row">
                <div className="ml-2 text-xl">
                    5%
                    <span className="text-bank-letter-grey ml-1">interest rate</span>
                </div>
              </div>
              <div className="flex flex-row ml-12 text-xl">
                +500
                <span className="text-bank-letter-grey ml-1">this month</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-grow items-start justify-end">
        <div className="flex flex-col pb-24 pt-12 mt-8 mr-28 flex-shrink-0 w-5/6 bg-white border rounded-3xl shadow">
          <div className="text-center text-3xl">Top Categories</div>
          <div className="flex justify-center">
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
                label
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
