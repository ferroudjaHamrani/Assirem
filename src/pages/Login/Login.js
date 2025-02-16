import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // useNavigate pour la redirection
import './Login.css';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';

export default function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Pour rediriger après connexion

  // Gérer les changements des inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Envoyer les données au backend
  const handleSubmit = async (e) => {
    e.preventDefault(); // Empêche le rechargement de la page

    try {
      const response = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Erreur lors de la connexion");
      }

      localStorage.setItem("token", data.token); // Stocker le token
      navigate("/Admin"); // Rediriger après connexion

    } catch (err) {
      setError(err.message); // Afficher l'erreur
    }
  };

  return (
    <div>
      <Navbar />
      <div className="login-container">
        <div className="login-box">
          <h2>Connexion</h2>

          {error && <p className="error-message">{error}</p>} {/* Afficher l'erreur */}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Entrez votre email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Mot de passe</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Entrez votre mot de passe"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="login-button">Se connecter</button>
          </form>

          <p className="signup-link">
            Vous n'avez pas de compte ? <Link to="/SignUp">Inscrivez-vous</Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
