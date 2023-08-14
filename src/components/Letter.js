import React, { useContext, useEffect } from 'react'
import { AppContext } from '../App'


function Letter({letter, letterPosition, attemptValue}) {
  const {answer, inputPosition, setDisabledLetters,setAlmostLetters, setCorrectLetters, ansLength} = useContext(AppContext);
  const currentAttempt = inputPosition.attempt;
  const correct = answer[letterPosition] === letter;
  const almost = !correct && letter !== "" && answer.includes(letter);
  const letterStatus = currentAttempt > attemptValue && (  correct ? "bg-green border-green" : almost ? "bg-yellow border-yellow" : "bg-gray border-gray");
  const animationStatus = currentAttempt > attemptValue ? 'animate-flip': "";
  const animationID = currentAttempt > attemptValue ? `Animation${letterPosition}`:"";
  const xsLetterSizing = ansLength > 5? "xs:h-[40px] xs:w-[40px] xxs:h-[30px] xxs:w-[30px] h-[20px] w-[20px]":"xs:h-[50px] xs:w-[50px] xxs:h-[40px] xxs:w-[40px] h-[30px] w-[30px]"

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
    <div id={`${animationID}`}className={
      `border-2 rounded-lg font-bold m-1 
      flex justify-center items-center
      sm:text-xl xs:text-lg text-sm 
      sm:h-[50px] sm:w-[50px] 
    ${letterStatus} ${animationStatus} ${xsLetterSizing}`}>
      {letter}
    </div>
  )
}

export default Letter