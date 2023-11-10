import { useParams } from "react-router-dom";
import { ProjectsList } from "../data/projects";
import "../styles/SingleProject.css";

const SingleProject = () => {
  const { id } = useParams();

  const project = ProjectsList[id];

  if (!project)
    return (
      <div>
        <h3>No Project exists</h3>
      </div>
    );

  return (
    <div className="project">
      <h1>{project.name}</h1>
      <img src={project.image} alt={project.name} />
      <p>
        {project.skills.map((skill) => (
          <span key={skill}>{skill}, </span>
        ))}
      </p>
      {project.link && (
        <div className="link">
          {project.link.map((item, index) => (
            <a
              href={item.url}
              key={item.url + index}
              alt="link"
              target="_blank"
              rel="noreferrer"
            >
              {item.icon}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default SingleProject;
