import { Outlet } from "react-router-dom";
import Navbar from "./navbar";

function MainContent() {
  return (
    <div className="content">
      <Navbar />
      <div className="w-full px-3 md:px-7">
        <Outlet />
      </div>
    </div>
  );
}

export default MainContent;
