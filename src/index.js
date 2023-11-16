//* composants => Router -> stocker et s'abonner aux URL / Routes -> sélect composant enfant
// * Route -> params path et element (mini)
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from "./components/Header/header_comp";
import Home from './pages/Home/home';
import Logement from './pages/Logement/logement';
import APropos from './pages/A_propos/a_propos';
import Footer from "./components/Footer/footer_comp";
import Error from "./pages/Error/error";

//* renvoie sur HTML le Js/React
const root = createRoot(document.getElementById('root'));

//* path='*' toutes les autres routes / element ce que renvoit le composant (fc°)
//* incorporer header et footer dans le global car ds ttes les pages
//! vérifier routes 26/06 
root.render(
	<React.StrictMode>
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/Logement" element={<Logement />} />
				<Route path="/A_propos" element={<APropos />} />
				<Route path='*' element={<Error />} />
			</Routes>
			<Footer />
		</Router>
	</React.StrictMode>,
)