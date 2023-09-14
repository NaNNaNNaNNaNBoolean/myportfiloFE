import React, { useEffect, useState } from 'react'
import { AboutInfo } from '../../components'
import { NavBar } from '../../components'
import { useNavigate } from 'react-router-dom'
import './style.css'
import './loader.css'
const Home = () => {
  const nav = useNavigate()
  const [seen,setSeen] = useState(false)
  const handleClick = () => {
    nav('/Projects')
  }
  var myVar;

  useEffect(()=>{
    if(seen === false){
       myVar = setTimeout(showPage, 3000);
    function showPage() {
        document.getElementById("loader").style.display = "none";
        document.getElementById("myloaderDiv").style.display = "block";
        setSeen(true)
    }
    }
  })

  
  return (
    <>
      {/* <body onLoad={myFunction()} style={{margin:"0"}}> */}

      <div id="loader" className='hidden'>
        <div className ="backloader">
          <h2 className='welcomeloader'>WELCOME</h2>
        </div>
      </div>

      <div style={{display:"none"}} id="myloaderDiv" className="animate-bottom">
        <div className='grid.container'>
        <div className='backheader'>
          <div></div>
          <div className='item1' id ='bouncein'> 
            <h1 className='NeonBanner'>NICOLE FRENCH</h1>
          </div> 
            {/* <button onClick={handleClick} className='goToProjects'><span>See Projects</span></button> */}
          {/* <h3 className='contactme'>Contact Me</h3> */}
          <div className='connectwithme'> 
                <button className='linkedinbtn' onClick={(e) => {e.preventDefault(); window.open('https://www.linkedin.com/in/nicole-french-a52840173/');}}></button>
                <button className='githubbtn' onClick={(e) => {e.preventDefault(); window.open('https://github.com/NaNNaNNaNNaNBoolean');}}></button>
            </div>
          
        </div>
        <div className='item2'>
          <AboutInfo />
        </div>
        {/* <footer>
          <div className='item3'>
            <button onClick={handleClick} className='goToProjects'><span>See Projects</span></button>
            <h3 className='contactme'>Contact Me</h3>
            <div className='connectwithme'> 
              <button className='linkedinbtn' onClick={(e) => {e.preventDefault(); window.location.href='https://www.linkedin.com/in/nicole-french-a52840173/';}}></button>
              <button className='githubbtn' onClick={(e) => {e.preventDefault(); window.location.href='https://github.com/NaNNaNNaNNaNBoolean';}}></button>
            </div>
          </div>
        </footer> */}
        
        
        </div>
        <section></section>
      </div>
        
      {/* </body> */}
    </>

    
    
  )
}

export default Home
