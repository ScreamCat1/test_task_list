import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const ModalWindow =
({ data: [username, email, text], toggleModal, addTask }) => (
  <div className="static-modal">
    <Modal.Dialog>
      <Modal.Header>
        <Modal.Title>
          <span className="card-subtitle mb-2 text-muted">
            Создал: </span>
          {username}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <span className="card-subtitle mb-2 text-muted">
          Текст: </span>
        {text}
        <div>
          <span className="card-subtitle mb-2 text-muted">
            Email: </span>
          {email}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={toggleModal}
        >Close</Button>
        <Button
          bsStyle="primary"
          onClick={addTask}
        >Save changes</Button>
      </Modal.Footer>

    </Modal.Dialog>
  </div>
);

ModalWindow.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
  toggleModal: PropTypes.func.isRequired,
  addTask: PropTypes.func.isRequired,
};

export default ModalWindow;
