import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProjectCard from "./ProjectCard";
import SnakeImage from "../assets/snake-screenshot.png";
import CrudImage from "../assets/crud-screenshot.png";

import "../css/Projects.css";

// 1. Creamos el array de proyectos
const projects = [
  {
    title: "Snake Game",
    description: "A classic Snake game developed with JavaScript.",
    image: SnakeImage,
    github: "https://github.com/Facundo-Reynoso/snake"
  },
  {
    title: "Contact Management App",
    description: "A CRUD application to manage contacts.",
    image: CrudImage,
    github: "https://github.com/Facundo-Reynoso/contact-management-app"
  }
];

// 2. Declaramos el componente
const Projects = () => {
  return (
  <section className="projects" id="projects">
    <Container>
      <h2>My Projects</h2>
      <Row className="justify-content-center">
        {projects.map(project => (
          <Col xs={12} md={6} key={project.title}>
            <ProjectCard
                title={project.title}
                description={project.description}
                image={project.image}
                github={project.github}
            />
        </Col>  
        ))}
        
      </Row>
    </Container>
  </section>
);
};

export default Projects;