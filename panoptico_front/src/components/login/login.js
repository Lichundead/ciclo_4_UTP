import axios from "axios";
import React from "react";
import { Button, Dropdown, Form } from "react-bootstrap";
import "./login.css";
import { isNull } from "util";
import Cookies from "universal-cookie";
//import { calcularExpirarSesion } from "";
import Loading from "../loading/loading";
import app from "../../app.json";

const { APIHOST } = app;
const cookies = new Cookies();

export default class login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      usuario: "",
      pass: "",
    };
  }

  iniciarSesion() {
    this.setState({ loading: true });
    axios
      .post(`${APIHOST}/usuarios/login`, {
        usuario: this.state.usuario,
        pass: this.state.pass,
      })
      .then((response) => {
        if (isNull(response.data.token)) {
          alert("Usuario y/o contraseña inválidos");
        } else {
          cookies.set("_s", response.data.token, {
            path: "/",
            // expires: calcularExpirarSesion(),
          });
          this.props.history.push(window.open("/"));
        }
        this.setState({ loading: false });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ loading: false });
      });
  }

  render() {
    return (
      <Form id="inicio-form">
        <Loading show={this.state.loading} />
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Usuario:</Form.Label>
          <Form.Control
            onChange={(e) => this.setState({ usuario: e.target.value })}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña:</Form.Label>
          <Form.Control
            type="password"
            onChange={(e) => this.setState({ pass: e.target.value })}
          />
        </Form.Group>
        <Dropdown.Divider />
        <Button
          variant="primary"
          onClick={() => {
            this.iniciarSesion();
          }}
        >
          Iniciar Sesión
        </Button>
      </Form>
    );
  }
}
