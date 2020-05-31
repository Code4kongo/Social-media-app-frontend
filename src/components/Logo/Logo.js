import React from 'react'
import './Logo.css'
import Logoimage from '../../images/logo.png'

export default function Logo() {
    return (
        <div className="logo">
            <a href="/"><img src={Logoimage} alt="logo" /></a>
        </div>
    )
}
