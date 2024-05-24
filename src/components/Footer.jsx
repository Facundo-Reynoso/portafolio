import React from "react";

import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <br />
      <br />
      <a
        href="https://www.facebook.com/facureynoso0?locale=es_LA"
        target="_blank"
      >
        <FaFacebook
          style={{ width: "50px", height: "50px", marginBottom: "15px" }}
        />
      </a>
      <br />
      <h5>Derechos reservados alumno FRT 2024</h5>
    </div>
  );
};

export default Footer;
