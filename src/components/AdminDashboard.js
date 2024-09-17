import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [languages, setLanguages] = useState([]);
  const [newLanguage, setNewLanguage] = useState({ name: '', region: '' });
  const [editLanguage, setEditLanguage] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch languages from the backend API
  useEffect(() => {
    const fetchLanguages = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://api.example.com/languages'); // Replace with your API URL
        setLanguages(response.data);
      } catch (error) {
        console.error('Error fetching languages:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLanguages();
  }, []);

  // Add a new language
  const handleAddLanguage = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://api.example.com/languages', newLanguage); // Replace with your API URL
      setLanguages([...languages, response.data]);
      setNewLanguage({ name: '', region: '' });
    } catch (error) {
      console.error('Error adding language:', error);
    }
  };

  // Update a language
  const handleUpdateLanguage = async (id) => {
    try {
      const response = await axios.put(`https://api.example.com/languages/${id}`, editLanguage); // Replace with your API URL
      setLanguages(languages.map((lang) => (lang.id === id ? response.data : lang)));
      setEditLanguage(null);
    } catch (error) {
      console.error('Error updating language:', error);
    }
  };

  // Delete a language
  const handleDeleteLanguage = async (id) => {
    try {
      await axios.delete(`https://api.example.com/languages/${id}`); // Replace with your API URL
      setLanguages(languages.filter((lang) => lang.id !== id));
    } catch (error) {
      console.error('Error deleting language:', error);
    }
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {/* Add Language Form */}
          <form onSubmit={handleAddLanguage}>
            <input
              type="text"
              placeholder="Language Name"
              value={newLanguage.name}
              onChange={(e) => setNewLanguage({ ...newLanguage, name: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="Region"
              value={newLanguage.region}
              onChange={(e) => setNewLanguage({ ...newLanguage, region: e.target.value })}
              required
            />
            <button type="submit">Add Language</button>
          </form>

          {/* Language List with Edit and Delete Options */}
          <ul>
            {languages.map((lang) => (
              <li key={lang.id}>
                {editLanguage && editLanguage.id === lang.id ? (
                  <>
                    <input
                      type="text"
                      value={editLanguage.name}
                      onChange={(e) => setEditLanguage({ ...editLanguage, name: e.target.value })}
                    />
                    <input
                      type="text"
                      value={editLanguage.region}
                      onChange={(e) => setEditLanguage({ ...editLanguage, region: e.target.value })}
                    />
                    <button onClick={() => handleUpdateLanguage(lang.id)}>Save</button>
                    <button onClick={() => setEditLanguage(null)}>Cancel</button>
                  </>
                ) : (
                  <>
                    <strong>{lang.name}</strong> - {lang.region}
                    <button onClick={() => setEditLanguage(lang)}>Edit</button>
                    <button onClick={() => handleDeleteLanguage(lang.id)}>Delete</button>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;

