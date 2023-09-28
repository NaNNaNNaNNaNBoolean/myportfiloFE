import React from 'react'
import Boot from '../../imgs/code/Bootstrap.png'
import Css from '../../imgs/code/css.png'
import Dnd from '../../imgs/code/dnd.png'
import Express from '../../imgs/code/express.png'
import Figma from '../../imgs/code/figma.png'
import Flask from '../../imgs/code/flask.png'
import Github from '../../imgs/code/GhubLogo.png'
import Html from '../../imgs/code/html.png'
import Jest from '../../imgs/code/jest.png'
import MongoDB from '../../imgs/code/MonDBLogo.png'
import Moogoose from '../../imgs/code/moogoose.png'
import Node from '../../imgs/code/node.png'
import NotNode from '../../imgs/code/noode.png'
import Py from '../../imgs/code/py.png'
import Postgres from '../../imgs/code/PSqlEl.png'
import Pytest from '../../imgs/code/Pytest.png'
import reactImg from '../../imgs/code/react.png'
import Render from '../../imgs/code/render.png'
import vitest from '../../imgs/code/vitest.png'
import Javascript from '../../imgs/code/JavaScript.png'
import Cplusplus from '../../imgs/code/C++.png'
import Csharp from '../../imgs/code/cSharp.png'
import Gdscript from '../../imgs/code/gdscript.png'
import Arduino from '../../imgs/code/Arduino.png'
import jq from '../../imgs/code/jq.png'
import './style.css'

const Techstack = () => {
  return (
    <>
    {/* <h3>!!!Section is under development!!!</h3> */}
    <div className='TScontainer'>
      <h2 className='techstacktitleback' style = {{ display: 'flex', justifyContent: 'center'}}> <span className='techstacktitle'>TECH STACK</span></h2>
      <div className='TeckStackList'>  
        <div className='TechSecLang'> 
          <h3 style = {{marginBottom: '0.5em', color:'#fff'}}> Languages </h3>
          <div className='langgrid'>
             <img src = {Cplusplus} style = {{height: '5vh', width: '6vh', marginBottom:'1em' }}></img>
            <img src = {Csharp} style = {{height: '5vh', width: '7vh', marginBottom:'1em' }}></img>
            <img src = {Javascript} style = {{height: '5vh', width: '6vh', marginBottom:'1em' }}></img>
            <img src = {Gdscript} style = {{height: '5vh', width: '6vh', marginBottom:'1em'}}></img>
            <img src = {Py} style = {{height: '5vh', width: '6vh' , marginBottom:'1em'}}></img>
          </div>
        </div>
       
        <div className='TechSecBE'>
          <h3 style = {{marginBottom: '0.5em', color:'#fff'}}> Backend </h3>
          {/* <br></br> */}
          <div className='BEgrid'>
            <img src = {Node} style = {{height: '4vh', width: '8vh', marginBottom:'1em'}}></img>
            <img src = {NotNode} style = {{height: '4vh', width: '9vh', marginBottom:'1em' }}></img>
         
            <img src = {Flask} style = {{height: '5vh', width: '5vh', marginBottom:'1em'}}></img>
            <img src = {Postgres} style = {{height: '5vh', width: '7vh', marginBottom:'1em'}}></img>
            {/* <img src = {Express} style = {{height: '4vh', width: '8vh', marginBottom:'1em'}}></img> */}
            <p style={{margin:'auto', justifyContent:'center',alignContent:'center', color: '#26282A', display: 'flex'}}>Express</p>
            <img src = {MongoDB}style = {{height: '4vh', width: '10vh' , marginBottom:'1em'}}></img>
            <img src = {Moogoose}style = {{height: '5vh', width: '7vh', marginBottom:'1em'}}></img>
            
            <img src = {Jest} style = {{height: '4vh', width: '5vh', marginBottom:'1em'}}></img>
            <img src = {Pytest} style = {{height: '5vh', width: '6vh', marginBottom:'1em'}}></img>
          </div>
          
        </div>
        <div className='TechSecFE'>
          <h3 style = {{marginBottom: '0.5em', color:'#fff'}}> Frontend </h3>
          <div className='FEgrid'>
            <img src = {Html} style = {{height: '40%', width: '40%', marginBottom:'1em' }}></img>
            <img src = {Css} style = {{height: '40%', width: '30%', marginBottom:'1em'}}></img>
            <img src = {reactImg} style = {{height: '30%', width: '35%' , marginBottom:'1em'}}></img>
            <img src = {Boot} style = {{height: '30%', width: '40%', marginBottom:'1em'}}></img>
            <img src = {Dnd} style = {{height: '40%', width: '50%', marginBottom:'1em' }}></img>
            <img src = {vitest} style = {{height: '50%', width: '40%', marginBottom:'1em'}}></img>
            <img src = {jq} style = {{height: '50%', width: '40%', marginBottom:'1em'}}></img>
          </div>
          
        </div>
        <div className='TechSecD'>
          <h3 style = {{marginTop:'1%',marginBottom: '0.5em', color:'#fff'}}>Design/Deployment</h3>
          <div className='Dgrid'>
            <img src = {Figma} style = {{height: '30%', width: '40%' }}></img>
            <img src = {Render} style = {{height: '30%', width: '40%' }}></img>
            <img src = {Github} style = {{height: '30%', width: '40%' }}></img>
            <img src = {Arduino} style = {{height: '30%', width: '30%' }}></img>
          </div>
         
   
         
        </div>
      </div>
      {/* <div className='arrowcontainer'>
        <svg className="arrows">
            <path class="a1" d="M0 0 L30 32 L60 0"></path>
            <path class="a2" d="M0 20 L30 52 L60 20"></path>
            <path class="a3" d="M0 40 L30 72 L60 40"></path>
        </svg>
        <div></div> */}
      {/* </div> */}
    </div>
    </>
    
    
  )
}

export default Techstack
