import React from 'react'
import './style.css'

const ProjectSection = () => {

    const handleClick = () => {
        nav('/Projects')
    }

  return (
    <div>
       <div className='ProjectView'>
            <div className='projecthighlighteditem' id='bouncein'></div>
            <div className='projecthighlightedinfo'></div>
       </div>
       <button  onClick={handleClick} className='goToProjects'  ><span className='glowing-txt'>SEE PROJECTS</span></button> 
        <h2>section is under development</h2>
    
    </div>
  )
}

export default ProjectSection
