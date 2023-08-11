import React, {useContext} from 'react';
import {FaArrowAltCircleLeft, FaArrowAltCircleRight} from 'react-icons/fa'

function Menu() {

  return (
    <div className="">
        <div>
          <FaArrowAltCircleLeft/>
          Div for setting word length
          <FaArrowAltCircleRight/>
        </div>
        <div>
          <FaArrowAltCircleLeft/>
          Div for setting attempt number
          <FaArrowAltCircleRight/>
        </div>
        <button>PLAY</button>
    </div>
  )
}

export default Menu