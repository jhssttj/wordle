import {useEffect, useState} from "react";


function App() {

  useEffect(()=> {
    fetch("https://random-word-api.herokuapp.com/word?length=5")
      .then(res=>res.json())
      .then(json => {
        console.log(json)
      })
  }, )

  return (
    <div className="App">
      <h1>Working?</h1>
    </div>
  );
}

export default App;
