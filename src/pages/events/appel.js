import React, { useState } from "react";
import './appel.css'

const donations = [
  { id: 1, image: "https://via.placeholder.com/300", location: "Paris", group: "O+" },
  { id: 2, image: "https://via.placeholder.com/300", location: "Lyon", group: "A-" },
  { id: 3, image: "https://via.placeholder.com/300", location: "Marseille", group: "B+" },
  { id: 4, image: "https://via.placeholder.com/300", location: "Paris", group: "AB-" },
  { id: 5, image: "https://via.placeholder.com/300", location: "Lille", group: "A+" },
  { id: 6, image: "https://via.placeholder.com/300", location: "Lyon", group: "O-" },
];

const BloodDonationCalls = () => {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedGroup, setSelectedGroup] = useState("");

  const handleLocationChange = (e) => {
    setSelectedLocation(e.target.value);
  };

  const handleGroupChange = (e) => {
    setSelectedGroup(e.target.value);
  };

  const filteredDonations = donations.filter((donation) => {
    return (
      (selectedLocation === "" || donation.location === selectedLocation) &&
      (selectedGroup === "" || donation.group === selectedGroup)
    );
  });

  return (
    <div className="donation-container">
      {/* Sidebar */}
      <aside className="filter-sidebar">
        <h3>Filtrer</h3>
        <label>Lieu:</label>
        <select onChange={handleLocationChange} value={selectedLocation}>
          <option value="">Tous</option>
          <option value="Paris">Paris</option>
          <option value="Lyon">Lyon</option>
          <option value="Marseille">Marseille</option>
          <option value="Lille">Lille</option>
        </select>

        <label>Groupe sanguin:</label>
        <select onChange={handleGroupChange} value={selectedGroup}>
          <option value="">Tous</option>
          <option value="O+">O+</option>
          <option value="B+">B+</option>
          <option value="A+">A+</option>
          <option value="A+">AB+</option>
          <option value="A-">A-</option>
          <option value="O-">O-</option>
          <option value="B+">B-</option>

          <option value="AB-">AB-</option>
          <option value="AB-">AB-</option>
         
        
        </select>
      </aside>

      {/* Donations Grid */}
      <div className="donation-grid">
        {filteredDonations.map((donation) => (
          <div key={donation.id} className="donation-card">
            <img src={donation.image} alt="Appel au don" className="donation-image" />
            <h4>Lieu: {donation.location}</h4>
            <p>Groupe sanguin: {donation.group}</p>
            <button className="donation-button">Participer</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BloodDonationCalls;
