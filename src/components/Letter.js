import React, { useContext, useEffect } from 'react'
import { AppContext } from '../App'


function Letter({letter, letterPosition, attemptValue}) {
  const {answer, inputPosition, setDisabledLetters,setAlmostLetters, setCorrectLetters} = useContext(AppContext);
  const currentAttempt = inputPosition.attempt;
  const correct = answer[letterPosition] === letter;
  const almost = !correct && letter !== "" && answer.includes(letter);
  const letterStatus = currentAttempt > attemptValue && (  correct ? "bg-green" : almost ? "bg-yellow" : "bg-gray");
  const animationStatus = currentAttempt > attemptValue ? 'animate-flip': "";
  const animationID = currentAttempt > attemptValue ? `Animation${letterPosition}`:"";

  useEffect(() => {
    if (letter !== "" && !correct && !almost) {
      setDisabledLetters((prev) => [...prev, letter]);
    } 
    if (correct && !almost) {
      setCorrectLetters((prev) => [...prev, letter]);
    }
    if (almost && !correct) {
      setAlmostLetters((prev) => [...prev, letter]);
    }
  },[currentAttempt])

  return (
    <div id={`${animationID}`}className={`border-2 border-black grid m-1 min-h-[100px] min-w-[100px] items-center flex justify-center ${letterStatus} ${animationStatus}`}>
      {letter}
    </div>
  )
}

export default Letter