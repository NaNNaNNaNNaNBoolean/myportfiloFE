import React, { useState, useEffect } from 'react'
// require('intersection-observer');
import handleViewport from 'react-in-viewport';
import './style.css'
import './animation.css'

const ProjectSection = (props) => {
    const [aniStyle, setAniStyle] = useState(false)
    const [vis,setVis] = useState(false)
    const { inViewport, forwardedRef, enterCount } = props;
    const handleClick = () => {
        nav('/Projects')
    }
    const myStyle = {animationPlayState: aniStyle ? 'running' : '', display: aniStyle ? 'block' : 'none'}
    useEffect(()=>{
         if(inViewport){
         setAniStyle(true)
        //  setVis(true)
        }else{setAniStyle(false)}
    })
   
   

  return (
    <div>
       <div className="viewport-block" ref={forwardedRef}>
            <div className='projecthighlighteditem' id='bounceinbox' style ={myStyle}></div>
            <div className='projecthighlightedinfo'></div>
       </div>
       <button  onClick={handleClick} className='goToProjects' ><span className='glowing-txt'>SEE PROJECTS</span></button> 
        <h2>section is under development</h2>
    
    </div>
  )
}
  const ViewportBlock = handleViewport(ProjectSection, /** options: {}, config: {} **/);

    
  const Component = (props) => (
    <div>
        <div style={{ height: '20vh' }}>
            {/* <h2>Scroll down to make component in viewport</h2> */}
        </div>
        <ViewportBlock onEnterViewport={() => console.log('enter')} onLeaveViewport={() => console.log('leave')} />
    </div>
)


export default Component
