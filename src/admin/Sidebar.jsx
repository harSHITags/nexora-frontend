import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-blue-800 text-white p-6">
      <h2 className="text-2xl font-bold mb-10">Admin Panel</h2>

      <ul className="space-y-4">
        <li><Link to="/admin" className="hover:text-blue-200">Dashboard</Link></li>
        <li><Link to="/admin/projects" className="hover:text-blue-200">Projects</Link></li>
        <li><Link to="/admin/clients" className="hover:text-blue-200">Clients</Link></li>
        <li><Link to="/admin/contacts" className="hover:text-blue-200">Contacts</Link></li>
        <li><Link to="/admin/subscribers" className="hover:text-blue-200">Subscribers</Link></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
