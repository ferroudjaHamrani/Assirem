import React, { useState, useEffect, useCallback } from 'react';
import { FaList, FaSearch } from 'react-icons/fa';
import SidebarAdm from '../../components/sidebar/sidebar';
import axios from 'axios';
import './admin.css';

function PublicationAdmin() {
    const [searchTerm, setSearchTerm] = useState('');
    const [publications, setPublications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/post/GetPost', { skip: 0, limit: 10 });
                setPublications(response.data.results);
            } catch (error) {
                setError("Erreur lors de la récupération des données !");
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleSearchChange = useCallback((event) => {
        setSearchTerm(event.target.value.toLowerCase());
    }, []);

    const filteredPublications = publications.filter(publication =>
        publication?.nom?.toLowerCase().includes(searchTerm) ||
        publication?.prenom?.toLowerCase().includes(searchTerm) ||
        publication?.tel?.includes(searchTerm) ||
        publication?.wilaya?.toLowerCase().includes(searchTerm) ||
        publication?.commune?.toLowerCase().includes(searchTerm)
    );

    return (
        <div className='admin-page-container1'>
            <SidebarAdm />
            <div className="admin-container1">
                <div className="admin-header1">
                    <h1><FaList /> Liste</h1>
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

                {loading ? (
                    <p>Chargement des données...</p>
                ) : error ? (
                    <p className="error-message">{error}</p>
                ) : (
                    <table className="admin-table1">
                        <thead>
                            <tr>
                                <th>Nom</th>
                                <th>Prénom</th>
                                <th>N°Tél</th>
                                <th>DD Don</th>
                                <th>Groupe</th>
                                <th>Wilaya</th>
                                <th>Commune</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredPublications.length > 0 ? (
                                filteredPublications.map(publication => (
                                    <tr key={publication._id}>
                                        <td>{publication.nom}</td>
                                        <td>{publication.prenom}</td>
                                        <td>{publication.tel || 'N/A'}</td>
                                        <td>{publication.date_dernier_don ? new Date(publication.date_dernier_don).toLocaleDateString() : 'N/A'}</td>
                                        <td>{publication.groupage || 'N/A'}</td>
                                        <td>{publication.wilaya || 'N/A'}</td>
                                        <td>{publication.commune || 'N/A'}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="7" style={{ textAlign: 'center' }}>Aucune publication trouvée.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}

export default PublicationAdmin;
