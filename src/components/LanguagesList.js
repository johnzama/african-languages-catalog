import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import axios from 'axios'; // Import axios for HTTP requests

const LanguagesList = () => {
  const [languages, setLanguages] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(true); // State to handle loading

  const itemsPerPage = 2; // Number of items per page
  const offset = currentPage * itemsPerPage;

  // Fetch data from API on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://api.example.com/languages'); // Replace with your API URL
        setLanguages(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Filter the languages based on search term and selected region
  const filteredLanguages = languages.filter(language =>
    (selectedRegion === 'All' || language.region === selectedRegion) &&
    (language.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
     language.region.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const pageCount = Math.ceil(filteredLanguages.length / itemsPerPage);

  // Handle page click to change the current page
  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

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

