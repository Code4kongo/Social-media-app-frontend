import React, { useState } from 'react'
import Modal from 'react-modal'
import axios from 'axios'
import './DeletePostConfirmModal.css'
import OnSuccessMessage from '../../../feedback/UpdateMessage/UpdateMessage'
import OnFailureMessage from '../../../feedback/FailureMeesage/FailureMeesage'

Modal.setAppElement('#root')

const DeletePost = props => {

    const {showModal, closeModal, postId } = props 
    
    const [ onSuccess, setOnSuccess] = useState(false)
    const [ onFailure, setOnFailure] = useState(false)
    
    const deletePost = () => {
          
        axios.delete(`http://localhost:8080/posts/${postId}`)
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
                            <p><strong> You are about to delete your post </strong></p>
                        </div>
                            {
                                onSuccess ? <OnSuccessMessage message="Your post was deleted !" /> : null
                            }
                                                {
                                onFailure ? <OnFailureMessage message="Oupsss! something went wrong ..." /> : null
                            }
                        
                        <div className="modal-footer">
                            <button className="btn btn-danger" onClick={deletePost}>
                                <p> <i className="fa fa-trash"></i> <i>Delete Post</i> </p>
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
        
        export default DeletePost
        


