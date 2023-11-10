import { ProjectItem } from "../components";
import { ProjectsList } from "../data/projects";

import "../styles/Projects.css";

const Projects = () => {
  return (
    <div className="projects">
      <h2>My Personal Projects</h2>
      <section className="projectsList">
        {ProjectsList.map((item, index) => (
          <ProjectItem
            key={item.name}
            id={index}
            name={item.name}
            image={item.image}
          />
        ))}
      </section>
    </div>
  );
};

export default Projects;
