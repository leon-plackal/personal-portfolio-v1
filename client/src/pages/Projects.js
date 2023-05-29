import { Link } from "react-router-dom"
import image2 from "../assets/KeyNinja.png"
import image1 from "../assets/portfoliov1.png"
import image3 from "../assets/denoiser_thumb.png"
import ArtiGenTmb from "../assets/ArtiGenThumb.png"
import AceResume from "../assets/home2.jpg"
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { GiPlainCircle } from 'react-icons/gi';
import { BiLink } from 'react-icons/bi';


function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}// function to toggle between light and dark theme
function toggleTheme() {
    if (localStorage.getItem('theme') === 'theme-dark') {
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
                <button onClick={toggleTheme}><GiPlainCircle /> THEME</button>
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
                    <a href='https://au.linkedin.com/in/leon-plackal'>
                        <AiFillLinkedin id='socials-icon' />
                    </a>

                </div>
            </div>
            <div id="project-header">
                <p className="subheading">My Latest Work</p>
                <h1 class="title">0.2 Recent Projects</h1>
                {/* AceResume */}
                <div class="featured-project">
                    <div class="image">
                        <img src={AceResume} alt="KeyNinja" />
                    </div>
                    <div class="info">
                        <h3>Featured Project</h3>
                        <h2>AceResume</h2>
                        <div class="featured-description">
                            <p>This React project features a resume building application with Chat GPT integration to assist the building process and provide smart recommendations to the user. It also allows for template switching, exporting to PDF, and some text editing functionality via the TipTap editor. The project makes use of redux, bootstrap, and OpenAi API.</p>
                        </div>
                        <div class="tags">
                            <ul>
                                <li>JavaScript</li>
                                <li>CSS</li>
                                <li>Bootstrap</li>
                                <li>OpenAI API</li>
                            </ul>
                            <div id="taglink">
                                <a href='https://github.com/leon-plackal/AceResume'>
                                    <AiFillGithub id='socials-icon' />
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
                {/* ArtiGen */}
                <div class="featured-project">
                    <div class="image">
                        <img src={ArtiGenTmb} alt="Portfolio V1" />
                    </div>
                    <div class="info">
                        <h3>Featured Project</h3>
                        <h2>ArtiGen AI Art App</h2>
                        <div class="featured-description">
                            <p>This website makes use of the OpenAI API to allow users to create their own artworks via a prompt and have the choice to add it to my community showcase for everyone to see. The site utilizes the Vite framework and additionally MongoDB, Tailwind CSS, Express and Cloudinary hosting.
                                The app is deployed with Vercel and Render.</p>
                        </div>
                        <div class="tags">
                            <ul>
                                <li>TailwindCSS</li>
                                <li>Cloudinary</li>
                                <li>ReactJS</li>
                                <li>Vercel</li>
                            </ul>
                            <div id="taglink">
                                <a href='https://artigenai.vercel.app/'>
                                    <BiLink id='socials-icon' />
                                </a>
                                <a href='https://github.com/leon-plackal/ArtiGen-AI-art-app'>
                                    <AiFillGithub id='socials-icon' />
                                </a>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Archive */}
                <h3 className="subheading">Project Archive</h3>
                <div class="archive-tiles">
                    <div className="tile-row">

                        <div class="tile">
                            <div class="archiveinfo">
                                <h6>Simple Image Denoiser</h6>
                                <p>Image processing with Python, using skimage and BM3D</p>
                            </div>

                            <div className="archive-links">
                                <a href='https://github.com/leon-plackal/simple_denoiser'>
                                    <AiFillGithub id='socials-icon2' />
                                </a>
                            </div>

                            <div class="archiveimage">
                                <img src={image3} alt="xxxx" />
                            </div>
                            <div className="tagdate">
                                2023
                            </div>
                        </div>

                        <div class="tile">

                            <div class="archiveinfo">
                                <h6>Portfolio V1</h6>
                                <p>The first iteration of my Portfolio built with React and ThreeJS</p>
                            </div>
                            <div className="archive-links">
                                <a href='https://github.com/leon-plackal/personal-portfolio-v1'>
                                    <AiFillGithub id='socials-icon2' />
                                </a>
                                <a href='https://leon-plackal.github.io/portfolio1/#/'>
                                    <BiLink id='socials-icon3' />

                                </a>
                            </div>
                            <div class="archiveimage">
                                <img src={image1} alt="xxxx" />
                            </div>

                            <div className="tagdate">
                                2022
                            </div>
                        </div>
                        <div class="tile">
                            <div class="archiveinfo">
                                <h6>KeyNinja</h6>
                                <p>Simple typing practise game with error detection and WPM/timers</p>
                            </div>
                            <div className="archive-links">
                                <a href='https://github.com/leon-plackal/Key-Ninja'>
                                    <AiFillGithub id='socials-icon2' />
                                </a>

                                <a href='https://keyninjatype.netlify.app/'>
                                    <BiLink id='socials-icon3' />
                                </a>
                            </div>
                            <div class="archiveimage">
                                <img src={image2} alt="xxxx" />
                            </div>
                            <div className="tagdate">
                                2023
                            </div>
                        </div>
                    </div>
                    {/* <div className="tile-row">
                        <div class="tile"></div>
                    </div> */}
                </div>
            </div>
        </section>
    )
}
