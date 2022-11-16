import React from "react";
import { Container, Card, Button, Row } from "react-bootstrap";
import NavInicio from "../navbar/navbarInicio";
import "./inicio.css";

export default class inicio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <body id="fondo-inicio">
        <NavInicio />
        <Container>
          <Row id="tarjetas-inicio">
            <Card id="visitantes" style={{ width: "22rem", height: "27rem" }}>
              <Card.Img
                variant="top"
                src="https://definicion.de/wp-content/uploads/2013/03/perro-1.jpg"
              />
              <Card.Body>
                <Card.Title>
                  <h2>Visitantes</h2>
                </Card.Title>
                <Card.Text>Por favor selecciona el botón ingresar</Card.Text>
                <Card.Footer>
                  <Button id="boton-visitantes" variant="light">
                    Ingresar
                  </Button>
                </Card.Footer>
              </Card.Body>
            </Card>

            <Card id="estudiantes" style={{ width: "22rem", height: "27rem" }}>
              <Card.Img
                variant="top"
                src="https://definicion.de/wp-content/uploads/2013/03/perro-1.jpg"
              />
              <Card.Body>
                <Card.Title>
                  <h2>Estudiantes</h2>
                </Card.Title>
                <Card.Text>Por favor selecciona el botón ingresar</Card.Text>
                <Card.Footer>
                  <Button id="boton-estudiantes" variant="light">
                    Ingresar
                  </Button>
                </Card.Footer>
              </Card.Body>
            </Card>
          </Row>
        </Container>
      </body>
    );
  }
}
