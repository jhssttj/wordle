import React, {useContext} from 'react';
import {AppContext} from '../App'
import {FaArrowAltCircleLeft, FaArrowAltCircleRight} from 'react-icons/fa'

function Menu() {

  const { attempts, setAttempts, ansLength, setAnsLength } = useContext(AppContext);
  
  return (
    <div className="">
        <div className="">
          <h1>Word Length</h1>
          <div className="flex">
            <FaArrowAltCircleLeft/>
            <p>{ansLength}</p>
            <FaArrowAltCircleRight/>
          </div>
        </div>
        <div className="">
          <h1>Attempt Number</h1>
          <div className="flex">
            <FaArrowAltCircleLeft/>
            <p>{attempts}</p>
            <FaArrowAltCircleRight/>
          </div>
        </div>
        <button>PLAY</button>
    </div>
  )
}

export default Menu