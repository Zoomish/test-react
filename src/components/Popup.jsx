import React, { useState, useEffect } from "react";
import './Popup.css'

export const Modal = ({
    isVisible = false,
    data,
    onClose,
}) => {
    console.log(data);
    const keydownHandler = ({ key }) => {
        switch (key) {
            case "Escape":
                onClose();
                break;
            default:
        }
    };

    useEffect(() => {
        document.addEventListener("keydown", keydownHandler);
        return () => document.removeEventListener("keydown", keydownHandler);
    });

    return !isVisible ? null : (
        <div className="modal" onClick={onClose}>
            <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h3 className="modal-title">{data.name}</h3>
                    <span className="modal-close" onClick={onClose}>
                        &times;
                    </span>
                </div>
                <div className="modal-body">
                    <div className="modal-content">{data.gender} - {data.status}</div>
                </div>
                <div className="modal-footer"><button onClick={onClose}>Cancel</button></div>
            </div>
        </div>
    );
};
