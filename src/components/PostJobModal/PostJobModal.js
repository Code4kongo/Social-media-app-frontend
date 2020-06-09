import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import MainPostJob from "../../container/MainPostJob/MainPostJob";

function PostJobModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Post Job
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Post a job</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <MainPostJob />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Post
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default PostJobModal;
