import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './layout/header/Header'
import Home from './pages/Home/Home'
import Types from './pages/Types/Types'
import PaintPage from './pages/Types/PaintPage/PaintPage'
import SideNavBar from './layout/sidebar/SideNavBar';
import SculpPage from './pages/Types/SculpPage/SculpPage.jsx';


function App() {
  return (
    <Router>
      <Header/>
      <SideNavBar/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/types" element={<Types />} />
          <Route path="/paintPage" element={<PaintPage />} />
          <Route path="/sculpPage" element={<SculpPage />} />
      </Routes>
    </Router>
  );
}

export default App;
