import axios from "axios";
import { useState, useEffect } from "react";
import styled from 'styled-components'

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

const Block = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #BF4F74;
  color: #BF4F74;
  width: 45%;
  cursor:pointer;
`
const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
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
    <div className="App">
      <h1>API Posts</h1>
      {loading && <div>A moment please...</div>}
      <Container>
        {data &&
          data.map(({ id, name }) => (
            <Block key={id}>
              <h3>{id} {name}</h3>
            </Block>
          ))}
      </Container>
      <ButtonContainer>
        <Button onClick={() => {
          setNum(num => num + 1)
        }}>
          Load More
        </Button>
        <Button onClick={() => {
          num <= 1
            ? setNum(1)
            : setNum(num => num - 1)
        }}>
          Back
        </Button>
      </ButtonContainer>

    </div>
  );
}