import React from 'react';
import { FaFacebook, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import './footer.css'
export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Section Copyright */}
        <div className="footer-copyright">
          <p>© 2025 Assirem. Tous droits réservés.</p>
        </div>

        {/* Section Navigation */}
        <nav className="footer-nav">
          <a href="#accueil">Accueil</a>
          <a href="#evenement">Événements</a>
          <a href="#apropos">À propos</a>
        </nav>

        {/* Section Contact */}
        <div className="footer-contact">
          <a
            href="https://web.facebook.com/profile.php?id=61569355196750"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaFacebook className="social-icon" /> Facebook
          </a>
          <a
            href="https://wa.me/213551550839"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaWhatsapp className="social-icon" /> WhatsApp
          </a>
          <a
            href="https://www.instagram.com/assirem_15/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaInstagram className="social-icon" /> Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
