import React, {  useState } from 'react'
import './UpdatePostModal.css'
import Modal from 'react-modal'
import axios from 'axios'
import UploadBar from '../../components/FeedBack/UploadBar/UploadBar'


Modal.setAppElement('#root')

const  AddPostModal = (props) => {

    const {
        postId,
        title,
        country,
        author,
        email,
        content,
        postImage
     } = props

    const [post_title, setTitile ] = useState(title) 
    const [post_country, setCountry ] = useState(country) 
    const [post_author, setAuthor ] = useState(author) 
    const [post_email, setEmail ] = useState(email) 
   
    const [post_content, setContent ] = useState(content)

    const [post_postImage, setPostImage] = useState(postImage) 
    const [filename, setFilename] = useState("choose file")
    const [uploadedFile, setUploadedFile ] = useState({})
    const [uploadPourcentage, setUploadPourcentage ] = useState(0)
    

    const { showModal, closeModal } = props

    const onChange = event => {
        setFilename(event.target.files[0].name)
        setPostImage(event.target.files[0])
    }

    

    const handleSubmit = async (event) => {
        event.preventDefault()

        const formData = new FormData()
        formData.append('postImage', post_postImage)
        formData.append('title',post_title)
        formData.append('country',post_country)
        formData.append('author',post_author)
        formData.append('content',post_content)
        formData.append('email',post_email)

        try {
            
            const result = await axios.patch(`http://localhost:8080/posts/${postId}`, formData, {
                            headers : {
                                'Accept': 'application/json',
                                'Content-Type': 'multipart/form-data',
                            },
                            onUploadProgress: (progressEvent) => {
                                let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
                                setUploadPourcentage(percentCompleted)
                                
                                setTimeout(() => setUploadPourcentage(0),50000)}  
                        })
            fetch(`http://localhost:8080/${result.data.createdPost.post_postImage}`).then(res => {
            console.log(res)
        })

            const newImageUrl = await axios.get(`http://localhost:8080/${result.data.createdPost.postImage}`)
            const ImageFetched = result.data.createdPost.postImage
            
            let newData = newImageUrl.data
            console.log(newData)

            setUploadedFile({newData, ImageFetched })

        } catch(error){
            console.log(error)
        }   
    }
    
    const style = {
        color: "#fff",
        backgroundColor: "#17a2b8",
        borderColor: "#17a2b8"
      }
    return (
    
        <Modal isOpen={showModal} onRequestClose={closeModal} className="modal-wrapper-post">
        <div className="post-project">
            <h3>Edit a Post </h3>
            <div className="post-project-fields">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-lg-9">
                            <div className="custom-file">
                                <label className="custom-file-label" htmlFor="customFile" onChange={onChange} >{filename}</label>
                                <input type="file" id="customFile" onChange={onChange}/>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <input type="text"  placeholder="Title" value={post_title} onChange={(event)=>{setTitile(event.target.value)}} required/>
                        </div>
                        <div className="col-lg-6">
                            <input type="text"  placeholder="Country" value={post_country} onChange={(event)=>{setCountry(event.target.value)}} required/>
                        </div>
                        <div className="col-lg-6">
                            <input type="text"  placeholder="Author" value={post_author} onChange={(event)=>{setAuthor(event.target.value)}} required/>
                        </div>
                        <div className="col-lg-6">
                            <input type="email"  placeholder="Email" value={post_email} onChange={(event)=>{setEmail(event.target.value)}} required/>
                        </div>
                        <div className="col-lg-6">
                            <textarea name="description" placeholder="What's in your mind" value={post_content }  onChange={(event)=>{setContent(event.target.value)}} required></textarea>
                        </div>
                        <div className="col-lg-12">
                        <UploadBar percentage={uploadPourcentage} />
                    </div>
                        <div className="col-lg-6">
                            <ul>
                                <li><button style={style} type="submit" value="post">Post</button></li>
                                <li><button className= "btn btn-primary danger" onClick={closeModal}>Cancel</button></li>
                            </ul>
                        </div>
                    </div>
                </form>
               
                
            </div>
        </div>
    </Modal>
    )
}

export default AddPostModal
