import React, { useState, useEffect } from 'react';
import './style.css'
import './popup.css'
import Project from '../../pages/Project'
 /*want to make it look cool, Like a video game or a factory line*/
const ProjectList = (props) => {
  const [projects, setProjects] = useState([]);
  const [loading,setLoading] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [projectId,setProjectId] = useState([]);

  const togglePopup = (id) => {
    setClicked(!clicked)
    setProjectId(id)
  }

  useEffect(() => {
    async function loadProjects() {
        const response = await fetch("https://nmfportfilobe.onrender.com/projects");
        const data = await response.json();
        setProjects(data);
        setLoading(false);
    };
    loadProjects();
  }, [])
 const myStyleList = {display: clicked ? 'block' : 'none'}
  const showPopup = () => {
    // console.log(clicked)
      if(clicked === true){
      return(
        <>
          <div className='overlay' style={myStyleList}>  </div>
          <div className="popup-container" style={myStyleList}>
            <div className="popup">
              <button className="close-popup" onClick={togglePopup}>X</button>
              <Project id ={projectId} />
            </div>
          </div>
        </>
      )
    } 
  }

const arr = Array.from(projects)
  function displayProjectList() {
    return (
      <div>
      <div className='rowlist' {...props.style} >
      {
        arr.map((p) => { 
          return(
            <> 
              <div className='projectitem' key = {p.id}>
                <div className='liltagsticker'>
                  <div className='packagelabel'>
                    {/* <p className='plabel' >P</p> */}
                    <h3 className='clickproject' ><button onClick={() => togglePopup(p.id)} >{p.name}</button></h3>
                  </div>
                 
                  <p className="subheadingdetails">{p.subhead}</p>
                </div>
               
              </div>
              {showPopup()}
              {/* <div className="popup-container" style={myStyle}>
                  <div className="popup">
                      <button className="close-popup" onClick={togglePopup}>X</button>
                      <div className='popup-content'>
                        <Project id ={projectId} />
                      </div> 
                  </div>
              </div> */}
            </>
          )

        })
      }
    </div>
      </div>
    
    )
  }
  return loading ? <h2 className='loadingprojectlist'><em >loading...</em></h2> : displayProjectList();
}

export default ProjectList
