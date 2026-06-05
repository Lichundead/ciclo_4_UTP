import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Container, Button, Form, Row, Col } from "react-bootstrap";
import "./login.css";
import Cookies from "universal-cookie";
import { calcularExpirarSesion } from "../helper/helper";
import Loading from "../loading/loading";
import NavRegistros from "../navbar/navbarRegistros";

const APIHOST = import.meta.env.VITE_APIHOST;
const cookies = new Cookies();

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [usuario, setUsuario] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const iniciarSesion = () => {
    setLoading(true);
    axios
      .post(`${APIHOST}/admins/login`, { usuario, pass })
      .then((response) => {
        if (!response.data.token) {
          alert("Usuario y/o contraseña inválidos");
        } else {
          cookies.set("_s", response.data.token, {
            path: "/",
            expires: calcularExpirarSesion(),
            sameSite: "strict",
            secure: window.location.protocol === "https:",
          });
          navigate("/admin/ingresos");
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };

  return (
    <div className="fondo-login">
      <Container id="login-container">
        <NavRegistros />
        <Loading show={loading} />
        <Row>
          <Col
            sm="12"
            xs="12"
            md={{ span: 4, offset: 4 }}
            lg={{ span: 4, offset: 4 }}
            xl={{ span: 4, offset: 4 }}
          >
            <Row>
              <h2>Iniciar Sesión</h2>
            </Row>
            <Row>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Usuario:</Form.Label>
                  <Form.Control onChange={(e) => setUsuario(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Contraseña:</Form.Label>
                  <Form.Control
                    type="password"
                    onChange={(e) => setPass(e.target.value)}
                  />
                </Form.Group>
                <Button variant="primary" onClick={iniciarSesion}>
                  Iniciar Sesión
                </Button>
              </Form>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
