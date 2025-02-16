import React, { useState } from 'react';
import './apropos.css'; 
import logo from '../../assets/logo.png'; 
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    nom_complet: '',
    tel: '',
    description: '',
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  // Fonction pour gérer les changements dans les champs du formulaire
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    try {
      const response = await fetch('http://localhost:5000/contact/addContact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage(data.message);
        setFormData({ nom_complet: '', tel: '', description: '' });
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError("Une erreur est survenue. Veuillez réessayer.");
    }
  };

  return (
    <div>
      <Navbar/>
      <div className="contact-section">
        <div className="about-us">
          <img src={logo} alt="ASIRM Logo" className="logo" />
          <div className="about-text">
            <h2>À propos de nous</h2>
            <p>
              ASIRM (Association pour le Soutien et l'Information sur le Don de Sang)
              est dédiée à la sensibilisation et à la promotion du don de sang. 
              Notre mission est de sauver des vies grâce à des actes de générosité, 
              en créant une communauté solidaire et engagée.
            </p>
          </div>
        </div>

        {/* Formulaire "Contactez-nous" */}
        <div className="contact-form">
          <h2>Contactez-nous</h2>
          {message && <p className="success-message">{message}</p>}
          {error && <p className="error-message">{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nom_complet">Nom complet</label>
              <input
                type="text"
                id="nom_complet"
                name="nom_complet"
                placeholder="Entrez votre nom complet"
                value={formData.nom_complet}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="tel">N° Tél </label>
              <input
                type="text"
                id="tel"
                name="tel"
                placeholder="Entrez votre numéro de téléphone"
                value={formData.tel}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Votre message</label>
              <textarea
                id="description"
                name="description"
                rows="5"
                placeholder="Entrez votre message ici"
                value={formData.description}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">Envoyer</button>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
