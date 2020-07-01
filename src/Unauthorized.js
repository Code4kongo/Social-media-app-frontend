import React from 'react';
import { Link } from 'react-router-dom';
import './Unauthorized.css';

const Unauthorized = () => {
  return (
    <div className='container'>
        <h1>Unauthorized </h1> 
      <div className="message">
        <h1>403 - You Shall Not Pass</h1>
      </div>
      <p><Link to='/'>Back to Home</Link></p>
    </div>
  )
}

export default Unauthorized;