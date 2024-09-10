import React from 'react';
import { Link } from 'react-router-dom';

const languages = [
  { id: 1, name: 'Swahili', region: 'East Africa' },
  { id: 2, name: 'Yoruba', region: 'West Africa' },
  { id: 3, name: 'Zulu', region: 'Southern Africa' },
  { id: 4, name: 'Amharic', region: 'Horn of Africa' },
];

const LanguagesList = () => {
  return (
    <div>
      <h1>Languages of Africa</h1>
      <ul>
        {languages.map((language) => (
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

