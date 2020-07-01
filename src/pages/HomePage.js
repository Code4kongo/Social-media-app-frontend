import React from 'react'
import Header from '../container/Header/Header'
import MainHome from '../container/MainHome/MainHome'
import Footer from '../container/Footer/Footer'

const Home = (props) => {
     console.log(props)
    return ( 
        <React.Fragment>
            <Header />
            <MainHome />
            <Footer/>
        </React.Fragment>
     );
}
 
export default Home ;


