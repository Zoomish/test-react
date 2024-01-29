import axios from "axios";
import React, { useState, useEffect } from "react";
import './App.css'
import { Modal } from "./components/Popup/Popup.jsx";
import {
  AppContainer,
  Button,
  InfContainer,
  Block,
  Container,
  ButtonContainer,
  Image,
  Sort
} from './AppStyles';

export default function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [num, setNum] = useState(1);
  const [isModal, setModal] = useState(false);
  const [id, setId] = useState(1);
  const [dataId, setDataId] = useState([]);
  const [filter, setFilter] = useState({
    name: '',
    status: '',
    species: '',
    type: '',
    gender: ''
  });

  const handleFilterChange = (event, filterKey) => {
    setFilter({ ...filter, [filterKey]: event.target.value });
  };

  const getSinglePost = async (id) => {
    try {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      setDataId(response.data);
    } catch (err) {
      setDataId(null);
    } finally {
      setLoading(false);
    }
  };

  const getData = async (num, filter = {}) => {
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
    getData(num, filter);
  }, [num, filter]);

  useEffect(() => {
    getSinglePost(id);
  }, [id]);

  return (
    <AppContainer>
      <h1>API Posts</h1>
      <Sort>
        <input type="text" value={filter.name} onChange={(event) => handleFilterChange(event, 'name')} placeholder="Filter by name" />
        <select value={filter.status} onChange={(event) => handleFilterChange(event, 'status')}>
          <option value="">All</option>
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
        <input type="text" value={filter.species} onChange={(event) => handleFilterChange(event, 'species')} placeholder="Filter by species" />
        <input type="text" value={filter.type} onChange={(event) => handleFilterChange(event, 'type')} placeholder="Filter by type" />
        <select value={filter.gender} onChange={(event) => handleFilterChange(event, 'gender')}>
          <option value="">All</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
      </Sort>
      {loading && <div>A moment please...</div>}
      <Container>
        {data &&
          data.map((data) => (
            <Block key={data.id} onClick={() => {
              getSinglePost(data.id);
              setModal(true)
            }}>
              <Image style={{ float: "left" }} src={data.image} alt="Profile image" />
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
        data={dataId}
        onClose={() => setModal(false)}
      />
    </AppContainer>
  );
}