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
    fecha: "10/09/2022 - 6:50pm",
    cedula: 1031458752,
    rol: "Estudiante",
    acciones: "Eliminar",
  },
  {
    id: 2,
    fecha: "10/09/2022 - 6:50pm",
    cedula: 1031458752,
    rol: "Estudiante",
    acciones: "Eliminar",
  },
  {
    id: 3,
    fecha: "10/09/2022 - 6:50pm",
    cedula: 1031458752,
    rol: "Estudiante",
    acciones: "Eliminar",
  },
  {
    id: 4,
    fecha: "10/09/2022 - 6:50pm",
    cedula: 1031458752,
    rol: "Estudiante",
    acciones: "Eliminar",
  },
  {
    id: 5,
    fecha: "10/09/2022 - 6:50pm",
    cedula: 1031458752,
    rol: "Estudiante",
    acciones: "Eliminar",
  },
  {
    id: 6,
    fecha: "10/09/2022 - 6:50pm",
    cedula: 1031458752,
    rol: "Estudiante",
    acciones: "Eliminar",
  },
  {
    id: 7,
    fecha: "10/09/2022 - 6:50pm",
    cedula: 1031458752,
    rol: "Estudiante",
    acciones: "Eliminar",
  },
  {
    id: 8,
    fecha: "10/09/2022 - 6:50pm",
    cedula: 1031458752,
    rol: "Estudiante",
    acciones: "Eliminar",
  },
  {
    id: 9,
    fecha: "10/09/2022 - 6:50pm",
    cedula: 1031458752,
    rol: "Estudiante",
    acciones: "Eliminar",
  },
  {
    id: 10,
    fecha: "10/09/2022 - 6:50pm",
    cedula: 1031458752,
    rol: "Estudiante",
    acciones: "Eliminar",
  },
  {
    id: 11,
    fecha: "10/09/2022 - 6:50pm",
    cedula: 1031458752,
    rol: "Estudiante",
    acciones: "Eliminar",
  },
  {
    id: 12,
    fecha: "10/09/2022 - 6:50pm",
    cedula: 1031458752,
    rol: "Estudiante",
    acciones: "Eliminar",
  },
];
const columns = [
  {
    dataField: "id",
    text: "#",
  },
  {
    dataField: "fecha",
    text: "Fecha Ingreso",
  },
  {
    dataField: "cedula",
    text: "Cedula Ingreso",
  },
  {
    dataField: "rol",
    text: "Rol",
  },
  {
    dataField: "acciones",
    text: "Acciones Ingreso",
  },
];

export default class ingresos extends React.Component {
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
            <h1 id="tiulo-tablas">Ingresos</h1>
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
