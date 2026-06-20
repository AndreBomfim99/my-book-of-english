import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { allTenses, tenseDetails } from '../data/tensesData';
import './TenseDetail.css';

export default function TenseDetail() {
  const { tenseId } = useParams();
  const tense = allTenses.find(t => t.id === tenseId);
  const detail = tenseDetails[tenseId];

  const idx = allTenses.findIndex(t => t.id === tenseId);
  const prev = allTenses[idx - 1];
  const next = allTenses[idx + 1];

  if (!tense && !detail) {
    return (
      <main className="td-page">
        <Link to="/tenses" className="td-back">
          <ArrowLeft size={15} /> Back to Tenses
        </Link>
        <p style={{ color: 'var(--text-secondary)', marginTop: '40px' }}>Tense not found.</p>
      </main>
    );
  }

  return (
    <main className="td-page">
      <Link to="/tenses" className="td-back">
        <ArrowLeft size={15} /> Back to Tenses
      </Link>

      <div className="td-hero">
        {tense && <span className="td-category">{tense.category}</span>}
        <h1 className="td-title">{tense ? tense.title : 'How to Choose the Right Tense'}</h1>
      </div>

      {detail ? (
        <div className="td-content">

          {detail.usage && (
            <section className="td-section">
              <h2 className="td-section-title">Usage</h2>
              <div className="td-prose" dangerouslySetInnerHTML={{ __html: detail.usage }} />
            </section>
          )}

          {detail.structure && (
            <section className="td-section">
              <h2 className="td-section-title">Structure</h2>
              <div className="td-prose" dangerouslySetInnerHTML={{ __html: detail.structure }} />
            </section>
          )}

          {detail.examples && (
            <section className="td-section">
              <h2 className="td-section-title">Examples</h2>
              <div className="td-prose" dangerouslySetInnerHTML={{ __html: detail.examples }} />
            </section>
          )}

          {detail.signalWords && (
            <section className="td-section">
              <h2 className="td-section-title">Signal Words</h2>
              <div className="td-prose" dangerouslySetInnerHTML={{ __html: detail.signalWords }} />
            </section>
          )}

          {detail.errors && (
            <section className="td-section">
              <h2 className="td-section-title">Common Errors</h2>
              <div className="td-prose" dangerouslySetInnerHTML={{ __html: detail.errors }} />
            </section>
          )}

          {detail.extra && detail.extra.map((section, i) => (
            <section className="td-section" key={i}>
              <h2 className="td-section-title">{section.title}</h2>
              <div className="td-prose" dangerouslySetInnerHTML={{ __html: section.content }} />
            </section>
          ))}

        </div>
      ) : (
        <div className="td-empty">
          <p>📝 Content coming soon for this tense.</p>
        </div>
      )}

      {tense && (
        <div className="td-nav">
          {prev ? (
            <Link to={`/tenses/${prev.id}`} className="td-nav-btn td-nav-prev">
              <ArrowLeft size={15} />
              <div>
                <span className="td-nav-label">Previous</span>
                <span className="td-nav-word">{prev.title}</span>
              </div>
            </Link>
          ) : <div />}

          {next && (
            <Link to={`/tenses/${next.id}`} className="td-nav-btn td-nav-next">
              <div>
                <span className="td-nav-label">Next</span>
                <span className="td-nav-word">{next.title}</span>
              </div>
              <ArrowRight size={15} />
            </Link>
          )}
        </div>
      )}
    </main>
  );
}
