import React from "react";
import { Container } from "react-bootstrap";
import "./footer.css";

export default class footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="imagenPie">
        <Container id="contenedor">
          <img
            alt="img-footer"
            width="300px"
            height="50px"
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/052/564/original/footer.png?1668055519"
          />
        </Container>
      </div>
    );
  }
}
