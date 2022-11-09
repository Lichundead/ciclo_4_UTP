import React from "react";
import { Container, Table } from "react-bootstrap";
import MenuTablas from "../navbar/navbarAdmin";

export default class estudiantes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="estudiantes">
        <MenuTablas />
        <Container style={{ marginTop: 100, marginBottom: 100 }}>
          <h1 style={{ marginBottom: 30 }}>Tabla Estudiantes</h1>
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
                <td>1001544221</td>
                <td>Sandra Perez</td>
                <td>3112006542</td>
                <td>sandipe02@gmail.com</td>
                <td>Eliminar & Actualizar</td>
              </tr>

              <tr>
                <td>1</td>
                <td>21000654245</td>
                <td>Luis Garcia</td>
                <td>3198547102</td>
                <td>lugar90@gmail.com</td>
                <td>Eliminar & Actualizar</td>
              </tr>
              <tr>
                <td colSpan={6}>No hay más estudiantes regitrados</td>
              </tr>
            </tbody>
          </Table>
        </Container>
      </div>
    );
  }
}
