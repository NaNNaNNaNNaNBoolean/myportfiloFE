import React from 'react'
import './style.css'
import { useState, useEffect } from 'react'
const ConvayBelt = () => {
  const [onloadActive, setOnloadActive] = useState(false);
  const [MoveActive, setMoveActive] = useState(false);

  const handleLoad = () => {
    // 👇️ set to true
    if (onloadActive === !true){
      setOnloadActive(true);
    }
    if (new Date().getTime() - startTime > 3000){
      clearInterval(onloadani);
      return 
    }
  };

  // useEffect(() => {
    var startTime = new Date().getTime()
    const onloadani = setInterval(handleLoad, 3000);

  // },[])


  return (
    <div className="convaybelt" style ={{animationPlayState: onloadActive ? 'paused' : ''}}
    onLoad={handleLoad}></div>
  )
}

export default ConvayBelt
