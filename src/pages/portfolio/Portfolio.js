import React, { useState, useEffect, useRef } from 'react';
import moduleStyle from './Portfolio.module.css';
import Motionlist from './Motionlist';
import Pofoltext from './Pofoltext.js';

function Portfolio() {

    const [pofolnum,setPofolnum] = useState(0);

    const updatePofolnum = (newPofolnum) => {
        setPofolnum(newPofolnum);
        console.log(pofolnum);
    };
    
    return (
        <div className={moduleStyle.viewsplit}>
            {/*포트폴리오 로드되는부분 */}
            <div>
                <Motionlist pofolnum={pofolnum} updatePofolnum={updatePofolnum} />
            </div>

            {/*포폴안내사항 로드되는부분 */}
            <div>  
                <Pofoltext pofolnum={pofolnum}/>
            </div>
        </div>
    );
}

export default Portfolio;