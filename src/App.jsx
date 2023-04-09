import React from 'react';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Timeline from './components/Timeline';
import Map from './components/map';
import Header from './components/Header';
import Notesdiv from './components/NotesDiv'
import Team from './components/Team'
import PopupForm from './components/PopupForm'
import Aboutus from './components/Aboutus'
import Home from './components/Home';
import Social_media_form from './components/Social_media_form';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Ourfeature from './components/Ourfeature';
import QAComponent from "./components/QAComponent";
import data from "./data/PortfolioItemDetails";

import Stats from './components/Stats';
import Ourservicesmain from './components/Ourservicesmain';

import Navbar from './components/Navbar';
import serviceour from './components/serviceour';

import Statistic from './components/Statistic';

function App() {
  return (
    <>
      <div className="bg-white text-stone-900 min-h-screen font-inter">
        <div className="">
          {/* make full screen */}
          <BrowserRouter>
            <Header />
            <Routes>
              <Route exact path="/" component={Home} />
              <Route path='/Ourservicesmain' element={<Ourservicesmain />} />
              <Route path='/Portfolio' element={<Portfolio />} />
              <Route path="/socialmediaservice" element={<Timeline />} />
              <Route path="/Notesdiv" element={<Notesdiv />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/footer" element={<Footer />} />
              <Route path="/Team" element={<Team />} />
              <Route path="/aboutus" element={<Aboutus />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/Form" element={<Social_media_form />} />
            </Routes>
          </BrowserRouter>
          <Home />
          <Ourfeature />
          <Statistic />
          <Timeline />
          <Portfolio />
          <QAComponent data={data} />
          <Team />
          <Map />
          <Aboutus />
          <Contact />
          <Notesdiv />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App;
