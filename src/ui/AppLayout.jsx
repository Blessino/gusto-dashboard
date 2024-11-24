import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

function AppLayout() {
  return (
    <div className="grid grid-cols-[15rem_1fr] gap-4">
      <aside className="p-4">
        <Sidebar />
      </aside>
      <div className="m-0 p-0 w-">
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
