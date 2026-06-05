import { Button, Modal } from "react-bootstrap";

export default function ConfirmationPrompt({ show, title, text, onCancel, onConfirm }) {
  return (
    <Modal show={show} centered onHide={onCancel}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body><p>{text}</p></Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onCancel}>Cancelar</Button>
        <Button variant="danger" onClick={onConfirm}>Confirmar</Button>
      </Modal.Footer>
    </Modal>
  );
}
