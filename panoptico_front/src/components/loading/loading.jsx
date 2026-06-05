import { Spinner } from "react-bootstrap";
import "./loading.css";

export default function Loading({ show }) {
  if (!show) return null;
  return (
    <div id="loading-backdrop">
      <Spinner animation="border" variant="primary" />
    </div>
  );
}
