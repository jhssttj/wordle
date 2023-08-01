import React, {useEffect} from 'react'
import useWordle from '../hooks/useWordle';

export function WordleMain({answer}) {
  const {currentGuess, handleInput, turn} = useWordle(answer);
  
  useEffect(()=> {
    window.addEventListener('keyup', handleInput);
    return () => {window.removeEventListener('keyup',handleInput)}
  }, [handleInput])

  return (
    <div>
      {currentGuess}
      {turn}
      
    </div>
  )
}

export default WordleMain;