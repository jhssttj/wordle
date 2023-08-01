import {useState, useEffect} from "react";
import Keyboard from './components/Keyboard';
import Board from './components/Board';



function App() {
  // useEffect(() => {
  //   fetch("https://random-word-api.vercel.app/api?words=1&length=5")
  //     .then((response) => {return response.json()})
  //     .then((answer) => {setAnswer(answer[0])})
  // }, [])


  return (
    <div className="App">
      <nav>
        <h1>Wordle</h1>
      </nav>
      <Board/>
      <Keyboard/>
    </div>
  );
}

export default App;
