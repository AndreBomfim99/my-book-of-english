import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { units } from '../data/unitsData';
import './Units.css';

export default function Units() {
  return (
    <main className="units-page">
      <div className="units-header">
        <h1 className="units-title">Units</h1>
        <p className="units-subtitle">
          Study English grammar organized into thematic units — click any unit to learn more
        </p>
      </div>

      <div className="units-list">
        {units.map(u => (
          <Link to={`/units/${u.id}`} key={u.id} className="unit-card">
            <span className="unit-number">{u.number}</span>
            <div className="unit-texts">
              <h2 className="unit-title">{u.title}</h2>
              <p className="unit-subtitle">{u.subtitle}</p>
            </div>
            <ChevronRight size={18} className="unit-arrow" />
          </Link>
        ))}
      </div>
    </main>
  );
}
