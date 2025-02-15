import React from 'react';
import './apropos.css'; 
import logo from '../../assets/logo.png'; 
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
export default function Contact() {
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
        <form>
          <div className="form-group">
            <label htmlFor="name">Nom complet</label>
            <input type="text" id="name" placeholder="Entrez votre nom complet" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Adresse e-mail</label>
            <input type="email" id="email" placeholder="Entrez votre e-mail" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Votre message</label>
            <textarea id="message" rows="5" placeholder="Entrez votre message ici" required></textarea>
          </div>
          <button type="submit" className="submit-btn">Envoyer</button>
        </form>
      </div>
    </div>
    <Footer/>
    </div>
  );
}
