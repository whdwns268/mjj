import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Route, Routes, useLocation } from "react-router-dom";
import PageHome from './home/Pagehome'
import Portfolio from './portfolio/Portfolio'
import Abouts from './abouts/Abouts'
import "./Transition.css";

const Transition = () => {

    const location = useLocation();

    return (
        <TransitionGroup className="transition-group">
            <CSSTransition key={location.pathname} classNames="fade" timeout={700} >
                <Routes location={location}>
                    <Route path="/" element={<PageHome style={{ position: 'absolute' }}/>} />
                    <Route path="/home" element={<PageHome style={{ position: 'absolute' }}/>} />
                    <Route path="/about" element={<Abouts style={{ position: 'absolute' }}/>} />
                    <Route path="/portfolio" element={<Portfolio style={{ position: 'absolute' }}/>} />
                    <Route path="/contact" element={<PageHome style={{ position: 'absolute' }}/>} />
                </Routes>
            </CSSTransition>
        </TransitionGroup>
    );
};

export default Transition;