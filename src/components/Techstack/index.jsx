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
import './style.css'

const Techstack = () => {
  return (
    <>
    <h3>!!!Section is under development!!!</h3>
    <div style={{minHeight:'50vh', marginTop:'2%'}}>
      <h2 className='techstacktitleback' style = {{marginTop: '1%', display: 'flex', justifyContent: 'center'}}> <span className='techstacktitle'>TECH STACK</span></h2>
      <div className='TeckStackList'>  
        <div className='TechSecLang'> 
          <h3 style = {{marginBottom: '0.5em', color:'rgb(65, 65, 65)'}}> Languages </h3>
          <div className='langgrid'>
             <img src = {Cplusplus} style = {{height: '5em', width: '5em', backgroundSize: '100% 100%'/*, marginLeft: '0.2em'*/ }}></img>
            <img src = {Csharp} style = {{height: '5em', width: '5em', backgroundSize: '100% 100%'/*, marginLeft: '2vh'*/ }}></img>
            <img src = {Javascript} style = {{height: '5em', width: '5em', backgroundSize: '100% 100%'/*, marginLeft: '2vh'*/ }}></img>
            <img src = {Gdscript} style = {{height: '5em', width: '5em', backgroundSize: '100% 100%'/*, marginLeft: '2vh' */}}></img>
            <img src = {Py} style = {{height: '5em', width: '5em', backgroundSize: '100% 100%'/*, marginLeft: '2vh'*/ }}></img>
          </div>
         
        </div>
        <div className='TechSecBE'>
          <h3 style = {{marginBottom: '0.5em', color:'rgb(65, 65, 65)'}}> Backend </h3>
          {/* <br></br> */}
          <div className='BEgrid'>
            <img src = {Node} style = {{height: '7.5vh', width: '10vh', backgroundSize: '100% 100%' }}></img>
            <img src = {Express} style = {{height: '7.5vh', width: '11/5vh', backgroundSize: '100% 100%'/*, marginLeft: '2vh'*/ }}></img>
            <img src = {Flask} style = {{height: '7.5vh', width: '7.5vh', backgroundSize: '100% 100%' /*, marginLeft: '2vh'*/}}></img>
            <img src = {Postgres} style = {{height: '7.5vh', width: '7.5vh', backgroundSize: '100% 100%'/*, marginLeft: '2vh'*/ }}></img>
            <img src = {MongoDB}style = {{height: '7.5vh', width: '15vh', backgroundSize: '100% 100%' /*, marginLeft: '2vh'*/ }}></img>
            <img src = {Moogoose}style = {{height: '7.5vh', width: '7.5vh', backgroundSize: '100% 100%' /*, marginLeft: '2vh' */}}></img>
            <img src = {NotNode} style = {{height: '7.5vh', width: '11.5vh', backgroundSize: '100% 100%'/*, marginLeft: '2vh'*/ }}></img>
            <img src = {Jest} style = {{height: '7.5vh', width: '7.5vh'/*, backgroundSize: '100% 100%', marginLeft: '2vh'*/ }}></img>
            <img src = {Pytest} style = {{height: '7.5vh', width: '7.5vh'/*, backgroundSize: '100% 100%', marginLeft: '2vh'*/}}></img>
          </div>
          
        </div>
        
        <div className='TechSecFE'>
          <h3 style = {{marginBottom: '0.5em', color:'rgb(65, 65, 65)'}}> Frontend </h3>
          <div className='FEgrid'>
            <img src = {Html} style = {{height: '6vh', width: '6vh', backgroundSize: '100% 100%'/*marginLeft: '2vh'*/ }}></img>
            <img src = {Css} style = {{height: '9vh', width: '6.75vh', backgroundSize: '100% 100%'}}></img>
            <img src = {reactImg} style = {{height: '7.5vh', width: '9vh', backgroundSize: '100% 100%' }}></img>
            <img src = {Boot} style = {{height: '7.5vh', width: '9vh', backgroundSize: '100% 100%'}}></img>
            <img src = {Dnd} style = {{height: '7.5vh', width: '11.5vh', backgroundSize: '100% 100%' }}></img>
            <img src = {vitest} style = {{height: '7.5vh', width: '7.5vh', backgroundSize: '100% 100%'}}></img>
          </div>
          
        </div>
        <div className='TechSecD'>
          <h3 style = {{marginBottom: '0.5em', color:'rgb(65, 65, 65)'}}>Design/Deployment</h3>
          <div className='Dgrid'>
            <img src = {Figma} style = {{height: '5em', width: '9em', backgroundSize: '100% 100%' }}></img>
            <img src = {Render} style = {{height: '5em', width: '10em', backgroundSize: '100% 100%' }}></img>
            <img src = {Github} style = {{height: '5em', width: '9em', backgroundSize: '100% 100%' }}></img>
            <img src = {Arduino} style = {{height: '5em', width: '7em', backgroundSize: '100% 100%', marginTop: '1%' }}></img>
          </div>
   
         
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
