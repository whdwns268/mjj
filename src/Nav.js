import { Link, useLocation } from "react-router-dom";
import React, { useState, useEffect, useRef } from 'react';
import { ReactComponent as Menubar } from './img/menu_FILL.svg';

function Nav({setMenupage , setNavbar}) {

    //모바일일 경우 768이하
    const isMobile = window.innerWidth < 768;
    console.log(window.innerWidth);

    const slide_ulRef = useRef(null);
    const sliderRef = useRef(null);
    const [activeLink, setActiveLink] = useState(0);

    const location = useLocation();

    useEffect(() => {
        const path = location.pathname;
        let pageNum = 0;

        switch (path) {
            case '/':
            case '/home':
                pageNum = 0;
                break;
            case '/about':
                pageNum = 1;
                break;
            case '/portfolio':
                pageNum = 2;
                break;
            case '/contact':
                pageNum = 3;
                break;
            default:
                pageNum = 0;
                break;
        }

        setActiveLink(pageNum);

        if (slide_ulRef.current && sliderRef.current) {
            const slideline = slide_ulRef.current.children[pageNum];
            sliderRef.current.style.width = `${slideline.offsetWidth}px`;
            sliderRef.current.style.left = `${slideline.offsetLeft}px`;
            sliderRef.current.style.top = `${slideline.offsetTop + slideline.offsetHeight}px`;
        }
    }, [location]);

    function menubtnclick(){
        setNavbar(true);
    }

    return (
        <nav className="css_nav">
            <div>Jun!</div>
            {isMobile 
            ?
            <span className="css_nav_mob_Menubtn" onClick={menubtnclick}><Menubar/></span>
            :
            <ul className="css_nav_ul" ref={slide_ulRef}>
                <li className={activeLink === 0 ? 'active' : ''}><Link to='/home'>Home</Link></li>
                <li className={activeLink === 1 ? 'active' : ''}><Link to='/about'>About</Link></li>
                <li className={activeLink === 2 ? 'active' : ''}><Link to='/portfolio'>Portfolio</Link></li>
                <li className={activeLink === 3 ? 'active' : ''}><Link to='/contact'>Contact</Link></li>
                <div ref={sliderRef} className='slider_line'></div>
            </ul>
            }
            <div></div>
        </nav>
    );
}

export default Nav;
