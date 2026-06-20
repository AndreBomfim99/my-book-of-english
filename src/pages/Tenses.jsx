import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { tenseCategories } from '../data/tensesData';
import './Tenses.css';

export default function Tenses() {
  return (
    <main className="tenses-page">
      <div className="tenses-header">
        <h1 className="tenses-title">Tenses</h1>
        <p className="tenses-subtitle">
          All English verb tenses organized by time — click any tense to learn more
        </p>
      </div>

      <div className="tenses-categories">
        {tenseCategories.map(cat => (
          <div className="tense-category" key={cat.id}>
            <div className="tense-category-header">
              <span className="tense-category-number">{cat.number}</span>
              <h2 className="tense-category-title">{cat.title}</h2>
            </div>

            <div className="tense-items">
              {cat.tenses.map(t => (
                <Link to={`/tenses/${t.id}`} key={t.id} className="tense-item">
                  <span className="tense-item-number">{t.number}</span>
                  <span className="tense-item-title">{t.title}</span>
                  <ChevronRight size={16} className="tense-item-arrow" />
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Link to="/tenses/how-to-choose" className="tense-guide-card">
        <span className="tense-guide-icon">💡</span>
        <div>
          <h2 className="tense-guide-title">How to Choose the Right Tense</h2>
          <p className="tense-guide-desc">A quick reference guide comparing all 12 tenses — with a British English focus.</p>
        </div>
        <ChevronRight size={18} className="tense-guide-arrow" />
      </Link>
    </main>
  );
}
