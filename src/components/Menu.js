import React, {useContext} from 'react';
import {AppContext} from '../App'
import {FaArrowAltCircleLeft, FaArrowAltCircleRight} from 'react-icons/fa'

function Menu() {

  const { attempts, setAttempts, ansLength, setAnsLength, setGameStart } = useContext(AppContext);
  
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
    <div className="rounded-lg w-1/4 h-1/4 flex flex-col items-center my-8 bg-lgray p-2 justify-center gap-2">
      <h1 className="text-2xl font-bold text-center border-2 border-black">Get {attempts} chances to guess a {ansLength} letter word. </h1>
      <div className="flex flex-col items-center text-xl border-2 border-black gap-2">
        <h1>Word Length</h1>
        <div className="flex w-full justify-between">
          <FaArrowAltCircleLeft onClick={prevAnsLength}/>
          <p className="font-bold">{ansLength}</p>
          <FaArrowAltCircleRight onClick={nextAnsLength}/>
        </div>
      </div>
      <div className="flex flex-col items-center text-xl border-2 border-black gap-2">
        <h1>Chances</h1>
        <div className="flex w-full justify-between">
          <FaArrowAltCircleLeft onClick={prevAttmptLength}/>
          <p className="font-bold">{attempts}</p>
          <FaArrowAltCircleRight onClick={nextAttemptLength}/>
        </div>
      </div>
      <button className="border-2 border-black" onClick={()=>setGameStart(true)}>
        PLAY
      </button>
    </div>
  )
}

export default Menu