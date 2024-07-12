import React from 'react'
import './Modal.css';

const Modal = ({score}) => {
  return (
    <div className='Modal'>
        <div className='Modal-title'>Score: {score}</div>
        <div onClick={() => window.location="/"} className='Modal-btn'>Restart</div>
        
    </div>
  )
}

export default Modal