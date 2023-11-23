import React, { useEffect, useState } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import * as THREE from 'three';

function Model() {
    const [isAnimating, setIsAnimating] = useState(true); // 초기에 애니메이션을 멈춰놓습니다.

    useEffect(() => {
        let animateCamera = false;
        let animationStart;

        let scene = new THREE.Scene();
        let renderer = new THREE.WebGLRenderer({
            canvas: document.querySelector('#canvas'),
            alpha: true,
        },[]);

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
                document.querySelector('#textindex').innerHTML = 'ㅋㅋㅋ';
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

            // 말풍선부분


        });

    }, [isAnimating]);

    return (
        <div>
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
                    }}>안녕하세요! 말풍선 모양입니다.</p>
                </div>
            </div>
        </div>
    );

}

export default Model;
