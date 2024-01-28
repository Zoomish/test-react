import axios from "axios";
import React, { useState, useEffect } from "react";
import './App.css'
import styled from 'styled-components';
import { Modal } from "./components/Popup";



const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #BF4F74;
  color: #BF4F74;
  cursor:pointer;
  user-select: none;
  height: 40px;
  width: 45%;
  min-width: 470px;
  margin: auto 16px;
`

const AppContainer = styled.div`
  overflow-x:hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Image = styled.img`
  max-width:40%;
  height:auto;
  background: url(${props => props.src});
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
  max-height: 200px;
  max-width: 470px;
  align-items:center;
  text-align:center;
  cursor:pointer;
  overflow: hidden;
`
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(470px, 1fr));
  grid-gap: 32px;
  margin-top:5vh;
  grid-auto-flow: dense;
  align-items: center;
  max-width:100vw;
`
const ButtonContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content:center;
  align-items: center;
  width:100vw;
  margin-top: 5vh;
  margin-bottom:5vh;
`


export default function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [num, setNum] = useState(1);
  const [isModal, setModal] = useState(false);
  const [id, setId] = useState(data.id);
  const [filter, setFilter] = useState({
    name: '',
    status: '',
    species: '',
    type: '',
    gender: ''
  });


  const handleNameChange = (event) => {
    setFilter({ ...filter, name: event.target.value });
  };

  const handleStatusChange = (event) => {
    setFilter({ ...filter, status: event.target.value });
  };

  const handleSpeciesChange = (event) => {
    setFilter({ ...filter, species: event.target.value });
  };

  const handleTypeChange = (event) => {
    setFilter({ ...filter, type: event.target.value });
  };

  const handleGenderChange = (event) => {
    setFilter({ ...filter, gender: event.target.value });
  };



  console.log(filter);





  const getData = async (num, filter={}) => {
  try {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character?page=${num}`,
      { params: filter }
    );
    setData(response.data.results);
  } catch (err) {
    setData(null);
    getData(1);
  } finally {
    setLoading(false);
  }
};



  useEffect(() => {
    getData(num,filter);
  }, [num,filter]);





  return (
    <AppContainer>
      <h1>API Posts</h1>
      <div>
      <input type="text" value={filter.name} onChange={handleNameChange} placeholder="Filter by name" />
      <select value={filter.status} onChange={handleStatusChange}>
        <option value="">All</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
      <input type="text" value={filter.species} onChange={handleSpeciesChange} placeholder="Filter by species" />
      <input type="text" value={filter.type} onChange={handleTypeChange} placeholder="Filter by type" />
      <select value={filter.gender} onChange={handleGenderChange}>
        <option value="">All</option>
        <option value="female">Female</option>
        <option value="male">Male</option>
        <option value="genderless">Genderless</option>
        <option value="unknown">Unknown</option>
      </select>
    </div>
      {loading && <div>A moment please...</div>}
      <Container>
        {data &&
          data.map((data) => (
            <Block key={data.id} onClick={() => {
              setId(data.id);
              setModal(true)
            }}>
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
      <Modal
        isVisible={isModal}
        data={data[(id - 1) % 20]}
        onClose={() => setModal(false)}
      />
    </AppContainer>
  );
}