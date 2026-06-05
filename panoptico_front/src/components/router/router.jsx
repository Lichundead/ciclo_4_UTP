import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "../inicio/inicio";
import Ingresos from "../tablas/ingresos";
import Estudiantes from "../tablas/estudiantes";
import Visitantes from "../tablas/visitantes";
import VisitantesVista from "../registros/visitantes";
import EstudiantesVista from "../registros/estudiantes";
import Login from "../login/login";
import PrivateRoute from "../auth/privaterouter";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/admin/ingresos"
          element={
            <PrivateRoute>
              <Ingresos />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/estudiantes"
          element={
            <PrivateRoute>
              <Estudiantes />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/visitantes"
          element={
            <PrivateRoute>
              <Visitantes />
            </PrivateRoute>
          }
        />
        <Route path="/ingreso/visitantes" element={<VisitantesVista />} />
        <Route path="/ingreso/estudiantes" element={<EstudiantesVista />} />
        <Route
          path="*"
          element={
            <h1 style={{ marginTop: 300 }}>
              404
              <br />
              Página no encontrada
            </h1>
          }
        />
      </Routes>
    </Router>
  );
}
