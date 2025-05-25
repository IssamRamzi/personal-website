import React from 'react'
import "./styles/Showcase.css"
import Project from './Project'

const Showcase = () => {
  return (
    <div className='section'>
        <h3 className='green'>My Projects : </h3>
        <div className="showcase">
        <Project title="Crock Engine" description="An OpenGL based game engine written in C++." link="https://www.github.com/IssamRamzi/Crock"/>
        <Project title="Crock Engine" description="An OpenGL based game engine written in C++." link="https://www.github.com/IssamRamzi/Crock"/>
        <Project title="Crock Engine" description="An OpenGL based game engine written in C++." link="https://www.github.com/IssamRamzi/Crock"/>
        </div>
        
    </div>
  )
}

export default Showcase