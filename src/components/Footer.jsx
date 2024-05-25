import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import "../css/Footer.css";

const Footer = () => {
  return (
    <div className="footer bg-dark" data-bs-theme="dark">
      <h4 className="text-light titulo">Redes Sociales:</h4>
      <div className="iconos">
        <a href="https://x.com/FacundoReynos11" target="_blank">
          <FaXTwitter className="icon" />
        </a>
        <a href="https://www.instagram.com/facureynos/" target="_blank">
          <FaInstagram className="icon" />
        </a>
        <a
          href="https://www.facebook.com/facureynoso0?locale=es_LA"
          target="_blank"
        >
          <FaFacebook className="icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/lucas-facundo-reynoso-864889257/"
          target="_blank"
        >
          <FaLinkedin className="icon" />
        </a>
      </div>
      <br />
      <h5 className="text-light">
        Copyright © Derechos reservados UTN FRT 2024
      </h5>
    </div>
  );
};

export default Footer;
