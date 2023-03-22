import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import './App.css'
import FeaturedInfo2 from "./components/featuredInfo/FeaturedInfo2";

function App() {
  return (
    <div>
      <div className="flex flex-row h-screen">       
        <Sidebar/>
        <div className="flex flex-col flex-grow bg-bank-light-grey">
          <Topbar/>
          <FeaturedInfo2/>
        </div>
      </div>
    </div>
  );
}

export default App;