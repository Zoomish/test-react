import React, { useEffect } from "react";
import {
    ModalMain,
    ModalDialog,
    ModalHeader,
    ModalFooter,
    ModalClose,
    ModalBody,
    ModalContent,
    ModalTitle,
    Image
} from './PopupStyles';


export const Modal = ({
    isVisible = false,
    data,
    onClose,
}) => {
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
        <ModalMain onClick={onClose}>
            <ModalDialog onClick={(e) => e.stopPropagation()}>
                <ModalClose onClick={onClose}>
                    &times;
                </ModalClose>
                <Image style={{ float: "left", }} src={data.image} alt="Profile image" />
                <ModalHeader>
                    <ModalTitle>{data.name}</ModalTitle>
                </ModalHeader>
                <ModalBody>
                    <ModalContent>Gender: {data.gender}</ModalContent>
                    <ModalContent>Status: {data.status}</ModalContent>
                    <ModalContent>Species: {data.species}</ModalContent>
                    {data.type
                        ? <ModalContent>Type: {data.type}</ModalContent>
                        : null
                    }
                    {data.origin.name === data.location.name
                        ? <ModalContent>Origin&Location: {data.origin.name}</ModalContent>
                        : <div>
                            <ModalContent>Origin: {data.origin.name}</ModalContent>
                            <ModalContent>Location: {data.location.name}</ModalContent>
                        </div>
                    }
                </ModalBody>
                <ModalFooter></ModalFooter>
            </ModalDialog>
        </ModalMain>
    );
};
