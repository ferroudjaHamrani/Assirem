import React from 'react';
import image1 from '../../assets/image1.jpg';
import './from.css'; // Fichier CSS pour styliser le formulaire

export default function Form() {
  return (
    <div className="form-container">
      <img src={image1} alt="Don de sang" className="form-image" />
      <div className="formulaire-container">
        <h4>Inscrivez-vous pour offrir le cadeau le plus précieux : le don de vie.</h4>
        <form>
          {/* Ligne Nom et Prénom */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="nom">Nom</label>
              <input type="text" id="nom" name="nom" placeholder="Votre nom" />
            </div>
            <div className="form-group">
              <label htmlFor="prenom">Prénom</label>
              <input type="text" id="prenom" name="prenom" placeholder="Votre prénom" />
            </div>
          </div>

          {/* Numéro de téléphone */}
          <div className="form-group">
            <label htmlFor="telephone">Numéro de téléphone</label>
            <input type="tel" id="telephone" name="telephone" placeholder="Votre numéro" />
          </div>

          {/* Date du dernier don */}
          <div className="form-group">
            <label htmlFor="dateDernierDon">Date du dernier don</label>
            <input type="date" id="dateDernierDon" name="dateDernierDon" />
          </div>

          {/* Wilaya et Commune */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="wilaya">Wilaya</label>
              <select id="wilaya" name="wilaya">
                <option value="">Sélectionnez votre wilaya</option>
                <option value="alger">Alger</option>
                <option value="oran">Oran</option>
                <option value="blida">Blida</option>
                {/* Ajoutez d'autres options ici */}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="commune">Commune</label>
              <input type="text" id="commune" name="commune" placeholder="Votre commune" />
            </div>
          </div>

          {/* Bouton de soumission */}
          <button type="submit" className="submit-button">Envoyer</button>
        </form>
      </div>
    </div>
  );
}
