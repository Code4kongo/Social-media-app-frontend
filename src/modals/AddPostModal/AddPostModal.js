import React, { useContext, useState } from 'react'
import './AddPostModal.css'
import Modal from 'react-modal'
import axios from 'axios'
import UploadBar from '../../components/FeedBack/UploadBar/UploadBar'


Modal.setAppElement('#root')

const  AddPostModal = (props) => {

    const [title, setTitile ] = useState("") 
    const [country, setCountry ] = useState("") 
    const [author, setAuthor ] = useState("") 
    const [email, setEmail ] = useState("") 
   
    const [content, setContent ] = useState("")

    const [postImage, setPostImage] = useState("") 
    const [filename, setFilename] = useState("choose file")
    const [uploadedFile, setUploadedFile ] = useState({})
    const [uploadPourcentage, setUploadPourcentage ] = useState(0)
    

    const { showModal, closeModal } = props

    const onChange = event => {

        setFilename(event.target.files[0].name)
        setPostImage(event.target.files[0])
    }

    

    const handleSubmit = (event) => {
        event.preventDefault()

        const formData = new FormData()
        formData.append('postImage', postImage)
        formData.append('title',title)
        formData.append('country',country)
        formData.append('author',author)
        formData.append('content',content)
        formData.append('email',email)


        axios.post('http://localhost:8080/posts', formData, {
            headers : {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data',
            },
            onUploadProgress: function(progressEvent) {
                let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
                setUploadPourcentage(percentCompleted)
                
                setTimeout(() => setUploadPourcentage(0),50000)}  
        })
        .then(res => {
            const newImageUrl = axios.get(`http://localhost:8080/${res.data.createdPost.postImage}`)
            console.log(newImageUrl)
            const ImageFetched = res.data.createdPost.postImage
            setUploadedFile({newImageUrl, ImageFetched })
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
    
        <Modal isOpen={showModal} onRequestClose={closeModal} className="modal-wrapper-post">
        <div className="post-project">
            <h3>Add a Post </h3>
            <div className="post-project-fields">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="custom-file">
                                <label className="custom-file-label" htmlFor="customFile" onChange={onChange} >{filename}</label>
                                <input type="file" id="customFile" onChange={onChange}/>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <input type="text"  placeholder="Title" value={title} onChange={(event)=>{setTitile(event.target.value)}} required/>
                        </div>
                        <div className="col-lg-6">
                            <input type="text"  placeholder="Country" value={country} onChange={(event)=>{setCountry(event.target.value)}} required/>
                        </div>
                        <div className="col-lg-6">
                            <input type="text"  placeholder="Author" value={author} onChange={(event)=>{setAuthor(event.target.value)}} required/>
                        </div>
                        <div className="col-lg-6">
                            <input type="email"  placeholder="Email" value={email} onChange={(event)=>{setEmail(event.target.value)}} required/>
                        </div>
                        <div className="col-lg-6">
                            <textarea name="description" placeholder="What's in your mind" value={content }  onChange={(event)=>{setContent(event.target.value)}} required></textarea>
                        </div>
                        <div className="col-lg-12">
                        <UploadBar percentage={uploadPourcentage} />
                    </div>
                        <div className="col-lg-6">
                            <ul>
                                <li><button className="active" type="submit" value="post">Post</button></li>
                                <li><button className= "btn btn-primary danger" onClick={closeModal}>Cancel</button></li>
                            </ul>
                        </div>
                    </div>
                </form>
                <div>
                    {
                        uploadedFile ? 
                            <div className="row"> 
                                <div className = "col-lg-6 mt-auto">
                                    <h6 className="text-center"> { uploadedFile.ImageFetched }</h6>
                                    <img style={{width : '100%'}} src={uploadedFile.newImageUrl} alt="image"/>
                                </div> 
                            </div> : null
                    }
                </div>
                
            </div>
        </div>
    </Modal>
    )
}

export default AddPostModal
