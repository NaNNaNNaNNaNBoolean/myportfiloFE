import React, { useEffect } from 'react'
import { ParallaxProvider } from 'react-scroll-parallax';
import { useParallax } from 'react-scroll-parallax';
import './scrollerArrows.css'
import './style.css'
import Techstack from '../Techstack'
import ProjectSection from '../ProjectSection';
import { useNavigate } from 'react-router-dom'

const AboutInfo = () => {
    
    const nav = useNavigate()
    const handleClick = () => {
      nav('/Projects')
    }
    const { ref } = useParallax({ speed: 15});

    return (
        <> 
            <section className='sectionabouteffect' ref={ref} style={{margin:'0'}}>
                <div className='fade-about-info-items'>
                    <p> With a passion for tech, self-development and the creative arts. I strive to be a part of something that will help me further myself and my skills as well as also having a meaningful impact on the world around. I'm all about continuous improvement! I'm always trying out random ideas and experimenting with my code to see how I can make it come to life!  </p>
                    <br></br>
                    <p>Since graduating, with my MEng in Electronic Engineering, I have completed a 12 week intensive training course with La Fosse Academy expanding my technical knowledge and further improving my skill sets when it comes to software development!</p>
                    <br></br>
                    <p>This portfolio will continue to be an on going project as my skills develop and I add more features to this page to showcase that :)</p>
                    {/*During my time at La Fosse Academy, I gained and improved my skills in Javascript, Python, and SQL/noSQL. At university, where I got my MEng in Electronic Engineering, I gained proficiency in C++ and C#. This training course was a nice way to further improve my coding skills in new languages, as I am all about continuous improvement and I love learning new skills. And that's what I did, I learnt about server side and client side, deploying RESTful APIs in both Node.js and Flask, testing in both, using Pytest and Jest, using both SQL databases and NoSQL databases and creating engaging client side pages in React.js. I found it quite fun and easy to learn, I was a quick study achieving over 90% in all my assessments. 

                    In all the group projects we did, we used Agile principles from planning to deployment, such as, brainstorming using Miro, creating our MVPs and backlog, creating our Figma designs, allocating tasks to team members, and having a daily stand up to see where we all were current at in our progress. This made every project successful!  One thing I personally did was create a to do list with the current tasks which I would post into the group chat in the mornings, which became an easier reference than switching to the Trello board all the time, as well as having us all on a group call, which made it very easy to ask for help and debug any issues as a team. I always worked as a Full Stack Developer in these projects as well as being the group debugger, finding the issues quickly :) I received positive feedback from my team about this way of working, I believe this may have played a part in me getting spotlighted at the end of the course for not only my coding skills but my humanity and how I always helped out anyone without judgement no matter their coding level. I always keep the mood up in all my teams, breaking the tension when it comes to working with new people, as well as making sure everyone got to contribute greatly to the project. */}
                    {/* <p><b>Notice: </b> <u>Development on this  has been paused for this current week due to me being on hoilday :)</u> </p> */}
                    <br></br>
                    {/* <p><b>*Currently working on the moblie verison of this site*</b></p> */}
                    <p style={{ color:'#B026FF'}}><b>*Also, please be patient, the API is run on a free render host so takes a few minutes to start up*</b></p>
                    <br></br>
                    <button  onClick={handleClick} className='goToProjects'><span className='glowing-txt'>SEE PROJECTS</span></button>
                </div>
                
                <div className='me'></div>
    
                <div className='arrowcontainer'>
                    <svg id='techarrows' className="arrows">
                        <path class="a1" d="M0 0 L30 32 L60 0"></path>
                        <path class="a2" d="M0 20 L30 52 L60 20"></path>
                        <path class="a3" d="M0 40 L30 72 L60 40"></path>
                    </svg>
                </div>
            
            </section>
                <section className='techstacksection' id='techsec' ref={ref}>
                    <div className='fade-about-info-items-2' style={{ animationDelay: `1500ms` }}>
                        <div className='paragintro'>
                            <Techstack />
                        </div>
                        <div className='arrowcontainer'>
                        <svg className="arrows">
                            <path className="a1" d="M0 0 L30 32 L60 0"></path>
                            <path className="a2" d="M0 20 L30 52 L60 20"></path>
                            <path className="a3" d="M0 40 L30 72 L60 40"></path>
                        </svg>
                    </div>
                    </div>
            </section>
            <section className='projectpagelink' ref={ref}>  
                <ProjectSection />
            </section>
        </> 
    )
}

export default AboutInfo
