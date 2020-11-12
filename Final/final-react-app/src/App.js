import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [facts, setFacts] = useState(() => {
    console.log("placeholder for facts");
    return 0;
  });

  const [yeezy, setYeezy] = useState(() => {
    console.log("placeholder for Kanye West quotes");
    return 0;
  })


  function getFacts() {
    axios.get('https://uselessfacts.jsph.pl/random.json?language=en').then(res => {
      setFacts(res.data['text']);
      console.log(res);
    }).catch(err => {
      console.log(err)
    })
  }
  function getYeezy() {
    axios.get('https://api.kanye.rest').then(res => {
      setYeezy(res.data['quote']);
      console.log(res);
    }).catch(err => {
      console.log(err)
    })
  }

  return (
    <>
      <button onClick={getFacts}>New Fact</button>
      <blockquote>{facts}</blockquote>
      <button onClick={getYeezy}>New Quotes</button>
      <blockquote>{yeezy}</blockquote>
    </>
  );
}

export default App;
