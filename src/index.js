//* composants => Router -> stocker et s'abonner aux URL / Routes -> sélect composant enfant
// * Route -> params path et element (mini)
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/';
import Logement from './pages/Logement/logement';
import Header from "./components/header_comp";
import Footer from "./components/footer_comp";
import Error from "./components/error_comp";

const root = createRoot(document.getElementById('root'));

//* path='*' toutes les autres routes
root.render(
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
)