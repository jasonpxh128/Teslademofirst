import React from 'react'
import './Header.css'
import '../index.css'
import miyagilogo from '../assests/logosmall.png'

const header = () => {
    return (
        <div className = "header">
            <div className="header__logo">
                <img src={miyagilogo} alt="miyagi logo" />
                {/* <h1>Miyagi Malaysia</h1> */}
            </div>
            <div className="header__center">
                <p>Home</p>
                <p>Services</p>
                <p>About Us</p>
                <p>Contact Us</p>
            </div>
            <div className="header__right">
                <p>Gallery</p>
                <p>Videos</p>
            </div>
        </div>
    )
}

export default header
