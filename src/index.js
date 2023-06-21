//* composants => Router -> stocker et s'abonner aux URL / Routes -> sélect composant enfant
// * Route -> params path et element (mini)
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/';
import Logement from './pages/Logement/';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Error from "./components/Error";

//* path='*' toutes les autres routes
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Logement />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)