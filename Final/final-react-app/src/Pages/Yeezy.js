import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Yeezy() {

  const [yeezy, setYeezy] = useState(() => {
    console.log("placeholder for Kanye West quotes");
    return 0;
  })


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
      <button onClick={getYeezy}>New Quotes</button>
      <blockquote>{yeezy}</blockquote>
    </>
  );
}
