import React from 'react';

// Sample data representing some African languages
const languages = [
  { name: 'Swahili', region: 'East Africa' },
  { name: 'Yoruba', region: 'West Africa' },
  { name: 'Zulu', region: 'Southern Africa' },
  { name: 'Amharic', region: 'Horn of Africa' },
];

const LanguagesList = () => {
  return (
    <div>
      <h1>Languages of Africa</h1>
      <ul>
        {languages.map((language, index) => (
          <li key={index}>
            <strong>{language.name}</strong> - {language.region}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LanguagesList;

