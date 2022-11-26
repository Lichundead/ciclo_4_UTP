import React from "react";
import { Container, Row } from "react-bootstrap";
import { request } from "../helper/helper";
import "./tablas.css";
import DataGrid from "../grid/grid";
import MenuTablas from "../navbar/navbarAdmin";
import Footer from "../footer/footer";
import ConfirmationPromprs from "../prompts/confirmation";
import MessagePrompt from "../prompts/message";
import Loading from "../loading/loading";

const columns = [
  {
    dataField: "_id",
    text: "ID Ingreso",
    hidden: true,
  },
  {
    dataField: "fecha",
    text: "Fecha Ingreso",
  },
  {
    dataField: "id_ingreso",
    text: "Cedula Ingreso",
  },
  {
    dataField: "rol",
    text: "Rol",
  },
];

export default class ingresos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      id_ingreso: null,
      confirmation: {
        title: "Eliminar Ingreso",
        text: "¿Está seguro que desea eliminar el ingreso, recuerde que esta acción es irreversible?",
        show: false,
      },
      message: {
        text: "",
        show: false,
      },
    };

    this.onClickDeleteButton = this.onClickDeleteButton.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.onConfirm = this.onConfirm.bind(this);
  }
  componentDidMount() {
    request
      .get(this.props.url)
      .then((response) => {
        this.setState({ rows: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onClickDeleteButton(row) {
    this.setState({
      id_ingreso: row.id_ingreso,
      confirmation: {
        ...this.state.confirmation,
        show: true,
      },
    });
  }

  onCancel() {
    this.setState({
      confirmation: {
        ...this.state.confirmation,
        show: false,
      },
    });
  }

  onConfirm() {
    this.setState(
      {
        confirmation: {
          ...this.state.confirmation,
          show: false,
        },
      },
      this.eliminarIngreso()
    );
  }

  eliminarIngreso() {
    this.setState({ loading: true });
    request
      .delete(`/ingresos/${this.state.id_ingreso}`)
      .then((response) => {
        this.setState({
          loading: false,
          message: {
            text: response.data.msg,
            show: true,
          },
        });
        if (response.data.exito) this.reloadPage();
      })
      .catch((err) => {
        console.error(err);
        this.setState({ loading: false });
      });
  }

  reloadPage() {
    setTimeout(() => {
      window.location.reload();
    }, 2500);
  }

  render() {
    return (
      <div className="tablas-admin">
        <MenuTablas />
        <Container id="container-tablas">
          <ConfirmationPromprs
            show={this.state.confirmation.show}
            title={this.state.confirmation.title}
            text={this.state.confirmation.text}
            onCancel={this.onCancel}
            onConfirm={this.onConfirm}
          />

          <MessagePrompt
            text={this.state.message.text}
            show={this.state.message.show}
            duration={2500}
            onExited={this.onExitedMessage}
          />

          <Loading show={this.state.loading} />

          <Row>
            <h1 id="tiulo-tablas">Ingresos</h1>
            <hr id="separador-tablas" />
          </Row>
          <Row>
            <DataGrid
              url="/ingresos"
              columns={columns}
              showDeleteButton={true}
              onClickDeleteButton={this.onClickDeleteButton}
            />
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}
