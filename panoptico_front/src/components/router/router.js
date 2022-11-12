import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "../inicio/inicio";
import Ingresos from "../tablas/ingresos";
import Estudiantes from "../tablas/estudiantes";
import Visitantes from "../tablas/visitantes";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route exact path="/admin/ingresos/" element={<Ingresos />}></Route>
        <Route
          exact
          path="/admin/estudiantes/"
          element={<Estudiantes />}
        ></Route>
        <Route exact path="/admin/visitantes/" element={<Visitantes />}></Route>
        <Route
          path="/*"
          element={
            <h1 style={{ marginTop: 300 }}>
              404
              <br />
              Página no encontrada
            </h1>
          }
        ></Route>

        <Route exact path="/" element={<Inicio />}></Route>
      </Routes>
    </Router>
  );
}
