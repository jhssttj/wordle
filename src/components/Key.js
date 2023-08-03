import React from 'react'

function Key({keyValue}) {

  let smallKeyCSS = ""
  if (keyValue === "ENTER" || keyValue === "DELETE") {
    smallKeyCSS = "text-xs"
  }
  return (
    <div className={`border-2 border-black m-1 min-h-[50px] min-w-[50px] items-center flex justify-center ${smallKeyCSS}`}>
      {keyValue}
    </div>
  )
}

export default Key