import React, { useContext } from 'react'
import { AppContext } from '../App'


function Letter({letter, letterPosition, attemptValue}) {
  const {correctWord, inputPosition} = useContext(AppContext);
  const currentAttempt = inputPosition.attempt;

  const correct = correctWord[letterPosition] === letter;
  const almost = !correct && letter !== "" && correctWord.includes(letter);
  const letterStatus =currentAttempt > attemptValue && (  correct ? "bg-green" : almost ? "bg-yellow" : "bg-gray");

  return (
    <div className={`border-2 border-black grid m-1 min-h-[100px] min-w-[100px] items-center flex justify-center ${letterStatus}`}>
      {letter}
    </div>
  )
}

export default Letter