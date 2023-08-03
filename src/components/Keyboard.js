import React from 'react'
import {keyRow1, keyRow2, keyRow3} from '../Data';
import Key from './Key';

function Keyboard() {

  const renderKeys = (keyRow) => {
    return keyRow.map((key) => {
      return <Key keyValue={key}/>
    })
  }

  return (
    <div className="border-2 border-black flex flex-col items-center">
      <div className="flex space-evenly">
        {renderKeys(keyRow1)}
      </div>
      <div className="flex space-evenly">
        {renderKeys(keyRow2)}
      </div>
      <div className="flex space-evenly">
        {renderKeys(keyRow3)}
      </div>
      
    </div>
  )
}

export default Keyboard