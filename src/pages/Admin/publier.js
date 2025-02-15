import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './publier.css';
import { FaUpload } from 'react-icons/fa';
import SidebarAdm from '../../components/sidebar/sidebar';

function Admin2() {
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [type, setType] = useState('');
  const [dateDebut, setDateDebut] = useState('');
  const [dateFin, setDateFin] = useState('');
  const [datePublication, setDatePublication] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!subject) newErrors.subject = 'Veuillez entrer un lieu.';
    if (!description) newErrors.description = 'Veuillez entrer une description.';
    if (!type) newErrors.type = 'Veuillez choisir un groupe sanguin.';

    if (type === 'event') {
      if (!dateDebut || !dateFin || !datePublication) {
        newErrors.date = 'Veuillez renseigner toutes les dates.';
      } else {
        if (new Date(dateFin) < new Date(dateDebut)) {
          newErrors.dateFin = 'La date de fin ne peut pas être antérieure à la date de début.';
        }
        if (new Date(datePublication) >= new Date(dateDebut)) {
          newErrors.datePublication = 'La date de publication doit être avant la date de début.';
        }
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCancel = () => {
    setSubject('');
    setDescription('');
    setSelectedFile(null);
    setType('');
    setDateDebut('');
    setDateFin('');
    setDatePublication('');
    setErrors({});
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleIconClick = () => {
    document.getElementById('fileInput').click();
  };

  const handleSubmit = () => {
    if (!validateForm()) return;
    alert('Formulaire soumis avec succès !');
  };

  return (
    <div className='admin-page-container1'>
     
        <SidebarAdm />
      
      <div className="admin-container1">
        <div className="AdminTitleContainer1">
          <h1 className="AdminTitle1">Publier</h1>
        </div>

        <div className="AdminInputContainer1">
          <label className="AdminLabel1">Groupe Sanguin*</label>
          <select
            className={`AdminInput1 ${errors.type ? 'error' : ''}`}
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="">Choisir un groupe sanguin</option>
            <option value="O+">O+</option>
            <option value="A+">A+</option>
            <option value="B+">B+</option>
            <option value="AB+">AB+</option>
            <option value="O-">O-</option>
            <option value="A-">A-</option>
            <option value="B-">B-</option>
            <option value="AB-">AB-</option>
          </select>
          {errors.type && <span className="error-message">{errors.type}</span>}
        </div>

        <div className="AdminInputContainer1">
          <label className="AdminLabel1">Lieu*</label>
          <input
            type="text"
            className={`AdminInput1 ${errors.subject ? 'error' : ''}`}
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          {errors.subject && <span className="error-message">{errors.subject}</span>}
        </div>

        <div className="AdminDescriptionContainer1">
          <label className="AdminLabel1">Description*</label>
          <textarea
            className={`AdminTextarea1 ${errors.description ? 'error' : ''}`}
            placeholder="Écrire la description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          {errors.description && <span className="error-message">{errors.description}</span>}
        </div>

        <div className="AdminFileContainer1">
          <div className="AdminHighlight1">Joindre des fichiers</div>
          <button className="file-upload-btn1" onClick={handleIconClick}>
            <FaUpload style={{ marginRight: '8px' }} /> Cliquez ici pour ajouter une photo
          </button>
          <input type="file" id="fileInput" style={{ display: 'none' }} onChange={handleFileChange} />
          {selectedFile && (
            <div className="AdminFilePreview1">
              <span>Fichier choisi: {selectedFile.name}</span>
            </div>
          )}
        </div>

        <div className="button-container1">
          <button onClick={handleCancel} className="cancel-button1">Annuler</button>
          <button onClick={handleSubmit} className="submit-button1">Envoyer</button>
        </div>
      </div>
    </div>
  );
}

Admin2.propTypes = {
  className: PropTypes.string,
};

export default Admin2;
