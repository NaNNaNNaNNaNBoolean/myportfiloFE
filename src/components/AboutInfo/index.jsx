import React from 'react'
import './style.css'
import Techstack from '../Techstack'
import { useNavigate } from 'react-router-dom'

const AboutInfo = () => {
    const nav = useNavigate()
    const handleClick = () => {
      nav('/Projects')
    }
        return (
            <div className='grid-container-about'>
                <div className='fade-about-info-items'>
                    <p>Hi! I'm Nicole.</p>
                    <p>I have a MEng in Electronic Engineering and a passion for programming! I love trying out random ideas and experimenting with my code and I'm all about continuous improvement. I'm currently teaching myself GoLang. </p>
                    <p>Apart from coding, I love to draw, binge movies, play boardgames and as well as playing video games, I'm also developing my own! </p>
                    <p>I will be slowly adding my projects here as I develop this page further.</p>
                    {/*During my time at La Fosse Academy, I gained and improved my skills in Javascript, Python, and SQL/noSQL. At university, where I got my MEng in Electronic Engineering, I gained proficiency in C++ and C#. This training course was a nice way to further improve my coding skills in new languages, as I am all about continuous improvement and I love learning new skills. And that's what I did, I learnt about server side and client side, deploying RESTful APIs in both Node.js and Flask, testing in both, using Pytest and Jest, using both SQL databases and NoSQL databases and creating engaging client side pages in React.js. I found it quite fun and easy to learn, I was a quick study achieving over 90% in all my assessments. 

                    In all the group projects we did, we used Agile principles from planning to deployment, such as, brainstorming using Miro, creating our MVPs and backlog, creating our Figma designs, allocating tasks to team members, and having a daily stand up to see where we all were current at in our progress. This made every project successful!  One thing I personally did was create a to do list with the current tasks which I would post into the group chat in the mornings, which became an easier reference than switching to the Trello board all the time, as well as having us all on a group call, which made it very easy to ask for help and debug any issues as a team. I always worked as a Full Stack Developer in these projects as well as being the group debugger, finding the issues quickly :) I received positive feedback from my team about this way of working, I believe this may have played a part in me getting spotlighted at the end of the course for not only my coding skills but my humanity and how I always helped out anyone without judgement no matter their coding level. I always keep the mood up in all my teams, breaking the tension when it comes to working with new people, as well as making sure everyone got to contribute greatly to the project. */}
                    {/* <p><b>Notice: </b> <u>Development on this  has been paused for this current week due to me being on hoilday :)</u> </p> */}
                    <p><b>*Please note this website is still a WIP many features/versions are still to be added :)*</b></p>
                </div>
                <div className='imglinks'>
                    <div className='me'></div>
                    <div className='item3'>
                    <button onClick={handleClick} className='goToProjects'><span>See Projects</span></button>
                    <h3 className='contactme'>Contact Me</h3>
                        <div className='connectwithme'> 
                            <button className='linkedinbtn' onClick={(e) => {e.preventDefault(); window.location.href='https://www.linkedin.com/in/nicole-french-a52840173/';}}></button>
                            <button className='githubbtn' onClick={(e) => {e.preventDefault(); window.location.href='https://github.com/NaNNaNNaNNaNBoolean';}}></button>
                        </div>
                    </div>
                </div>
                <div className='fade-about-info-items-2' style={{ animationDelay: `1500ms` }}>
                <div className='paragintro'>
                   <Techstack />
                   <p><b>*Also, please be patient, the API is run on a free render host so takes a few minutes to start up*</b></p>
                </div>
                </div>
            </div>
        )
}

export default AboutInfo
