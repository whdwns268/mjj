import React, { useState, useEffect, useRef } from 'react';
import moduleStyle from "./Pofoltext.module.css"
import portfoliojson from './portfoliojson'

function Pofoltext({ pofolnum }) {

    const [pofolindex, setpofolindex] = useState(0);

    let jsondate = portfoliojson[pofolindex];
    if (pofolnum >= 5) {
        jsondate = portfoliojson[0];
    }

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
            divElement.style.opacity = 0;
            setTimeout(() => {
                setpofolindex(pofolindex + 1)
                if (pofolindex >= 4) {
                    setpofolindex(0);
                }
                divElement.style.transform = "translateX(0px)";
                divElement.style.opacity = 1;
            }, 300);
        }
        if (pofolnum >= 5) {
            jsondate = portfoliojson[0];
        }

    }, [pofolnum]);

    return (
        <div id="textdiv" className={moduleStyle.pofol}>
            <ul className={moduleStyle.pofolul}>
                <li>{jsondate.title}</li>
                <li>{jsondate.type}</li>
                <li>{jsondate.detail}</li>
                <li>
                    {jsondate.skill.map((item, index)=>
                    <img key={index} src={process.env.PUBLIC_URL + '/' + item} alt="skill Image" />
                    )}
                </li>          
            </ul>
        </div>
    )
}

export default Pofoltext;