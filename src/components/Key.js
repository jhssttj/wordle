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

  const textCSSLg = "text-[0.6rem] h-[40px] w-[30px] xxxs:text-[0.6rem] xxxs:h-[20px] xxxs:w-[40px] xxs:text-[0.8rem] xxs:h-[25px] xxs:w-[45px] xs:text-[0.8rem] xs:h-[30px] xs:w-[50px] sm:text-[1.0rem] sm:h-[35px] sm:w-[55px]"
  const textCSSSm = "text-[0.8rem] h-[40px] w-[15px] xxxs:text-[0.8rem] xxxs:h-[20px] xxxs:w-[20px] xxs:text-[1rem] xxs:h-[25px] xxs:w-[25px] xs:text-[1rem] xs:h-[30px] xs:w-[30px] sm:text-[1.2rem] sm:h-[35px] sm:w-[35px]"

  let smallKeyCSS = keyValue==="ENTER"||keyValue==="DELETE"
  ? textCSSLg
  :textCSSSm

  let disabledKeyCSS = disabled? "bg-gray":""
  let almostKeyCSS = almost && !correct? "bg-yellow":""
  let correctKeyCSS = correct? "bg-green":""
  let defaultKeyCSS = !disabled && !almost && !correct? "bg-lgray":""

  return (
    <div className={`hover:cursor-pointer hover:bg-xlgray rounded-lg font-bold m-1 items-center flex justify-center 
      ${smallKeyCSS} ${disabledKeyCSS} ${almostKeyCSS} ${correctKeyCSS} ${defaultKeyCSS}`}
    onClick={selectLetter}>
      {displayKey}
    </div>
  )
}

export default Key