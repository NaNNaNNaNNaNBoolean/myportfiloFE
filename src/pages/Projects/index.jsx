import React, { useState, useEffect} from 'react'
import './style.css'
import {useNavigate } from 'react-router-dom'
import {ConvayBelt, ProjectList} from '../../components'
import Project from '../Project'
import $ from 'jquery';
// import {}
import './arm.css'

const Projects = () => {
  // const [onClickActive, setClickActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [projects, setProjects] = useState([])
  const [style, setStyle] = useState(false)
  const [LeftRight, setLeftRight] = useState(false)
  const [clickedbtn, setClickbtn] = useState(false)
  const [clicked, setClicked] = useState(false);
  const [projectId,setProjectId] = useState([]);
  const [count,setCount] = useState(0)
  const nav = useNavigate()

  const togglePopup = (id) => {
    setClicked(!clicked)
    setProjectId(id)
  }
  const handleLogoclick = () => {
    nav('/')
  }

  
  // document.getElementsByClassName
  // function handleUp() {
  //   //Check if there is another link above, if no, go to bottom
  //   if ($(".selected").prev("div").length > 0) {
  //     $(".selected")
  //       .removeClass("selected")
  //       .prev("div")
  //       .addClass("selected")
  //       .focus();
  //   } 
  //   else {
  //     $(".selected").removeClass("selected");
  //     $(".divSearchResults.focus div:last-child")
  //       .addClass("selected")
  //       .focus();
  //   }
  // }
  
  // function handleDown() {
  //   //Check if there is another link under, if no, go to top
  //   if ($(".selected").next("div").length > 0) {
  //     $(".selected")
  //       .removeClass("selected")
  //       .next("div")
  //       .addClass("selected")
  //       .focus();
  //   } 
  //   // else {
  //   //   $(".selected").removeClass("selected");
  //   //   $(".divSearchResults.focus span")
  //   //     .next()
  //   //     .addClass("selected")
  //   //     .focus();
  //   // }
  // }
  
  function handleRight() {
    // $(".projectitem div")
    //   // .blur()
    //   .removeClass("selected");
  
    if ($(".focus").next(".projectitem").length > 0) {

      $(".focus")
        .removeClass("focus")
        .next(".projectitem")
        .addClass("focus");
      $(".projectitem.focus div")
        .first()
        .addClass("selected")
        // .focus();
    } else {
      $(".focus")
        .removeClass("focus");
      $(".projectitem")
        .first()
        .addClass("focus");
      $(".projectitem div")
        .first()
        .addClass("selected")
      //   .focus();
    }
  }
  function handleLeft() {
    $(".projectitem div")
      // .blur()
      .removeClass("selected");
  
    if ($(".focus").prev(".projectitem").length > 0) {
      $(".focus")
        .removeClass("focus")
        .prev(".projectitem")
        .addClass("focus");
      $(".projectitem.focus div")
        .first()
        .addClass("selected")
        .focus();
    } else {
      $(".focus")
        .removeClass("focus");
      $(".projectitem")
        .first()
        .addClass("focus");
      // $(".projectitem div")
      //   .first()
      //   .addClass("selected")
      //   .focus();
    }
  }

    // if ($(".selected").length === 0) {
    // $(".projectitem")
    //   .first()
    //   .addClass("focus");
    // }
    if ($(".selected").length === 0) {
          $(".projectitem")
            .first()
            .addClass("focus");
          }
  useEffect(() => {
    
   
    async function loadProjects() {
        const response = await fetch("https://nmfportfilobe.onrender.com/projects");
        const data = await response.json();
        setProjects(data);
        setLoading(false);
        // console.log(data)
    };
    loadProjects();
  }, [])
  const handleGoToProject = () => {
  var idfind = $('.focus')[0]
  var newid = idfind.id
  togglePopup(newid)
  }
  const myStyle = {
    animationPlayState: style ? 'running' : '', 
    animation: LeftRight ? 'slide-left-click 3s linear forwards' : ''
  }
  // const robotStyle = {animationPlayState: clicked ? 'running' : '', display: clicked ? 'block' : 'none'}

  const myStyleList = {display: clicked ? 'block' : 'none'}

  const showPopup = () => {
    // console.log(clicked)
      if(clicked === true){
      return(
        <>
          <div className='overlay' style={myStyleList}></div>
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
      <>
      <div className='rowlist' >
      {
        arr.map((p) => { 
          return(
            <> 
              <div className='projectitem' key = {p.id} id ={p.id}>
              {/* <div className='projarm-container' style={robotStyle}>
                <div className='projarmpart' style={robotStyle}></div>
                <div className='projhand'>
                  <div className='projhandback'>
                    <div className='projlowerbackhand'></div>
                  </div>
                  <div className='projhandfront'>
                  <div className='projlowerfronthand'></div>
                  </div>
                </div>
                
              </div> */}
                <div className='liltagsticker'>
                <div /*className='projectitem'*/>
                  {/* <p className='plabel'>P</p> */}
                  <h3 className='clickproject' ><button onClick={() => togglePopup(p.id)} >{p.name}</button></h3>
                </div>
                {/* <p className="subheadingdetails">{p.subhead}</p> */}
                </div>
             
              </div>
              {showPopup()}
            </>
          )

        })
      }
    </div>
      </>
    
    )
  }
  const messagemove = () => {
    if(clickedbtn === false){
      return (<p>USE THE ARROW KEYS OR CLICK TO VIEW A PROJECT</p>)
    }else{
      if(LeftRight === false){
        return (<p> FORWARD </p>)
      }else{return (<p> BACKWARD </p>)}
    }

  }
  function displayProjects() {
    return (
      <div className='projectspagecontainer'>
        <div className='topbot'>
          <div className='logoproj'>
            <button className='mainbackbtn' onClick={handleLogoclick}><span>Back</span></button>
            <div className='projectpageheader' id ='bouncein'>
              <h1 className='projectpageBanner'>PROJECTS</h1>
            </div> 
          </div>
        </div>
        <div className='convayabelt'>
          <div className='list' style ={myStyle}>
            {displayProjectList()}
          </div>
        <div className='CB-contianer'>
          <ConvayBelt />
        </div>
        <div className='CB-contianer2'>
          <ConvayBelt />
        </div>
        <div className='CB-contianer3'>
          <ConvayBelt />
        </div>
        </div>
        <div className='footer'>
          <footer className='Controllerarea'>
            <div className='Controls'>
              <div className='messageboard'>
                <div className='movedisplay'><p id='scrolltext'>{messagemove()}</p></div>
              </div> 
              <div className='controlscontainer'>
                {/* <button className='ControlsUp' onClick={handleUp}><span className="material-symbols-outlined" style={{rotate:'90deg'}}>arrow_back_ios</span></button> */}
                <div style={{padding: '1.4em'}}></div>
                <div className='leftandright'>
                  
                   <button className='ControlsLeft' onClick={handleLeft}><span className="material-symbols-outlined">arrow_back_ios</span></button>
                <button className='ControlsRight'onClick={handleRight}><span className="material-symbols-outlined">arrow_forward_ios</span></button>
                </div>
               
                {/* <button className='ControlsDown'onClick={handleDown}><span className="material-symbols-outlined" style={{rotate:'90deg'}}>arrow_forward_ios</span></button> */}
              </div>
              <button className='selectorbtn' onClick={() => handleGoToProject()}>GO</button>
                    {/* <p className='notice'>*This page is still under development*</p> */}
            </div>
          </footer>
        </div>

      </div>

    )
  } 
  return loading ? <h2><em>loading...</em></h2> : displayProjects();
}

export default Projects
