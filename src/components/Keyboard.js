import React, {useEffect, useContext, useCallback} from 'react'
import {keyRow1, keyRow2, keyRow3} from '../Data';
import Key from './Key';
import {AppContext} from '../App'

function Keyboard() {
  const { onSelectLetter, onDelete, onEnter, disabledLetters, correctLetters } = useContext(AppContext);

  const handleKey = useCallback((event) => {
    if (event.key === "Enter") {
      onEnter();
    } else if (event.key === "Backspace") {
      onDelete();
    } else {
      if (/^[A-Za-z]$/.test(event.key)){
        onSelectLetter(event.key.toUpperCase())
      }
    }
  }, [onEnter,onDelete,onSelectLetter])

  useEffect(() => {
    window.addEventListener("keyup", handleKey)
    return () => window.removeEventListener('keyup', handleKey)
  }, [handleKey])

  const renderKeys = (keyRow) => {
    return keyRow.map((key, index) => {
      return <Key key={index} keyValue={key} disabled={disabledLetters.includes(key)} correct={correctLetters.includes(key)}/>
    })
  }

  return (
    <div className="border-2 border-black flex flex-col items-center" onKeyUp={handleKey}>
      <div className="flex space-evenly">
        {renderKeys(keyRow1)}
      </div>
      <div className="flex space-evenly">
        {renderKeys(keyRow2)}
      </div>
      <div className="flex space-evenly">
        <Key keyValue={"ENTER"}/>
        {renderKeys(keyRow3)}
        <Key keyValue={"DELETE"}/>
      </div>
      
    </div>
  )
}

export default Keyboard