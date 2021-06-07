import React from 'react'
import './stylePoster.css'

const poster = (props) => {
    return (
        <div id="poster">
            <div className="nailsIzq">
                <span></span>
                <span></span>
            </div>

            <p>{props.name}</p>

            <div className="nailsDrc">
                <span></span>
                <span></span>
            </div>
        </div>
    )
}

export default poster
