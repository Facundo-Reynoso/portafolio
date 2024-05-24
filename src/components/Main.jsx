import React from "react";
import Dogecoin from "../assets/dogecoin.png";

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
    <div>
      <br />
      <br />
      <h3>
        Mi nombre es {Alumno.nombre} {Alumno.apellido}
      </h3>
      <br />
      <img src={Dogecoin} alt="" />
      <h4>Estudiante de la carrera de Programación en la UTN FRT</h4>
      <h5>Telefono: {Alumno.telefono}</h5>
      <h5>Dirección: {Alumno.direccion}</h5>
    </div>
  );
};

export default Main;
