import React, { useState, useEffect } from 'react'
// require('intersection-observer');
import handleViewport from 'react-in-viewport';
import './style.css'
import './animation.css'
import { useNavigate } from 'react-router-dom';

const ProjectSection = (props) => {
    const [aniStyle, setAniStyle] = useState(false)
    const [vis,setVis] = useState(false)
    const { inViewport, forwardedRef, enterCount } = props;

    const nav = useNavigate()
    const handleClicksec = () => {
        nav('/Projects')
    }
    const myStyle = {animationPlayState: aniStyle ? 'running' : '', display: aniStyle ? 'block' : 'none'}
    useEffect(()=>{
         if(inViewport){
         setAniStyle(true)
        //  onanimationend()
        //  setVis(true)
        }else{setAniStyle(false)}
    })
   
    const [projectSec, setProjects] = useState([]);
    const [loading,setLoading] = useState(true)
  
    useEffect(() => {
      async function loadProjects() {
          const response = await fetch("https://nmfportfilobe.onrender.com/projects/9");
          const data = await response.json();
          setProjects(data);
        //   setLoading(false);
      };
      loadProjects();
    }, [])
    
  return (
    <div>
       <div className="viewport-block" ref={forwardedRef}>
            <div></div>
            <div className='projecthighlighteditem' id='bounceinbox' style ={myStyle}> <h2>placeholder</h2>
            </div>
            <div className='projecthighlightedinfo' id = 'glitchin' style ={myStyle}>
                <h2>{projectSec.name}</h2>
                <h3>{ projectSec.subhead}</h3>
                <video controls autoPlay src={projectSec.video} type="video/mp4" style={{display: 'flex',width: '100%', padding:'1vh'}}></video>
            </div>
            <div></div>
       </div>
       <footer>
            <div className='base'></div>
            <button  onClick={handleClicksec} className='goToProjects' ><span className='glowing-txt'>SEE PROJECTS</span></button> 
       </footer>
    
    </div>
  )
}
  const ViewportBlock = handleViewport(ProjectSection, /** options: {}, config: {} **/);

    
  const Component = (props) => (
    <div>
        <div style={{ height: '10vh' }}>
        <h3>!!!!section is under development!!!</h3>
            {/* <h2>Scroll down to make component in viewport</h2> */}
        </div>
        <ViewportBlock /*onEnterViewport={() => console.log('enter')} onLeaveViewport={() => console.log('leave')*/ />
    </div>
)


export default Component