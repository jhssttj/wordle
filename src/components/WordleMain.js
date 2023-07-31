import React, {useEffect} from 'react'
import useWordle from '../hooks/useWordle';

export function WordleMain({answer}) {
  const {currentGuess, handleKeyup} = useWordle(answer);
  
  useEffect(()=> {
    window.addEventListener('keyup', handleKeyup);

    return () => {window.removeEventListener('keyup',handleKeyup)}
  }, [handleKeyup])

  return (
    <div>{currentGuess}</div>
  )
}

export default WordleMain;