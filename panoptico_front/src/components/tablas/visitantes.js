import React from "react";
import { Container, Row } from "react-bootstrap";
import MenuTablas from "../navbar/navbarAdmin";
import Footer from "../footer/footer";
import "./tablas.css";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory, {
  PaginationProvider,
  PaginationListStandalone,
  SizePerPageDropdownStandalone,
} from "react-bootstrap-table2-paginator";
import ToolkitProvider, {
  Search,
} from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit";

const { SearchBar } = Search;

const products = [
  {
    id: 1,
    cedula: 1031458752,
    nombre: "Visitante 1",
    telefono: "3158024578",
    email: "Visitante1@gmail.com",
    acciones: "Acutualizar & Eliminar",
  },
  {
    id: 2,
    cedula: 1031458752,
    nombre: "Visitante 2",
    telefono: "3158024578",
    email: "Visitante2@gmail.com",
    acciones: "Acutualizar & Eliminar",
  },
  {
    id: 3,
    cedula: 1031458752,
    nombre: "Visitante 3",
    telefono: "3158024578",
    email: "Visitante3@gmail.com",
    acciones: "Acutualizar & Eliminar",
  },
  {
    id: 4,
    cedula: 1031458752,
    nombre: "Visitante 4",
    telefono: "3158024578",
    email: "Visitante4@gmail.com",
    acciones: "Acutualizar & Eliminar",
  },
  {
    id: 5,
    cedula: 1031458752,
    nombre: "Visitante 5",
    telefono: "3158024578",
    email: "Visitante5@gmail.com",
    acciones: "Acutualizar & Eliminar",
  },
  {
    id: 6,
    cedula: 1031458752,
    nombre: "Visitante 6",
    telefono: "3158024578",
    email: "Visitante6@gmail.com",
    acciones: "Acutualizar & Eliminar",
  },
  {
    id: 7,
    cedula: 1031458752,
    nombre: "Visitante 7",
    telefono: "3158024578",
    email: "Visitante7@gmail.com",
    acciones: "Acutualizar & Eliminar",
  },
  {
    id: 8,
    cedula: 1031458752,
    nombre: "Visitante 8",
    telefono: "3158024578",
    email: "Visitante8@gmail.com",
    acciones: "Acutualizar & Eliminar",
  },
  {
    id: 9,
    cedula: 1031458752,
    nombre: "Visitante 9",
    telefono: "3158024578",
    email: "Visitante9@gmail.com",
    acciones: "Acutualizar & Eliminar",
  },
  {
    id: 10,
    cedula: 1031458752,
    nombre: "Visitante 10",
    telefono: "3158024578",
    email: "Visitante10@gmail.com",
    acciones: "Acutualizar & Eliminar",
  },
  {
    id: 11,
    cedula: 1031458752,
    nombre: "Visitante 11",
    telefono: "3158024578",
    email: "Visitante11@gmail.com",
    acciones: "Acutualizar & Eliminar",
  },
  {
    id: 12,
    cedula: 1031458752,
    nombre: "Visitante 12",
    telefono: "3158024578",
    email: "Visitante12@gmail.com",
    acciones: "Acutualizar & Eliminar",
  },
];
const columns = [
  {
    dataField: "id",
    text: "#",
  },
  {
    dataField: "cedula",
    text: "Cedula Visitante",
  },
  {
    dataField: "nombre",
    text: "Nombre Visitante",
  },
  {
    dataField: "telefono",
    text: "Telefono Visitante",
  },
  {
    dataField: "email",
    text: "Email Visitante",
  },
  {
    dataField: "acciones",
    text: "Acciones Visitante",
  },
];

export default class visitantes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const options = {
      custom: true,
      totalSize: products.length,
    };
    return (
      <div className="tablas-admin">
        <MenuTablas />
        <Container id="container-tablas">
          <Row>
            <h1 id="tiulo-tablas">Visitantes</h1>
            <hr id="separador-tablas" />
          </Row>
          <Row>
            <ToolkitProvider
              keyField="id"
              data={products}
              columns={columns}
              search
            >
              {(props) => (
                <>
                  <SearchBar {...props.searchProps} />
                  <PaginationProvider pagination={paginationFactory(options)}>
                    {({ paginationProps, paginationTableProps }) => (
                      <div>
                        <SizePerPageDropdownStandalone {...paginationProps} />
                        <BootstrapTable
                          keyField="id"
                          data={products}
                          columns={columns}
                          {...paginationTableProps}
                          {...props.baseProps}
                        />
                        <PaginationListStandalone {...paginationProps} />
                      </div>
                    )}
                  </PaginationProvider>
                </>
              )}
            </ToolkitProvider>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}
