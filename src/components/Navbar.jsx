import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Reorder as ReorderIcon } from "@material-ui/icons";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isExpandedNavbar, setIsExpandedNavbar] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsExpandedNavbar(false);
  }, [location]);

  return (
    <nav className="navbar" id={isExpandedNavbar ? "open" : "close"}>
      <section className="toggleButton">
        <button onClick={() => setIsExpandedNavbar((prev) => !prev)}>
          <ReorderIcon />
        </button>
      </section>

      <section className="links">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/experience">Experience</Link>
      </section>
    </nav>
  );
};

export default Navbar;
