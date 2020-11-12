import React, { useState} from 'react';
import axios from 'axios';

export default function Facts() {
  const [facts, setFacts] = useState(() => {
    console.log("Wanna hear something interesting?");
    return "Random Facts For Your Reading Pleasure";
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
    <div className="Content">
      <button onClick={getFacts}>New Fact</button>
      <p>{facts}</p>
    </div>
    </>
  );
}