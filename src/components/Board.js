import React, {useState} from 'react';
import { boardDefault } from '../Words';

function Board() {

  const [board, setBoard] = useState(boardDefault);

  return (
    <div className="">
      <div className="row"></div>
      <div className="row"></div>
      <div className="row"></div>
      <div className="row"></div>
      <div className="row"></div>
    </div>
  )
}

export default Board