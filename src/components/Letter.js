import React from 'react'


function Letter({letter}) {
  return (
    <div className="border-2 border-black grid m-1 min-h-[100px] min-w-[100px] items-center flex justify-center ">
      {letter}
    </div>
  )
}

export default Letter