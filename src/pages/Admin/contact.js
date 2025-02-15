import React, { useState } from 'react';
import { FaList, FaSearch, FaTrash } from 'react-icons/fa';
import SidebarAdm from '../../components/sidebar/sidebar';
import './admin.css';

function ContactAdm() {
    const [searchTerm, setSearchTerm] = useState('');

    const samplePublications = [
        { id_publication: 1, nom: 'Dupont', prenom: 'Jean', telephone: '0601020304', description: 'Contact principal' },
        { id_publication: 2, nom: 'Martin', prenom: 'Sophie', telephone: '0612345678', description: 'Nouveau contact' },
        { id_publication: 3, nom: 'Durand', prenom: 'Paul', telephone: '0698765432', description: 'Ancien client' }
    ];

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value.toLowerCase());
    };

    const filteredPublications = samplePublications.filter(
        publication =>
            publication.nom.toLowerCase().includes(searchTerm) ||
            publication.prenom.toLowerCase().includes(searchTerm) ||
            publication.telephone.includes(searchTerm) ||
            publication.description.toLowerCase().includes(searchTerm)
    );

    return (
        <div className='admin-page-container1'>
         
                <SidebarAdm />
           
            <div className="admin-container1">
                <div className="admin-header1">
                    <h1><FaList /> Contacts</h1>
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
                            <th>Nom Complet</th>
                            <th>Prénom</th>
                            <th>N°Tél</th>
                            <th>Description</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {filteredPublications.map(publication => (
                            <tr key={publication.id_publication}>
                                <td>{publication.nom}</td>
                                <td>{publication.prenom}</td>
                                <td>{publication.telephone}</td>
                                <td>{publication.description}</td>
                                {/* <td>
                                    <button className="reject1" data-tooltip="Supprimer">
                                        <FaTrash />
                                    </button>
                                </td> */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ContactAdm;
