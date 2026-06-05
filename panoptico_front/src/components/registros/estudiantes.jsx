import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { request } from "../helper/helper";
import NavRegistros from "../navbar/navbarRegistros";
import "./registros.css";
import Loading from "../loading/loading";

const TOGGLE_LABEL = { entrar: "registrate", registrate: "entrar" };

export default function EstudiantesVista() {
  const [form, setForm] = useState("entrar");
  const [loading, setLoading] = useState(false);
  const [estudiante, setEstudiante] = useState({ cedula: "", nombre: "", telefono: "", email: "" });

  const setValue = (field, value) => setEstudiante((prev) => ({ ...prev, [field]: value }));

  const guardarEstudiante = () => {
    setLoading(true);
    request.post2("/ingresos/registros_estudiantes", estudiante)
      .then((response) => {
        if (response.data.exito) { alert("Bienvenido al Museo Panóptico"); window.location.href = "/"; }
        else alert("¡Datos Incorrectos!");
        setLoading(false);
      })
      .catch((err) => { console.error(err); setLoading(false); });
  };

  return (
    <div className="fondo">
      <Loading show={loading} />
      <NavRegistros />
      <Container className="main">
        <h1>¡Bienvenidos Estudiantes!</h1>
        <div className="contenedor__todo">
          <div className="caja__trasera">
            <div style={{ transform: `translate(${form === "entrar" ? 0 : 350}px, 0px)` }} className="contenedor__login-register">
              <Form onSubmit={(e) => e.preventDefault()}>
                <div className="titulo-div" style={{ margin: "2px", padding: 0 }}>
                  <h2>{form === "entrar" ? "¿Ya estás inscrito?" : "¿Primera Vez?"}</h2>
                  <h6 style={{ color: "black" }}>{form === "entrar" ? "Ingresa tu cédula:" : "Regístrate para que puedas ingresar:"}</h6>
                </div>
                <Form.Control placeholder="Cédula" onChange={(e) => setValue("cedula", e.target.value)} />
                {form !== "entrar" && <>
                  <Form.Control placeholder="Nombre Completo" onChange={(e) => setValue("nombre", e.target.value)} />
                  <Form.Control placeholder="Teléfono" onChange={(e) => setValue("telefono", e.target.value)} />
                  <Form.Control placeholder="Correo Electrónico" type="email" onChange={(e) => setValue("email", e.target.value)} />
                </>}
                <Button className="button-primary" onClick={guardarEstudiante}>Acceder</Button>
              </Form>
            </div>
            <div style={{ transform: `translate(${form === "entrar" ? 0 : -450}px, 0px)` }} className="button-div">
              <h2 style={{ fontWeight: "bolder" }}>{form === "entrar" ? "¿Primera vez en el Museo?" : "¿Ya habías venido?"}</h2>
              <h6 style={{ fontWeight: "bolder" }}>{form === "entrar" ? "Regístrate para que puedas ingresar:" : "Ingresa tu identificación para entrar al museo:"}</h6>
              <Button onClick={() => setForm(TOGGLE_LABEL[form])}>{TOGGLE_LABEL[form]}</Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
