import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Facts() {
  const [facts, setFacts] = useState(() => {
    console.log("placeholder for facts");
    return 0;
  });

  function getFacts() {
    axios.get('https://uselessfacts.jsph.pl/random.json?language=en').then(res => {
      setFacts(res.data['text']);
      console.log(res);
    }).catch(err => {
      console.log(err)
    })
  }

  return (
    <>
      <button onClick={getFacts}>New Fact</button>
      <blockquote>{facts}</blockquote>
    </>
  );
}