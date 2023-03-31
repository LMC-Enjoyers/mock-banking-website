import React from "react";
import CreateAccountModal from "./modals/Modals";
import { BsFillGrid1X2Fill } from "react-icons/bs";
import { BsBarChartSteps } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import { AiFillBank } from "react-icons/ai";
import { TransferMoney } from "./modals/Modals";
import { DeleteAccount } from "./modals/Modals";
import { AddFunds } from "./modals/Modals";


export default function Sidebar() {
  return (
    <div className="flex flex-col top-0 left-0 h-auto w-0 sm:w-32 md:w-48 bg-bank-black overflow-auto">
      <div className="flex flex-col w-4/5 h-4/5 self-center mt-32">
        <SidebarItem icon={<BsFillGrid1X2Fill color="white" size='20'/>} item={"Overview"} content={"Overview"}/>
        <CreateAccountModal/>
        <DeleteAccount/>
        <AddFunds/>
        <TransferMoney/>
        <SidebarEnd icon={<BiLogOut color="grey" size='24'/>} item={"Log out"} />
        <datalist id="all accounts">

        </datalist>
      </div>
    </div>
    
  );
}

const SidebarItem = ({ icon, item, content }: { icon: any, item: string, content: string }) => (
  
  <button className="block text-white bg-black-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-black-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800" type="button">
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

/*
const SidebarDropDown = () => (
  <div className="flex flex-col gap-4">
    <div className="flex items-center gap-4">
      <Dropdown
        label="Dropdown right start"
        placement="right-start"
      >
        <Dropdown.Item>
          Dashboard
        </Dropdown.Item>
        <Dropdown.Item>
          Settings
        </Dropdown.Item>
        <Dropdown.Item>
          Earnings
        </Dropdown.Item>
        <Dropdown.Item>
          Sign out
        </Dropdown.Item>
      </Dropdown>
    </div>
  </div>
)
*/
function AccountModalcontent (){
  return (
    <div id="Account" aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full">
      <div className="relative w-full h-full max-w-md md:h-auto">
          {/*<!-- Modal content -->*/}
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="Account">
                  <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  <span className="sr-only">Close modal</span>
              </button>
              <div className="px-6 py-6 lg:px-8">
                  <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
                  <form className="space-y-6" action="#">
                      <div>
                          <label htmlFor= "email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                          <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required></input>
                      </div>
                      <div>
                          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                          <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required></input>
                      </div>
                      <div className="flex justify-between">
                          <div className="flex items-start">
                              <div className="flex items-center h-5">
                                  <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required></input>
                              </div>
                              <label htmlFor = "remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                          </div>
                          <a href="#" className="text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
                      </div>
                      <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
                      <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                          Not registered? <a href="#" className="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
                      </div>
                  </form>
              </div>
          </div>
      </div>
    </div> 
  )
}