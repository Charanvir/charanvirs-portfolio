import React from 'react';

function Footer() {
    return (
        <div className="container" >
            <div className='mb-3 social-media-list'>
                <li className='mx-3'><a href="https://github.com/Charanvir" className="contact-icon">
                    <i className="bi bi-github" ></i></a>
                    <p className='hidden'>GitHub</p>
                </li>
                <li className='mx-3'><a href="https://twitter.com/chsingh01" className="contact-icon">
                    <i className="bi bi-twitter" ></i></a>
                    <p className='hidden'>Twitter</p>
                </li>
                <li className='mx-3'><a href="https://www.linkedin.com/in/charanvir-singh-4b7033222/"
                    className="contact-icon">
                    <i className="bi bi-linkedin" ></i></a>
                    <p className='hidden'>LinkedIn</p>
                </li>
                <li className='mx-3'><a href="https://www.instagram.com/charanvir1/" className="contact-icon">
                    <i className="bi bi-instagram" ></i></a>
                    <p className='hidden'>Instagram</p>
                </li>
            </div>
        </div >
    )
}

export default Footer;