import React, {useContext} from 'react'
import { AppContext } from '../App'

function GameOver() {

  const {gameOver, setGameOver, correctWord, inputPosition} = useContext(AppContext);
  const currentAttempt = inputPosition.attempt + 1;
  const message = gameOver.guessedWord? "Correct":"Incorrect"

  return (
    <div className="">
      <h3>{message}</h3>
      <h1>Correct word was {correctWord}</h1>
      {gameOver.guessedWord && <h1>You guessed in {currentAttempt} attempts</h1>}
      </div>
  )
}

export default GameOver