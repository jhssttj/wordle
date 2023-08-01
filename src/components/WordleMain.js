import React, {useEffect} from 'react'
import useWordle from '../hooks/useWordle';

export function WordleMain({answer}) {
  const {currentGuess, handleInput, history, turn} = useWordle(answer);
  useEffect(()=> {
    window.addEventListener('keyup', handleInput);
    return () => {window.removeEventListener('keyup',handleInput)}
  }, [handleInput])

  return (
    <div>
      My guess {currentGuess}
      <br/>
      {turn}

      
    </div>
  )
}

export default WordleMain;