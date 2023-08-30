import React from 'react'
import './style.css'
const AboutInfo = () => {
        return (
            <div className='grid-container'>
                <div className='fade-about-info-items'>
                    <p>Hello, I'm Nicole. I have a MEng in Electronic Engineering and a love of programming!</p>
                </div>
                <div className='me'>
                </div>
                <div className='fade-about-info-items-2' style={{ animationDelay: `1500ms` }}>
                <div className='paragintro'>
                    <p>Coding Langugues I know are C++, C#, JavaScript and Python. I'm always eager to learn more and improve!</p>
                    <p><b>*Please note this website is still a WIP many features are still to be added :) *</b></p>
                    <p><b>*Also please be patience, the API is run on a free render host so takes a few minutes to start up*</b></p>
                </div>
                </div>
            </div>
        )
}

export default AboutInfo
