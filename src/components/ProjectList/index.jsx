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
  return (
      <div className='rowlist' {...props.style} >
        {
          projects.map((p,idx) => { 
            return(
              <div className='projectitem' key = {idx}>
                <h3 className='clickproject'><span><Link to={`/projects/${p.id}`} >{p.name}</Link></span></h3>
                <p className="subheadingdetails">{p.subhead}</p>
            </div>
           )

          })
        }
      </div>

  )
}

export default ProjectList
