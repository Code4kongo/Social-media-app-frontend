import React, { useState } from 'react'
import Modal from 'react-modal'
import axios from 'axios'
import './DeleteConfirmModal.css'
import { Redirect } from 'react-router-dom'
import OnSuccessMessage from '../../../feedback/UpdateMessage/UpdateMessage'
import OnFailureMessage from '../../../feedback/FailureMeesage/FailureMeesage'

Modal.setAppElement('#root')

const DeleteAccount = props => {

    const {showModal, closeModal, userId } = props 
    
    const [ redirect, setRedirect ] = useState(false) 
    const [ onSuccess, setOnSuccess] = useState(false)
    const [ onFailure, setOnFailure] = useState(false)
    
    const deleteAccount = () => {
        
        axios.delete(`http://localhost:8080/user/${userId}`)
             .then(res => {
                console.log("Delete  ")
                setOnSuccess(true)
                setTimeout(() => {
                    setRedirect(true)
                }, 3000)
                    
             })
             .catch(error => {
                 console.log(error)
                 setOnFailure(true)
             })
    }

    return (
        <Modal isOpen={showModal} onRequestClose={closeModal} className="modal-wrapper-user">
                <div className="modal-header">
                    <h3><strong>Delete my Account</strong></h3>
                </div>
                <div className="modal-body">
                    <p><strong> You are about to delete your account </strong></p>
                    <p><strong> Are You Sure you want to carry on </strong></p>
                </div>
                    {
                        onSuccess ? <OnSuccessMessage message="Your account was deleted !" /> : null
                    }
                                        {
                        onFailure ? <OnFailureMessage message="Oupsss! something went wrong ..." /> : null
                    }
                
                <div className="modal-footer">
                    <button className="btn btn-danger" onClick={deleteAccount}>
                        <p> <i className="fa fa-trash"></i> <i>Delete Account</i> </p>
                    </button>
                    <button className="btn btn-secondary" onClick={closeModal}>
                        <p><i>Cancel</i> </p>
                    </button>
                </div>
                {
                    redirect ? <Redirect to="/" /> : null
                }
        </Modal>
    )
}

export default DeleteAccount

