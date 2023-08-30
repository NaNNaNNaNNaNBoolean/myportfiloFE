import React from 'react'
import { AboutInfo } from '../../components'
import { NavBar } from '../../components'
import { useNavigate } from 'react-router-dom'
import './style.css'
const Home = () => {
  const nav = useNavigate()
  const handleClick = () => {
    nav('/Projects')
  }
  return (
    <div className='grid.container'>
      <div className='backheader'>
        <div className='item1'>
          <h1 className='NeonBanner'>WELCOME!</h1>
        </div> 
      </div>
      <div className='item2'>
        <AboutInfo />
      </div>
      <div className='item3'>
        <button onClick={handleClick} className='goToProjects'><span>See Projects</span></button>
        {/* <NavBar /> */}
        <h3 className='contactme'>Contact Me</h3>
        <div className='connectwithme'> 
          <button onClick={(e) => {e.preventDefault(); window.location.href='https://www.linkedin.com/in/nicole-french-a52840173/';}}>LinkedIn</button>
          <button onClick={(e) => {e.preventDefault(); window.location.href='https://github.com/NaNNaNNaNNaNBoolean';}}>GitHub</button>
        </div>
      </div>
      
    </div>
    
    
  )
}

export default Home
