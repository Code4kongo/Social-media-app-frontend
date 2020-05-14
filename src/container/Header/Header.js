import React, { Component } from 'react'
import './Header.css'
import Logo from '../../components/Logo/Logo'
import SearchBar from '../../components/SearchBar/SearchBar'
import NavBar from '../../components/NavBar/NavBar'

export class Header extends Component {
    render() {
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
        )
    }
}

export default Header
