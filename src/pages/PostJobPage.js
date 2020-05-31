import React from 'react'
import Header from '../container/Header/Header'
import PostJobContainer from '../container/MainPostJob/MainPostJob'
import Footer from '../container/Footer/Footer'

const Jobs = () => {
    return ( 
        <div>
            <Header/>
            <PostJobContainer/>
            <Footer/>
        </div>
     );
}
 
export default Jobs;