// src/components/LanguageMap.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Sample data representing some African languages with coordinates
const languages = [
  { id: 1, name: 'Swahili', region: 'East Africa', coordinates: [-1.2921, 36.8219] }, // Nairobi, Kenya
  { id: 2, name: 'Yoruba', region: 'West Africa', coordinates: [6.5244, 3.3792] }, // Lagos, Nigeria
  { id: 3, name: 'Zulu', region: 'Southern Africa', coordinates: [-29.8587, 31.0218] }, // Durban, South Africa
  { id: 4, name: 'Amharic', region: 'Horn of Africa', coordinates: [9.03, 38.74] }, // Addis Ababa, Ethiopia
  // Add more languages with corresponding coordinates
];

const LanguageMap = () => {
  return (
    <div>
      <h2>Language Map</h2>
      {/* MapContainer component to create a Leaflet map */}
      <MapContainer center={[0, 25]} zoom={3} style={{ height: '500px', width: '100%' }}>
        {/* TileLayer to provide the base map layer */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {/* Render a Marker for each language with a Popup */}
        {languages.map((language) => (
          <Marker key={language.id} position={language.coordinates}>
            <Popup>
              <strong>{language.name}</strong> <br />
              Region: {language.region}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default LanguageMap;

