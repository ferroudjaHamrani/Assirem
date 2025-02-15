


import React, { useState } from 'react';
import './faq.css';
import faqData from '../../data/faq.json';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Import des icônes

export default function Faq() {
  const [openItem, setOpenItem] = useState(null); // État pour suivre l'élément ouvert

  const toggleAnswer = (id) => {
    // Si l'élément est déjà ouvert, fermer. Sinon, ouvrir l'élément correspondant.
    setOpenItem((prevOpenItem) => (prevOpenItem === id ? null : id));
  };

  return (
    <div className="faq-container">
      <h2>Vous avez des questions ? Nous avons les réponses !</h2>
      <div className="faq-grid">
        {faqData.map((item) => (
          <div key={item.id} className="faq-item">
            <div className="faq-header" onClick={() => toggleAnswer(item.id)}>
              <h3>{item.question}</h3>
              {/* Icône pour indiquer si la réponse est ouverte ou fermée */}
              {openItem === item.id ? (
                <FaChevronUp className="icon" />
              ) : (
                <FaChevronDown className="icon" />
              )}
            </div>
            {/* Réponse affichée uniquement si l'élément est ouvert */}
            {openItem === item.id && <p className="faq-answer">{item.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
      

    









    
 
  
      
