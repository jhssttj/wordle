import React, { useContext } from 'react'
import { AppContext } from '../App'
import {FaBackspace} from 'react-icons/fa'

function Key({keyValue, disabled, almost, correct}) {
    const { onSelectLetter, onDelete, onEnter } = useContext(AppContext);
    const displayKey = keyValue==="DELETE"?<FaBackspace/>:keyValue;


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
  let almostKeyCSS = almost && !correct? "bg-yellow":""
  let correctKeyCSS = correct? "bg-green":""

  return (
    <div className={`bg-lgray rounded-lg font-bold m-1 items-center flex justify-center min-h-[50px] min-w-[50px] ${smallKeyCSS} ${disabledKeyCSS} ${almostKeyCSS} ${correctKeyCSS}`}
    onClick={selectLetter}>
      {displayKey}
    </div>
  )
}

export default Key