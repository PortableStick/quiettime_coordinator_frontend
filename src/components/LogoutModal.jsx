import React from 'react'
import Modal from 'react-modal'
import SaveButton from './SaveButton.jsx'
import CancelButton from './CancelButton.jsx'
import '../scss/logout-modal.scss'

export default props => {
  Modal.setAppElement('#app')
  return(
    <Modal isOpen={props.isOpen} contentLabel="Confirm User Logout" className="logout-confirmation" overlayClassName="logout-overlay">
      <h2>Are you sure you want to log out?</h2>
      <button className="btn btn-lg btn-success" onClick={props.logout}>Log out</button>
      <button className="btn btn-lg btn-danger" onClick={props.closeModal}>No, stay</button>
    </Modal>
  )
}