import React from "react";
import { Container, Form, Button, Row, Col, Card } from "react-bootstrap";
import "./visitantes.css";
import NavInicio from "../navbar/navbarInicio";

export default class VisitantesVista extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <body>
      <NavInicio />
        <Container id="visitantes-container">
          <Row>
            <Col id="bienvenida">
              <h2>¡BIENVENIDO VISITANTE AL MUSEO PANÓPTICO!</h2>
            </Col>
          </Row>
          
          <Row>
            <Col
             
            >
             

              <Card id="existente-visitante">
                <span>
                  <h3>¿Ya tengo una cuenta?</h3>
                  <h4>¡Guardar asistencia!</h4>
                </span>

                <Form>
                  <Form.Group>
                    <Form.Label>Ingresa tu identificación</Form.Label>
                    <Form.Control type="" placeholder="Cédula" />
                    <Form.Text id="cedula" className=""></Form.Text>
                  </Form.Group>

                  <Button id="btn-registrarse" variant="" type="submit">
                    Guardar
                  </Button>
                </Form>
              </Card>
            </Col>

            <Col
              
            >
              <Card id="nuevo-visitante">
                <span>
                  <h3>¿Eres nuevo visitante?</h3>
                  <h4>Crea una cuenta!</h4>
                </span>
                <Form>
                  <Form.Group>
                    <Form.Control type="" placeholder="Nombre completo" />
                    <Form.Text id="nombre" className=""></Form.Text>
                  </Form.Group>

                  <Form.Group>
                    <Form.Control type="" placeholder="Cédula" />
                    <Form.Text id="cedula" className=""></Form.Text>
                  </Form.Group>

                  <Form.Group>
                    <Form.Control type="" placeholder="Celular" />
                    <Form.Text id="telefono" className=""></Form.Text>
                  </Form.Group>

                  <Button id="btn-crearcuenta" variant="" type="submit">
                    Crear cuenta
                  </Button>
                </Form>
              </Card>
            </Col>
          </Row>
        </Container>
      
      </body>
    );
  }
}
