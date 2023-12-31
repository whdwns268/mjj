import React, { useState, useEffect, useRef } from 'react';
import moduleStyle from './Motionlist.module.css';
import { motion } from 'framer-motion';
import Img1 from '../../img/portfolio_img_1.png'
import Img2 from '../../img/portfolio_img_2.png'
import Img3 from '../../img/portfolio_img_3.png'
import Img4 from '../../img/portfolio_img_4.png'
import Img5 from '../../img/portfolio_img_5.png'
import portfoliojson from './portfoliojson'
import useMobileSizeCheck from '../../useMobileSizeCheck.js'

function Motionlist({ pofolnum, updatePofolnum }) {

    const isMobileSize = useMobileSizeCheck();

    const ulElement = useRef(null);

    useEffect(() => {
        ulElement.current = document.getElementById("motionul");
    }, []);

    useEffect(() => {
        setTimeout(() => {
            const directlinkElement = document.getElementById("directlink");
            directlinkElement.style.opacity = 1;
        }, 1000);
    }, []);

    function motionEnter() {
        const ulElementCurrent = ulElement.current;
        const liElements = ulElementCurrent.getElementsByTagName("li");
        liElements[0].style.width = "660px";
        liElements[0].style.height = "385px";
        clickicoEnter();
        directlinkEnter()
    }

    function motionLeave() {
        const ulElementCurrent = ulElement.current;
        const liElements = ulElementCurrent.getElementsByTagName("li");
        liElements[0].style.width = "";
        liElements[0].style.height = "";
        clickicoLeave()
    }


    function handleClick() {
        clickicoLeave()
        directlinkLeave()
        const ulElementCurrent = ulElement.current;
        const liElements = ulElementCurrent.getElementsByTagName("li");
        liElements[0].style.width = "";
        liElements[0].style.height = "";
        const firstLi = liElements[0]; // 복제할 li 요소
        const clonedLi = firstLi.cloneNode(true);
        liElements[0].style.transform = "translateX(-200px)";
        liElements[0].style.opacity = "0";
        setTimeout(() => {
            ulElementCurrent.removeChild(liElements[0]); // 변경된 부분
            ulElementCurrent.append(clonedLi); // 변경된 부분
            if(!isMobileSize){
            liElements[0].style.width = "660px";
            liElements[0].style.height = "385px";
            }
            clickicoEnter()
            directlinkEnter()
            updatePofolnum(pofolnum => pofolnum === 5 ? 1 : pofolnum + 1); // 상태 업데이트
        }, 300);
    }

    function clickicoEnter() {
        const clickimgElement = document.getElementById("clickico");
        clickimgElement.style.opacity = 1;
        clickimgElement.style.width = "40px";
        clickimgElement.style.height = "40px";
    }

    function clickicoLeave() {
        const clickimgElement = document.getElementById("clickico");
        clickimgElement.style.opacity = 0;
        clickimgElement.style.width = "";
        clickimgElement.style.height = "";
    }

    function directlinkEnter() {
        const directlinkElement = document.getElementById("directlink");
        directlinkElement.style.opacity = 1;
    }

    function directlinkLeave() {
        const directlinkElement = document.getElementById("directlink");
        directlinkElement.style.opacity = 0;
    }

    function handleClick2() {
        updatePofolnum(pofolnum += 1)
        if (pofolnum > 5) {
            updatePofolnum(pofolnum = 1);
        }
    }

    const list = {
        hidden: { opacity: 0, scale: 0, x: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2,
            },
        },
    };

    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    };

    function gitlinkgo(){
        if(pofolnum == 1){
            alert('보안상의 문제로 해당 사이트는 접속이 불가능합니다.')
        }else{
        window.location.href = portfoliojson[pofolnum].gitlink;
        }
    }

    function linkgo(){
        if(pofolnum == 1){
            alert('보안상의 문제로 해당 사이트는 접속이 불가능합니다.')
        }else{
            window.location.href = portfoliojson[pofolnum].link;
        }
    }

    return (
        <div style={{ position: "relative" }}>
            <span id="directlink" className={moduleStyle.directlink}>
                <div onClick={gitlinkgo}>
                    <span></span><a>깃허브 >></a>
                </div>
                <div onClick={linkgo}>
                    <span></span><a>배포링크 >></a>
                </div>
            </span>

            <motion.ul
                id="motionul"
                ref={ulElement}
                className={moduleStyle.motionul}
                variants={list}
                initial="hidden"
                animate="visible"
                onClick={handleClick}
                onMouseEnter={motionEnter}
                onMouseLeave={motionLeave}
            >
                <motion.li variants={list} >
                    <div><img src={Img1} alt="img1"></img></div>
                    <span id="clickico" className={moduleStyle.clickico}></span>{/*버튼이미지 */}
                </motion.li>

                <motion.li variants={list}>
                    <div><img src={Img2} alt="img2"></img></div>
                    <span id="clickico" className={moduleStyle.clickico}></span>{/*버튼이미지 */}
                </motion.li>

                <motion.li variants={list}>
                    <div><img src={Img3} alt="img3"></img></div>
                    <span id="clickico" className={moduleStyle.clickico}></span>{/*버튼이미지 */}
                </motion.li>

                <motion.li variants={list}>
                    <div><img src={Img4} alt="img4"></img></div>
                    <span id="clickico" className={moduleStyle.clickico}></span>{/*버튼이미지 */}
                </motion.li>

                <motion.li variants={list}>
                    <div><img src={Img5} alt="img5"></img></div>
                    <span id="clickico" className={moduleStyle.clickico}></span>{/*버튼이미지 */}
                </motion.li>

            </motion.ul>
        </div>
    );
}

export default Motionlist;