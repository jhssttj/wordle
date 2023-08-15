import React, {useContext} from 'react'
import { AppContext } from '../App'

function GameOver() {

  const {gameOver, answer, inputPosition, restartFunction} = useContext(AppContext);
  const currentAttempt = inputPosition.attempt;
  const message = gameOver.guessedWord? "You Won!":"Game Over"

  return (
    <div className="bg-lgray rounded-lg p-2 flex flex-col items-center">
      <h3 className="font-bold sm:text-4xl text-2xl">{message}</h3>
      <h1 className="sm:text-2xl">Correct word was {answer}</h1>
      {gameOver.guessedWord && <h1>You guessed in {currentAttempt} attempts</h1>}
      <button className=" bg-green text-xlgreen rounded-lg p-2 font-bold hover:opacity-90 my-4 sm:text-2xl"
        onClick={()=> restartFunction()}>Restart</button>
      </div>
  )
}

export default GameOver