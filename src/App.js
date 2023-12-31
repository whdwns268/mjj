import './App.css';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from "three";
import React, { useEffect, useState } from 'react';
import Model from './Model';
import { Link, Routes, Route } from "react-router-dom";
import Transition from './pages/Transition'
import Nav from './Nav.js'
import pillImage from './ico/Pill-Blue-Glossy.png';
import superToroid from './ico/SuperToroid-Yellow-Glossy.png';
import roundCube from './ico/RoundCube-Orange-Glossy.png';
import { ReactComponent as Closebtn } from './ico/close_FILL0.svg'
function App() {

  const [isMenupage, setMenupage] = useState(window.innerWidth < 768);
  const [isNavbar, setNavbar] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setMenupage(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };

  }, []);

  function Moblie_nav_close() {
    setNavbar(!isNavbar);
  }
  
  useEffect(() => {
      if (!isMenupage) {
        setTimeout(() => {
        const modelElement = document.querySelector('.Model_css');
        if (modelElement) {
          modelElement.style.display = 'block';
        }
      }, 2000);
      }else {
      }
  })


  return (
    <div className="App">
      <div className="App-setting">

        <div></div>{/* 백그라운드컬러 상단 */}
        <div></div>{/* 백그라운드컬러 하단 */}
        <img src={superToroid} alt="superToroid" className='superToriod' />
        <div className="App-setting2">{/* 박스툴*/}
          <div>{/* 박스내용물 시작*/}
            {/* nav바 컨트롤*/}
            <Nav setMenupage={setMenupage} setNavbar={setNavbar} />
            {/* 실제 보여지는 페이지 부분*/}
            <div className='css_pages'>
              <Transition />
            </div>
          </div>
        </div>
        <span className={`mobileMenu ${isNavbar ? "mobileMenuAni" : ""}`}>
          <ul id="mobilenavbtn_move">
            <li onClick={Moblie_nav_close}><Link to='/home' >Home</Link></li>
            <li onClick={Moblie_nav_close}><Link to='/about'>About</Link></li>
            <li onClick={Moblie_nav_close}><Link to='/portfolio'>Portfolio</Link></li>
            <li onClick={Moblie_nav_close}><Link to='/contact'>Contact</Link></li>
            <li onClick={Moblie_nav_close}><div><Closebtn /></div></li>
          </ul>
        </span>
      </div>
      {/* Three.js */}
      <div className="Model_css"><Model /></div>
      <img src={roundCube} alt="roundCube" className='roundCube' />

      <div className='pillblue'><img src={pillImage} alt="Pill" /></div>
    </div>
  );
}

export default App;
