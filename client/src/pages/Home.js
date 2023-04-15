import React from 'react'
import '../App.css';
import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import { Canvas, extend, useFrame, useLoader, useThree } from 'react-three-fiber';
import circleImg from '../assets/circle.png';
import { Suspense, useCallback, useMemo, useRef } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { GiPlainCircle } from 'react-icons/gi';
import {Link} from "react-router-dom"

//theme change
// function to set a given theme/color-scheme
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
 if (localStorage.getItem('theme') === 'theme-light') {
     setTheme('theme-light');
 } else if (localStorage.getItem('theme') === 'theme-dark'){
     setTheme('theme-dark');
 }
 else{
  setTheme('theme-light');
 }
})();


extend({OrbitControls})

function CameraControls(){
  const {
    camera,
    gl: {domElement}
  } = useThree();
  
  const controlsRef = useRef();
  useFrame(() => controlsRef.current.update())

  
  return (
    <orbitControls
      ref={controlsRef}
      args={[camera, domElement]}
      autoRotate
      autoRotateSpeed={-0.2}
      enabled = {false}
    />
  );
}

function Points() {
  const imgTex = useLoader(THREE.TextureLoader, circleImg);
  const bufferRef = useRef();

  let t = 0;
  let f = 0.001;
  let a = 2;
  const graph = useCallback((x, z) => {
    return Math.sin(f * (x ** 6  + z ** 6 + t)) * a;
  }, [t, f, a])

  const count = 200
  const sep = 1
  let positions = useMemo(() => {
    let positions = []

    for (let xi = 0; xi < count; xi++) {
      for (let zi = 0; zi < count; zi++) {
        let x = sep * (xi - count / 2);
        let z = sep * (zi - count / 2);
        let y = graph(x, z);
        positions.push(x, y, z);
      }
    }

    return new Float32Array(positions);
  }, [count, sep, graph])

  useFrame(() => {
    t += 15
    
    const positions = bufferRef.current.array;

    let i = 0;
    for (let xi = 0; xi < count; xi++) {
      for (let zi = 0; zi < count; zi++) {
        let x = sep * (xi - count / 2);
        let z = sep * (zi - count / 2);

        positions[i + 1] = graph(x, z);
        i += 3;
      }
    }

    bufferRef.current.needsUpdate = true;
  })
  return (
    <points>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          ref={bufferRef}
          attachObject={['attributes', 'position']}
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        attach="material"
        map={imgTex}
        color={0x616161}
        size={0.5}
        sizeAttenuation
        transparent={false}
        alphaTest={0.5}
        opacity={1.0}
      />
    </points>
  );
}

function AnimationCanvas() {
  return (
    <Canvas
      colorManagement={false}
      camera={{ position: [0,70,0], fov:50}}
    >
      <Suspense fallback={null}>
        <Points />
      </Suspense>
      <CameraControls/>
    </Canvas>
  );
}


export default function Home (){
  return (
    <div id="home">
        <div className="anim">
            <AnimationCanvas/>  
        </div>
        
        <div id="homecontainer">
            <div class="left-bar">
                <button onClick={toggleTheme}><GiPlainCircle/> THEME</button>
            </div>
            <div class="right-bar">
                <div id="links">
                  <Link to="/projects" className="home-links"><p>PROJECTS</p></Link>
                  <Link to="/about" className="home-links"><p>ABOUT</p></Link>
                </div>
                <div id="socials">
                  <a href='https://github.com/leon-plackal'>
                    <AiFillGithub id='socials-icon' />
                  </a>
                    
                  <AiFillLinkedin id='socials-icon'/>
                 </div> 
            </div>
            <div id="home-info">
                <div class="info-title">
                    <h1>Leon Plackal </h1>
                    <h4>Software Developer</h4>
                </div>
            </div>
            <div class="description">   
                <h3>Preface</h3>
                <div id="subheading-line"></div>
                <p>The collision of design and programming is where one can create products that are both beautiful and functional, intuitive and efficient, and impactful and innovative. Herein, we must find the perfect balance.</p>
            </div>
            <div class="footer">
                <p>Designed & Built by Leon P.</p>
                <h5>With React and ThreeJS</h5>
            </div>
            
            
        </div>
    </div>
    
  )
}
