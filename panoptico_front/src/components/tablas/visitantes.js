import React from "react";
import { Container, Table } from "react-bootstrap";
import MenuTablas from "../navbar/navbarAdmin";

export default class visitantes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="visitantes">
        <MenuTablas />
        <Container style={{ marginTop: 100, marginBottom: 100 }}>
          <h1 style={{ marginBottom: 30 }}>Tabla Visitantes</h1>
          <Table striped bordered hover variant="primary">
            <thead>
              <tr>
                <th>#</th>
                <th>Cedula</th>
                <th>Nombre</th>
                <th>Telefono</th>
                <th>Email</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>211045587</td>
                <td>David Camacho</td>
                <td>3158654217</td>
                <td>davca45@gmail.com</td>
                <td>Eliminar & Actualizar</td>
              </tr>

              <tr>
                <td>1</td>
                <td>1025448864</td>
                <td>Diana Sanchez</td>
                <td>3128457125</td>
                <td>disan78@gmail.com</td>
                <td>Eliminar & Actualizar</td>
              </tr>
              <tr>
                <td colSpan={6}>No hay más visitantes registrados</td>
              </tr>
            </tbody>
          </Table>
        </Container>
      </div>
    );
  }
}
