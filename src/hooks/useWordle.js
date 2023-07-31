import {useState} from 'react';

const useWordle = (solution) => {

  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState('');
  const [guesses, setGuesses] = useState([]);
  const [history, setHistory] = useState([]);
  const [isCorrect, setIsCorrect] = useState(false);

  const formatGuess = () => {
    console.log('format guess')
  }

  const addNewGuess = () => {}

  const handleKeyup = ({key}) => {
    if (key ==='Enter') {
      if (turn > 5) {
        console.log("Turn exceed")
        return;
      }
      if (history.includes(currentGuess)) {
        console.log("Duplicate entry")
        return;
      }

      if (currentGuess.length !== 5) {
        console.log('Word isnt 5 chara length')
        return;
      }

      formatGuess();
    }

    if (key === 'Backspace') {
      setCurrentGuess((prev)=> {
        return prev.slice(0,-1);
      })
    }

    if (/^[A-Za-z]$/.test(key)) {
      if (currentGuess.length < 5) {
        setCurrentGuess((prev)=>{
          return prev + key;
        })
      }  
    }
  }

  return {turn, currentGuess, guesses, isCorrect, handleKeyup}

}

export default useWordle