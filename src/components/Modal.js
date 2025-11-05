import React from 'react';
import './Modal.css';
import ReactDOM from 'react-dom';

export default function Modal({children, handleClose}) {
  // debug: verify children are passed
  
  return ReactDOM.createPortal((
    <div className="modal-backdrop" >
        <div className="modal">
           {children}
        <button onClick={handleClose}>close</button>
        </div> 
    </div>
  ), document.body)
}

