import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

function AppLayout() {
  return (
    <>
      <main className="grid grid-cols-[15rem_1fr] gap-4">
        <div className="p-4 ">
          <Sidebar />
        </div>
        <div className="p-4">
          <Header />
          <Outlet />
        </div>
      </main>
    </>
  );
}

export default AppLayout;
