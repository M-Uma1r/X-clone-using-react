import React, { useState } from 'react';

export default function SignUpModal() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});
  const [ModalOpen, setModalOpen] = useState(true);

  function submit(e) {
    e.preventDefault();
    const newUser = { username, email, password };
    setUser(newUser);
    setUsername("");
    setEmail("");
    setPassword("");
    console.log(newUser);
  }

  function closeModal() {
    setModalOpen(false);
  }

  if (!ModalOpen) return null; // Do not render the modal if isModalOpen is false

  return (
    <div>
      <div className="modal d-block" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Sign Up</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={closeModal}></button>
            </div>
            <div className="modal-body d-flex flex-wrap flex-column justify-content-center">
              <input className='m-1' type="text" placeholder='Username' required value={username} onChange={(e) => setUsername(e.target.value)} />
              <input className='m-1' type="email" placeholder='Email' required value={email} onChange={(e) => setEmail(e.target.value)} />
              <input className='m-1' type="password" placeholder='Password' required value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={closeModal}>Close</button>
              <button type="button" className="btn btn-primary" onClick={submit}>Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
