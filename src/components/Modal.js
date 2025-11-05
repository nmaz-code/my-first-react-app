import React from 'react';
import './Modal.css';
import ReactDOM from 'react-dom';

export default function Modal({children, handleClose, isSalesModal}) {
  // debug: verify children are passed
  
  return ReactDOM.createPortal((
    <div className="modal-backdrop" style={{
      border: "4px solid", 
      borderColor: isSalesModal ? "#ff4500" : "#555", 
      textAlign: "center"
      }}>
        <div className="modal">
           {children}
        <button 
          onClick={handleClose} 
          className={isSalesModal ? "sales-btn" : ""}>close</button>
        </div> 
    </div>
  ), document.body)
}

