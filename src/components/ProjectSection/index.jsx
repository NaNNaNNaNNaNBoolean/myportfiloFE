import React, { useState, useEffect } from 'react'
// require('intersection-observer');
import handleViewport from 'react-in-viewport';
import './style.css'
import './animation.css'
import './arm.css'
import { useNavigate } from 'react-router-dom';

const ProjectSection = (props) => {
    const [aniStyle, setAniStyle] = useState(false)
    const [vis,setVis] = useState(false)
    const { inViewport, forwardedRef, enterCount } = props;
    const [loading, setLoading] = useState(true)

    const nav = useNavigate()
    const handleClicksec = () => {
        nav('/Projects')
    }
    const handleClickDisplay =() => {
      nav('/projects/9')
    }
    const myStyle = {animationPlayState: aniStyle ? 'running' : '', display: aniStyle ? 'block' : 'none'}
    const invisableblock = {display: aniStyle ? 'none' : 'block', height:'100vh'}
    useEffect(()=>{
         if(inViewport){
         setAniStyle(true)
        //  onanimationend()
        //  setVis(true)
        }else{setAniStyle(false)}
    })
   
    const [projectSec, setProjects] = useState([]);
  
    useEffect(() => {
      async function loadProjects() {
          const response = await fetch("https://nmfportfilobe.onrender.com/projects/9");
          const data = await response.json();
          setProjects(data);
          setLoading(false);
      };
      loadProjects();
    }, [])

    const displayprojectfloat = () => {
      return(
        <div className='projecthighlightedinfo' id = 'boppingtime' style ={myStyle}>
        <h2>{projectSec.name}</h2>
        <h3>{ projectSec.subhead}</h3>
        <video controls src={projectSec.video} type="video/mp4" style={{display: 'flex',width: '100%', padding:'1vh'}}></video>
      </div>
      )
    }
    
  return (
    <div>
       <div className="viewport-block" ref={forwardedRef}>
            <div></div>
            <div style ={invisableblock}></div>
            <div className='dropdownani' >
              <div className='arm-container'style={myStyle} >
                <div className='armpart'></div>
                <div className='hand'>
                  <div className='handback' style={myStyle}>
                    <div className='lowerbackhand'></div>
                  </div>
                  <div className='handfront' style={myStyle}>
                  <div className='lowerfronthand'></div>
                  </div>
                </div>
                
              </div>
              <div className='projecthighlighteditem' id='bounceinbox' style ={myStyle}> 
              {/* <div className='questedit'><span className="material-symbols-outlined">question_mark</span></div> */}
              {/* <h2>{projectSec.name}</h2> */}
              {/* <button onClick={handleClickDisplay} className='goToProjects2' >see more about this project</button> */}
              </div>
              <div className='lightupbase' style={myStyle}  id='boxlightup'></div>
            </div>
         
            <div className='glitchcontainer' id = 'glitchin' style ={myStyle}>
              {loading ? <h2 className='loadingprojectlist' style={{color: 'aliceblue'}}><em >loading...</em></h2> : displayprojectfloat()}
              <div className='holographicProjector'style={myStyle}></div>
            </div>
           
            <div></div>
       </div>
       {/* <div className='lightupbase'></div> */}
       <footer>
            
            <div className='base'></div>
            <button  onClick={handleClicksec} className='goToProjects'><span className='glowing-txt'>SEE PROJECTS</span></button> 
            <div className='bottombase'></div>
       </footer>
    
    </div>
  )
}
  const ViewportBlock = handleViewport(ProjectSection, /** options: {}, config: {} **/);

    
  const Component = (props) => (
    // const invisableblock = {display: aniStyle ? 'none' : 'block', height:'100vh'}
    <div>
        <div style={{ height: '10vh' }}>
          <div className='projectsectitleback'>
             <h2 className='projectsectitle'>PROJECTS</h2>
          </div>
       
            {/* <h2>Scroll down to make component in viewport</h2> */}
        </div>

        <ViewportBlock /*onEnterViewport={() => console.log('enter')} onLeaveViewport={() => console.log('leave')*/ />
    </div>
)


export default Component
