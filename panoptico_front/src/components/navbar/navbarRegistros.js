import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

import "./navbar.css";

export default class NavRegistros extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Navbar fixed="top" bg="dark" variant="dark" expand="lg" id="navbar">
        <Container>
          <Navbar.Brand id="pano-registros" href="#home">
            <img
              alt=""
              src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/052/519/original/icono.png?1668024209"
              width="45"
              height="38"
              className="d-inline-block align-bottom"
            />
            Museo Panóptico
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link href="#home">Descubre</Nav.Link>
              <Nav.Link href="#link">FAQ</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
