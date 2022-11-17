import { faUserTie } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  Container,
  Navbar,
  DropdownButton,
  Nav,
  Row,
  Dropdown,
} from "react-bootstrap";
import Login from "../login/login";
import "./navbarInicio.css";

export default class navInicio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Navbar fixed="top" bg="dark" variant="dark" expand="lg" id="navbar">
        <Container>
          <Navbar.Brand id="pano-title" href="#home">
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
            <DropdownButton
              id="dropdown-basic-button"
              variant="dark"
              menuVariant="dark"
              title="Admin"
              align="end"
            >
              <Dropdown.Header id="dropdown-inicio">
                <Row>
                  <FontAwesomeIcon icon={faUserTie} />
                </Row>
                <Login />
              </Dropdown.Header>
            </DropdownButton>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
