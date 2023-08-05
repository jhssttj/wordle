import React, { useContext } from 'react'
import { AppContext } from '../App'


function Letter({letter, letterPosition, attemptValue}) {
  const {correctWord, inputPosition} = useContext(AppContext);
  const currentAttempt = inputPosition.attempt;

  const correct = correctWord[letterPosition] === letter;
  const almost = !correct && letter !== "" && correctWord.includes(letter);
  const letterState =currentAttempt > attemptValue && (  correct ? "bg-lime-300" : almost ? "bg-amber-300" : "bg-red-500");



  return (
    <div className={`border-2 border-black grid m-1 min-h-[100px] min-w-[100px] items-center flex justify-center ${letterState}`}>
      {letter}
    </div>
  )
}

export default Letter