import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGraduate, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { Container, Card, Button, Row } from "react-bootstrap";
import NavInicio from "../navbar/navbarInicio";
import "./inicio.css";

export default function Inicio() {
  const navigate = useNavigate();

  return (
    <div id="fondo-inicio">
      <NavInicio />
      <Container>
        <Row id="tarjetas-inicio">
          <Card id="visitantes" style={{ width: "22rem", height: "27rem" }}>
            <Row><FontAwesomeIcon icon={faUserGroup} /></Row>
            <Card.Body>
              <Card.Title><h2 style={{ fontWeight: "bolder" }}>VISITANTES</h2></Card.Title>
              <Card.Text>Por favor selecciona el botón ingresar</Card.Text>
              <Card.Footer>
                <Button id="boton-visitantes" variant="light" onClick={() => navigate("/ingreso/visitantes")}>
                  Ingresar
                </Button>
              </Card.Footer>
            </Card.Body>
          </Card>

          <Card id="estudiantes" style={{ width: "22rem", height: "27rem" }}>
            <Row><FontAwesomeIcon icon={faUserGraduate} /></Row>
            <Card.Body>
              <Card.Title><h2 style={{ fontWeight: "bolder" }}>ESTUDIANTES</h2></Card.Title>
              <Card.Text>Por favor selecciona el botón ingresar</Card.Text>
              <Card.Footer>
                <Button id="boton-estudiantes" variant="light" onClick={() => navigate("/ingreso/estudiantes")}>
                  Ingresar
                </Button>
              </Card.Footer>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </div>
  );
}
