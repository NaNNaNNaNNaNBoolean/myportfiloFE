import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import './style.css'

const Project = (id) => {
  const [loading, setLoading] = useState(false);
  const [project, setProject] = useState({});
  const [likeNumber, setLikeNumber] = useState()
       
      async function like(id,value) {
        const options = {
            method: "PATCH",
            headers: { 'Content-Type': 'application/json' },    
            body: JSON.stringify({
                id: id,
                project_likes: value
            })
        }
        const response = await fetch(`https://nmfportfilobe.onrender.com/projects/${id}`, options)
        const body = await response.json()
        setLikeNumber(body.likes)
      }     
        
  useEffect(() => {
    setLoading(true);  
    async function loadProject() {
        const response = await fetch(`https://nmfportfilobe.onrender.com/projects/${id.id}`);
        const data = await response.json();
        setProject(data);
        setLikeNumber(data.likes);
        setLoading(false);
    };
    loadProject();
       
  },[]) 

    if(project.img === undefined){
        return null
    }

    const myStyle={
        backgroundImage:`url('${project.img}')`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 'auto',
        width: '40%',
        minHeight: '20em',
        backgroundSize: '100% 100%'
    };
    
    const imgOrVid= () => {
        if(project.img === null){
        return  <video className='projvid' controls autoPlay src={project.video} type="video/mp4" width="50%" height="50%" style={{display:'flex',margin:'auto', justifyContent:'center', alignItems: 'center'}}></video>
    }else{ return <div className='projimg' style={myStyle}></div>}
    }
    
    // const $this = project.description
    const formatedText = project.description.replace(/<br\s*\\?>/g, '\r\n\.<br>')
    const finishedText = formatedText.split(/[\r\n]+/).map(line => <div>{line}</div>)
     //.html($this.text().replace(/\.\s/g, '.<br>'))
    // var newText = document.getElementById('text')
    // newText.html(newText.text().replace(/\.\s/g, '.<br>'));
    //.replace(/<br\s*\\?>/g, "\r\n");
    // $('span').html($('span').text().replace(/\.\s/g, '.<br>'))}
    function displayProject() {
        return (
            <div className="popup-content">
                <div className='neontitleback'>
                    <h1 className="project-title">{project.name}</h1>
                </div>
                <h2 className='projectsub'>{project.subhead}</h2>
                <div className='infocontainer'>
                   <div className='likesection' >
                    <div className='likecontainershape'>
                         <button className='likebtn' onClick={() =>like(id.id, 1)} ></button>
                        <div className="likes-counter"> {likeNumber} </div>
                    </div>
                       
                    </div>   
                    <div id = 'text'className='projectinfo' ><div>{finishedText}</div></div>
                    {imgOrVid()}
                    
                </div>
                
            </div>
        ) 
    }

    return loading ? <h2><em>Loading...</em></h2> : displayProject();
}

export default Project
