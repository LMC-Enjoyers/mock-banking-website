import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import './App.css'
import FeaturedInfo2 from "./components/featuredInfo/FeaturedInfo2";

function App() {
  return (
    <div className="flex h-screen">
      <div className="flex flex-row flex-grow">       
        <Sidebar/>
        <div className="flex flex-col flex-grow">
          <Topbar/>
          <FeaturedInfo2/>
        </div>
      </div>
    </div>
  );
}

export default App;