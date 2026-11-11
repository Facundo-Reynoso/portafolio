import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "../css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <h4>Let's connect</h4>

      <div className="footer-links">
        <a
          href="https://github.com/Facundo-Reynoso"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub className="footer-icon" />
          <span>GitHub</span>
        </a>

        <a
          href="https://www.linkedin.com/in/facu-reynoso-5711943b3/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="footer-icon" />
          <span>LinkedIn</span>
        </a>

        <a
          href="mailto:reynosofacundo1998@gmail.com"
          aria-label="Email"
        >
          <FaEnvelope className="footer-icon" />
          <span>Email</span>
        </a>
      </div>

      <div className="footer-bottom">
        <p>© 2026 · Portfolio</p>
      </div>
    </footer>
  );
};

export default Footer;
