import {Link} from "react-router-dom"
import image2 from "../assets/KeyNinja.png"
import image1 from "../assets/portfoliov1.png"
import image3 from "../assets/denoiser_thumb.png"
import ArtiGenTmb from "../assets/ArtiGenThumb.png"
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { GiPlainCircle } from 'react-icons/gi';
import { BiLink } from 'react-icons/bi';


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
            <p className="subheading">My Latest Work</p>
            <h1 class="title">0.2 Recent Projects</h1>
            {/* ArtiGen */}
            <div class="featured-project">
                <div class="image">
                <img src={ArtiGenTmb} alt="Portfolio V1" />
                </div>
                <div class="info">
                    <h3>Featured Project</h3>
                    <h2>ArtiGen AI Art App</h2>
                    <div class="featured-description">
                        <p>This website makes use of the OpenAI API to allow users to create their own artworks via a prompt and have the choice to add it to my community showcase for everyone to see. The site utilizes the Vite framework and additionally MongoDB, Tailwind CSS, Express and cloud image hosting. 
                        The app is deployed with Vercel and Render.
                        </p>
                    </div>
                    <div class="tags">
                        <ul>
                            <li>Vite</li>
                            <li>TailwindCSS</li>
                            <li>Cloudinary</li>
                            <li>ReactJS</li>
                            <li>Vercel</li>
                        </ul>
                        <div id="taglink">
                            <a href='https://artigenai.vercel.app/'>
                                <BiLink id='socials-icon' />
                            </a>
                            <a href='https://github.com/leon-plackal'>
                                <AiFillGithub id='socials-icon' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* KeyNinja */}
            <div class="featured-project">
                <div class="image">
                <img src={image2} alt="KeyNinja" />
                </div>
                <div class="info">
                    <h3>Featured Project</h3>
                    <h2>Typing Game</h2>
                    <div class="featured-description">
                        <p>This project showcases CSS and JS tricks to create a live typing game with error detection, WPM count, timer options, randomized word generation and div/span manipulation.</p>
                    </div>
                    <div class="tags">
                        <ul>
                            <li>JavaScript</li>
                            <li>CSS</li>
                            <li>HTML</li>
                        </ul>
                        <div id="taglink">
                            <a href='https://keyninjatype.netlify.app/'>
                                <BiLink id='socials-icon' />
                            </a>
                            <a href='https://github.com/leon-plackal'>
                                <AiFillGithub id='socials-icon' />
                            </a>
                        </div>
                    </div>
                    
                </div>
            </div>
            

            <h3 className="subheading">Project Archive</h3>
            <div class="archive-tiles">
                <div className="tile-row">
                    
                        <div class="tile">
                            <div class="archiveinfo">
                                <h6>Simple Image Denoiser</h6>
                                <p>Image processing with Python</p>
                            </div>
                            <a href='https://github.com/leon-plackal/simple_denoiser'>
                                        <AiFillGithub id='socials-icon2' />
                            </a>
                            <div class="archiveimage">
                                <img src={image3} alt="xxxx"/>
                            </div>
                        </div>
                    
                        <div class="tile">
                            <div class="archiveinfo">
                                <h6>Portfolio V1</h6>
                                <p>The first iteration of my Portfolio built with React</p>
                            </div>
                            <a href='https://github.com/leon-plackal'>
                                        <AiFillGithub id='socials-icon2' />
                            </a>
                            <div class="archiveimage">
                                <img src={image1} alt="xxxx"/>
                            </div>
                        </div>
                        <div class="tile"></div>
                </div>
                <div className="tile-row">
                    <div class="tile"></div>
                </div>
            </div>
        </div>
    </section>
    )
}
