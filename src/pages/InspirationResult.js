import React from 'react'

export default function InspirationResult(props) {
    return (
        <div>
            {props.resourceButton}
            <span className="imageContainer"> {props.displays} </span>

        </div>
    )
}
