import axios from "axios";
import { useState, useEffect } from "react";

export default function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [num, setNum]=useState(1);

  useEffect(() => {
    const getData = async (num) => {
      try {
        const response = await axios.get(
          `https://rickandmortyapi.com/api/character?page=${num}`
        );
        console.log(response.data);
        setData(response.data.results);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);
  return (
    <div className="App">
      <h1>API Posts</h1>
      {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      <ul>
        {data &&
          data.map(({ id, name }) => (
            <li key={id}>
              <h3>{id} {name}</h3>
            </li>
          ))}
      </ul>
    </div>
  );
}