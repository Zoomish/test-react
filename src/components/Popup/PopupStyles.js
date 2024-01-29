import styled, { keyframes } from 'styled-components';



export const Image = styled.img`
    max-width:76%;
    height:auto;
    border-radius:15px;
    border-top-right-radius:0;
    border-top-left-radius:0;
    background: url(${props => props.src});
`

export const appearAnimation = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

export const slideInAnimation = keyframes`
    from {
        transform: translateY(-150px);
    }
    to {
        transform: translateY(0);
    }
`;

export const ModalMain = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.25);
    animation-name: ${appearAnimation};
    animation-duration: 300ms;
`;

export const ModalDialog = styled.div`
    border-radius: 15px;
    width: 100%;
    max-width: 350px;
    background: white;
    position: relative;
    margin: 0 20px;
    max-height: calc(100vh - 40px);
    text-align: left;
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow: hidden;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    animation-name: ${slideInAnimation};
    animation-duration: 0.5s;
`;

export const ModalHeader = styled.div`
    display: flex;
    align-items: center;
    padding: 1rem;
    justify-content: center;
`;

export const ModalFooter = styled.div`
    display: flex;
    align-items: center;
    padding: 1rem;
    justify-content: flex-end;
`;

export const ModalClose = styled.div`
    position: absolute;
    background-color: red;
    right: 0;
    top: 0px;
    border-radius: 15px;
    border-bottom-right-radius: 0;
    border-top-left-radius: 0;
    cursor: pointer;
    padding: 1rem;
`;

export const ModalBody = styled.div`
    overflow: auto;
`;

export const ModalContent = styled.div`
    padding: 1rem;
`;

export const ModalTitle=styled.h2`
    margin: 0;
    font-size: 36px;
    line-height: 48px;
    color: #3c3e43;
`