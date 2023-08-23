import React, { useState} from 'react'
import './style.css'
import {useNavigate } from 'react-router-dom'
import {ConvayBelt, ProjectList} from '../../components'

const Projects = () => {
  // const [onClickActive, setClickActive] = useState(false);
  const [loading, setLoading] = useState(false);
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
  function displayProjects() {
    return (
      <div>
        <div className='topbot'>
          <div className='logoproj'>
            <button onClick={handleLogoclick}>logo</button>
          </div>
          <p>*This page is still under development*</p>
          <div className='leval'>
            <div className='movementarea'></div>
          </div> 
        </div>
        <div className='convayabelt'>
          <div className='list' style ={{animationPlayState: style ? 'running' : ''}}>
            <ProjectList  setLoading = {loading}/>
          </div>
        <div className='CB-contianer'>
          <ConvayBelt />
        </div>
        </div>
        <div className='Controllerback'>
          <div className='Controls'>
            <button onClick={handleBack}><span className="material-symbols-outlined">arrow_back_ios</span></button>
            <button onClick={handleNext}><span className="material-symbols-outlined">arrow_forward_ios</span></button>
            <p>*This page is still under development*</p>
          </div>
        </div>
      </div>

    )
  } 
  return loading ? <h2><em>loading...</em></h2> : displayProjects();
}

export default Projects
