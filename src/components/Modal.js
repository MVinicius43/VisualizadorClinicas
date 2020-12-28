import React, { useState } from 'react';
import './Modal.css';
import { Alert } from '@material-ui/lab'

const Modal = ({ show, close }) => {

  const [success, setSuccess] = useState(false)

  const sendData = () => {
    setSuccess(true)
  }

  return (
    <div className="modal-wrapper"
      style={{
        transform: show ? 'translateY(0vh)' : 'translateY(-100vh)',
        opacity: show ? '1' : '0'
      }}
    >
      <div className="modal-header">
        <p>Novo Cadastro</p>
        <span onClick={close} className="close-modal-btn">X</span>
      </div>

      <div className="modal-content">
        <div className="modal-body">
          <h4>Nome da Clínica:</h4>
          <input type="text" />
        </div>

        <div className="modal-body">
          <h4>Endereço:</h4>
          <input type="text" />
        </div>

        <div className="modal-body">
          <h4>CEP:</h4>
          <input type="text" />
        </div>

        <div className="modal-body">
          <h4>Email:</h4>
          <input type="text" />
        </div>

        <div className="modal-body">
          <h4>WhatsApp:</h4>
          <input type="text" />
        </div>

        <div className="modal-body">
          <h4>Serviços Disponíveis:</h4>
          <input type="text" />
        </div>

        <div className="modal-footer">
          <button onClick={() => sendData()} className="btn-cancel">Cadastrar</button>
        </div>

        {success ? <Alert severity="success">Cadastro realizado com sucesso!</Alert> : null}
      </div>
    </div>
  )
};

export default Modal;