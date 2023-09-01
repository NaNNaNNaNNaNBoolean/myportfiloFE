import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './style.css'

const Project = () => {
  const [loading, setLoading] = useState(false);
  const [project, setProject] = useState({});
  const { id } = useParams()

  
    async function like(id,value) {
        const options = {
            method: "PATCH",
            headers: { 'Content-Type': 'application/json' },    
            body: JSON.stringify({
                id: id,
                project_likes: value
            })
        }
        const response = await fetch(`https://nmfportfilobe.onrender.com/projects/${id}`, options);
        const data = await response.json();

        async function loadProject() {
            const response = await fetch(`https://nmfportfilobe.onrender.com/projects/${id}`);
            const data = await response.json();
            setProject(data);
            setLoading(false);
        };

        loadProject();
    }   

    useEffect(() => {
        setLoading(true);
        async function loadProject() {
            const response = await fetch(`https://nmfportfilobe.onrender.com/projects/${id}`);
            const data = await response.json();
            setProject(data);
            setLoading(false);
        };

        loadProject();

    }, [])
    if(project.img === undefined){
        return null
    }

    const myStyle={
        backgroundImage:`url('${project.img}')`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 'auto',
        // width: '20em',
        width: '40%',
        // maxHeight: '20em',
        minHeight: '20em',
        backgroundSize: '100% 100%',
        // backgroundSize: 'cover'
     
    };
    const imgOrVid= () => {
        if(project.img === null){
        return  <video className='projvid' controls autostart autoPlay src={project.video} type="video/mp4"></video>
    }else{ return <div className='projimg' style={myStyle}></div>}
    }
    
    function displayProject() {
        return (
            <div className="project-container">
                <div className='neontitleback'>
                    <h1 className="project-title">{project.name}</h1>
                </div>
                <h2 className='projectsub'>{project.subhead}</h2>
                <div className='infocontainer'>
                   
                    <p className='projectinfo'><span>{project.description}</span></p>
                    {imgOrVid()}
                    <div className='likesection'>
                        <button className='likebtn' onClick={() => like(id, 1)}></button>
                        <span className="likes-counter"> {project.likes} </span>
                    </div>   
                </div>
                <Link className = "backbtn" to="/projects"> Back </Link>
                
            </div>
        ) 
    }

    return loading ? <h2><em>Loading...</em></h2> : displayProject();
}

export default Project
