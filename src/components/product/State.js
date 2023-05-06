import React from 'react'
import './State.css'
export default function State(props) {
    return (
        <div className="one-third">
            <div className="stat">{props.value}      :      {props.state}</div>
        </div>
    )
}
