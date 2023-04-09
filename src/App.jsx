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

import MyPdfViewer from './components/Pdfimages';

import SubjectList from './components/SubjectList';

import Stats from './components/Stats';
import Ourservicesmain from './components/Ourservicesmain';

import Navbar from './components/Navbar';
import serviceour from './components/serviceour';

import Pdfimage from './components/Pdfimage';

import Statistic from './components/Statistic';

import Iit from './components/Iit2074';
import Iit2075 from './components/IIt2075';
import Iit2078 from './components/Iit2078';
import Iit2074 from './components/Iit2074';
import Iit2079 from './components/Iit2079';

import CProgramming2079 from './components/c/CProgramming2079';
import CProgramming2074 from './components/c/CProgramming2074';
import CProgramming2075 from './components/c/CProgramming2075';
import CProgramming2077 from './components/c/CProgramming2077';
import CProgramming2078 from './components/c/CProgramming2078';

import Dl1 from "./components/digital logic/Dl1";


import Aftersubjectlist from './components/Aftersubjectlist';


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

              <Route path="/Iit" element={<Iit />} />
              <Route path="/Iit2075" element={<Iit2075 />} />
              <Route path="/Iit2078" element={<Iit2078 />} />
              <Route path="/Iit2074" element={<Iit2074 />} />
              <Route path="/Iit2079" element={< Iit2079 />} />

              <Route path="/c2074" element={< CProgramming2074 />} />
              <Route path="/c2075" element={< CProgramming2075 />} />
              <Route path="/c2077" element={<CProgramming2077 />} />
              <Route path="/c2078" element={< CProgramming2078 />} />
              <Route path="/c2079" element={< CProgramming2079 />} />

              <Route path="/Iit" element={<Iit />} />
              <Route path="/Iit2075" element={<Iit2075 />} />
              <Route path="/Iit2078" element={<Iit2078 />} />
              <Route path="/Iit2074" element={<Iit2074 />} />
              <Route path="/Iit2079" element={< Iit2079 />} />

              <Route path="/Iit" element={<Iit />} />
              <Route path="/Iit2075" element={<Iit2075 />} />
              <Route path="/Iit2078" element={<Iit2078 />} />
              <Route path="/Iit2074" element={<Iit2074 />} />
              <Route path="/Iit2079" element={< Iit2079 />} />

            </Routes>
          </BrowserRouter>
          <Home />


          <Dl1 />
          
          <Ourfeature />

          <SubjectList />
          <Statistic />
          <Timeline />
          <Portfolio />
          {/* <QAComponent data={data} /> */}
          <Team />
          <Map />
          <Aboutus />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App;
