import React from "react";
import { Container, Table } from "react-bootstrap";
import MenuTablas from "../navbar/navbarAdmin";
import Footer from "../footer/footer";
import BarraBusqueda from "../filtros/busqueda";
import "./tablas.css";

export default class ingresos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="tablas-admin">
        <MenuTablas />
        <Container id="container-tablas">
          <h1>Tabla ingresos</h1>
        <BarraBusqueda />
          <Table striped bordered hover variant="primary">
            <thead>
              <tr>
                <th>#</th>
                <th>Fecha</th>
                <th>Cedula</th>
                <th>Rol</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>09/11/2022</td>
                <td>1001544221</td>
                <td>Estudiante</td>
                <td>Eliminar & Actualizar</td>
              </tr>
              <tr>
                <td>2</td>
                <td>09/11/2022</td>
                <td>211045587</td>
                <td>Visitante</td>
                <td>Eliminar & Actualizar</td>
              </tr>
              <tr>
                <td colSpan={5}>No hay más registros</td>
              </tr>
            </tbody>
          </Table>
        </Container>
        <Footer />
      </div>
    );
  }
}
