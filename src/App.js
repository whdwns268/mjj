import './App.css';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import * as THREE from "three";
import React, { useEffect } from 'react';
import Model from './Model';
import useGeoLocation from './useGeolocation.tsx';
import { Routes, Route } from "react-router-dom";
import Transition from './pages/Transition'
import Nav from './Nav.js'
import pillImage from './ico/Pill-Blue-Glossy.png';
import superToroid from './ico/SuperToroid-Yellow-Glossy.png';
import roundCube from './ico/RoundCube-Orange-Glossy.png';

function App() {

  const location = useGeoLocation();


  return (
    <div className="App">
      <div className="App-setting">

        <div></div>{/* 백그라운드컬러 상단 */}
        <div></div>{/* 백그라운드컬러 하단 */}
        <img src={superToroid} alt="superToroid" className='superToriod'/>
        <div className="App-setting2">{/* 박스툴*/}
        
          <div>{/* 박스내용물 시작*/}
            {/* nav바 컨트롤*/}
            <Nav />


            {/* 실제 보여지는 페이지 부분*/}
            <div className='css_pages'>
              <Transition />
            </div>

          </div>
        </div>

      </div>
      {/* Three.js */}
      <div className="Model_css"><Model /></div>
      <img src={roundCube} alt="roundCube" className='roundCube'/>
      {/* {location.loaded ? JSON.stringify(location) : "Location data not yet."} */}
      <div className='pillblue'><img src={pillImage} alt="Pill" /></div>
    </div>
  );
}

export default App;
