import React from "react";
import NavInicio from "../navbar/navbarInicio";
import "./inicio.css";

export default class inicio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <body>
        <NavInicio />
        <div className="containerPrincipal">
          <div className="containerSecundario">
            <div className="form-group">
              <label>
                <h2>Bienvenidos al Museo Panóptico de Ibagué</h2>
              </label>
              <br />
              <label>
                <h6>Selecciona una opción:</h6>
              </label>
              <br />
              <button
                id="boton-visitantes"
                className="btn btn-primary"
                onClick={() => this()}
              >
                Visitantes
              </button>
              <br />

              <br />
              <button
                id="boton-estudiantes"
                className="btn btn-primary"
                onClick={() => this()}
              >
                Estudiantes
              </button>
            </div>
          </div>
        </div>
      </body>
    );
  }
}
