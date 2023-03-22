import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import './App.css'
import Overview from "./pages/overview/Overview";

function App() {
  return (
    <div>
      <div className="flex flex-row h-screen">       
        <Sidebar/>
        <div className="flex flex-col flex-grow bg-bank-light-grey">
          <Topbar/>
        </div>
      </div>
    </div>
  );
}

export default App;