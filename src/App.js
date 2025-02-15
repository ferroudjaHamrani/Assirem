import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home/home';
import Login from './pages/Login/Login';
import SignUp from './pages/signUp/SinUp';
import Apropos from './pages/apropos/apropos';
import Appel from './pages/events/appel'
import Admin from './pages/Admin/admin'
import Publier from './pages/Admin/publier'
import Contact from './pages/Admin/contact'
function App() {
  return (
    <Router>
      <div>
        <Routes>
          {/* Route pour la page d'accueil */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Apropos" element={<Apropos />} />
          <Route path="/Appel" element={<Appel/>} />
          <Route path="/Admin" element={<Admin/>} />
          <Route path="/publier" element={<Publier/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
