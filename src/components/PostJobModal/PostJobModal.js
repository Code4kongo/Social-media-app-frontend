import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
//import MainPostJob from "../../container/MainPostJob/MainPostJob";

function PostJobModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="post-project">
      <Button variant="primary" onClick={handleShow}>
        Post Job
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Post a job</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="post-project-fields">
            <form>
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <input type="text" name="title" placeholder="Title" />
                </div>
                <div className="col-lg-8">
                  <div className="inp-field">
                    <select>
                      <option>Category</option>
                      <option>Category 1</option>
                      <option>Category 2</option>
                      <option>Category 3</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-8">
                  <input type="text" name="skills" placeholder="Skills" />
                </div>
                <div className="col-lg-8">
                  <div className="price-sec">
                    <div className="price-br">
                      <input type="text" name="price1" placeholder="Price" />
                      <i className="la la-dollar"></i>
                    </div>
                    <span>To</span>
                    <div className="price-br">
                      <input type="text" name="price1" placeholder="Price" />
                      <i className="la la-dollar"></i>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8">
                  <textarea
                    name="description"
                    placeholder="Description"
                  ></textarea>
                </div>
              </div>
            </form>
          </div>
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
