import React from "react";
import { BsFillGrid1X2Fill } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import CreateAccount from "./modals/Modals";
import { SwitchAccount } from "./modals/Modals";
import { TransferMoney } from "./modals/Modals";
import { DeleteAccount } from "./modals/Modals";
import { Tranfer } from "./modals/Modals";


export default function Sidebar() {
  return (
    <div className="flex flex-col top-0 left-0 h-auto w-0 sm:w-36 md:w-48 bg-bank-black overflow-auto">
      <div className="flex flex-col w-4/5 h-4/5 self-center mt-32">
        <SidebarItem icon={<BsFillGrid1X2Fill color="white" size='20'/>} item={"Overview"} content={"Overview"}/>
        <CreateAccount/>
        <SwitchAccount/>
        <DeleteAccount/>
        <Tranfer/>
        {/*<TransferMoney/>*/}
        <SidebarEnd icon={<BiLogOut color="grey" size='24'/>} item={"Log out"} />
        <datalist id="all accounts">

        </datalist>
      </div>
    </div>
    
  );
}

const SidebarItem = ({ icon, item, content }: { icon: any, item: string, content: string }) => (
  
  <button className="sidebar-item" type="button">
    {icon}
    <div className="text-white font-medium p-4">
      {item}
      
    </div>
    
  </button>
)

const SidebarEnd = ({ icon, item }: { icon: any, item: string }) => (
  <button className="sidebar-item mt-auto">
    {icon}
    <div className="text-bank-letter-grey font-semibold text-lg p-4">
      {item}
    </div>
  </button>

)