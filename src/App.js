import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import LanguagesList from './components/LanguagesList';
import LanguageDetail from './components/LanguageDetail';
import Login from './components/Login';
import Register from './components/Register';
import AdminDashboard from './components/AdminDashboard';
import LanguageMap from './components/LanguageMap'; // Import LanguageMap component

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/languages">Languages</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/admin">Admin Dashboard</Link></li>
            <li><Link to="/map">Language Map</Link></li> {/* Add link to Language Map */}
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/languages" element={<LanguagesList />} />
          <Route path="/languages/:id" element={<LanguageDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/map" element={<LanguageMap />} /> {/* Add route for Language Map */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

