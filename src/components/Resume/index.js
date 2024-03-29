import React, { useState } from 'react';
import FrontEnd from './components/frontend'
import BackEnd from './components/backend';
import resume from '../../assets/Charanvir Resume.pdf'



function Resume() {

    const [frontEndSelected, setFrontEndSelected] = useState(false)
    const [backEndSelected, setBackEndSelected] = useState(false)

    return (
        <div className='resumePage'>
            <div className='resumeSection'>
                <p>View my resume via the following link: <a rel='noreferrer noopener' target="_blank" href={resume}>Resume</a></p>
                <p>View my Python projects portfolio via the following link. <a rel='noreferrer noopener' target="_blank" href='https://charanvir-python-portfolio-home-gyb486.streamlit.app/'>Python Projects</a></p>
            </div>
            <div className='skillSection row'>
                <div className='frontEnd col-6'>
                    <button onClick={(() => { setFrontEndSelected(true) })}>View Front End Skills</button>
                    {frontEndSelected
                        &&
                        <FrontEnd
                            setFrontEndSelected={setFrontEndSelected}
                        ></FrontEnd>}
                </div>
                <div className='backEnd col-6'>
                    <button onClick={(() => { setBackEndSelected(true) })}>View Back End Skills</button>
                    {backEndSelected
                        &&
                        <BackEnd
                            setBackEndSelected={setBackEndSelected}
                        ></BackEnd>}

                </div>
            </div>
        </div >
    )
}

export default Resume;