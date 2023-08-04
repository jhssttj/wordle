import React, {useEffect, useContext, useCallback} from 'react'
import {keyRow1, keyRow2, keyRow3} from '../Data';
import Key from './Key';
import {AppContext} from '../App'

function Keyboard() {
  const { onSelectLetter, onDelete, onEnter } = useContext(AppContext);

  const handleKeyboard = useCallback((event) => {
    if (event.key === "Enter") {
      onEnter();
    } else if (event.key === "Backspace") {
      onDelete();
    } else {
      keyRow1.forEach((key) => {
        if (event.key.toUpperCase() === key) {
          onSelectLetter(key)
        }
      })
      keyRow2.forEach((key) => {
        if (event.key.toUpperCase() === key) {
          onSelectLetter(key)
        }
      })
      keyRow3.forEach((key) => {
        if (event.key.toUpperCase() === key) {
          onSelectLetter(key)
        }
      })
    }
  }, [onEnter,onDelete,onSelectLetter])

  useEffect(() => {
    window.addEventListener("keydown", handleKeyboard)
    return () => window.removeEventListener('keydown', handleKeyboard)
  }, [handleKeyboard])

  const renderKeys = (keyRow) => {
    return keyRow.map((key, index) => {
      return <Key key={index} keyValue={key}/>
    })
  }

  return (
    <div className="border-2 border-black flex flex-col items-center" onKeyDown={handleKeyboard}>
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