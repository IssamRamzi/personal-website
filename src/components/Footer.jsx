import React from 'react'

const Footer = () => {
    const currYear = new Date().getFullYear();
    
  return (
    <footer>
        {console.log(currYear)}
        <p className='gray'>// Created by <strong><span className='green'>Issam</span></strong></p>
        <p className='gray'>// Copyright © Issam {currYear}</p>
    </footer>
  )
}

export default Footer