import {useState, useEffect, createContext} from "react";
import Keyboard from './components/Keyboard';
import Board from './components/Board';
import { boardDefault } from "./Data";

export const AppContext = createContext();

function App() {

  const [board, setBoard] = useState(boardDefault);
  const [inputPosition, setInputPosition] = useState({attempt:0, letterPosition:0})
  const correctWord = "RIGHT";

  const onSelectLetter = (keyValue) => {
    if (inputPosition.letterPosition > 4) return;
    const newBoard = [...board];
    newBoard[inputPosition.attempt][inputPosition.letterPosition] = keyValue
    setBoard(newBoard);
    setInputPosition({...inputPosition,letterPosition:inputPosition.letterPosition+1})
  }

  const onDelete = () => {
    if (inputPosition.letterPosition === 0) return;
    const newBoard = [...board];
    newBoard[inputPosition.attempt][inputPosition.letterPosition-1] = "";
    setBoard(newBoard);
    setInputPosition({...inputPosition,letterPosition:inputPosition.letterPosition-1})
  }

  const onEnter = () => {
    if (inputPosition.letterPosition !== 5) return;
    let currentWord = "";
    for (let i = 0; i < 5; i ++) {
      currentWord += board[inputPosition.attempt][i]
    }
    if (currentWord === correctWord) {
      console.log("CORRECT")
      return;
    }
    setInputPosition({attempt: inputPosition.attempt + 1, letterPosition: 0})
  }
  // useEffect(() => {
  //   fetch("https://random-word-api.vercel.app/api?words=1&length=5&type=uppercase")
  //     .then((response) => {return response.json()})
  //     .then((answer) => {setAnswer(answer[0])})
  // }, [])

  return (
    <div className="App flex flex-col items-center">
      <nav className="border-black border-b-2 w-full h-[50px] flex justify-center items-center">
        <h1 className="h-full text-4xl font-bold">Wordle</h1>
      </nav>
      <AppContext.Provider value={{board, setBoard, inputPosition, setInputPosition, onSelectLetter, onDelete, onEnter, correctWord}}>
        <Board/>
        <Keyboard/>
      </AppContext.Provider>
    </div>
  );
}

export default App;
