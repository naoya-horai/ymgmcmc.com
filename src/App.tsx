
import logo from './logo.svg';
import Footer from './footer'
import Top from './top' 
import About from './about'
import Works from './Works'
import Header from './header'

import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <Router>
    <div className="font-body" > 
      
      <Routes>
        <Route path="/" element={<Top/>} />
        <Route path="/about" element={<>
          <Header/>
          <About/>
          <Footer/>  
        </>} />
        <Route path="/works" element={<>
          <Header/>
          <Works/>
          <Footer/>  
        </>} />
      </Routes>
    </div>
    </Router>
  );
}