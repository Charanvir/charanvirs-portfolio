import React, { useState } from 'react';
import validateEmail from "../../utils/helpers"

function Contact() {
    const [errorMessage, setErrorMessage] = useState("")
    function submitFunction(e) {
        e.preventDefault();
    }
    function checkInput(e) {
        if (e.target.name === "email") {
            const emailValidation = validateEmail(e.target.value)
            if (!emailValidation) {
                setErrorMessage("Please enter a valid email!")
            } else {
                setErrorMessage("")
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} field is required`)
            } else {
                setErrorMessage("")
            }
        }
    }
    return (
        <div className="container contactDiv">
            <h2 className='text-center'>Contact Me</h2>
            <form onSubmit={submitFunction} className='contactForm'>
                <div className="row">
                    <div >
                        <label htmlFor="name">Name: </label>
                    </div>
                    <div >
                        <input onBlur={checkInput} className='input' type="text" id="contactName" name="name" placeholder="Your name.."></input >
                    </div>
                </div>
                <div className="row">
                    <div >
                        <label htmlFor="email">Email: </label>
                    </div>
                    <div >
                        <input onBlur={checkInput} className='input' type="text" id="contactEmail" name="email" placeholder="Your last name.."></input >
                    </div>
                </div>
                <div className="row">
                    <div >
                        <label htmlFor="message">Message: </label>
                    </div>
                    <div >
                        <textarea onBlur={checkInput} id="contactMessage" name="message" placeholder="Your Message.." rows="5"></textarea>
                    </div>
                </div>
                {errorMessage && (
                    <div>{errorMessage}</div>
                )}
                <div>
                    <input className='submitButton' type="submit" value="Submit"></input >
                </div>
            </form>
            <div className='mt-5'>
                <p className='text-center'>Email Me at: charanvir123@gmail.com</p>
                <p className='text-center'>Call Me at: 647-239-2655</p>
            </div>
        </div>
    )
}

export default Contact;