import React from "react";
import { Titulo } from "../constants/constants";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home" className="text-light">
            {"<>"} Portafolio {"</>"}
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
