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
  // let transformStart = '-10%'
  const handleNext = () => {
    if (LeftRight === false){
      setStyle(true)
      setLeftRight(false)
      setClickbtn(true)
    }
    else {
      setStyle(false)
      setLeftRight(false)
      setClickbtn(false)
    }
  }
  const handleBack = () => {
    if(LeftRight === false){
      setLeftRight(true)
      setStyle(true)
      setClickbtn(true)
    }else {
      setStyle(false)
      setLeftRight(true)
      setClickbtn(false)
    }

  }
  const myStyle = {
    animationPlayState: style ? 'running' : '', 
    animation: LeftRight ? 'slide-left-click 3s linear forwards' : ''
  }
  const messagemove = () => {
    if(clickedbtn === false){
      return (<p>HI THERE</p>)
    }else{
      if(LeftRight === false){
        return (<p> FORWARD </p>)
      }else{return (<p> BACKWARD </p>)}
    }

  }
  function displayProjects() {
    return (
      <div>
        <div className='topbot'>
          <div className='logoproj'>
            <button className='mainbackbtn' onClick={handleLogoclick}><span>Back</span></button>
          </div>
          {/* <div className='leval'>
            <div className='movementarea' >{messagemove()}</div>
          </div>  */}
        </div>
        <div className='convayabelt'>
          <div className='list' style ={myStyle}>
            <ProjectList  setLoading = {loading}/>
          </div>
        <div className='CB-contianer'>
          <ConvayBelt />
        </div>
        </div>
        {/* <footer> */}
          <footer className='Controllerarea'>
            <div className='Controls'>
              <button className='Controlsback' onClick={handleBack}><span className="material-symbols-outlined">arrow_back_ios</span></button>
              <div className='messageboard'>
                <div className='movedisplay'><p id='scrolltext'>{messagemove()}</p></div>
              </div> 
              <button className='Controlsforward'onClick={handleNext}><span className="material-symbols-outlined">arrow_forward_ios</span></button>
              {/* <p className='notice'>*This page is still under development*</p> */}
            </div>
          </footer>
        {/* </footer> */}

      </div>

    )
  } 
  return loading ? <h2><em>loading...</em></h2> : displayProjects();
}

export default Projects
