import React from 'react';
import { useParams } from 'react-router-dom';

// Sample data representing some African languages
const languages = [
  { id: 1, name: 'Swahili', region: 'East Africa', details: 'Swahili is widely spoken in Kenya, Tanzania, Uganda, and several other countries in East Africa.' },
  { id: 2, name: 'Yoruba', region: 'West Africa', details: 'Yoruba is a major language in Nigeria and spoken by millions in West Africa.' },
  { id: 3, name: 'Zulu', region: 'Southern Africa', details: 'Zulu is spoken by the Zulu people, the largest ethnic group in South Africa.' },
  { id: 4, name: 'Amharic', region: 'Horn of Africa', details: 'Amharic is the official language of Ethiopia and has millions of speakers in the Horn of Africa.' },
];

const LanguageDetail = () => {
  const { id } = useParams();
  const language = languages.find(lang => lang.id === parseInt(id));

  if (!language) {
    return <h2>Language not found!</h2>;
  }

  return (
    <div>
      <h1>{language.name}</h1>
      <p><strong>Region:</strong> {language.region}</p>
      <p>{language.details}</p>
    </div>
  );
};

export default LanguageDetail;

