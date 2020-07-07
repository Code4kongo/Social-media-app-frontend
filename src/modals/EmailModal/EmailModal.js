import React, { useState } from "react";
import Modal from "react-modal";
import "./EmailModal.css";

Modal.setAppElement("#root");

const EmailModal = (props) => {
  const { showModal, closeModal, authorEmail, applicantEmail } = props;

  const [title, setTitile] = useState("JOB APPLICATION");

  const [email, setEmail] = useState(applicantEmail);

  const [content, setContent] = useState(
    "GOOD DAY, I AM APPLYING FOR THIS POSITION"
  );
  console.log(authorEmail);
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const style = {
    color: "#fff",
    backgroundColor: "#17a2b8",
    borderColor: "#17a2b8",
  };

  return (
    <Modal
      isOpen={showModal}
      onRequestClose={closeModal}
      className="modal-wrapper"
    >
      <div className="post-project">
        <h3>Send email</h3>
        <div className="post-project-fields">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-lg-12">
                <input
                  type="email"
                  placeholder="To"
                  value={authorEmail}
                  readOnly
                  required
                />
              </div>

              <div className="col-lg-12">
                <input
                  type="email"
                  placeholder="Subject"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                  required
                />
              </div>
              <div className="col-lg-12">
                <input
                  type="text"
                  placeholder="From"
                  value={title}
                  onChange={(event) => {
                    setTitile(event.target.value);
                  }}
                  required
                />
              </div>
              <div className="col-lg-12">
                <textarea
                  name="description"
                  placeholder="Message"
                  value={content}
                  onChange={(event) => {
                    setContent(event.target.value);
                  }}
                  required
                ></textarea>
              </div>

              <div className="col-lg-12">
                <ul>
                  <li>
                    <button style={style} type="submit" value="post">
                      Send
                    </button>
                  </li>
                  <li>
                    <button
                      className="btn btn-primary danger"
                      onClick={closeModal}
                    >
                      Cancel
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </form>
        </div>
        <a href="/" title="">
          <i className="la la-times-circle-o"></i>
        </a>
      </div>
    </Modal>
  );
};

export default EmailModal;
