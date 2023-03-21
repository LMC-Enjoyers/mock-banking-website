import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import './App.css'
import Overview from "./pages/overview/Overview";

function App() {
  return (
    <div>
      <div className="flex">       
        <Sidebar/>
      </div>
    </div>
  );
}

export default App;