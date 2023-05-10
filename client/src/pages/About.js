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

            <div id='aboutheader'>
                <p className='subheading'>What I Offer</p>
                <h1 class="title">0.1 About Me</h1>
            </div>

            <div id='aboutcontent'>
            <p>Hello! My name is Leon. I have been interested in coding and the general computer science field since a young age. I am always seeking to add new features and skills to my toolkit, and am always looking to put it into use in my projects. Apart from computer science, I also have a good eye for design principles and creating user friendly UI/UX.</p>

            <p>Most of my work resides within the web development scene. Here are some technologies I have been working with recently:</p>
            <ul>
                <li>React</li>
                <li>Javascript</li>
                <li>MongoDB</li>
                <li>Python</li>
                <li>Express</li>
            </ul>
            
            <p>However I also have experience in desktop and web app development with these technologies:</p><ul>
                <li>Java</li>
                <li>MySQL</li>
                <li>Vite</li>
                <li>Vercel, Netlify, Render</li>
            </ul>
            <p>My other interests also include machine learning and utilising artificial intelligence to make our lives easier and more effcient. Nice to meet you!</p>
            <div id="tabdiv">
                <h3 className='subheading'>Places I've worked</h3>
                <Tabs />
            </div>
            </div>
        </section>
    )
}
