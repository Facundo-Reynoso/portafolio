import React from "react";
import FotoPerfil from "../assets/fotoPerfil.jpeg";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import CodingBack from "../assets/codingBack.avif";
import "../css/Main.css";
import Card from "react-bootstrap/Card";
import Html from "../assets/html.png";
import Css from "../assets/css.png";
import Javascript from "../assets/javascript.png";
import Logoreact from "../assets/react.png";
import Csharp from "../assets/csharp.png";
import Sql from "../assets/sql.png";
import { Descripcion } from "../constants/constants";

const Main = () => {
  const Alumno = {
    nombre: "Facundo",
    apellido: "Reynoso",
    edad: 26,
    hobby: "Futbol, Calistenia",
    direccion: "Maipu 1552 casa 4",
    telefono: 3816403809,
    estadoCivil: "Soltero",
    trabajo: "Coach de Calistenia",
  };

  return (
    <div className="cuerpo">
      <br />
      <br />
      <h1 className="text-light">
        {Alumno.nombre} {Alumno.apellido}
      </h1>
      <br />
      <Container>
        <Row>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Sobre mi:</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Estudiante de segundo año en la carrera de Programación
                </Card.Subtitle>
                <Card.Text>
                  Edad: {Alumno.edad} años <br />
                  Dirección: {Alumno.direccion} <br />
                  Telefono: {Alumno.telefono} <br />
                  Hobby: {Alumno.hobby} <br />
                  Estado Civil: {Alumno.estadoCivil} <br />
                  Trabajo: {Alumno.trabajo}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Image className="fotoPerfil" src={FotoPerfil} roundedCircle />
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text>{Descripcion}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <h3 className="text-light">Estoy perfeccionando estas Skills:</h3>
        <Row>
          <Col>
            <div className="cardLogo card">
              <img src={Html} />
            </div>
          </Col>
          <Col>
            <div className="cardLogo card">
              <img src={Css} />
            </div>
          </Col>
          <Col>
            <div className="cardLogo card">
              <img src={Javascript} />
            </div>
          </Col>
          <Col>
            <div className="cardLogo card">
              <img src={Logoreact} />
            </div>
          </Col>
          <Col>
            <div className="cardLogo card">
              <img src={Csharp} />
              Logo
            </div>
          </Col>
          <Col>
            <div className="cardLogo card">
              <img src={Sql} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Main;
