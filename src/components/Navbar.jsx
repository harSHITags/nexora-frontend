import { FaLayerGroup } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-10 py-4 flex justify-between items-center">
      
      {/* Logo */}
      <div className="flex items-center gap-2">
        <FaLayerGroup className="text-blue-600 text-2xl" />
        <h1 className="text-2xl font-bold text-gray-800">
          Nexora<span className="text-orange-500">.</span>
        </h1>
      </div>

      {/* Menu */}
      <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
       <li className="hover:text-blue-600 cursor-pointer">Home</li>

        <li className="hover:text-blue-600 cursor-pointer">About</li>
        <li>
        <a href="#projects" className="hover:text-blue-600 cursor-pointer">
        Projects
        </a></li>
        <li >
           <a href="#clients" className="hover:text-blue-600 cursor-pointer">
        Clients
        </a></li>
      </ul>

      {/* Buttons */}
      <div className="flex gap-4">
        <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-50">
          Contact
        </button>
        <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
