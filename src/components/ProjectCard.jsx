import { Card } from "react-bootstrap";

const ProjectCard = (props) => {
  return (
    <Card className="project-card">
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>{props.description}</Card.Text>
            <a href={props.github} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
        </Card.Body>
    </Card>
  );
};

export default ProjectCard;