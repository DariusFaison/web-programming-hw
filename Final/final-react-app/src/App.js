import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [facts, setFacts] = useState(() => {
    console.log("placeholder for facts");
    return 0;
  });

  const [pics, setPics] = useState(() => {
    console.log("placeholder for pics");
    return 0;
  })


  function getFacts() {
    axios.get('https://uselessfacts.jsph.pl/random.txt?language=en').then(res => {
      setFacts(res.data);
    }).catch(err => {
      console.log(err)
    })
  }
  function getPics() {
    console.log("I'm also returning something!");
  }

  return (
    <>
      <button onClick={getFacts}>New Fact</button>
      <span>{facts}</span>
      <button onClick={getPics}>New Pic</button>
    </>
  );
}

export default App;
