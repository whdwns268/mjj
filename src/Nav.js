import { Link } from "react-router-dom";
import React, { useState, useEffect, useRef } from 'react';

function Nav() {

    const slide_ulRef = useRef(null);
    const sliderRef = useRef(null);

    let target = null;
    let slideline = null;

    useEffect(() => {
        const pathname = window.location.pathname;
        let pageNum = 0; // 기본값은 첫 번째 페이지
    
        // URL에 따라 pageNum 설정
        switch (pathname) {
            case '/':
                pageNum = 0;
                break;
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
                pageNum = 0; // 기본값 설정
                break;
        }
    
        slideline = slide_ulRef.current.children[pageNum];
        sliderRef.current.style.width = `${slideline.offsetWidth}px`;
        sliderRef.current.style.left = `${slideline.offsetLeft}px`;
        sliderRef.current.style.top = `${slideline.offsetTop + slideline.offsetHeight}px`;
    }, []); // 한 번만 실행

    const clickLink = (pagenum) => {
        slideline = slide_ulRef.current.children[pagenum];
        sliderRef.current.style.width = `${slideline.offsetWidth}px`;
        sliderRef.current.style.left = `${slideline.offsetLeft}px`;
        sliderRef.current.style.top = `${slideline.offsetTop + slideline.offsetHeight}px`;
      };

    return (
        <nav className="css_nav">
        <div >Jun!</div>
        <ul className="css_nav_ul" ref={slide_ulRef}>
            <li onClick={() => clickLink(0)}><Link to='/home'>Home</Link></li>
            <li onClick={() => clickLink(1)}><Link to='/about'>About</Link></li>
            <li onClick={() => clickLink(2)}><Link to='/portfolio'>Portfolio</Link></li>
            <li onClick={() => clickLink(3)}><Link to='/contact'>Contact</Link></li>
        <div ref={sliderRef} className='slider_line'></div>
        </ul>
        <div ></div>
        </nav>
    );
}
export default Nav;