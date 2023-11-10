import { GitHub, Facebook, Twitter, LinkedIn } from "@material-ui/icons";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <section className="socialMedia">
        <a
          href="https://github.com/silver99928"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHub />
        </a>
        <a
          href="https://facebook.com/ikramulhaq9637"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Facebook />
        </a>

        <a
          href="http://twitter.com/ikramdev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter />
        </a>
        <a
          href="http://linkedin.com/in/ikramdev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedIn />
        </a>
      </section>

      <p>&copy; 2022 ikramdev</p>
    </footer>
  );
};

export default Footer;
