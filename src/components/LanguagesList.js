import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

// Sample data representing some African languages
const languages = [
  { id: 1, name: 'Swahili', region: 'East Africa' },
  { id: 2, name: 'Yoruba', region: 'West Africa' },
  { id: 3, name: 'Zulu', region: 'Southern Africa' },
  { id: 4, name: 'Amharic', region: 'Horn of Africa' },
  // Add more sample data to test pagination
];

const LanguagesList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [currentPage, setCurrentPage] = useState(0);

  const itemsPerPage = 2; // Number of items per page
  const offset = currentPage * itemsPerPage;
  const filteredLanguages = languages.filter(language =>
    (selectedRegion === 'All' || language.region === selectedRegion) &&
    (language.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
     language.region.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const pageCount = Math.ceil(filteredLanguages.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % filteredLanguages.length;
    setCurrentPage(event.selected);
  };

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

      {/* Dropdown filter for selecting a region */}
      <select value={selectedRegion} onChange={(e) => setSelectedRegion(e.target.value)}>
        <option value="All">All Regions</option>
        <option value="East Africa">East Africa</option>
        <option value="West Africa">West Africa</option>
        <option value="Southern Africa">Southern Africa</option>
        <option value="Horn of Africa">Horn of Africa</option>
      </select>

      {/* Display filtered and paginated list of languages */}
      <ul>
        {filteredLanguages.slice(offset, offset + itemsPerPage).map((language) => (
          <li key={language.id}>
            <Link to={`/languages/${language.id}`}>
              <strong>{language.name}</strong> - {language.region}
            </Link>
          </li>
        ))}
      </ul>

      {/* Pagination controls */}
      <ReactPaginate
        previousLabel={'Previous'}
        nextLabel={'Next'}
        breakLabel={'...'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
    </div>
  );
};

export default LanguagesList;

