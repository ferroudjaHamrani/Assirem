import React from 'react';
import data from '../../data/events.json'; 
import './events.css';

export default function Events() {
  
  const sortedEvents = data.sort((a, b) => new Date(b.date) - new Date(a.date));
  
  
  const recentEvents = sortedEvents.slice(0, 2);

  return (
    <div className="events-container">
      {/* Description principale */}
      <div className="envts-desc">
        <h3>
          Rejoignez-nous pour soutenir celles et ceux dans le besoin, et découvrez nos événements solidaires.
        </h3>
        <div className="event-button">
          <a href="formulaire.html">Contactez-nous !</a>
        </div>
      </div>

      {/* Cartes des événements */}
      <div className="event-card-container">
        {recentEvents.map((event) => (
          <div className="event-card" key={event.id}>
            <img src={require(`../../${event.image}`)} alt={event.title} className="event-image" />
            <div>
              <h4>{event.title}</h4>
              <p>{event.description}</p>
              <h5>{event.date}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
