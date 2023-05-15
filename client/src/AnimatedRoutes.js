import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hero from './Hero'
import Home from './Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import {AnimatePresence} from 'framer-motion'

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
          <Route path="/" element={<Home />}></Route>
        </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
