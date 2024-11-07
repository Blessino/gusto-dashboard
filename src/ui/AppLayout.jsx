import { Outlet } from "react-router-dom";
import Dashboard from "./Dashboard";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "./applayout.css";

function AppLayout() {
  return (
    <>
      <main className="main__layout">
        <div className="main__layout-menu">
          <Sidebar />
        </div>
        <div className="main__layout-page">
        <Header />
          <Outlet />
        </div>
      </main>
    </>
  );
}

export default AppLayout;
