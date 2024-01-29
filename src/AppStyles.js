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
    @media (max-width: 480px) {
        width: 256px;
        max-width:100%;
    }
    `;

export const InfContainer = styled.div`
    width: 50%;
    @media (max-width: 480px) {
        h3,p{
            margin: 20px auto;
        }
    }
    `;

export const Block = styled.div`
    display: flex;
    background: transparent;
    border-radius: 15px;
    border: 2px solid #bf4f74;
    color: #bf4f74;
    width: 470px;
    align-items: center;
    text-align: center;
    cursor: pointer;
    overflow: hidden;
    @media (max-width: 480px) {
        flex-direction: column;
        width:256px;
    }
    `;
export const Container = styled.div`
    flex-direction: row;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 32px;
    align-items: center;
    max-width: 100vw;
    @media (max-width: 480px) {
        flex-direction: column;
    }
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
    flex-flow: column wrap;
    justify-content: center;
    font-size: 18px;
    padding: 6px;
    gap: 10px;
    align-items: center;

    input,
    select {
    width: 100%;
    height: 30px;
    margin-bottom: 10px;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    }

    select {
    padding: 6px;
    }
    `

export const SortContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-flow: column wrap;
    margin-top: 20px;
    margin-top: 5vh;
    margin-bottom:3vh;
    `;

export const ToggleButton = styled.button`
    width: 186px;
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-bottom:20px;
    `;