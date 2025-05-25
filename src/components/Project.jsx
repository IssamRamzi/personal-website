import React from 'react'

import "./styles/Project.css"

const Project = (props) => {
    const title = props.title
    const description = props.description
    const link = props.link
  return (
    <div className='project'>
        <p className="title light">{title}</p>
        <p className='description gray'>{description}</p>

        <a href={link} target='_blank' className='green'>> Explore more</a>
    </div>
  )
}

export default Project