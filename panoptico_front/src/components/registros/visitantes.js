import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import "./registros.css";
import NavRegistros from "../navbar/navbarRegistros";

export default class VisitantesVista extends React.Component {
  constructor(props) {
    super(props);
    this.state = { form: "entrar" };

    this.toggle = {
      entrar: "registrate",
      registrate: "entrar",
    };
  }

  onSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className="fondo__2">
        <NavRegistros />

        <Container className="main">
          <h1>¡Bienvenidos Visitantes!</h1>
          <div className="contenedor__todo">
            <div className="caja__trasera">
              <div
                style={{
                  transform: `translate(${
                    this.state.form === "entrar" ? 0 : 350
                  }px, 0px)`,
                }}
                className="contenedor__login-register"
              >
                <Form onSubmit={this.onSubmit.bind(this)}>
                  <div
                    style={{
                      margin: "2px",
                      padding: 0,
                      transform: `translate(${
                        this.state.form === "entrar" ? 0 : 0
                      }px, 0px)`,
                    }}
                    className="titulo-div"
                  >
                    <h2>
                      {this.state.form === "entrar"
                        ? "¿Ya estás inscrito?"
                        : "¿Primera Vez?"}
                    </h2>
                    <h6 style={{ color: "black" }}>
                      {this.state.form === "entrar"
                        ? "Ingresa tu cédula:"
                        : "Regístrate para que puedas ingresar:"}
                    </h6>
                  </div>
                  <Form.Control placeholder="Cédula" type="text" />

                  {this.state.form === "entrar" ? (
                    ""
                  ) : (
                    <Form.Control placeholder="Nombre Completo" type="text" />
                  )}
                  {this.state.form === "entrar" ? (
                    ""
                  ) : (
                    <Form.Control placeholder="Teléfono" type="text" />
                  )}
                  {this.state.form === "entrar" ? (
                    ""
                  ) : (
                    <Form.Control
                      placeholder="Correo Electrónico"
                      type="text"
                    />
                  )}
                  <Button className="button-primary">Acceder</Button>
                </Form>
              </div>
              <div
                style={{
                  transform: `translate(${
                    this.state.form === "entrar" ? 0 : -450
                  }px, 0px)`,
                }}
                className="button-div"
              >
                <h2>
                  {this.state.form === "entrar"
                    ? "¿Primera vez en el Museo?"
                    : "¿Ya habías venido?"}
                </h2>
                <h6>
                  {this.state.form === "entrar"
                    ? "Regístrate para que puedas ingresar:"
                    : "Ingresa tu identificación para entrar al museo:"}
                </h6>
                <Button
                  onClick={() => {
                    this.setState({ form: this.toggle[this.state.form] });
                  }}
                >
                  {this.toggle[this.state.form]}
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}
