import React, { useEffect, useState, useLocation } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import * as THREE from 'three';
import axios from 'axios';

import useGeoLocation from './useGeolocation.tsx';

function Model() {


    const location = useGeoLocation();
    const [weatherData, setWeatherData] = useState(null);
    const [isAnimating, setIsAnimating] = useState(true); // 초기에 애니메이션을 멈춰놓습니다.
    
    //날씨정보 api
    useEffect(() => {
        if (location.loaded) { // 위치 정보가 로드된 후에만 실행
            const fetchWeatherData = async () => {
                try {
                    const latitude = location.coordinates.lat;
                    const longitude = location.coordinates.lng;
                    const apiKey = '9e0c18cc87dd269e49e9943490a2db5e';

                    const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather`, {
                        params: {
                            lat: latitude,
                            lon: longitude,
                            appid: apiKey,
                            lang: 'kr',
                        },
                    });

                    response.status === 200 ? console.log('test') : console.error('날씨 정보를 가져올 수 없습니다.');
                    console.log(response.data);
                    setWeatherData(response.data) 
                } catch (error) {
                    console.error('날씨 정보를 가져오는 중 에러 발생:', error);
                }
            };

            const fetchDataAfterDelay = setTimeout(fetchWeatherData, 1000);

            // 컴포넌트가 unmount될 때 timeout 정리
            return () => clearTimeout(fetchDataAfterDelay);
        }
    }, [location.loaded]);

    
    useEffect(() => {

        let animateCamera = false;
        let animationStart;

        let scene = new THREE.Scene();
        let renderer = new THREE.WebGLRenderer({
            canvas: document.querySelector('#canvas'),
            alpha: true,
        }, []);

        let camera = new THREE.PerspectiveCamera(30, 1);
        camera.position.set(0, 0, 14);

        scene.background = null;
        let light = new THREE.DirectionalLight(0xffffff, 3);
        light.target.position.set(0, 0, 0);
        light.position.set(4, 8, 10);
        scene.add(light);

        let loader = new GLTFLoader();
        loader.load('bananya_birbo/scene.gltf', function (gltf) {
            const model = gltf.scene;
            scene.add(model);

            let modelXPosition = 0;
            let modelYRotation = 0;
            let modelXRotation = 0;
            let modelSpeed = 0.01;

            function animate() {
                requestAnimationFrame(animate);
                if (isAnimating) {
                    modelXPosition += modelSpeed;
                    if (modelXPosition > 1) {
                        modelSpeed = -0.01;
                    } else if (modelXPosition < -1) {
                        modelSpeed = 0.01;
                    }
                    model.position.x = modelXPosition;
                    model.position.x += 0.01;

                    modelYRotation += modelSpeed;

                    document.querySelector('#text_canvas').style.left = model.rotation.y * 45 + 'px';
                    //console.log(model.rotation.y)
                    model.rotation.y = modelYRotation;
                    model.rotation.y += 0.01;
                    renderer.render(scene, camera);
                }
            }
            animate();

            document.querySelector('#canvas').addEventListener('mouseover', () => {
                document.querySelector('#textindex').innerHTML = '어흥!';
                startCameraAnimation()
            });

            document.querySelector('#canvas').addEventListener('mouseout', () => {
                document.querySelector('#textindex').innerHTML = "ㅎㅎ!";
                setTimeout(() => {
                    if (weatherData !== null && weatherData.weather.length > 0) {
                        document.querySelector('#textindex').innerHTML = '오늘 날씨 ' + weatherData.weather[0].description + " !";
                    } else {
                        document.querySelector('#textindex').innerHTML = '저 귀엽지 않나요?';
                    }
                }, 2000);
                stopCameraAnimation();
            });

            const startCameraAnimation = () => {
                animateCamera = true;
                animationStart = Date.now();
                animateCameraPosition();
            };


            const animateCameraPosition = () => {
                if (animateCamera) {
                    const now = Date.now();
                    const timeElapsed = (now - animationStart) / 100; // 초 단위로 경과된 시간 계산
                    const zPosition = camera.position.z - 0.1 * timeElapsed; // 0.1씩 증가
                    //const xPosition = camera.position.x + 0.1 * timeElapsed;
                    if (zPosition > 10) {

                        camera.position.set(camera.position.x, camera.position.y, zPosition);
                        if (model.rotation.x < 1) {
                            model.rotation.x += 0.04;
                        }
                    }
                    renderer.render(scene, camera);
                    requestAnimationFrame(animateCameraPosition);
                }

            };

            const stopCameraAnimation = () => {
                animateCamera = false;

                animateCameraPosition_close();
            };


            const animateCameraPosition_close = () => {
                if (camera.position.z < 14) {
                    if (animateCamera == false) {
                        const now = Date.now();
                        const timeElapsed = (now - animationStart) / 500; // 초 단위로 경과된 시간 계산
                        const zPosition = camera.position.z + 0.1 * timeElapsed; // 0.1씩 증가
                        if (model.rotation.x > 0) {
                            model.rotation.x -= 0.03;
                        }
                        camera.position.set(camera.position.x, camera.position.y, zPosition);

                        renderer.render(scene, camera);
                        requestAnimationFrame(animateCameraPosition_close);
                    };
                }
            }
        });

    }, [weatherData]);

    return (
        <div style={{display: 'block'}}>
            <canvas
                id="canvas"
                width={300}
                height={300}
            ></canvas>

            <div
                id="text_canvas"
                style={{
                    width: '300px',
                    position: 'absolute',
                    top: '10px',
                    left: '-30px',
                    marginLeft: '35px',
                }}>

                <div
                    style={{
                        position: 'relative',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        left: '-40px'
                    }}>

                    <div
                        style={{
                            width: '0',
                            height: '0',
                            borderLeft: '10px solid transparent',
                            borderRight: '10px solid transparent',
                            borderTop: '20px solid #3498db',
                            position: 'absolute',
                            top: '35px',
                        }}
                    ></div>
                    <p id='textindex' style={{
                        backgroundColor: '#3498db',
                        borderRadius: '10px',
                        padding: '10px',
                        width: 'auto',
                        margin: '0',
                        color: '#fff'
                    }}>안녕하세요!</p>
                    {/* {location.loaded ? JSON.stringify(location) : "Location data not yet."} */}
                </div>
            </div>
        </div>
    );

}

export default Model;
