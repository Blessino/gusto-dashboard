import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import AppLayout from './ui/AppLayout';

import Dashboard from './pages/Dashboard';
import Order from './pages/Order';
import Store from './pages/Store';
import Profile from './pages/Profile';
import Customers from './pages/Customers';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="order" element={<Order />}>
              <Route path="pending" element={<Store />} />
              <Route path="active" element={<Store />} />
              <Route path="booking" element={<Store />} />
            </Route>
            <Route path="stores" element={<Store />} />
            <Route path="customers" element={<Customers />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
