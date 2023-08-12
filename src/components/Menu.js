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
    <div className="">
        <div className="">
          <h1>Word Length</h1>
          <div className="flex">
            <FaArrowAltCircleLeft onClick={prevAnsLength}/>
            <p>{ansLength}</p>
            <FaArrowAltCircleRight onClick={nextAnsLength}/>
          </div>
        </div>
        <div className="">
          <h1>Attempt Number</h1>
          <div className="flex">
            <FaArrowAltCircleLeft onClick={prevAttmptLength}/>
            <p>{attempts}</p>
            <FaArrowAltCircleRight onClick={nextAttemptLength}/>
          </div>
        </div>
        <button onClick={setGameStart(true)}>PLAY</button>
    </div>
  )
}

export default Menu