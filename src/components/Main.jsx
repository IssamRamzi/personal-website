import React from 'react'
import "./styles/Main.css"


const Main = () => {
  return (
    <div className='main section'>
        <h3 className='heyo green' style={{marginBottom:"30px"}}>Heyyoo :3</h3>
        <p className='desc'>Hey there! I'm <strong><span className='light'>Issam</span></strong>, a developer with a passion for C++, Graphics Programming, and much more.</p>

        <p className='list-title green'>● Skills</p>
        <div className="skills">
            <ul>
                <p className='light'>Languages : </p>

                <li className='white'>&gt; C++</li>
                <li className='white'>&gt; Java</li>
                <li className='white'>&gt; Python</li>
                <li className='white'>&gt; Javascript</li>
                <li className='white'>&gt; ...</li>
            </ul>


            <ul>
                <p className='light'>Technologies : </p>

                <li className='white'>&gt; Linux</li>
                <li className='white'>&gt; OpenGL</li>
                <li className='white'>&gt; JavaFX</li>
                <li className='white'>&gt; React</li>
                <li className='white'>&gt; ...</li>
            </ul>
        </div>

        <p className='list-title green'>● Current Projects</p>
        <div className="current-projects">
            <p className='white'>&gt; <a href="https://github.com/IssamRamzi/Crock" target='_blank' className='light'>Crock Engine : </a>A game engine built with OpenGL.</p>
            <p className='white'>&gt; <a href="https://github.com/IssamRamzi/AutomateSimulation" className='light'>Simulmata : </a>An automata simulation built with Raylib.</p>

        </div>

        <p className='list-title green'>● Contact</p>
        <div className="contact">
            <p className='white'>Feel free to reach me out : </p>
            <p className='white'>Discord : <a className='light'>Kefelle</a></p>
            <p className='white'>Github : <a href="https://www.github.com/IssamRamzi" target='_blank' className='light'>IssamRamzi</a></p>
            <p className='white'>Linkedin : <a href="https://www.linkedin.com/in/issambenahmed" target='_blank' className='light'>IssamRamzi</a></p>
        </div>

        <p className='list-title green'>● Nerdy Bits</p>
        <section className='fun-section'>
        <ul>
            <li className='white'>&gt; I whisper “segmentation fault” when I want to crash the mood.</li>
            <li className='white'>&gt; My love language is well-indented code.</li>
            <li className='white'>&gt; I once tried to fix a bug... it fixed me instead.</li>
            <li className='white'>&gt; I use Vim... but I can't quit it.</li>
        </ul>
        </section>



    </div>
  )
}

export default Main