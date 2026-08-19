import React from "react";
export default function Filterbutton(props) {
    return (
        <button type="button" className="btn toggle-btn" aria-pressed="true">
            <span className="visually-hidden">Show </span>
            <span>{props.filtername}</span>
            <span className="visually-hidden"> tasks</span>
        </button>
    );
}
