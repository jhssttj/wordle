import React, { useContext } from 'react'
import { AppContext } from '../App'

function Key({keyValue}) {
    const {board, setBoard, inputPosition, setInputPosition} = useContext(AppContext);

  const selectLetter = () => {
    if (keyValue === "ENTER") {
      if (inputPosition.letterPosition !== 5) return;
      setInputPosition({attempt: inputPosition.attempt + 1, letterPosition: 0})
    } else if (keyValue === "DELETE") {
        if (inputPosition.letterPosition === 0) return;
        const newBoard = [...board];
        newBoard[inputPosition.attempt][inputPosition.letterPosition-1] = "";
        setInputPosition({...inputPosition,letterPosition:inputPosition.letterPosition-1})
        setBoard(newBoard);
    } else {
      if (inputPosition.letterPosition > 4) return;
      const newBoard = [...board];
      newBoard[inputPosition.attempt][inputPosition.letterPosition] = keyValue
      setBoard(newBoard);
      setInputPosition({...inputPosition,letterPosition:inputPosition.letterPosition+1})
    }

    


  }

  let smallKeyCSS = keyValue==="ENTER" || keyValue ==="DELETE"? "text-xs":""

  return (
    <div className={`border-2 border-black m-1 min-h-[50px] min-w-[50px] items-center flex justify-center ${smallKeyCSS}`}
    onClick={selectLetter}>
      {keyValue}
    </div>
  )
}

export default Key