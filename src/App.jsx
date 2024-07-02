import { Outlet } from "react-router-dom";

import Navbar from "./components/Navbar";

import "./App.css";

function App() {
  return (
    <div>
      <div className="Container">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
