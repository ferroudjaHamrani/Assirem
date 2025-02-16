import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaList, FaSearch } from 'react-icons/fa';
import SidebarAdm from '../../components/sidebar/sidebar';
import './admin.css';

function ContactAdm() {
    const [searchTerm, setSearchTerm] = useState('');
    const [contacts, setContacts] = useState([]);

    // Récupérer les contacts depuis l'API
    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const res = await axios.get('http://localhost:5000/contact/getAllContact');
                if (res.data && Array.isArray(res.data.results)) {
                    setContacts(res.data.results);  // Prend seulement le tableau des contacts
                } else {
                    console.error("Les données reçues ne sont pas un tableau :", res.data);
                    setContacts([]);
                }
            } catch (error) {
                console.error("Erreur lors de la récupération des contacts", error);
            }
        };
        fetchContacts();
    }, []);
    

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value.toLowerCase());
    };

    const filteredContacts = contacts.filter(
        contact =>
            contact.nom_complet.toLowerCase().includes(searchTerm) ||
            (contact.tel && contact.tel.includes(searchTerm)) ||
            (contact.description && contact.description.toLowerCase().includes(searchTerm))
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
                            <th>N°Tél</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredContacts.map(contact => (
                            <tr key={contact._id}>
                                <td>{contact.nom_complet}</td>
                                <td>{contact.tel || "Non renseigné"}</td>
                                <td>{contact.description || "Aucune description"}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ContactAdm;
