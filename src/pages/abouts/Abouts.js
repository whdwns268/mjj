import React, { useState, useEffect, useRef } from 'react';
import moduleStyle from './About.module.css';
import skills from './skills'
import imgpnf from '../../img/js.png'

function Abouts() {
  const [isPaused, setIsPaused] = useState(false);
  const [selectedImage, setSelectedImage] = useState();
  const [isskilimgEnter, setSkilimgEnter] = useState(false);
  const skilsliRefs = useRef([]);
  const ulRef = useRef(null); // ul 요소에 대한 참조
  const [initialTransform, setInitialTransform] = useState(0);


  function skilimgclick(z) {
    setIsPaused(true);
    setSelectedImage(z);
    const ulElement = document.querySelector("#silderskil")
    if (ulElement) {
      setTimeout(() => {
        ulElement.style.transition = "transform 0.3s ease-in-out"; // 트랜지션 속성 추가
        ulElement.style.transform = "translateX(" + skills[z].details[4] + ")";
        setInitialTransform(skills[z].details[4]);
      }, 0);
    }
  }


  function skilimgleave() {
    const ulElement = document.querySelector("#silderskil");
    ulElement.style.transition = "transform 0.3s ease-in-out"; // 트랜지션 속성 추가
    ulElement.style.transform = "translateX(" + initialTransform + "px)";
    setSkilimgEnter(false);
  }

  function skilimgEnter(z) {
    setSkilimgEnter(true);
    setSelectedImage(z);
  }


  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setStartAnimation(true);
    }, 500); // 1초 후에 애니메이션 시작
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={moduleStyle.divbox}>

      <div className={moduleStyle.divbox_textbox}>
        <span>
          <a>코드와 함께할 때 </a>
          <a>더할 나위 없는 행복함을 느끼는 만큼,<br />지금보다 더 잘할 수 있다는 마음을 가지고 개발자를 꿈꾸고  있습니다.</a>
        </span>
        <span><a>계속해서 변화에 맞춰 지금처럼 새로운 방식에 도전하는 것을 즐기는 프론트엔드 개발자가 되겠습니다.</a></span>
        <span>
          <a>MY Stack</a>
          <ul className={moduleStyle.textbox_skilimgul}>
            {skills.map((skillsimg, index) => (
              <li
                key={index}
                id="skillimgli"
                onClick={() => skilimgclick(index)}
                onMouseLeave={skilimgleave}
                onMouseEnter={() => skilimgEnter(index)}
              >
                <img src={process.env.PUBLIC_URL + '/' + skillsimg.details[1]}
                  alt={skillsimg.details[0]}
                  style={{
                    width: isskilimgEnter && selectedImage === index ? "55px" : "50px",
                    borderRadius: "50px",
                    opacity: isskilimgEnter && selectedImage === index ? 1 : 0.5,
                  }} />
                <a style={{
                  opacity: isskilimgEnter && selectedImage === index ? 1 : 0,
                }}>Click!</a>
              </li>
            ))}
          </ul>
        </span>
      </div>

      <div className={moduleStyle.divbox_slidebox}>
        <ul id="silderskil" ref={ulRef} className={`${moduleStyle.slidebox_ul} ${isPaused ? moduleStyle.paused : moduleStyle.pausedok}`}>
          {/* 첫번째 */}
          {skills.map((skills, index) => (
            <li
              key={index}
              className={`${moduleStyle.slidebox_li} ${moduleStyle.slideItem}`}>
              <div>
                <img src={process.env.PUBLIC_URL + '/' + skills.details[1]} alt={skills.details[0]} style={{ width: "50px", borderRadius: "50px" }} />
                <a>{skills.details[0]}</a>
              </div>

              <div>
                <img src={process.env.PUBLIC_URL + '/skilico/Star.png'} style={{ width: "25px" }} />
                <a>{skills.details[2]}.0</a>
              </div>

              <div>{skills.details[3]}</div>
            </li>
          ))}
          {skills.map((skills, index) => (
            <li
              key={index}
              ref={(element) => (skilsliRefs.current[index] = element)}
              className={`${moduleStyle.slidebox_li} ${moduleStyle.slideItem}`}>
              <div>
                <img src={process.env.PUBLIC_URL + '/' + skills.details[1]} alt={skills.details[0]} style={{ width: "50px", borderRadius: "50px" }} />
                <a>{skills.details[0]}</a>
              </div>

              <div>
                <img src={process.env.PUBLIC_URL + '/skilico/Star.png'} style={{ width: "25px" }} />
                <a>{skills.details[2]}.0</a>
              </div>

              <div>{skills.details[3]}</div>
            </li>
          ))}

        </ul>
      </div>
    </div>
  )
}

export default Abouts;