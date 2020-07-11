import React, { useState } from 'react'
import Modal from 'react-modal'
import axios from 'axios'
import './DeleteJobConfirmModal.css'
import OnSuccessMessage from '../../../feedback/UpdateMessage/UpdateMessage'
import OnFailureMessage from '../../../feedback/FailureMeesage/FailureMeesage'

Modal.setAppElement('#root')

const DeleteJob = props => {

    const {showModal, closeModal, jobId } = props 
    
    const [ onSuccess, setOnSuccess] = useState(false)
    const [ onFailure, setOnFailure] = useState(false)
    
    const deleteJob = () => {
          
        axios.delete(`http://localhost:8080/jobs/${jobId}`)
                .then(res => {
                    setOnSuccess(true) 
                    setTimeout(() => setOnSuccess(false), 15000)
                })
                .catch(error => {
                    console.log(error)
                    setOnFailure(true)
                    setTimeout(() => setOnFailure(false), 15000)
                })
            }
        
            return (
                <Modal isOpen={showModal} onRequestClose={closeModal} className="modal-wrapper-post">
                        <div className="modal-header">
                            <h3><strong>Delete Post</strong></h3>
                        </div>
                        <div className="modal-body">
                            <p><strong> You are about to delete the job you have posted! </strong></p>
                        </div>
                            {
                                onSuccess ? <OnSuccessMessage message="Job was deleted !" /> : null
                            }
                                                {
                                onFailure ? <OnFailureMessage message="Oupsss! something went wrong ..." /> : null
                            }
                        
                        <div className="modal-footer">
                            <button className="btn btn-danger" onClick={deleteJob}>
                                <p> <i className="fa fa-trash"></i> <i>Delete Job</i> </p>
                            </button>
                            {
                                onSuccess ? <button className="btn btn-secondary" onClick={closeModal}>
                                                <p><i>Cancel</i> </p>
                                            </button> : 
                                            <button className="btn btn-secondary" onClick={closeModal}>
                                                <p><i>Cancel</i> </p>
                                            </button>
                            }
                        </div>
                </Modal>
            )
        }
        
        export default DeleteJob
        


