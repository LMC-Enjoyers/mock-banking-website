import React from "react";
import "./sidebar.css";
import { BsFillGrid1X2Fill } from "react-icons/bs";
import { BsBarChartSteps } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";

export default function Sidebar() {
  return (
    <div className="top-0 left-0 h-screen w-48 lg:w-56 flex flex-col bg-bank-black">
      <div className="flex flex-col w-4/5 h-4/5 self-center mt-32">
        <SidebarItem icon={<BsFillGrid1X2Fill color="white" size='20'/>} item={"Overview"} />
        <SidebarItem icon={<BsBarChartSteps color="white" size='20'/>} item={"Summary"} />
        <SidebarEnd icon={<BiLogOut color="grey" size='24'/>} item={"Log out"} />
      </div>
    </div>
  );
}

const SidebarItem = ({ icon, item }: { icon: any, item: string }) => (
  <button className="sidebar-item">
    {icon}
    <div className="text-white font-medium p-4">
      {item}
    </div>
  </button>
)

const SidebarEnd = ({ icon, item }: { icon: any, item: string }) => (
  <button className="sidebar-item mt-auto">
    {icon}
    <div className="text-bank-letter-grey font-semibold p-4">
      {item}
    </div>
  </button>
)