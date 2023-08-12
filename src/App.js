import {useState, useEffect, createContext} from "react";
import Keyboard from './components/Keyboard';
import Board from './components/Board';
import { boardDefault } from "./Data";
import GameOver from "./components/GameOver";
import Menu from './components/Menu';

export const AppContext = createContext();

function App() {
  const [inputPosition, setInputPosition] = useState({attempt:0, letterPosition:0})
  const [disabledLetters, setDisabledLetters] = useState([])
  const [almostLetters, setAlmostLetters] = useState([])
  const [correctLetters, setCorrectLetters] = useState([])
  const [gameOver, setGameOver] = useState({gameOver: false, guessedWord: false});
  const [answer, setAnswer] = useState("");
  const [attempts, setAttempts] = useState(6);
  const [ansLength, setAnsLength] = useState(5);
  const [gameStart, setGameStart] = useState(false);
  const [board, setBoard] = useState(null);
  
  // const onSelectLetter = (keyValue) => {
  //   if (inputPosition.letterPosition > 4) return;
  //   const newBoard = [...board];
  //   newBoard[inputPosition.attempt][inputPosition.letterPosition] = keyValue
  //   setBoard(newBoard);
  //   setInputPosition({...inputPosition,letterPosition:inputPosition.letterPosition+1})
  // }
  
  // const onDelete = () => {
  //   if (inputPosition.letterPosition === 0) return;
  //   const newBoard = [...board];
  //   newBoard[inputPosition.attempt][inputPosition.letterPosition-1] = "";
  //   setBoard(newBoard);
  //   setInputPosition({...inputPosition,letterPosition:inputPosition.letterPosition-1})
  // }
  
  // const onEnter = () => {
  //   if (inputPosition.letterPosition !== 5) return;
  //   let currentWord = "";
  //   for (let i = 0; i < 5; i ++) {
  //     currentWord += board[inputPosition.attempt][i]
  //   }

  //   setInputPosition({attempt: inputPosition.attempt + 1, letterPosition: 0})
    
  //   if (currentWord === answer) {
  //     setGameOver({gameOver:true, guessedWord: true})
  //     return;
  //   }
  //   if (inputPosition.attempt === board.length - 1) {
  //     setGameOver({gameOver:true, guessedWord: false})
  //     return;
  //   }
  // }
  
  useEffect(() => {
    setBoard(boardDefault(attempts, ansLength))
    return;
  },[attempts, ansLength, gameStart])

  console.log(board)

  useEffect(() => {
    fetch("https://random-word-api.vercel.app/api?words=1&length=5&type=uppercase")
    .then((response) => {return response.json()})
    .then((answer) => {setAnswer(answer[0])})
  }, [])

  
  return (
    <div className="App flex flex-col items-center">
      <nav className="border-black border-b-2 w-full h-[50px] flex justify-center items-center">
        <h1 className="h-full text-4xl font-bold">Wordle</h1>
      </nav>
      <AppContext.Provider value={{
        board, 
        setBoard, 
        inputPosition, 
        setInputPosition, 
        // onSelectLetter, 
        // onDelete, 
        // onEnter, 
        answer, 
        disabledLetters, 
        setDisabledLetters, 
        almostLetters, 
        setAlmostLetters, 
        correctLetters, 
        setCorrectLetters, 
        setGameOver, 
        gameOver,
        attempts,
        setAttempts,
        ansLength,
        setAnsLength,
        gameStart,
        setGameStart
      }}>
        {gameStart? <Board/>:<Menu/>}
        {gameOver.gameOver? <GameOver/>:<Keyboard/>}
      </AppContext.Provider>
    </div>
  );
}

export default App;
