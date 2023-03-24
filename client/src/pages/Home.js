import React from 'react'
import '../App.css';
import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import { Canvas, extend, useFrame, useLoader, useThree } from 'react-three-fiber';
import circleImg from '../assets/circle.png';
import { Suspense, useCallback, useMemo, useRef } from 'react';

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
 if (localStorage.getItem('theme') === 'theme-dark') {
     setTheme('theme-dark');
 } else {
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
    return Math.sin(f * (x ** 5 + z ** 7 + t)) * a;
  }, [t, f, a])

  const count = 400
  const sep = 2
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
      camera={{ position: [100, 10, 0], fov: 75 }}
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
                <button onClick={toggleTheme}><span>□</span> DARK</button>
                <button onClick={toggleTheme}><span>□</span> LIGHT</button>
            </div>
            <div class="right-bar">
                <div id="links">
                    <a class="home-links" href="./projects.html"><p>PROJECTS</p></a>
                    <a class="home-links" href="./about.html"><p>ABOUT</p></a>
                </div>
                <div id="socials">
                    <i class="fa-brands fa-linkedin"></i>
                    <i class="fa-regular fa-envelope"></i>
                    <i class="fa-brands fa-github"></i> 
                 </div> 
            </div>
            <div class="home-graphic">

            </div>
            <div id="home-info">
                <div class="info-title">
                    <h1>Leon Plackal</h1>
                </div>
            </div>
            <div class="description">   
                <h3>0.1 About Me</h3>
                <div id="subheading-line"></div>
                <p>I have been interested in coding and the general computer science field since a young age. I am always seeking to add new features and skills to by toolkit, and am always looking to put it into use in my projects. Apart from computer science, I also have a good eye for design principles and creating user friendly UI/UX. I also have some biomedical knowledge!</p>
            </div>
            <div class="footer">
                <p>Designed & Built by Leon P.</p>
                <a href="">Get in Touch :</a>
            </div>
            
            
        </div>
    </div>
    
  )
}
