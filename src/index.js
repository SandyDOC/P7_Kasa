import React from 'react';
import ReactDOM from 'react-dom/client';

import Header from './components/Header/Header';
import Footer from "./components/Footer/Footer";

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Error from "./pages/Error/Error";
import LogementDetails from './pages/LogementDetails/LogementDetails';

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
        {/* <Route path="/logement-details" element={<LogementDetails />} /> */}
      </Routes> 
      <Footer/>
    </Router> 
  </React.StrictMode>
);


