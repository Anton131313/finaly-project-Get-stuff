import React from 'react';
import './Modal.css';

function Modal({ setOpenModal, deleteHandler, id }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button onClick={() => { setOpenModal(false); }}> X </button>
        </div>
        <div className="modalTitle">
          <h5>Вы уверены, что хотите продолжить?</h5>
        </div>
        <div className="modalFooter">
          <button onClick={() => { setOpenModal(false); }}>Отменить</button>
          <button className="btn btn-outline-danger" id="cancelBtn" onClick={() => deleteHandler(id)}>Продолжить</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
