
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { Typewriter } from "react-simple-typewriter";
import { Descripcion } from "../constants/constants";
import FotoPerfil from "../assets/fotoPerfilNueva.jpeg";
import "../css/Hero.css";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <Container>
        <Row className="align-items-center">
          <Col md={7} className="hero-text">
            <p className="hero-subtitle">
              Hello, I'm
            </p>

            <h1>Facundo Reynoso</h1>

            <h2>Junior Web Developer</h2>

            <h3>Programming Student at UTN</h3>

            <p className="hero-description">
              <Typewriter
                words={[Descripcion]}
                loop={0}
                typeSpeed={35}
                deleteSpeed={5}
                delaySpeed={1500}
              />
            </p>
          </Col>

          <Col md={5} className="hero-image">
            <Image
              src={FotoPerfil}
              roundedCircle
              fluid
              alt="Facundo Reynoso"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
