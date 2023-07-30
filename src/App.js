import {useEffect, useState} from "react";


function App() {

  useEffect(() => {
    fetch("https://random-word-api.vercel.app/api?words=1&length=5")
      .then((response) => {return response.json()})
      .then((word) => {console.log(word)})
  })

  return (
    <div className="App">
      <h1>Working?</h1>
    </div>
  );
}

export default App;
