import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const PostContext = createContext()

const PostContextProvider = (props) => {
    const [posts, setPosts] = useState([
        {
            _id:"",
            title: "",
            country: "",
            author: "",
            content: "",
            date: "",
            likes: 0,
            comments: [],
            postImage: ""
        }
    ])

    useEffect(() => {
        axios.get('http://localhost:8080/posts')
            .then(res => {
                const postsList = res.data.posts
                setPosts(postsList)
            })
    }, [])

    const updatePost = () => {
        
    }
    const deletePost = () => {
        
    }
    
    return ( 
        <PostContext.Provider value={{posts, updatePost, deletePost}}>
            {props.children}
        </PostContext.Provider>
     );
}
 
export default PostContextProvider;