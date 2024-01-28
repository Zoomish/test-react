import axios from "axios";
import React, { useState, useEffect } from "react";
import './App.css'
import styled from 'styled-components';



const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #BF4F74;
  color: #BF4F74;
  cursor:pointer;
  user-select: none;
  height: 40px;
  width: 45%;
`

const AppContainer = styled.div`
  margin: auto 2vw;
`
const Image = styled.img`
  max-width:50%;
  height:auto;
  background: url(${props => props.src});ckground: url(${props => props.src});
`

const InfContainer = styled.div`
  width:50%
`


const Block = styled.div`
  display: flex;  
  background: transparent;
  border-radius: 15px;
  border: 2px solid #BF4F74;
  color: #BF4F74;
  width: 100%;
  align-items:center;
  text-align:center;
  cursor:pointer;
  overflow: hidden;
`
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(40%, 1fr));
  grid-gap: 32px;
  grid-auto-flow: dense;
  align-items: center;
  max-width:100vw;
`
const ButtonContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content:center;
  align-items: center;
  max-width:100vw;
  margin-top: 20px;
`


export default function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [num, setNum] = useState(1);
  const getData = async (num) => {
    try {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character?page=${num}`
      );
      console.log(response.data);
      setData(response.data.results);
    } catch (err) {
      setData(null);
      getData(1)
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getData(num);
  }, [num]);
  return (
    <AppContainer>
      <h1>API Posts</h1>
      {loading && <div>A moment please...</div>}
      <Container>
        {data &&
          data.map((data) => (
            <Block key={data.id}>
              <Image style={{ float: "left", }} src={data.image} alt="Profile image" />
              <InfContainer>
                <h3>{data.name}</h3>
                <p>{data.gender} - {data.status}</p>
              </InfContainer>
            </Block>
          ))}
      </Container>
      <ButtonContainer>
        <Button onClick={() => {
          num <= 1
            ? setNum(1)
            : setNum(num => num - 1)
        }}>
          Back
        </Button>
        <Button onClick={() => {
          setNum(num => num + 1)
        }}>
          Load More
        </Button>
      </ButtonContainer>
    </AppContainer>
  );
}