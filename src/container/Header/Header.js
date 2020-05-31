import React from 'react'
import './Header.css'
import Logo from '../../components/Logo/Logo'
import SearchBar from '../../components/SearchBar/SearchBar'
import NavBar from '../../components/NavBar/NavBar'

const Header = () => {
    return ( 
        <header>
            <div className="container"   style={{backgroundColor : "green"}}>
                <div className="header-data">
                    <Logo/>
                    <SearchBar />
                    <NavBar />
                </div>
            </div>
        </header>
     );
}
 
export default Header;
