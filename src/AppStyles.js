import styled from "styled-components";

export const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid #bf4f74;
    color: #bf4f74;
    cursor: pointer;
    user-select: none;
    height: 40px;
    width: 45%;
    min-width: 470px;
    margin: auto 16px;
    `;

export const AppContainer = styled.div`
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    `;
export const Image = styled.img`
    float: "left";
    max-width: 40%;
    height: auto;
    background: url(${(props) => props.src});
    `;

export const InfContainer = styled.div`
    width: 50%;
    `;

export const Block = styled.div`
    display: flex;
    background: transparent;
    border-radius: 15px;
    border: 2px solid #bf4f74;
    color: #bf4f74;
    max-height: 200px;
    max-width: 470px;
    align-items: center;
    text-align: center;
    cursor: pointer;
    overflow: hidden;
    `;
export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(470px, 1fr));
    grid-gap: 32px;
    grid-auto-flow: dense;
    align-items: center;
    max-width: 100vw;
    `;
export const ButtonContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    width: 100vw;
    margin-top: 5vh;
    margin-bottom: 5vh;
    `;

export const Sort = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    font-size: 18px;
    padding: 6px;
    margin-top: 5vh;
    margin-bottom:3vh;
    `
