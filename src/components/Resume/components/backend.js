import React from 'react'

function BackEnd(props) {
    const {
        setBackEndSelected
    } = props

    const backEndSkills = [
        {
            name: "Node.js"
        },
        {
            name: "Express"
        },
        {
            name: "SQL"
        },
        {
            name: "MYSQL"
        },
        {
            name: "Sequelize"
        },
        {
            name: "NoSQL"
        },
        {
            name: "Progressive Web Applications"
        },
        {
            name: "Mongoose"
        },
        {
            name: "MongoDB"
        },
        {
            name: "Jest"
        },
        {
            name: "Service Workers"
        },
        {
            name: "IndexedDB"
        },
        {
            name: "Insomnia"
        },
        {
            name: "GraphQL"
        }
    ]

    return (
        <div>
            <ul className='backEndSection'>
                {backEndSkills.map((skill) => {
                    return (
                        <li className='skillList' key={skill.name}>{skill.name}</li>
                    )
                })}
            </ul>
            <button className='backEndCloseButton' onClick={(() => { setBackEndSelected(false) })}>Close</button>
        </div>
    )
}

export default BackEnd;