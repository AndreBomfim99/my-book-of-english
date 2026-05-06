import React, { useState } from 'react';
import { structures } from '../data/structuresData';
import './Structures.css';

export default function Structures() {
  const [selected, setSelected] = useState(null);

  const handleSelect = (s) => {
    setSelected(prev => prev?.id === s.id ? null : s);
  };

  return (
    <main className="structures-page">
      <div className="structures-header">
        <h1 className="structures-title">Structures</h1>
        <p className="structures-subtitle">
          {structures.length} essential English sentence structures — click any to expand
        </p>
      </div>

      <div className="structures-list">
        {structures.map(s => (
          <div key={s.id} className={`structure-item ${selected?.id === s.id ? 'open' : ''}`}>

            {/* HEADER — always visible */}
            <button className="structure-header" onClick={() => handleSelect(s)}>
              <div className="structure-header-left">
                <span className="structure-number">{s.number}</span>
                <div className="structure-titles">
                  <span className="structure-name">{s.title}</span>
                  <span className="structure-sub">— {s.subtitle}</span>
                </div>
              </div>
              <div className="structure-header-right">
                <code className="structure-formula">{s.formula}</code>
                <span className="structure-chevron">{selected?.id === s.id ? '▲' : '▼'}</span>
              </div>
            </button>

            {/* CONTENT — visible when open */}
            {selected?.id === s.id && (
              <div className="structure-content">
                <blockquote className="structure-example">
                  <em>"{s.example}"</em>
                </blockquote>
                <div className="structure-prose" dangerouslySetInnerHTML={{ __html: s.content }} />
              </div>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
