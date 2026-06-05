import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { request } from "../helper/helper";
import "./tablas.css";
import DataGrid from "../grid/grid";
import MenuTablas from "../navbar/navbarAdmin";
import Footer from "../footer/footer";
import ConfirmationPrompt from "../prompts/confirmation";
import MessagePrompt from "../prompts/message";
import Loading from "../loading/loading";

const columns = [
  { dataField: "id", text: "ID Estudiante", hidden: true },
  { dataField: "cedula", text: "Cédula Estudiante" },
  { dataField: "nombre", text: "Nombre Estudiante" },
  { dataField: "telefono", text: "Teléfono Estudiante" },
  { dataField: "email", text: "Email Estudiante" },
];

export default function Estudiantes() {
  const [loading, setLoading] = useState(false);
  const [cedula, setCedula] = useState(null);
  const [confirmation, setConfirmation] = useState({ show: false });
  const [message, setMessage] = useState({ text: "", show: false });

  const onClickDeleteButton = (row) => { setCedula(row.cedula); setConfirmation({ show: true }); };
  const onCancel = () => setConfirmation({ show: false });
  const onConfirm = () => {
    setConfirmation({ show: false });
    setLoading(true);
    request.delete(`/estudiantes_inscritos/${cedula}`)
      .then((res) => {
        setLoading(false);
        setMessage({ text: res.data.msg, show: true });
        if (res.data.exito) setTimeout(() => window.location.reload(), 2500);
      })
      .catch((err) => { console.error(err); setLoading(false); });
  };

  return (
    <div className="tablas-admin">
      <MenuTablas />
      <Container id="container-tablas">
        <ConfirmationPrompt
          show={confirmation.show}
          title="Eliminar Estudiante"
          text="¿Está seguro que desea eliminar el estudiante? Esta acción es irreversible."
          onCancel={onCancel}
          onConfirm={onConfirm}
        />
        <MessagePrompt text={message.text} show={message.show} duration={2500} />
        <Loading show={loading} />
        <Row><h1 id="tiulo-tablas">Estudiantes</h1><hr id="separador-tablas" /></Row>
        <Row>
          <DataGrid url="/estudiantes_inscritos" columns={columns} showDeleteButton onClickDeleteButton={onClickDeleteButton} />
        </Row>
      </Container>
      <Footer />
    </div>
  );
}
