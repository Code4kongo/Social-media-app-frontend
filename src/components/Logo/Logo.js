import React from 'react'
import { Link } from 'react-router-dom'
import './Logo.css'
import Logoimage from '../../images/logo.png'

export default function Logo() {
    return (
        <div className="logo">
            <Link to="/"><img src={Logoimage} alt="logo" /></Link>
        </div>
    )
}
