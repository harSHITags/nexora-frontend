import { useState } from "react";

const ProjectCard = ({ project }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* CARD */}
      <div className="bg-white shadow rounded overflow-hidden">
        {project.image && (
          <img
            src={project.image}
            alt={project.name}
            className="h-40 w-full object-cover"
          />
        )}

        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800">
            {project.name}
          </h3>

          {/* SHORT DESCRIPTION */}
          <p className="text-gray-600 text-sm mt-2 line-clamp-3">
            {project.description}
          </p>

          {/* READ MORE BUTTON */}
          <button
            onClick={() => setOpen(true)}
            className="mt-3 text-blue-600 font-medium hover:underline"
          >
            Read More →
          </button>
        </div>
      </div>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white max-w-md w-full p-6 rounded shadow-lg relative">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
            >
              ✕
            </button>

            <h3 className="text-xl font-bold mb-4">
              {project.name}
            </h3>

            <p className="text-gray-700">
              {project.description}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
