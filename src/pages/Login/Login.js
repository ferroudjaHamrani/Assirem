import React from 'react';
import { Link } from 'react-router-dom'; // Import de Link pour la redirection
import './Login.css';
import Navbar from '../../components/navbar/navbar'
import Footer from '../../components/footer/footer'

export default function Login() {
  return (
    <div>
      <Navbar/>
    <div className="login-container">
      <div className="login-box">
        <h2>Connexion</h2>
        <form>
          {/* Champ Email */}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Entrez votre email" required />
          </div>

          {/* Champ Mot de passe */}
          <div className="form-group">
            <label htmlFor="password">Mot de passe</label>
            <input type="password" id="password" name="password" placeholder="Entrez votre mot de passe" required />
          </div>

          {/* Bouton de Connexion */}
          <button type="submit" className="login-button">Se connecter</button>
        </form>

        {/* Redirection vers Signup */}
        <p className="signup-link">
          Vous n'avez pas de compte ? <Link to="/SignUp">Inscrivez-vous</Link>
        </p>
      </div>
    </div>
    <Footer/>
    </div>
  );
}
