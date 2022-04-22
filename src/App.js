import React, { useState, useEffect } from "react"; //import state and effect
import axios from 'axios'; //pulling from api, must import axios
import "./App.css";
import NasaPhoto from './Components/NasaPhoto.js'
import styled from 'styled-components'

const StyledDetails = styled.div`
* {
  display: flex;
  flex-direction: row;
}
img {
  max-width: 30%;
}
`


function App() {
  const [data, setData] = useState();

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY ')
    .then(res => {
      console.log(res)
      setData(res.data);
    }).catch(err => console.error(err))
  }, [])

  return (
    <StyledDetails className="App">
  {data && <NasaPhoto photo={data} />}
    </StyledDetails>
  );
}

export default App;

// https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY 
