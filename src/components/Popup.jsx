import React, { useState, useEffect } from "react";
import './Popup.css'
import styled from 'styled-components';


const Image = styled.img`
    max-width:60%;
    height:auto;
    background: url(${props => props.src});
`



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
                <Image style={{ float: "left", }} src={data.image} alt="Profile image" />
                <div className="modal-header">
                    <h3 className="modal-title">{data.name}</h3>
                    <span className="modal-close" onClick={onClose}>
                        &times;
                    </span>
                </div>
                <div className="modal-body">
                    <div className="modal-content">Gender: {data.gender}</div>
                    <div className="modal-content">Status: {data.status}</div>
                    <div className="modal-content">Species: {data.species}</div>
                </div>
                <div className="modal-footer"></div>
            </div>
        </div>
    );
};
