import React from 'react';
import './Modal.css';
import ReactDOM from 'react-dom';

export default function Modal({children,  isSalesModal}) {
  // debug: verify children are passed
  
  return ReactDOM.createPortal((
    <div className="modal-backdrop" style={{
      border: "4px solid", 
      borderColor: isSalesModal ? "#ff4500" : "#555", 
      textAlign: "center"
      }}>
        <div className="modal">
           {children}
        
        </div> 
    </div>
  ), document.body)
}

