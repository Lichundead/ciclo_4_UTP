import React from "react";
import app from "../../app.json";
import { Button, Dropdown, Form } from "react-bootstrap";
//import Cookies from "universal-cookie";
import "./login.css";

const { APIHOST } = app;
//const cookies = new Cookies();

export default class login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Form id="inicio-form">
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
