import React from "react";

export default function Filterbutton(props) {
    return (
        <button type="button"
            className="btn toggle-btn"
            aria-pressed="true"
            onClick={()=>props.setFilter(props.name)}
            aria-pressed={props.isPressed}
            key={props.name}
            name={props.name}>
            <span className="visually-hidden">Show </span>
            <span>{props.name}</span>
            <span className="visually-hidden"> tasks</span>
        </button>
    );
}
