import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, Languages, Gamepad2, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import './Navbar.css';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const links = [
    { to: '/units', label: 'Units', icon: <BookOpen size={16} /> },
    { to: '/verbs', label: 'Verbs', icon: <Languages size={16} /> },
    { to: '/games', label: 'Games', icon: <Gamepad2 size={16} /> },
  ];

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <div className="logo-icon">
          <BookOpen size={20} color="white" />
        </div>
        <span className="logo-text">Grammar In Use</span>
      </Link>

      <div className="navbar-links">
        {links.map(link => (
          <Link
            key={link.to}
            to={link.to}
            className={`nav-link ${location.pathname === link.to ? 'active' : ''}`}
          >
            {link.icon}
            {link.label}
          </Link>
        ))}

        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
          {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
        </button>
      </div>
    </nav>
  );
}