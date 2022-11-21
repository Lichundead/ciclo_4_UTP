import React from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import NavRegistros from "../navbar/navbarRegistros";
import "./registros.css";

export default class EstudiantesVista extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="fondo">
        <NavRegistros />
        <Container className="main">
          <div className="contenedor__todo">
            <Row>
              <h1>¡Bienvenido Estudiante!</h1>
            </Row>
            <div className="caja__trasera">
              <div className="caja__trasera-login">
                <h3>¿Ya habías venido?</h3>
                <p>Ingresa tu identificación para entrar al museo</p>
                <Button id="btn__iniciar-sesion">Ingresar</Button>
              </div>
              <div className="caja__trasera-register">
                <h3>¿Primera vez en el Museo?</h3>
                <p>Regístrate para que puedas ingresar:</p>
                <Button id="btn__registrarse">Registrarse</Button>
              </div>
            </div>

            <div className="contenedor__login-register">
              <Form className="formulario__login">
                <h2>¿Ya estás inscrito?</h2>
                <p>ingresa tu cédula:</p>
                <Form.Control type="text" placeholder="Cédula" />
                <Button>Ingresar</Button>
              </Form>

              <Form className="formulario__register">
                <h2>Regístrarse</h2>
                <Form.Control type="text" placeholder="Cédula" />
                <Form.Control type="text" placeholder="Nombre Completo" />
                <Form.Control type="text" placeholder="Teléfono" />
                <Form.Control type="text" placeholder="Correo Electrónico" />
                <Button>Regístrarse</Button>
              </Form>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}
