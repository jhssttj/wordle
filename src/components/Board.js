import React, {useState} from 'react';
import { boardDefault } from '../Words';
import Letter from './Letter';

function Board() {

  const [board, setBoard] = useState(boardDefault);

  return (
    <div className="board border-2 border-black h-auto w-auto flex flex-col m-8 ">
      <div className="row border-2 border-black flex justify-around h-full w-full">
        <Letter letterPos={0} attemptVal={0}/>
        <Letter letterPos={1} attemptVal={0}/>
        <Letter letterPos={2} attemptVal={0}/>
        <Letter letterPos={3} attemptVal={0}/>
        <Letter letterPos={4} attemptVal={0}/>
      </div>
      <div className="row border-2 border-black flex justify-around h-full">
        <Letter letterPos={0} attemptVal={1}/>
        <Letter letterPos={1} attemptVal={1}/>
        <Letter letterPos={2} attemptVal={1}/>
        <Letter letterPos={3} attemptVal={1}/>
        <Letter letterPos={4} attemptVal={1}/>
      </div>
      <div className="row border-2 border-black flex justify-around h-full">
        <Letter letterPos={0} attemptVal={2}/>
        <Letter letterPos={1} attemptVal={2}/>
        <Letter letterPos={2} attemptVal={2}/>
        <Letter letterPos={3} attemptVal={2}/>
        <Letter letterPos={4} attemptVal={2}/>
      </div>
      <div className="row border-2 border-black flex justify-around h-full">
        <Letter letterPos={0} attemptVal={2}/>
        <Letter letterPos={1} attemptVal={2}/>
        <Letter letterPos={2} attemptVal={2}/>
        <Letter letterPos={3} attemptVal={2}/>
        <Letter letterPos={4} attemptVal={2}/>
      </div>
      <div className="row"></div>
    </div>
  )
}

export default Board