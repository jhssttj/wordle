import React, {useContext} from 'react'
import { AppContext } from '../App'

function GameOver() {

  const {gameOver, answer, inputPosition} = useContext(AppContext);
  const currentAttempt = inputPosition.attempt;
  const message = gameOver.guessedWord? "Correct":"Incorrect"

  return (
    <div className="">
      <h3>{message}</h3>
      <h1>Correct word was {answer}</h1>
      {gameOver.guessedWord && <h1>You guessed in {currentAttempt} attempts</h1>}
      </div>
  )
}

export default GameOver