import React from 'react';
import ReactDOM from 'react-dom/client';

import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Footer from "./components/Footer/Footer";
import Error from "./pages/Error/Error";

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes> 
      <Footer/>
    </Router> 

  </React.StrictMode>
);


