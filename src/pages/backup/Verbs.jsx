import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter } from 'lucide-react';
import { verbs } from '../data/verbsData';
import './Verbs.css';

const LEVELS = ['All', 'B2', 'B2+', 'C1', 'C2'];
const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

export default function Verbs() {
  const [search, setSearch] = useState('');
  const [level, setLevel] = useState('All');
  const [letter, setLetter] = useState('All');

  const filtered = useMemo(() => {
    return verbs.filter(v => {
      const matchSearch = v.verb.toLowerCase().includes(search.toLowerCase()) ||
                          v.translation.toLowerCase().includes(search.toLowerCase());
      const matchLevel = level === 'All' || v.level === level;
      const matchLetter = letter === 'All' || v.verb.toUpperCase().startsWith(letter);
      return matchSearch && matchLevel && matchLetter;
    });
  }, [search, level, letter]);

  const levelColors = {
    'B2': 'level-b2',
    'B2+': 'level-b2plus',
    'C1': 'level-c1',
    'C2': 'level-c2',
  };

  return (
    <main className="verbs-page">
      <div className="verbs-header">
        <h1 className="verbs-title">Verbs & Meanings</h1>
        <p className="verbs-subtitle">
          {verbs.length} verbs from B2 to C2 — click any verb to learn more
        </p>
      </div>

      {/* FILTERS */}
      <div className="verbs-filters">
        <div className="search-box">
          <Search size={16} />
          <input
            type="text"
            placeholder="Search verb or translation..."
            value={search}
            onChange={e => { setSearch(e.target.value); setLetter('All'); }}
          />
        </div>

        <div className="level-filters">
          <Filter size={16} />
          {LEVELS.map(l => (
            <button
              key={l}
              className={`level-btn ${level === l ? 'active' : ''} ${l !== 'All' ? levelColors[l] : ''}`}
              onClick={() => setLevel(l)}
            >
              {l}
            </button>
          ))}
        </div>
      </div>

      {/* ALPHABET FILTER */}
      <div className="alphabet-filter">
        <button
          className={`alpha-btn ${letter === 'All' ? 'active' : ''}`}
          onClick={() => setLetter('All')}
        >
          All
        </button>
        {LETTERS.map(l => (
          <button
            key={l}
            className={`alpha-btn ${letter === l ? 'active' : ''}`}
            onClick={() => { setLetter(l); setSearch(''); }}
          >
            {l}
          </button>
        ))}
      </div>

      {/* COUNT */}
      <p className="verbs-count">
        Showing <strong>{filtered.length}</strong> verbs
      </p>

      {/* VERB GRID */}
      <div className="verbs-grid">
        {filtered.map((v, i) => (
          <Link
            to={`/verbs/${v.verb}`}
            key={i}
            className="verb-card"
          >
            <div className="verb-card-top">
              <span className="verb-word">{v.verb}</span>
              <span className={`verb-level ${levelColors[v.level]}`}>{v.level}</span>
            </div>
            <span className="verb-translation">{v.translation}</span>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="no-results">
          <p>No verbs found. Try a different search.</p>
        </div>
      )}
    </main>
  );
}