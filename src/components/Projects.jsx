import { useEffect, useState } from "react";
import API from "../services/api";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await API.get("/projects");
        setProjects(res.data.data || []);
      } catch (error) {
        console.error("Error fetching projects", error);
      }
    };

    fetchProjects();
  }, []);

  return (
   <section id="projects" className="bg-blue-50 px-10 py-20 fade-in">

      {/* SECTION HEADING (ONLY ONCE) */}
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
        Our Projects
      </h2>

      {/* PROJECT CARDS */}
      <div className="grid md:grid-cols-4 gap-8">
      
     {Array.isArray(projects) && projects.length > 0 ? (
  projects.map((project) => (
    <ProjectCard key={project._id} project={project} />
  ))
) : (
  <p className="text-center text-gray-500 col-span-full">
    No projects found
  </p>
)}
      </div>
    </section>
  );
};

export default Projects;
