import React, { useContext } from 'react'
import { AppContext } from '../App'

function Key({keyValue, disabled, correct}) {
    const { onSelectLetter, onDelete, onEnter } = useContext(AppContext);

  const selectLetter = () => {
    if (keyValue === "ENTER") {
      onEnter();
    } else if (keyValue === "DELETE") {
      onDelete();
    } else {
      onSelectLetter(keyValue);
    }
  }

  let smallKeyCSS = keyValue==="ENTER" || keyValue ==="DELETE"? "text-xs":""
  let disabledKeyCSS = disabled? "bg-gray":""
  let correctKeyCSS = correct? "bg-green":""

  return (
    <div className={`border-2 border-black m-1 min-h-[50px] min-w-[50px] items-center flex justify-center ${smallKeyCSS} ${disabledKeyCSS} ${correctKeyCSS}`}
    onClick={selectLetter}>
      {keyValue}
    </div>
  )
}

export default Key