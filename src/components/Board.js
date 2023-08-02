import React, {useContext} from 'react';
import Letter from './Letter';
import {AppContext} from '../App'

function Board() {

  const {board} = useContext(AppContext);

  //Render rows for letters to go in
  const renderRows = () => {
    const rows = board.map((row, rowIndex) => {
      return <div key={rowIndex} className="flex justify-content">{renderLetters(row)}</div>
    })
    
    return rows;
  }
  //Render letters of the current row
  const renderLetters = (row) => {
    const letters = row.map((letter,index)=> {
      return <Letter key={index} letter={letter}/>
    })
    return letters;
  }

  return (
    <div className="board border-2 border-black h-auto w-auto flex flex-col m-8 ">
        {renderRows()}
      <div className="row"></div>
    </div>
  )
}

export default Board