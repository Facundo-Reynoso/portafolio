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
            Portafolio
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home" className="text-light">
              Home
            </Nav.Link>
            <Nav.Link href="#features" className="text-light">
              Features
            </Nav.Link>
            <Nav.Link href="#pricing" className="text-light">
              Pricing
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
      <h1>{Titulo}</h1>
      <br />
      <br />
      <hr />
    </div>
  );
};

export default Header;
