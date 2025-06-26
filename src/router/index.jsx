import { Routes, Route } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout";
import Tenants from "../pages/admin/Tenants";
import Contractors from "../pages/admin/Contractors";
import Jobs from "../pages/admin/Jobs";
import Properties from "../pages/admin/Properties";
import Landlords from "../pages/admin/Landlords";
import Dashboard from "../pages/admin/Dashboard";
import Login from "../pages/Login";

const IndexRouter = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Login />} />
      </Route>
      <Route path="/admin" element={<MainLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="tenants" element={<Tenants />} />
        <Route path="contractors" element={<Contractors />} />
        <Route path="jobs" element={<Jobs />} />
        <Route path="properties" element={<Properties />} />
        <Route path="landlords" element={<Landlords />} />
      </Route>
    </Routes>
  );
};

export default IndexRouter;
