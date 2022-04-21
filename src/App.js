import React, { useState, useEffect } from "react"; //import state and effect
import axios from 'axios'; //pulling from api, must import axios
import "./App.css";

function App() {

  const [data, setData] = useState();

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY ')
    .then(res => {
      console.log(res);
    }).catch(err => console.error(err))
  }, [])

  return (
    <div className="App">
      <p>

      </p>
    </div>
  );
}

export default App;

// https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY 
