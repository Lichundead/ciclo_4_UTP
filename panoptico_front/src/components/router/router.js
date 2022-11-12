import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Inicio from "../inicio/inicio";
import Ingresos from "../tablas/ingresos";
import Estudiantes from "../tablas/estudiantes";
import Visitantes from "../tablas/visitantes";

export default function AppRoutes() {
  return (
    <Router>
      <Switch>
        <Route exact path={["/admin/ingresos/"]} component={Ingresos} />
        <Route exact path={["/admin/estudiantes/"]} component={Estudiantes} />
        <Route exact path={["/admin/visitantes/"]} component={Visitantes} />
        <Route exact path={["/"]} component={Inicio} />
        <Route
          path={"*"}
          component={() => (
            <h1 style={{ marginTop: 300 }}>
              404
              <br />
              Página no encontrada
            </h1>
          )}
        />
      </Switch>
    </Router>
  );
}
