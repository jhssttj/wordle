import {useState} from 'react';

const useWordle = (answer) => {

  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState([]);
  const [history, setHistory] = useState(["initial"]);
  const [isCorrect, setIsCorrect] = useState(false);

  const formatGuess = () => {
    let solutionArray = answer
    console.log(typeof(solutionArray))
    let formattedGuess = [...currentGuess].map((l)=> {
      return {key: l, color: 'grey'}
    })

    formattedGuess.forEach((l,i) => {
      if (solutionArray[i] === l.key) {
        formattedGuess[i].color = 'green'
        solutionArray[i] = null
      }
    })

    formattedGuess.forEach((l,i) => {
      if (solutionArray.includes(l.key) && l.color !=='green'){
        formattedGuess[i].color = 'yellow'
        solutionArray[solutionArray.indexOf(l.key)] = null;

      }
    })
    return formattedGuess;
  }

  const addNewGuess = () => {}

  const handleInput = ({key}) => {
    //Input to confirm entry
    if (key ==='Enter') {
      //Check entry word length 
      if (currentGuess.length !== 5) {
        console.log('Word isnt 5 chara length')
        return;
      }

      //Check turn limit
      if (turn >= 5) {
        console.log("Turn exceed")
        return;
      }
      
      //Check duplicate entry
      // if (history.includes(currentGuess)) {
      //   console.log("Duplicate entry")
      //   return;
      // }

      //If entry is good, trigger proceeding functions and actions

      //Update turn
      setTurn((prev) => prev + 1)

      //Update history
      // setHistory(history.push(currentGuess))

      // const formatted = formatGuess();
      // console.log(formatted)
    }

    //Input to delete letters
    if (key === 'Backspace') {
      setCurrentGuess((prev)=> prev.slice(0,-1))
    }

    //Input to add letters
    if (/^[A-Za-z]$/.test(key) && currentGuess.length < 5) {
      setCurrentGuess((prev)=> prev + key)
    }
  }

  return {turn, history, currentGuess, guesses, isCorrect, handleInput}

}

export default useWordle