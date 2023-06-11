import './App.css'
import Work from './Work.tsx'
import ProfilePic from '../public/ProfilePic.jpg'
import { useState } from 'react'




function App() {
  const [show,setShow] = useState(false)
  function Mail() {

    if(show) {
      return (
        <div onClick={()=>setShow(false)} className='social'>
          <a href='#contact' className='mail'>
            <i className="fa-solid fa-envelope"></i>
            <p>laangryanas@gmail.com</p>
          </a>
        </div>
      )
    } else {
      return (
      <div onClick={()=>setShow(true)} className='social'>
        <a href='#contact' className='mail'>
        <i className="fa-solid fa-envelope"></i>
        <p>Gmail</p>
        </a>
      </div>
      )
    }
  }

  return (
    <>
    <div id='navbar'>
      <ul>
        <li><a className='nav-link' href='#hi'>Hi</a></li>
        <li><a className='nav-link' href='#work'>Work</a></li>
        <li><a className='nav-link' href='#contact'>Contact</a></li>
      </ul>
    </div>
    <div id='hi'>
      <div id='hi-pic'>
      <h1 id='intro'>Hi, I'm <i id='first-i' className="fa-solid fa-code"></i><em><a 
      href='https://www.linkedin.com/in/anas-laangry-965220278/'
      target='_blank'>Anas</a></em><i id='second-i' className="fa-solid fa-code"></i></h1>
      <img id='profile-pic' src={ProfilePic}></img>
      </div>
      <div id="hi-text">
        <p>I create websites with <em>HTML</em>, <em>CSS</em>, and <em>Javascript</em></p>
        <p>(and <em>more</em>!)</p>
        </div>
      </div>
    <div id='work'>
      <h1>Some of my work:</h1>
      <Work />
    </div>
    <div id='contact'>
        <div className='social'>
      <a href='https://www.linkedin.com/in/anas-laangry-965220278/' target='_blank'>
          <i className="fa-brands fa-linkedin"></i>
        <p>Linkedin</p>
      </a>
      </div>
      <Mail/>
      <div className='social'>
        <a href='https://github.com/ApixNova' target='_blank'>
        <i className="fa-brands fa-github"></i>
        <p>GitHub</p>
        </a>
      </div>
    </div>
    </>
  )
}

export default App