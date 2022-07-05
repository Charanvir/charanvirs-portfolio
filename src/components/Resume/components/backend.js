import React from 'react'

function BackEnd(props) {
    const {
        setBackEndSelected
    } = props

    return (
        <div>
            <p>Back End</p>
            <button onClick={(() => { setBackEndSelected(false) })}>Close</button>
        </div>
    )
}

export default BackEnd;