import React, { useState, useEffect, useRef } from 'react';
import reactImg from "../../img/react.png"
import springImg from "../../img/spring.png"
import jsonImg from "../../img/json.png"
import mybatisImg from "../../img/mybatis.png"
import mysqlImg from "../../img/mysql.png"
import moduleStyle from "./Pofoltext.module.css"

function Pofoltext({ pofolnum }) {

    const [pofolindex,setpofolindex] = useState(1);

    useEffect(() => {
        if (pofolnum == 0) {
            setTimeout(() => {
                const divElement = document.getElementById("textdiv");
                divElement.style.opacity = 1;
            }, 300);
        }
    }, []);

    useEffect(() => {
        if (pofolnum != 0) {
            const divElement = document.getElementById("textdiv");
            // divElement.style.transform = "translateX(800px)";
            divElement.style.opacity = 0;
            setTimeout(() => {
                setpofolindex(pofolindex+1)
                if(pofolindex > 4){
                    setpofolindex(1);
                }
                console.log(pofolindex);
                divElement.style.transform = "translateX(0px)";
                divElement.style.opacity = 1;
            }, 300);
        }
    }, [pofolnum]);

    return (
        <div id="textdiv" className={moduleStyle.pofol}>
            {pofolindex === 0 && (
                <ul className={moduleStyle.pofolul}>
                    <li>Jun! Portfolio</li>
                    <li>Solo Project / 100%</li>
                    <li>포트폴리오의 기본형인 쇼핑몰사이트입니다!<br /><br />
                        학원에서 제공된 디자인계획서를 보고<br />
                        현업에서 어떤형태로 가이드가 내려오는지
                        경험할 수 있었습니다.

                        이 프로젝트를 하면서 React에 대해
                        한발짝 더 다가갈 수 있었습니다.
                    </li>
                    <li>
                        <img src={reactImg} alt="React Image" />
                        <img src={springImg} alt="Spring Image" />
                        <img src={jsonImg} alt="JSON Image" />
                        <img src={mybatisImg} alt="MyBatis Image" />
                        <img src={mysqlImg} alt="MySQL Image" />
                    </li>
                </ul>
            )}
            {pofolindex === 1 && (
                <ul id="textul" className={moduleStyle.pofolul}>
                    <li>Jun! Portfolio</li>
                    <li>Solo Project / 100%</li>
                    <li>포트폴리오의 기본형인 쇼핑몰사이트입니다!<br /><br />
                        학원에서 제공된 디자인계획서를 보고<br />
                        현업에서 어떤형태로 가이드가 내려오는지
                        경험할 수 있었습니다.

                        이 프로젝트를 하면서 React에 대해
                        한발짝 더 다가갈 수 있었습니다.
                    </li>
                    <li>
                        <img src={reactImg} alt="React Image" />
                        <img src={springImg} alt="Spring Image" />
                        <img src={jsonImg} alt="JSON Image" />
                        <img src={mybatisImg} alt="MyBatis Image" />
                        <img src={mysqlImg} alt="MySQL Image" />
                    </li>
                </ul>
            )}
            {pofolindex === 2 && (
                <ul id="textul" className={moduleStyle.pofolul}>
                    <li>Managment</li>
                    <li>Solo Project / 100%</li>
                    <li>포트폴리오의 기본형인 쇼핑몰사이트입니다!<br /><br />
                        학원에서 제공된 디자인계획서를 보고<br />
                        현업에서 어떤형태로 가이드가 내려오는지
                        경험할 수 있었습니다.

                        이 프로젝트를 하면서 React에 대해
                        한발짝 더 다가갈 수 있었습니다.
                    </li>
                    <li>
                        <img src={reactImg} alt="React Image" />
                        <img src={springImg} alt="Spring Image" />
                        <img src={jsonImg} alt="JSON Image" />
                        <img src={mybatisImg} alt="MyBatis Image" />
                        <img src={mysqlImg} alt="MySQL Image" />
                    </li>
                </ul>
            )}
            {pofolindex === 3 && (
                <ul id="textul" className={moduleStyle.pofolul}>
                    <li>SHOP admin</li>
                    <li>Solo Project / 100%</li>
                    <li>포트폴리오의 기본형인 쇼핑몰사이트입니다!<br /><br />
                        학원에서 제공된 디자인계획서를 보고<br />
                        현업에서 어떤형태로 가이드가 내려오는지
                        경험할 수 있었습니다.

                        이 프로젝트를 하면서 React에 대해
                        한발짝 더 다가갈 수 있었습니다.
                    </li>
                    <li>
                        <img src={reactImg} alt="React Image" />
                        <img src={springImg} alt="Spring Image" />
                        <img src={jsonImg} alt="JSON Image" />
                        <img src={mybatisImg} alt="MyBatis Image" />
                        <img src={mysqlImg} alt="MySQL Image" />
                    </li>
                </ul>
            )}
            {pofolindex === 4 && (
                <ul id="textul" className={moduleStyle.pofolul}>
                    <li>BEST SHOP</li>
                    <li>Solo Project / 100%</li>
                    <li>포트폴리오의 기본형인 쇼핑몰사이트입니다!<br /><br />
                        학원에서 제공된 디자인계획서를 보고<br />
                        현업에서 어떤형태로 가이드가 내려오는지
                        경험할 수 있었습니다.

                        이 프로젝트를 하면서 React에 대해
                        한발짝 더 다가갈 수 있었습니다.
                    </li>
                    <li>
                        <img src={reactImg} alt="React Image" />
                        <img src={springImg} alt="Spring Image" />
                        <img src={jsonImg} alt="JSON Image" />
                        <img src={mybatisImg} alt="MyBatis Image" />
                        <img src={mysqlImg} alt="MySQL Image" />
                    </li>
                </ul>
            )}
            {pofolindex === 5 && (
                <ul id="textul" className={moduleStyle.pofolul}>
                    <li>CGV Event</li>
                    <li>Solo Project / 100%</li>
                    <li>포트폴리오의 기본형인 쇼핑몰사이트입니다!<br /><br />
                        학원에서 제공된 디자인계획서를 보고<br />
                        현업에서 어떤형태로 가이드가 내려오는지
                        경험할 수 있었습니다.

                        이 프로젝트를 하면서 React에 대해
                        한발짝 더 다가갈 수 있었습니다.
                    </li>
                    <li>
                        <img src={reactImg} alt="React Image" />
                        <img src={springImg} alt="Spring Image" />
                        <img src={jsonImg} alt="JSON Image" />
                        <img src={mybatisImg} alt="MyBatis Image" />
                        <img src={mysqlImg} alt="MySQL Image" />
                    </li>
                </ul>
            )}

        </div>
    )
}

export default Pofoltext;