import React from 'react'

export default function ClassificationResult(props) {
    return (
        <div>
            {props.resourceButton}
            <span className="imageContainer"> {props.displays}</span>
        </div>
    )
}
