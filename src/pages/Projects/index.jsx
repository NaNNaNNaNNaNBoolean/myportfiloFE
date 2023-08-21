import React, { useState} from 'react'
import './style.css'
import {useNavigate } from 'react-router-dom'
import {ConvayBelt, ProjectList} from '../../components'

const Projects = () => {
  // const [onClickActive, setClickActive] = useState(false);
  const [style, setStyle] = useState(false)
  const nav = useNavigate()

  const handleLogoclick = () => {
    nav('/')
  }
  let transformStart = '-10%'
  const handleNext = () => {
    if (style === !true){
      setStyle(true)
    }else {
      setStyle(false)
    }
  }
  const handleBack = () => {
    setStyle(true)
  }
  return (
    <div>
      <div className='topbot'>
        <div className='logoproj'>
          <button onClick={handleLogoclick}>logo</button>
        </div>
        <div className='leval'>
          <div className='movementarea'></div>
        </div> 
      </div>
      <div className='convayabelt'>
        <div className='list' style ={{animationPlayState: style ? 'running' : ''}}>
          <ProjectList />
        </div>
      <div className='CB-contianer'>
        <ConvayBelt />
      </div>
      </div>
      <div className='Controllerback'>
        <div className='Controls'>
          <button onClick={handleBack}><span className="material-symbols-outlined">arrow_back_ios</span></button>
          <button onClick={handleNext}><span className="material-symbols-outlined">arrow_forward_ios</span></button>
        </div>
      </div>
    </div>

  )
}

export default Projects
