import axios from "axios";
import Cookies from "universal-cookie";

const APIHOST = import.meta.env.VITE_APIHOST;
const cookies = new Cookies();

export function calcularExpirarSesion() {
  return new Date(Date.now() + 30 * 30 * 1000);
}

export function getSession() {
  const token = cookies.get("_s");
  return token !== undefined && token !== null ? token : false;
}

function renovarSesion() {
  const sesion = getSession();
  if (!sesion) window.location.href = "/login";
  cookies.set("_s", sesion, {
    path: "/",
    expires: calcularExpirarSesion(),
    sameSite: "strict",
    secure: window.location.protocol === "https:",
  });
  return sesion;
}

export const request = {
  get: (services) => {
    const token = renovarSesion();
    return axios.get(`${APIHOST}${services}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  },
  post: (services, data) => {
    const token = renovarSesion();
    return axios.post(`${APIHOST}${services}`, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
  },
  post2: (services, data) => axios.post(`${APIHOST}${services}`, data),
  delete: (services) => {
    const token = renovarSesion();
    return axios.delete(`${APIHOST}${services}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  },
};
