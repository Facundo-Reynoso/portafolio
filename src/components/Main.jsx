import React from "react";
import FotoPerfil from "../assets/fotoPerfil.jpeg";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import CodingBack from "../assets/codingBack.avif";
import "../css/Main.css";

const Main = () => {
  const Alumno = {
    nombre: "Facundo",
    apellido: "Reynoso",
    edad: 26,
    hobby: "futbol",
    direccion: "Maipu 1552 casa 4",
    telefono: 3816403809,
    estadoCivil: "Soltero",
  };

  return (
    <div className="cuerpo">
      <br />
      <br />
      <h3>
        Mi nombre es {Alumno.nombre} {Alumno.apellido}
      </h3>
      <br />
      <Container>
        <Row>
          <Col>
            <Image className="fotoPerfil" src={FotoPerfil} roundedCircle />
          </Col>
        </Row>
      </Container>
      <h4>Estudiante de la carrera de Programación en la UTN FRT</h4>
      <h5>Telefono: {Alumno.telefono}</h5>
      <h5>Dirección: {Alumno.direccion}</h5>
    </div>
  );
};

export default Main;
