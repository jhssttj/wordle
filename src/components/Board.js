import React, {useContext} from 'react';
import Letter from './Letter';
import {AppContext} from '../App'

function Board() {
  const {board} = useContext(AppContext);

  const renderLetter = (attemptVal) => {
    const boardRow = board[attemptVal];
    console.log(boardRow)
    const letters = boardRow.map((i,y)=> {
      console.log(boardRow[i])
      return <Letter key={y} letter={boardRow[i]}/>
    })
    return letters;
  }

  const renderBoardContent = () => {
    for (let i = 0; i < board.length; i++) {
      
    }

    return (<div className="flex justify-around">
        Test
      </div>)
  }

  return (
    <div className="board border-2 border-black h-auto w-auto flex flex-col m-8 ">
      <div className="flex justify-around">
        {renderLetter(0)}
      </div>

      <div className="row"></div>
      {renderBoardContent()}
    </div>
  )
}

export default Board