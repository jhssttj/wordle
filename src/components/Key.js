import React from 'react'

function Key({keyValue}) {
  return (
    <div className="border-2 border-black m-1 min-h-[50px] min-w-[50px] items-center flex justify-center ">
      {keyValue}
    </div>
  )
}

export default Key