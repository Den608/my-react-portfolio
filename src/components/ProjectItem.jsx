import { useNavigate } from "react-router-dom";

const ProjectItem = ({ image, name, id }) => {
  const navigate = useNavigate();

  return (
    <article
      className="projectItem"
      onClick={() => navigate(`/projects/${id}`)}
    >
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h3>{name}</h3>
    </article>
  );
};

export default ProjectItem;
