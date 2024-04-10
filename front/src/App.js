import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Link, Routes, HashRouter } from 'react-router-dom';
import './sass/style.scss';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './layout/header/Header'
import Home from './pages/Home/Home'
import Types from './pages/Types/Types'
import PaintPage from './pages/PaintPage/PaintPage'
import SideNavBar from './layout/sidebar/SideNavBar';
import SculpPage from './pages/SculpPage/SculpPage.jsx';
import BuildingsPage from './pages/BuildingsPage/BuildingsPage.jsx'
import InverntorsPage from './pages/inventions/InverntorsPage.jsx'
import EpochPage from './pages/Epoch/EpochPage.jsx'
import ArtistsPage from './pages/Artists/ArtistsPage.jsx'
import Aos from 'aos';
import 'aos/dist/aos.css';


function App() {
  useEffect(() => {

    Aos.init({ once: true });
}, []);

  return (
    <HashRouter>
      <Header/>
      <SideNavBar/>
      <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/types" element={<Types />} />
          <Route path="/paintPage" element={<PaintPage />} />
          <Route path="/sculpPage" element={<SculpPage />} />
          <Route path="/buildingsPage" element={<BuildingsPage />} />
          <Route path="/inventions" element={<InverntorsPage />} />
          <Route path="/epoch" element={<EpochPage />} />
          <Route path="/artists" element={<ArtistsPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
