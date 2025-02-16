import React, { useState } from "react";
import axios from "axios";
import image1 from "../../assets/image1.jpg";
import "./from.css"; 

export default function Form() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    tel: "",
    date_dernier_don: "",
    groupage: "",
    wilaya: "",
    commune: ""
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Réinitialisation des erreurs

    try {
      // Formatage de la date pour respecter le format attendu
      const formattedData = {
        ...formData,
        date_dernier_don: formData.date_dernier_don ? new Date(formData.date_dernier_don).toISOString() : null
      };

      const res = await axios.post("http://localhost:5000/post/addPost", formattedData, {
        headers: { "Content-Type": "application/json" }
      });
      alert(res.data.message);
    } catch (error) {
      console.error("Erreur lors de l'envoi du formulaire", error.response?.data || error);
      setErrorMessage(error.response?.data?.message || "Problème de connexion");
    }
  };

  return (
    <div className="form-container">
      <img src={image1} alt="Don de sang" className="form-image" />
      <div className="formulaire-container">
        <h4>Inscrivez-vous pour offrir le cadeau le plus précieux : le don de vie.</h4>

        {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Affichage des erreurs */}

        <form onSubmit={handleSubmit}>
          {/* Nom et Prénom */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="nom">Nom</label>
              <input
                type="text"
                id="nom"
                name="nom"
                placeholder="Votre nom"
                value={formData.nom}
                onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="prenom">Prénom</label>
              <input
                type="text"
                id="prenom"
                name="prenom"
                placeholder="Votre prénom"
                value={formData.prenom}
                onChange={(e) => setFormData({ ...formData, prenom: e.target.value })}
                required
              />
            </div>
          </div>

          {/* Numéro de téléphone */}
          <div className="form-group">
            <label htmlFor="tel">Numéro de téléphone</label>
            <input
              type="tel"
              id="tel"
              name="tel"
              placeholder="Votre numéro"
              value={formData.tel}
              onChange={(e) => setFormData({ ...formData, tel: e.target.value })}
            />
          </div>

          {/* Date du dernier don et Groupe Sanguin */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="date_dernier_don">Date du dernier don</label>
              <input
                type="date"
                id="date_dernier_don"
                name="date_dernier_don"
                value={formData.date_dernier_don}
                onChange={(e) => setFormData({ ...formData, date_dernier_don: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="groupage">Groupe Sanguin</label>
              <select
                id="groupage"
                name="groupage"
                value={formData.groupage}
                onChange={(e) => setFormData({ ...formData, groupage: e.target.value })}
              >
                <option value="">Sélectionnez votre groupe sanguin</option>
                <option value="O+">O+</option>
                <option value="B+">B+</option>
                <option value="A+">A+</option>
                <option value="AB+">AB+</option>
                <option value="A-">A-</option>
                <option value="O-">O-</option>
                <option value="B-">B-</option>
                <option value="AB-">AB-</option>
              </select>
            </div>
          </div>

          {/* Wilaya et Commune */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="wilaya">Wilaya</label>
              <select
                id="wilaya"
                name="wilaya"
                value={formData.wilaya}
                onChange={(e) => setFormData({ ...formData, wilaya: e.target.value })}
              >
                <option value="">Sélectionnez votre wilaya</option>
                <option value="alger">Alger</option>
                <option value="oran">Oran</option>
                <option value="blida">Blida</option>
                {/* Ajoutez d'autres wilayas ici */}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="commune">Commune</label>
              <input
                type="text"
                id="commune"
                name="commune"
                placeholder="Votre commune"
                value={formData.commune}
                onChange={(e) => setFormData({ ...formData, commune: e.target.value })}
              />
            </div>
          </div>

         
          <button type="submit" className="submit-button">Envoyer</button>
        </form>
      </div>
    </div>
  );
}
