import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import AppLayout from "./AppLayout";
import Dashboard from "./Dashboard";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
