import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import MenuTablas from "../navbar/navbarAdmin";
import Footer from "../footer/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
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
import { Link } from "react-router-dom";

const { SearchBar } = Search;

const products = [
  {
    id: 1,
    cedula: 1031458752,
    nombre: "Estudiante 1",
    telefono: "3158024578",
    email: "estudiante1@gmail.com",
    acciones: (
      <div>
        <Link>
          <Button bg="dark" variant="dark" className="me-2">
            <FontAwesomeIcon icon={faInfo} /> Detalles
          </Button>
        </Link>

        <Link>
          <Button bg="dark" variant="dark" className="me-2">
            <FontAwesomeIcon icon={faEdit} /> Editar
          </Button>
        </Link>

        <Button bg="dark" variant="dark">
          <FontAwesomeIcon icon={faTrash} /> Eliminar
        </Button>
      </div>
    ),
  },
  {
    id: 2,
    cedula: 1031458752,
    nombre: "Estudiante 2",
    telefono: "3158024578",
    email: "estudiante2@gmail.com",
    acciones: (
      <div>
        <Link>
          <Button bg="dark" variant="dark" className="me-2">
            <FontAwesomeIcon icon={faInfo} /> Detalles
          </Button>
        </Link>

        <Link>
          <Button bg="dark" variant="dark" className="me-2">
            <FontAwesomeIcon icon={faEdit} /> Editar
          </Button>
        </Link>

        <Button bg="dark" variant="dark">
          <FontAwesomeIcon icon={faTrash} /> Eliminar
        </Button>
      </div>
    ),
  },
  {
    id: 3,
    cedula: 1031458752,
    nombre: "Estudiante 3",
    telefono: "3158024578",
    email: "estudiante3@gmail.com",
    acciones: (
      <div>
        <Link>
          <Button bg="dark" variant="dark" className="me-2">
            <FontAwesomeIcon icon={faInfo} /> Detalles
          </Button>
        </Link>

        <Link>
          <Button bg="dark" variant="dark" className="me-2">
            <FontAwesomeIcon icon={faEdit} /> Editar
          </Button>
        </Link>

        <Button bg="dark" variant="dark">
          <FontAwesomeIcon icon={faTrash} /> Eliminar
        </Button>
      </div>
    ),
  },
  {
    id: 4,
    cedula: 1031458752,
    nombre: "Estudiante 4",
    telefono: "3158024578",
    email: "estudiante4@gmail.com",
    acciones: (
      <div>
        <Link>
          <Button bg="dark" variant="dark" className="me-2">
            <FontAwesomeIcon icon={faInfo} /> Detalles
          </Button>
        </Link>

        <Link>
          <Button bg="dark" variant="dark" className="me-2">
            <FontAwesomeIcon icon={faEdit} /> Editar
          </Button>
        </Link>

        <Button bg="dark" variant="dark">
          <FontAwesomeIcon icon={faTrash} /> Eliminar
        </Button>
      </div>
    ),
  },
  {
    id: 5,
    cedula: 1031458752,
    nombre: "Estudiante 5",
    telefono: "3158024578",
    email: "estudiante5@gmail.com",
    acciones: (
      <div>
        <Link>
          <Button bg="dark" variant="dark" className="me-2">
            <FontAwesomeIcon icon={faInfo} /> Detalles
          </Button>
        </Link>

        <Link>
          <Button bg="dark" variant="dark" className="me-2">
            <FontAwesomeIcon icon={faEdit} /> Editar
          </Button>
        </Link>

        <Button bg="dark" variant="dark">
          <FontAwesomeIcon icon={faTrash} /> Eliminar
        </Button>
      </div>
    ),
  },
  {
    id: 6,
    cedula: 1031458752,
    nombre: "Estudiante 6",
    telefono: "3158024578",
    email: "estudiante6@gmail.com",
    acciones: (
      <div>
        <Link>
          <Button bg="dark" variant="dark" className="me-2">
            <FontAwesomeIcon icon={faInfo} /> Detalles
          </Button>
        </Link>

        <Link>
          <Button bg="dark" variant="dark" className="me-2">
            <FontAwesomeIcon icon={faEdit} /> Editar
          </Button>
        </Link>

        <Button bg="dark" variant="dark">
          <FontAwesomeIcon icon={faTrash} /> Eliminar
        </Button>
      </div>
    ),
  },
  {
    id: 7,
    cedula: 1031458752,
    nombre: "Estudiante 7",
    telefono: "3158024578",
    email: "estudiante7@gmail.com",
    acciones: (
      <div>
        <Link>
          <Button bg="dark" variant="dark" className="me-2">
            <FontAwesomeIcon icon={faInfo} /> Detalles
          </Button>
        </Link>

        <Link>
          <Button bg="dark" variant="dark" className="me-2">
            <FontAwesomeIcon icon={faEdit} /> Editar
          </Button>
        </Link>

        <Button bg="dark" variant="dark">
          <FontAwesomeIcon icon={faTrash} /> Eliminar
        </Button>
      </div>
    ),
  },
  {
    id: 8,
    cedula: 1031458752,
    nombre: "Estudiante 8",
    telefono: "3158024578",
    email: "estudiante8@gmail.com",
    acciones: (
      <div>
        <Link>
          <Button bg="dark" variant="dark" className="me-2">
            <FontAwesomeIcon icon={faInfo} /> Detalles
          </Button>
        </Link>

        <Link>
          <Button bg="dark" variant="dark" className="me-2">
            <FontAwesomeIcon icon={faEdit} /> Editar
          </Button>
        </Link>

        <Button bg="dark" variant="dark">
          <FontAwesomeIcon icon={faTrash} /> Eliminar
        </Button>
      </div>
    ),
  },
  {
    id: 9,
    cedula: 1031458752,
    nombre: "Estudiante 9",
    telefono: "3158024578",
    email: "estudiante9@gmail.com",
    acciones: (
      <div>
        <Link>
          <Button bg="dark" variant="dark" className="me-2">
            <FontAwesomeIcon icon={faInfo} /> Detalles
          </Button>
        </Link>

        <Link>
          <Button bg="dark" variant="dark" className="me-2">
            <FontAwesomeIcon icon={faEdit} /> Editar
          </Button>
        </Link>

        <Button bg="dark" variant="dark">
          <FontAwesomeIcon icon={faTrash} /> Eliminar
        </Button>
      </div>
    ),
  },
  {
    id: 10,
    cedula: 1031458752,
    nombre: "Estudiante 10",
    telefono: "3158024578",
    email: "estudiante10@gmail.com",
    acciones: (
      <div>
        <Link>
          <Button bg="dark" variant="dark" className="me-2">
            <FontAwesomeIcon icon={faInfo} /> Detalles
          </Button>
        </Link>

        <Link>
          <Button bg="dark" variant="dark" className="me-2">
            <FontAwesomeIcon icon={faEdit} /> Editar
          </Button>
        </Link>

        <Button bg="dark" variant="dark">
          <FontAwesomeIcon icon={faTrash} /> Eliminar
        </Button>
      </div>
    ),
  },
  {
    id: 11,
    cedula: 1031458752,
    nombre: "Estudiante 11",
    telefono: "3158024578",
    email: "estudiante11@gmail.com",
    acciones: (
      <div>
        <Link>
          <Button bg="dark" variant="dark" className="me-2">
            <FontAwesomeIcon icon={faInfo} /> Detalles
          </Button>
        </Link>

        <Link>
          <Button bg="dark" variant="dark" className="me-2">
            <FontAwesomeIcon icon={faEdit} /> Editar
          </Button>
        </Link>

        <Button bg="dark" variant="dark">
          <FontAwesomeIcon icon={faTrash} /> Eliminar
        </Button>
      </div>
    ),
  },
  {
    id: 12,
    cedula: 1031458752,
    nombre: "Estudiante 12",
    telefono: "3158024578",
    email: "estudiante12@gmail.com",
    acciones: (
      <div>
        <Link>
          <Button bg="dark" variant="dark" className="me-2">
            <FontAwesomeIcon icon={faInfo} /> Detalles
          </Button>
        </Link>

        <Link>
          <Button bg="dark" variant="dark" className="me-2">
            <FontAwesomeIcon icon={faEdit} /> Editar
          </Button>
        </Link>

        <Button bg="dark" variant="dark">
          <FontAwesomeIcon icon={faTrash} /> Eliminar
        </Button>
      </div>
    ),
  },
];
const columns = [
  {
    dataField: "id",
    text: "#",
  },
  {
    dataField: "cedula",
    text: "Cedula Estudiante",
  },
  {
    dataField: "nombre",
    text: "Nombre Estudiante",
  },
  {
    dataField: "telefono",
    text: "Telefono Estudiante",
  },
  {
    dataField: "email",
    text: "Email Estudiante",
  },
  {
    dataField: "acciones",
    text: "Acciones Estudiante",
  },
];

export default class estudiantes extends React.Component {
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
            <h1 id="tiulo-tablas">Estudiantes</h1>
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
