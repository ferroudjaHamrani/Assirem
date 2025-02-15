import React, { useState } from 'react';
import { FaList, FaSearch, FaTrash } from 'react-icons/fa';
import SidebarAdm from '../../components/sidebar/sidebar';
import './admin.css';

function PublicationAdmin() {
    const [searchTerm, setSearchTerm] = useState('');

    // Adaptation des données pour correspondre au tableau
    const samplePublications = [
        { id_publication: 1, nom: 'Dupont', prenom: 'Jean', telephone: '0601020304', dd_don: '2024-02-01', groupe: 'A+', resus: 'Positif', wilaya: 'Alger', commune: 'Bab El Oued' },
        { id_publication: 2, nom: 'Martin', prenom: 'Sophie', telephone: '0612345678', dd_don: '2024-01-15', groupe: 'O-', resus: 'Négatif', wilaya: 'Oran', commune: 'Es Sénia' },
        { id_publication: 3, nom: 'Durand', prenom: 'Paul', telephone: '0698765432', dd_don: '2023-12-10', groupe: 'B+', resus: 'Positif', wilaya: 'Constantine', commune: 'El Khroub' }
    ];

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value.toLowerCase());
    };

    const filteredPublications = samplePublications.filter(
        publication =>
            publication.nom.toLowerCase().includes(searchTerm) ||
            publication.prenom.toLowerCase().includes(searchTerm) ||
            publication.telephone.includes(searchTerm) ||
            publication.wilaya.toLowerCase().includes(searchTerm) ||
            publication.commune.toLowerCase().includes(searchTerm)
    );

    return (
        <div className='admin-page-container1'>
            
                <SidebarAdm />
            
            <div className="admin-container1">
                <div className="admin-header1">
                    <h1><FaList /> Liste </h1>
                    <div className="search-box1">
                        <button className="search-button1">
                            <FaSearch />
                        </button>
                        <input
                            type="search"
                            placeholder="Rechercher"
                            className="search-input1"
                            onChange={handleSearchChange}
                        />
                    </div>
                </div>

                <table className="admin-table1">
                    <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Prénom</th>
                            <th>N°Tél</th>
                            <th>DD Don</th>
                            <th>Groupe</th>
                            <th>Résus</th>
                            <th>Wilaya</th>
                            <th>Commune</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredPublications.map(publication => (
                            <tr key={publication.id_publication}>
                                <td>{publication.nom}</td>
                                <td>{publication.prenom}</td>
                                <td>{publication.telephone}</td>
                                <td>{publication.dd_don}</td>
                                <td>{publication.groupe}</td>
                                <td>{publication.resus}</td>
                                <td>{publication.wilaya}</td>
                                <td>{publication.commune}</td>
                               
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default PublicationAdmin;
