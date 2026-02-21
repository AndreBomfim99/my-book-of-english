import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, BookOpen } from 'lucide-react';
import { verbs } from '../data/verbsData';
import './VerbDetail.css';

const levelColors = {
  'B2': 'level-b2',
  'B2+': 'level-b2plus',
  'C1': 'level-c1',
  'C2': 'level-c2',
};

export default function VerbDetail() {
  const { verbName } = useParams();
  const verbData = verbs.find(v => v.verb === verbName);

  if (!verbData) {
    return (
      <main className="verb-detail-page">
        <Link to="/verbs" className="back-btn">
          <ArrowLeft size={16} /> Back to Verbs
        </Link>
        <p style={{ color: 'var(--text-secondary)', marginTop: '40px' }}>
          Verb not found.
        </p>
      </main>
    );
  }

  // Example sentences for each verb (generic patterns)
  const examples = [
    `I ${verbData.verb} every day.`,
    `She ${verbData.verb}s when she can.`,
    `We need to ${verbData.verb} more carefully.`,
  ];

  const tips = [
    `"${verbData.verb}" means: ${verbData.translation}`,
    `Level: ${verbData.level} — ${levelLabel(verbData.level)}`,
    `Try using "${verbData.verb}" in a sentence today!`,
  ];

  return (
    <main className="verb-detail-page">
      <Link to="/verbs" className="back-btn">
        <ArrowLeft size={16} /> Back to Verbs
      </Link>

      <div className="verb-detail-card">
        <div className="verb-detail-header">
          <div>
            <h1 className="verb-detail-word">{verbData.verb}</h1>
            <p className="verb-detail-translation">{verbData.translation}</p>
          </div>
          <span className={`verb-level ${levelColors[verbData.level]}`}>
            {verbData.level}
          </span>
        </div>

        <div className="verb-detail-section">
          <h2><BookOpen size={16} /> Example Sentences</h2>
          <ul className="examples-list">
            {examples.map((ex, i) => (
              <li key={i}>{ex}</li>
            ))}
          </ul>
        </div>

        <div className="verb-detail-section tips">
          <h2>💡 Tips</h2>
          <ul className="tips-list">
            {tips.map((tip, i) => (
              <li key={i}>{tip}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Navigation between verbs */}
      <div className="verb-nav">
        {(() => {
          const idx = verbs.findIndex(v => v.verb === verbName);
          const prev = verbs[idx - 1];
          const next = verbs[idx + 1];
          return (
            <>
              {prev && (
                <Link to={`/verbs/${prev.verb}`} className="verb-nav-btn">
                  ← {prev.verb}
                </Link>
              )}
              {next && (
                <Link to={`/verbs/${next.verb}`} className="verb-nav-btn">
                  {next.verb} →
                </Link>
              )}
            </>
          );
        })()}
      </div>
    </main>
  );
}

function levelLabel(level) {
  const map = {
    'B2': 'Intermediate-Advanced',
    'B2+': 'Upper Intermediate',
    'C1': 'Advanced',
    'C2': 'Proficient',
  };
  return map[level] || '';
}