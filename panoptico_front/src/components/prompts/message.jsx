import { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import "./promts.css";

export default function MessagePrompt({ show, text, duration, onExited }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!show) return;
    setVisible(true);
    const timer = setTimeout(() => setVisible(false), duration);
    return () => clearTimeout(timer);
  }, [show, duration]);

  return (
    <Modal id="message-promt" centered show={visible} onExited={() => onExited?.()}>
      <Modal.Body>{text}</Modal.Body>
    </Modal>
  );
}
