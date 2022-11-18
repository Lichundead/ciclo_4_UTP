import React from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import "./visitantes.css";
import NavInicio from "../navbar/navbarInicio";

export default class VisitantesVista extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="div-body">
        <NavInicio />
        <Container id="contenedor">
          <Row>
            <Col>
              <h2>¡BIENVENIDO VISITANTE<br />AL MUSEO PANÓPTICO!</h2>
            </Col>
          </Row>

          <Row>
            <div id="contenedor_total">
              <div id="caja_trasera">
                <div id="caja_trasera-login">
                  <Form>
                    <h3>¿Ya tengo una cuenta?</h3>
                    <p>¡Guardar asistencia!</p>
                    <Form.Group>
                      <Form.Label>Ingresa tu identificación</Form.Label>
                      <Form.Control type="" placeholder="Cédula" />
                      <Form.Text id="cedula" className=""></Form.Text>
                    </Form.Group>

                    <Button id="btn-registrarse" variant="" type="submit">
                      Guardar
                    </Button>
                  </Form>
                </div>
                
                <div id="contenedor_form-registro">

                <Form id="form1">
                  <span>
                    <h3>¿Eres nuevo visitante?</h3>
                    <h4>Crea una cuenta!</h4>
                  </span>
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
                </div>
              </div>

              <div id="contenedor_form-registro">   
              
              </div>
            </div>
          </Row>
        </Container>
      </div>
    );
  }
}
