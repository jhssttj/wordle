import React, {useContext} from 'react';
import Letter from './Letter';
import {AppContext} from '../App'

function Board() {
  const {board} = useContext(AppContext);

  const renderBoardContent = () => {
    for (let i = 0; i < board.length; i++) {
      console.log(board[i])
    }

    return (<div className="flex justify-around">
        Test
      </div>)
  }

  return (
    <div className="board border-2 border-black h-auto w-auto flex flex-col m-8 ">
      <div className="flex justify-around">
        <Letter letterPos={0} attemptVal={0}/>
        <Letter letterPos={1} attemptVal={0}/>
        <Letter letterPos={2} attemptVal={0}/>
        <Letter letterPos={3} attemptVal={0}/>
        <Letter letterPos={4} attemptVal={0}/>
      </div>
      <div className="flex justify-around">
        <Letter letterPos={0} attemptVal={1}/>
        <Letter letterPos={1} attemptVal={1}/>
        <Letter letterPos={2} attemptVal={1}/>
        <Letter letterPos={3} attemptVal={1}/>
        <Letter letterPos={4} attemptVal={1}/>
      </div>
      <div className="flex justify-around">
        <Letter letterPos={0} attemptVal={2}/>
        <Letter letterPos={1} attemptVal={2}/>
        <Letter letterPos={2} attemptVal={2}/>
        <Letter letterPos={3} attemptVal={2}/>
        <Letter letterPos={4} attemptVal={2}/>
      </div>
      <div className="flex justify-around">
        <Letter letterPos={0} attemptVal={3}/>
        <Letter letterPos={1} attemptVal={3}/>
        <Letter letterPos={2} attemptVal={3}/>
        <Letter letterPos={3} attemptVal={3}/>
        <Letter letterPos={4} attemptVal={3}/>
      </div>
      <div className="row"></div>
      {renderBoardContent()}
    </div>
  )
}

export default Board