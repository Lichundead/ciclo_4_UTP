import { Navigate } from "react-router-dom";
import { getSession } from "../helper/helper";

export default function PrivateRoute({ children }) {
  return getSession() ? children : <Navigate to="/login" replace />;
}
