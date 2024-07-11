import React from 'react'
import './Modal.css'

export default function SignUpmodal() {
  return (
    <div>
      <div className="modal-content">
        <p className="close btn">&times;</p>
        <p>This is modal</p>
        <button className='btn btn-outline-success mx-5'>Submit</button>
        <button className='btn btn-outline-danger mx-5'>Close</button>
      </div>
    </div>
  )
}
