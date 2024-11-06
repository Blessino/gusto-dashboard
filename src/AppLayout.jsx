import Dashboard from "./Dashboard";
import Sidebar from "./Sidebar";
import "./applayout.css";

function AppLayout() {
  return (
    <>
    
      <main className="layout">
        <div className="menu">
          <Sidebar />
        </div>
        <div className="dashboard">
          <Dashboard />
        </div>
      </main>
    </>
  );
}

export default AppLayout;
