import { Routes, Route } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import Tenants from "./pages/admin/Tenants";
import Contractors from "./pages/admin/Contractors";
import Jobs from "./pages/admin/Jobs";
import Properties from "./pages/admin/Properties";
import Landlords from "./pages/admin/Landlords";
import Dashboard from "./pages/admin/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="tenants" element={<Tenants />} />
        <Route path="contractors" element={<Contractors />} />
        <Route path="jobs" element={<Jobs />} />
        <Route path="properties" element={<Properties />} />
        <Route path="landlords" element={<Landlords />} />
      </Route>
    </Routes>
  );
}

export default App;
