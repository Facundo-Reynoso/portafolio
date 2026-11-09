
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Html from "../assets/html.png";
import Css from "../assets/css.png";
import Javascript from "../assets/javascript.png";
import ReactLogo from "../assets/react.png";
import Sql from "../assets/sql.png";

import "../css/Skills.css";

const Skills = () => {
  const technologies = [
    { name: "HTML", image: Html },
    { name: "CSS", image: Css },
    { name: "JavaScript", image: Javascript },
    { name: "React", image: ReactLogo },
    { name: "SQL", image: Sql },
  ];

  return (
    <section className="skills" id="skills">
      <Container>
        <h2>My Skills</h2>
        <p className="skills-description">
          Technologies and tools I'm currently learning and working with.
        </p>

        <Row className="justify-content-center">
          {technologies.map((technology) => (
            <Col xs={6} sm={4} md={3} lg={2} key={technology.name}>
              <div className="skill-card">
                <img
                  src={technology.image}
                  alt={technology.name}
                />
                <h5>{technology.name}</h5>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
