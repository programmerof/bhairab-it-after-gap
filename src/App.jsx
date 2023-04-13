import React from 'react';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Timeline from './components/Timeline';
import Map from './components/map';
import Header from './components/Header';
import Notesdiv from './components/NotesDiv'
import Team from './components/Team'
import Aboutus from './components/Aboutus'
import Home from './components/Home';
import Social_media_form from './components/Social_media_form';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Ourfeature from './components/Ourfeature';
import SubjectList from './components/SubjectList';
import Ourservicesmain from './components/Ourservicesmain';
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
import Physics2074 from "./components/Physics2074";
import Math2075 from "./components/Math2075";
import Math2 from './components/Secondsemnotes.jsx/Math2';
import Objectorientedprogramming from './components/Secondsemnotes.jsx/Objectorientedprogramming';
import Ds from './components/Secondsemnotes.jsx/Ds';
import Microprocessor from "./components/Secondsemnotes.jsx/Microprocessor";

import Smm from './components/Smm';

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
              <Route path="/aboutus" element={<Team />} />
              <Route path="/Team" element={<Aboutus />} />
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

              <Route path="/physics2074" element={< Physics2074 />} />

              <Route path="/Math2075" element={< Math2075 />} />

              <Route path="/OOP" element={< Objectorientedprogramming />} />
              <Route path="/Math2" element={< Math2 />} />
              <Route path="/Ds" element={< Ds />} />
              <Route path="/Microprocessor" element={< Microprocessor />} />
              <Route path="/Ds" element={< Ds />} />

            </Routes>
          </BrowserRouter>
          <Home />
          <Ourfeature />
         

          {/* <Physics2074 /> */}

          <SubjectList />
          {/* <Portfolio /> */}
          {/* <QAComponent data={data} /> */}
          {/* <Team />
          <Map />
          <Aboutus /> */}

          {/* <Contact /> */}
          <Footer />
          <Iit/>


        </div>
      </div>
    </>
  )
}

export default App;
