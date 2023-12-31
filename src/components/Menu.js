import React, {useContext} from 'react';
import {AppContext} from '../App'
import {FaArrowAltCircleLeft, FaArrowAltCircleRight} from 'react-icons/fa'

function Menu() {

  const { attempts, setAttempts, ansLength, setAnsLength, setGameStart } = useContext(AppContext);

  const selectionDivClass = "flex flex-col items-center text-2xl gap-2 w-full"
  const selectorDivClass = "flex justify-between sm:w-1/2 w-3/4"
  const selectorValueClass = "font-bold"
  const iconClass = "w-[35px] h-[35px] text-green hover:cursor-pointer hover:opacity-90 "
  
  const nextAnsLength = () => {
    setAnsLength(ansLength===8?3:ansLength+1);
  }
  const prevAnsLength = () => {
    setAnsLength(ansLength===3?8:ansLength-1);
  }

  const nextAttemptLength = () => {
    setAttempts(attempts===10?2:attempts+1);
  }
  const prevAttmptLength = () => {
    setAttempts(attempts===2?10:attempts-1);
  }

  return (
    <div className="rounded-lg flex flex-col items-center my-8 bg-lgray p-2 justify-center gap-2 md:w-1/3 sm:w/1/2 w-3/4">
      <h1 className="text-2xl font-bold text-center mt-4">Get {attempts} chances to guess a {ansLength} letter word. </h1>

      <div className="border-2 border-black w-3/4"></div>

      <div className={selectionDivClass}>
        <h1 className="xxs:text-2xl text-xl">Word Length</h1>
        <div className={selectorDivClass}>
          <FaArrowAltCircleLeft className={iconClass} onClick={prevAnsLength}/>
          <p className={selectorValueClass}>{ansLength}</p>
          <FaArrowAltCircleRight className={iconClass} onClick={nextAnsLength}/>
        </div>
      </div>

      <div className={selectionDivClass}>
        <h1 className="xxs:text-2xl text-xl">Chances</h1>
        <div className={selectorDivClass}>
          <FaArrowAltCircleLeft className={iconClass} onClick={prevAttmptLength}/>
          <p className={selectorValueClass}>{attempts}</p>
          <FaArrowAltCircleRight className={iconClass} onClick={nextAttemptLength}/>
        </div>
      </div>

      <button className=" bg-green text-xlgreen text-2xl rounded-lg p-2 font-bold hover:opacity-90 my-4" 
        onClick={()=>setGameStart(true)}>
        START
      </button>
      <div className="flex justify-end ">
        <p>Created by <a className="underline text-blue-600 hover:text-blue-800" href="https://github.com/jhssttj">Kevin Lee</a></p>
      </div>
    </div>
  )
}

export default Menu