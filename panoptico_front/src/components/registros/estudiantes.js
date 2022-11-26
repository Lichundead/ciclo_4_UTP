import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { request } from "../helper/helper";
import NavRegistros from "../navbar/navbarRegistros";
import "./registros.css";
import Loading from "../loading/loading";

export default class EstudiantesVista extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: "entrar",
      loading: false,
      empleado: {
        cedula: "",
        nombre: "",
        telefono: "",
        email: "",
      },
    };

    this.toggle = {
      entrar: "registrate",
      registrate: "entrar",
    };
  }

  setValue(estudiantes, value) {
    this.setState({
      estudiante: {
        ...this.state.estudiante,
        [estudiantes]: value,
      },
    });
  }

  guardarEstudiantes() {
    this.setState({ loading: true });
    request
      .post2("/ingresos/registros_estudiantes", this.state.estudiante)
      .then((response) => {
        if (response.data.exito) {
          console.log(response.data);
          alert("Bienvenido al Museo Panóptico");
          window.location.href = "/";
        } else {
          alert("¡Datos Incorrectos!");
        }
        this.setState({ loading: false });
      })
      .catch((err) => {
        console.error(err);
        this.setState({ loading: true });
      });
  }

  onSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className="fondo">
        <Loading show={this.state.loading} />
        <NavRegistros />

        <Container className="main">
          <h1>¡Bienvenidos Estudiantes!</h1>
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
                  <Form.Control
                    placeholder="Cédula"
                    onChange={(e) => this.setValue("cedula", e.target.value)}
                  />

                  {this.state.form === "entrar" ? (
                    ""
                  ) : (
                    <Form.Control
                      placeholder="Nombre Completo"
                      onChange={(e) => this.setValue("nombre", e.target.value)}
                    />
                  )}
                  {this.state.form === "entrar" ? (
                    ""
                  ) : (
                    <Form.Control
                      placeholder="Teléfono"
                      onChange={(e) =>
                        this.setValue("telefono", e.target.value)
                      }
                    />
                  )}
                  {this.state.form === "entrar" ? (
                    ""
                  ) : (
                    <Form.Control
                      placeholder="Correo Electrónico"
                      type="email"
                      onChange={(e) => this.setValue("email", e.target.value)}
                    />
                  )}
                  <Button
                    className="button-primary"
                    onClick={() => console.log(this.guardarEstudiantes())}
                  >
                    Acceder
                  </Button>
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
                <h2 style={{ fontWeight: "bolder" }}>
                  {this.state.form === "entrar"
                    ? "¿Primera vez en el Museo?"
                    : "¿Ya habías venido?"}
                </h2>
                <h6 style={{ fontWeight: "bolder" }}>
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
