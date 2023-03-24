export default function Projects() {
    return (
        <section id="project" class="container">
            
        <div class="left-bar">
            <button><span>□</span> DARK</button>
            <button><span>□</span> LIGHT</button>
        </div>
        <div class="right-bar">
            <div id="links">
                <a class="home-links" href="./projects.html"><p>PROJECTS</p></a>
                <a class="home-links" href="./about.html"><p>ABOUT</p></a>
                <a class="home-links" href="./index.html"><p>HOME</p></a>
            </div>
            <div id="socials">
                <i class="fa-brands fa-linkedin"></i>
                <i class="fa-regular fa-envelope"></i>
                <i class="fa-brands fa-github"></i> 
             </div> 
        </div>
        <div id="project-header">
            <p>My Latest Work</p>
            <h1 class="title">0.2 Recent Projects</h1>

            <div class="featured-project">
                <div class="image">

                </div>
                <div class="info">
                    <h3>Featured Project</h3>
                    <h2>Typing Game</h2>
                    <div class="featured-description">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis debitis velit asperiores sit eos earum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis debitis velit asperiores sit eos earum?</p>
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

                </div>
                <div class="info">
                    <h3>Featured Project</h3>
                    <h2>Portfolio V1</h2>
                    <div class="featured-description">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis debitis velit asperiores sit eos earum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis debitis velit asperiores sit eos earum?</p>
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

            <h3>Archive</h3>
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
