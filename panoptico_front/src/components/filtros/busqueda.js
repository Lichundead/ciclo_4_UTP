import React from "react";
import { Button, Form } from "react-bootstrap";
import "./busqueda.css";

export default class barraBusqueda extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="navsearch">
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Consulte el número de CC"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-dark">Search</Button>
          <Button variant="outline-success" id="reset">Reset</Button>
        </Form>
      </div>
    );
  }
}
