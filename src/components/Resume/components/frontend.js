import React from 'react'

function FrontEnd(props) {
    const {
        setFrontEndSelected
    } = props

    const frontEndSkills = [
        {
            name: "HTML"
        },
        {
            name: "CSS"
        },
        {
            name: "JavaScript"
        },
        {
            name: "React"
        },
        {
            name: "APIs"
        },
        {
            name: "Bootstrap"
        },
        {
            name: "jQuery"
        },
        {
            name: 'Typescript'
        },
        {
            name: 'Next.JS'
        },
        {
            name: "Streamlit"
        }
    ]

    return (
        <div>
            <ul className='frontEndSection'>
                {frontEndSkills.map((skill) => {
                    return (
                        <li className='skillList' key={skill.name}>{skill.name}</li>
                    )
                })}
            </ul>
            <button className='frontEndCloseButton' onClick={(() => { setFrontEndSelected(false) })}>Close</button>
        </div>
    )
}

export default FrontEnd;