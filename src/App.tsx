import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import './App.css'
import FeaturedInfo from "./components/featuredInfo/FeaturedInfo";
import UserContext from "./components/CurrentData";
import { useState } from "react";

let initData = {
  name: 'Name',
  account_name: 'Name',
  balance: 0,
  interest: 0,
  total_change: 0,
  account_no: 0,
  sort_code: 0,
  start_date: '01/01/23',
  saving_balance: 0,
  saving_interest: 0,
  month_change: 0,
}


function App() {
  const [data, setData] = useState(initData)
  return (
    <div className="flex h-screen">
      <div className="flex flex-row flex-grow"> 
        <UserContext.Provider value={{data, setData}}>      
          <Sidebar/>
          <div className="flex flex-col flex-grow">
            <Topbar/>
              <FeaturedInfo/>
          </div>
        </UserContext.Provider>
      </div>
    </div>
  );
}

export default App;