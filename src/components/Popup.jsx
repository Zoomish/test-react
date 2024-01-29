import React, { useState, useEffect } from "react";
import './Popup.css'
import styled from 'styled-components';


const Image = styled.img`
    max-width:76%;
    height:auto;
    border-radius:15px;
    border-top-right-radius:0;
    border-top-left-radius:0;
    background: url(${props => props.src});
`



export const Modal = ({
    isVisible = false,
    data,
    onClose,
}) => {
    console.log(data)
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
                <span className="modal-close" onClick={onClose}>
                    &times;
                </span>
                <Image style={{ float: "left", }} src={data.image} alt="Profile image" />
                <div className="modal-header">
                    <h2 className="modal-title">{data.name}</h2>
                </div>
                <div className="modal-body">
                    <div className="modal-content">Gender: {data.gender}</div>
                    <div className="modal-content">Status: {data.status}</div>
                    <div className="modal-content">Species: {data.species}</div>
                    {data.type
                        ? <div className="modal-content">Type: {data.type}</div>
                        : null
                    }
                    {data.origin.name === data.location.name
                        ? <div className="modal-content">Origin&Location: {data.origin.name}</div>
                        : <div>
                            <div className="modal-content">Origin: {data.origin.name}</div>
                            <div className="modal-content">Location: {data.location.name}</div>
                        </div>
                    }
                </div>
                <div className="modal-footer"></div>
            </div>
        </div>
    );
};
