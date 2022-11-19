import React from "react";
import NavInicio from "../navbar/navbarInicio";

export default class EstudiantesVista extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <NavInicio />
        <h1 style={{ marginTop: 300 }}> Página de Estudiantes</h1>
      </>
    );
  }
}
