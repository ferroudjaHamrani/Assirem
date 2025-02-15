import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import de Link pour la navigation
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import des icônes
import './SinUp.css';
import Navbar from '../../components/navbar/navbar'
import Footer from '../../components/footer/footer'

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false); // État pour afficher/masquer le mot de passe

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
        <Navbar/>
    <div className="signup-container">
      <div className="signup-box">
        <h2>Inscription</h2>
        <form>
          {/* Nom et Prénom sur la même ligne */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="nom">Nom</label>
              <input type="text" id="nom" name="nom" placeholder="Entrez votre nom" required />
            </div>
            <div className="form-group">
              <label htmlFor="prenom">Prénom</label>
              <input type="text" id="prenom" name="prenom" placeholder="Entrez votre prénom" required />
            </div>
          </div>

          {/* Email */}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Entrez votre email" required />
          </div>

          {/* Mot de passe */}
          <div className="form-group">
            <label htmlFor="password">Mot de passe</label>
            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Entrez votre mot de passe"
                required
              />
              <button
                type="button"
                className="toggle-password"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          {/* Confirmer le mot de passe */}
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirmer le mot de passe</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Réécrivez votre mot de passe"
              required
            />
          </div>

          {/* Bouton d'inscription */}
          <button type="submit" className="signup-button">S'inscrire</button>
        </form>

        {/* Redirection vers Login */}
        <p className="login-link">
          Vous avez déjà un compte ? <Link to="/login">Connectez-vous</Link>
        </p>
      </div>
    </div>
    <Footer/>
    </div>
  );
}
