import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Sample data representing some African languages
const languages = [
  { id: 1, name: 'Swahili', region: 'East Africa' },
  { id: 2, name: 'Yoruba', region: 'West Africa' },
  { id: 3, name: 'Zulu', region: 'Southern Africa' },
  { id: 4, name: 'Amharic', region: 'Horn of Africa' },
];

const LanguagesList = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter languages based on the search term
  const filteredLanguages = languages.filter(language =>
    language.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    language.region.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Languages of Africa</h1>

      {/* Search bar for filtering languages */}
      <input
        type="text"
        placeholder="Search languages..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Display filtered list of languages */}
      <ul>
        {filteredLanguages.map((language) => (
          <li key={language.id}>
            <Link to={`/languages/${language.id}`}>
              <strong>{language.name}</strong> - {language.region}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LanguagesList;

