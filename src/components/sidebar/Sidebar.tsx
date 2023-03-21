import React from "react";
import "./sidebar.css";
import { BsFillGrid1X2Fill } from "react-icons/bs";
import { BsBarChartSteps } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import { fontWeight } from "@mui/system";

export default function Sidebar() {
  return (
    <div className="fixed top-0 left-0 h-screen w-64 flex flex-col bg-bank-black">
      <SidebarStart icon={<BsFillGrid1X2Fill color="white" size='20'/>} item={"Overview"} />
      <SidebarItem icon={<BsBarChartSteps color="white" size='20'/>} item={"Summary"} />
      <SidebarEnd icon={<BiLogOut color="grey" size='24'/>} item={"Log out"} />
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

const SidebarStart = ({ icon, item }: { icon: any, item: string }) => (
  <button className="sidebar-item mt-28">
    {icon}
    <div className="text-white font-medium p-4">
      {item}
    </div>
  </button>
)

const SidebarEnd = ({ icon, item }: { icon: any, item: string }) => (
  <button className="sidebar-item mt-auto mb-5">
    {icon}
    <div className="text-bank-letter-grey font-semibold p-4">
      {item}
    </div>
  </button>
)