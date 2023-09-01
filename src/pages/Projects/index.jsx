import React, { useState} from 'react'
import './style.css'
import {useNavigate } from 'react-router-dom'
import {ConvayBelt, ProjectList} from '../../components'

const Projects = () => {
  // const [onClickActive, setClickActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [style, setStyle] = useState(false)
  const [LeftRight, setLeftRight] = useState(false)
  const [clickedbtn, setClickbtn] = useState(false)
  const nav = useNavigate()

  const handleLogoclick = () => {
    nav('/')
  }
  let transformStart = '-10%'
  const handleNext = () => {
    if (style === !true){
      setStyle(true)
      setLeftRight(false)
      setClickbtn(true)
    }else {
      setStyle(false)
    }
  }
  const handleBack = () => {
    if(LeftRight === false){
      setLeftRight(true)
      setStyle(true)
      setClickbtn(true)
    }else {
      setStyle(false)
    }

  }
  const myStyle = {
    animationPlayState: style ? 'running' : '', 
    animation: LeftRight ? 'slide-left-click 1s linear forwards' : ''
  }
  const messagemove = () => {
    if(clickedbtn === false){
      return (<p>HI THERE</p>)
    }else{
      if(LeftRight === false){
        return (<p>FORWARDS</p>)
      }else{return (<p>BACKWARDS</p>)}
    }

  }
  function displayProjects() {
    return (
      <div>
        <div className='topbot'>
          <div className='logoproj'>
            <button className='mainbackbtn' onClick={handleLogoclick}><span>Back</span></button>
          </div>
          <div className='leval'>
            <div className='movementarea' >{messagemove()}</div>
          </div> 
        </div>
        <div className='convayabelt'>
          <div className='list' style ={myStyle}>
            <ProjectList  setLoading = {loading}/>
          </div>
        <div className='CB-contianer'>
          <ConvayBelt />
        </div>
        </div>
        <div className='Controllerback'>
          <div className='Controls'>
            <button className='Controlsback' onClick={handleBack}><span className="material-symbols-outlined">arrow_back_ios</span></button>
            <button className='Controlsforward'onClick={handleNext}><span className="material-symbols-outlined">arrow_forward_ios</span></button>
            {/* <p className='notice'>*This page is still under development*</p> */}
          </div>
        </div>
      </div>

    )
  } 
  return loading ? <h2><em>loading...</em></h2> : displayProjects();
}

export default Projects
