import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

// Admin imports
import AdminLayout from "./admin/AdminLayout";
import Dashboard from "./admin/Dashboard";
import AdminProjects from "./admin/Projects";
import AdminClients from "./admin/Clients";
import AdminContacts from "./admin/Contacts";
import AdminSubscribers from "./admin/Subscribers";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<Home />} />

        {/* Admin Panel */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="projects" element={<AdminProjects />} />
          <Route path="clients" element={<AdminClients />} />
          <Route path="contacts" element={<AdminContacts />} />
          <Route path="subscribers" element={<AdminSubscribers />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
