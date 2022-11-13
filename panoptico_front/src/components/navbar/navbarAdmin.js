import React from "react";
import {
  Dropdown,
  DropdownButton,
  Nav,
  Navbar,
  Row,
  Container,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";
import "./navbarAdmin.css";

export default class menuTablas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Navbar expand="lg" fixed="top" id="navbar" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand id="titulo" href="#home">
            <img
              alt=""
              src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/052/519/original/icono.png?1668024209"
              width="45"
              height="38"
              className="d-inline-block align-bottom"
            />{" "}
            Panoptico-Tablas
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavLink className="nav-link" to="/admin/estudiantes/">
                Estudiantes
              </NavLink>
              <NavLink className="nav-link" to="/admin/visitantes/">
                Visitante
              </NavLink>
              <NavLink className="nav-link" to="/admin/ingresos/">
                Ingresos
              </NavLink>
            </Nav>
            <DropdownButton
              id="dropdown-basic-button"
              variant="dark"
              menuVariant="dark"
              title="Admin"
            >
              <Dropdown.Header id="dropdown-header">
                <Row>
                  <FontAwesomeIcon icon={faUserTie} />
                </Row>
                <Row>#Administrador#</Row>
              </Dropdown.Header>
              <Dropdown.Divider />
              <Dropdown.Item href="#/action-1">Cerrar Sesión</Dropdown.Item>
            </DropdownButton>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
