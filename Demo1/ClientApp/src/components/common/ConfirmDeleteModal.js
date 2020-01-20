import React from "react";
import Modal from "react-modal";

export default function ConfirmDeleteModal(props) {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%, -50%)",
      width: "600px"
    }
  };
  return (
    <Modal
      isOpen={props.modalIsOpen}
      onRequestClose={props.closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div>
        <div className="modal-header">
          <button
            type="button"
            class="close"
            onClick={props.closeModal}
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
          <h4>Modal Title</h4>
        </div>
        <div className="modal-body">
          <p>Are you sure you want to delete this course?</p>
        </div>

        <div className="modal-footer">
          <button
            type="button"
            onClick={props.onDelete}
            className="btn btn-danger"
          >
            Yes, Delete
          </button>
          <button
            type="button"
            class="btn btn-secondary"
            onClick={props.closeModal}
          >
            No,Cancle
          </button>
        </div>
      </div>
    </Modal>
  );
}
