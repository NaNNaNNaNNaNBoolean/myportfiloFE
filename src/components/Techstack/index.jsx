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
import './style.css'

const Techstack = () => {
  return (
    <>
    <div style={{minHeight:'50vh'}}>
      <h2 style = {{marginTop: '1%', display: 'flex', justifyContent: 'center'}}> <u>TECH STACK</u></h2>
      <div className='TeckStackList'>  
        <div className='TechSection'> 
          <h3 style = {{marginBottom: '0.5em'}}> Languages </h3>
          <img src = {Cplusplus} style = {{height: '2.5em', width: '2.5em', backgroundSize: '100% 100%', marginLeft: '0.2em' }}></img>
          <img src = {Csharp} style = {{height: '2.5em', width: '2.5em', backgroundSize: '100% 100%', marginLeft: '2vh' }}></img>
          <img src = {Javascript} style = {{height: '2.5em', width: '2.5em', backgroundSize: '100% 100%', marginLeft: '2vh' }}></img>
          <img src = {Gdscript} style = {{height: '2.5em', width: '2.5em', backgroundSize: '100% 100%', marginLeft: '2vh' }}></img>
          <img src = {Py} style = {{height: '2.5em', width: '2.5em', backgroundSize: '100% 100%', marginLeft: '2vh' }}></img>
        </div>
        <div className='TechSection'>
          <h3 style = {{marginBottom: '0.5em'}}> Backend </h3>
          {/* <br></br> */}
          <img src = {Node} style = {{height: '5vh', width: '6vh', backgroundSize: '100% 100%' }}></img>
          <img src = {Express} style = {{height: '5vh', width: '6vh', backgroundSize: '100% 100%', marginLeft: '2vh' }}></img>
          <img src = {Flask} style = {{height: '5vh', width: '5vh', backgroundSize: '100% 100%' , marginLeft: '2vh'}}></img>
          <img src = {Postgres} style = {{height: '5vh', width: '5vh', backgroundSize: '100% 100%', marginLeft: '2vh' }}></img>
          <img src = {MongoDB} style = {{height: '5vh', width: '7vh', backgroundSize: '100% 100%', marginLeft: '2vh' }}></img>
          <img src = {Moogoose} style = {{height: '5vh', width: '5vh', backgroundSize: '100% 100%', marginLeft: '2vh' }}></img>
          <img src = {NotNode} style = {{height: '5vh', width: '6vh', backgroundSize: '100% 100%', marginLeft: '2vh' }}></img>
          <img src = {Jest} style = {{height: '5vh', width: '5vh', backgroundSize: '100% 100%', marginLeft: '2vh' }}></img>
          <img src = {Pytest} style = {{height: '5vh', width: '5vh', backgroundSize: '100% 100%', marginLeft: '2vh'}}></img>
        </div>
        
        <div className='TechSection'>
          <h3 style = {{marginBottom: '0.5em'}}> Frontend </h3>
          <img src = {Html} style = {{height: '6vh', width: '6vh', backgroundSize: '100% 100%'/*marginLeft: '2vh'*/ }}></img>
          <img src = {Css} style = {{height: '6vh', width: '4.5vh', backgroundSize: '100% 100%', marginLeft: '2vh' }}></img>
          <img src = {reactImg} style = {{height: '5vh', width: '6vh', backgroundSize: '100% 100%', marginLeft: '2vh' }}></img>
          <img src = {Boot} style = {{height: '5vh', width: '6vh', backgroundSize: '100% 100%', marginLeft: '2vh'}}></img>
          <img src = {Dnd} style = {{height: '5vh', width: '7vh', backgroundSize: '100% 100%', marginLeft: '2vh' }}></img>
          <img src = {vitest} style = {{height: '5vh', width: '5vh', backgroundSize: '100% 100%', marginLeft: '2vh' }}></img>
        </div>
        <div className='TechSection'>
          <h3 style = {{marginBottom: '0.5em'}}>Design/Deployment</h3>
          <img src = {Figma} style = {{height: '2.5em', width: '4.5em', backgroundSize: '100% 100%' }}></img>
          <img src = {Render} style = {{height: '2.5em', width: '5em', backgroundSize: '100% 100%' }}></img>
          <img src = {Github} style = {{height: '2.5em', width: '4.5em', backgroundSize: '100% 100%' }}></img>
        </div>
        {/* <div>
        <h3 style = {{marginBottom: '0.5em'}}>Hardware</h3>
          <img src = {Arudino} style = {{height: '2.5em', width: '4.5em', backgroundSize: '100% 100%' }}></img>
          <img src = {Render} style = {{height: '2.5em', width: '5em', backgroundSize: '100% 100%' }}></img>
          <img src = {Github} style = {{height: '2.5em', width: '4.5em', backgroundSize: '100% 100%' }}></img>
        </div> */}
      </div>
    </div>
    </>
    
    
  )
}

export default Techstack
