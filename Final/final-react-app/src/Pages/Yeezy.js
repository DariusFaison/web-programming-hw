import React, { useState} from 'react';
import axios from 'axios';

export default function Yeezy() {

  const [yeezy, setYeezy] = useState(() => {
    console.log("WWYD?");
    return "A wise Kanye once said...";
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
    <div className="Content">
      <button onClick={getYeezy}>New Quotes</button>
      <p>{yeezy}</p>
    </div>
    </>
  );
}
