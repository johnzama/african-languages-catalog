import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import LanguagesList from './components/LanguagesList';
import LanguageDetail from './components/LanguageDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/languages">Languages</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/languages" element={<LanguagesList />} />
          <Route path="/languages/:id" element={<LanguageDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

