import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './style.css'
 /*want to make it look cool, Like a video game or a factory line*/
const ProjectList = (props) => {
//  console.log( props)
  const [projects, setProjects] = useState([]);
  const [loading,setLoading] = useState(true)

  useEffect(() => {
    async function loadProjects() {
        const response = await fetch("https://nmfportfilobe.onrender.com/projects");
        const data = await response.json();
        setProjects(data);
        setLoading(false);
    };
    loadProjects();
  }, [])

const arr = Array.from(projects)
  function displayProjectList() {
    return (
    <div className='rowlist' {...props.style} >
      {
        projects.map((p,idx) => { 
          return(
            <div className='projectitem' key = {idx}>
              <h3 className='clickproject'><span><Link className='linkeffect'/*style = {{color: '#fff'}}*/ to={`/projects/${p.id}`} >{p.name}</Link></span></h3>
              <p className="subheadingdetails">{p.subhead}</p>
          </div>
          )

        })
      }
    </div>
    )
  }
  return loading ? <h2 className='loadingprojectlist'><em >loading...</em></h2> : displayProjectList();
}

export default ProjectList
