import React from 'react'

function FrontEnd(props) {
    const {
        setFrontEndSelected
    } = props

    return (
        <div>
            <p>Front End</p>
            <button onClick={(() => { setFrontEndSelected(false) })}>Close</button>
        </div>
    )
}

export default FrontEnd;