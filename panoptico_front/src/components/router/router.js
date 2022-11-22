import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
      <Switch>
        <Route exact path={["/"]} component={Inicio} />
        <Route exact path={["/login"]} component={Login} />
        <PrivateRoute exact path={["/admin/ingresos/"]} component={Ingresos} />
        <PrivateRoute
          exact
          path={["/admin/estudiantes/"]}
          component={Estudiantes}
        />
        <PrivateRoute
          exact
          path={["/admin/visitantes/"]}
          component={Visitantes}
        />
        <Route
          exact
          path={["/ingreso/visitantes/"]}
          component={VisitantesVista}
        />
        <Route
          exact
          path={["/ingreso/estudiantes/"]}
          component={EstudiantesVista}
        />

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
