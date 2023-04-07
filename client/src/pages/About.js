import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { GiPlainCircle } from 'react-icons/gi';
import {Link} from "react-router-dom"
import Tabs from '../Tabs';

function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
  }// function to toggle between light and dark theme
  function toggleTheme() {
   if (localStorage.getItem('theme') === 'theme-dark'){
       setTheme('theme-light');
   } else {
       setTheme('theme-dark');
   }
  }// Immediately invoked function to set the theme on initial load
  (function () {
   if (localStorage.getItem('theme') === 'theme-dark') {
       setTheme('theme-dark');
   } else {
       setTheme('theme-light');
   }
  })();

export default function About() {
    return (
        <section id="project" class="container">
             <div class="left-bar">
                <button onClick={toggleTheme}><GiPlainCircle/> THEME</button>
            </div>
            <div class="right-bar">
                <div id="links">
                  <Link to="/projects" className="home-links"><p>PROJECTS</p></Link>
                  <Link to="/about" className="home-links"><p>ABOUT</p></Link>
                  <Link to="/" className="home-links"><p>HOME</p></Link>
                </div>
                <div id="socials">
                  <a href='https://github.com/leon-plackal'>
                    <AiFillGithub id='socials-icon' />
                  </a>
                    
                  <AiFillLinkedin id='socials-icon'/>
                 </div> 
            </div>
            <p>Most of my work resides within the web development scene. Here are some technologies I have been working with recently:</p>
            <ul>
                <li>React</li>
                <li>Javascript</li>
                <li>MongoDB</li>
                <li>CSS</li>
                <li>HTML</li>
            </ul>
            
            <p>However I also have experience in desktop and web app development with these technologies:</p><ul>
                <li>Java</li>
                <li>C#</li>
                <li>Electron</li>
                <li>.NET</li>
            </ul>

            <div className="App">
                <Tabs />
            </div>
        </section>
    )
}
