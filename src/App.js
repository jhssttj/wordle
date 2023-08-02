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
    <div className="App flex flex-col items-center">
      <nav className="border-black border-b-2 w-full h-[50px] flex justify-center items-center">
        <h1 className="h-full text-4xl font-bold">Wordle</h1>
      </nav>
      <Board/>
      <Keyboard/>
    </div>
  );
}

export default App;
