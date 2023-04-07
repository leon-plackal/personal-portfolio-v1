import {Link} from "react-router-dom"
import image2 from "../assets/KeyNinja.png"
import image1 from "../assets/portfoliov1.png"
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { GiPlainCircle } from 'react-icons/gi';

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

export default function Projects() {
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
        <div id="project-header">
            <p>My Latest Work</p>
            <h1 class="title">0.2 Recent Projects</h1>

            <div class="featured-project">
                <div class="image">
                <img src={image2} alt="KeyNinja" />
                </div>
                <div class="info">
                    <h3>Featured Project</h3>
                    <h2>Typing Game</h2>
                    <div class="featured-description">
                        <p>This typing game showcases CSS and JS tricks to create a live typing game with error detection, WPM count, timer options, theme changer, random words and div/span manipulation.</p>
                    </div>
                    <div class="tags">
                        <ul>
                            <li>JavaScript</li>
                            <li>CSS</li>
                            <li>HTML</li>
                        </ul>
                    </div>
                    <div class="featured-links">
                        <i class="fa-brands fa-github"></i>
                        <i class="fa-solid fa-up-right-from-square"></i>
                    </div>
                </div>
            </div>
            <div class="featured-project">
                <div class="image">
                <img src={image1} alt="KeyNinja" />
                </div>
                <div class="info">
                    <h3>Featured Project</h3>
                    <h2>Portfolio V1</h2>
                    <div class="featured-description">
                        <p>The first iteration of my Portfolio built with React and featuring a ThreeJS particle background. It also makes use of routing, light and dark mode, </p>
                    </div>
                    <div class="tags">
                        <ul>
                            <li>JavaScript</li>
                            <li>CSS</li>
                            <li>HTML</li>
                            <li>ReactJS</li>
                        </ul>
                    </div>
                    <div class="featured-links">
                        <i class="fa-brands fa-github"></i>
                        <i class="fa-solid fa-up-right-from-square"></i>
                    </div>
                </div>
            </div>

            <h3>Other Notable Work</h3>
            <div class="archive-tiles">
                <div class="tile"></div>
                <div class="tile"></div>
                <div class="tile"></div>
                <div class="tile"></div>
            </div>
        </div>
    </section>
    )
}
