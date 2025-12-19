import { useEffect, useState } from "react";
import API from "../services/api";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  // Fetch projects
  const fetchProjects = async () => {
    const res = await API.get("/projects");
    setProjects(res.data);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  // Add project
  const handleAdd = async (e) => {
    e.preventDefault();

    try {
      await API.post("/projects", {
        name,
        description,
        image,
      });

      alert("✅ Project added");
      setName("");
      setDescription("");
      setImage("");
      fetchProjects();
    } catch (error) {
      alert("❌ Failed to add project");
    }
  };

  // Delete project
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this project?")) return;

    try {
      await API.delete(`/projects/${id}`);
      setProjects(projects.filter((p) => p._id !== id));
    } catch (error) {
      alert("❌ Failed to delete project");
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Manage Projects</h1>

      {/* ADD FORM */}
      <form
        onSubmit={handleAdd}
        className="bg-white p-6 rounded shadow max-w-lg mb-10"
      >
        <input
          className="w-full border p-3 mb-4"
          placeholder="Project Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <textarea
          className="w-full border p-3 mb-4"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <input
          className="w-full border p-3 mb-4"
          placeholder="Image URL (optional)"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <button className="bg-blue-600 text-white px-6 py-2 rounded">
          Add Project
        </button>
      </form>

      {/* LIST + DELETE */}
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project._id} className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold">{project.name}</h3>
            <p className="text-sm text-gray-600 mt-2">
              {project.description}
            </p>

            <button
              onClick={() => handleDelete(project._id)}
              className="mt-4 bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
