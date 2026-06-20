import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { verbs } from '../data/verbsData';
import { verbDetails } from '../data/verbDetails';
import './VerbDetail.css';

const levelColors = {
  'B2':  { bg: '#dbeafe', color: '#1d4ed8' },
  'B2+': { bg: '#ede9fe', color: '#6d28d9' },
  'C1':  { bg: '#d1fae5', color: '#065f46' },
  'C2':  { bg: '#fef3c7', color: '#92400e' },
};

export default function VerbDetail() {
  const { verbName } = useParams();
  const verbData = verbs.find(v => v.verb === verbName);
  const detail = verbDetails[verbName];

  const idx = verbs.findIndex(v => v.verb === verbName);
  const prev = verbs[idx - 1];
  const next = verbs[idx + 1];

  if (!verbData) {
    return (
      <main className="vd-page">
        <Link to="/verbs" className="vd-back">
          <ArrowLeft size={15} /> Back to Verbs
        </Link>
        <p style={{ color: 'var(--text-secondary)', marginTop: '40px' }}>Verb not found.</p>
      </main>
    );
  }

  const lc = levelColors[verbData.level] || { bg: '#f3f4f6', color: '#374151' };

  return (
    <main className="vd-page">

      {/* BACK */}
      <Link to="/verbs" className="vd-back">
        <ArrowLeft size={15} /> Back to Verbs
      </Link>

      {/* HERO */}
      <div className="vd-hero">
        <div className="vd-hero-left">
          <h1 className="vd-verb">{verbData.verb}</h1>
          <p className="vd-translation">{verbData.translation}</p>
        </div>
        <span
          className="vd-level-badge"
          style={{ background: lc.bg, color: lc.color }}
        >
          {verbData.level}
        </span>
      </div>

      {/* CONTENT */}
      {detail ? (
        <div className="vd-content">

          {/* 1. Meanings */}
          {detail.meanings && (
            <section className="vd-section">
              <h2 className="vd-section-title">
                <span className="vd-section-number">1</span>
                Significados, Nuances e Contextos
              </h2>
              <div className="vd-prose" dangerouslySetInnerHTML={{ __html: detail.meanings }} />
            </section>
          )}

          {/* 2. Tenses */}
          {detail.tenses && (
            <section className="vd-section">
              <h2 className="vd-section-title">
                <span className="vd-section-number">2</span>
                Tempos Verbais
              </h2>
              <div className="vd-prose" dangerouslySetInnerHTML={{ __html: detail.tenses }} />
            </section>
          )}

          {/* 3. Collocations */}
          {detail.collocations && (
            <section className="vd-section">
              <h2 className="vd-section-title">
                <span className="vd-section-number">3</span>
                Construções Comuns
              </h2>
              <div className="vd-prose" dangerouslySetInnerHTML={{ __html: detail.collocations }} />
            </section>
          )}

          {/* 4. Formal vs Informal */}
          {detail.register && (
            <section className="vd-section">
              <h2 className="vd-section-title">
                <span className="vd-section-number">4</span>
                Formal vs Informal
              </h2>
              <div className="vd-prose" dangerouslySetInnerHTML={{ __html: detail.register }} />
            </section>
          )}

          {/* 5. Synonyms */}
          {detail.synonyms && (
            <section className="vd-section">
              <h2 className="vd-section-title">
                <span className="vd-section-number">5</span>
                Sinônimos e Quando NÃO Usar
              </h2>
              <div className="vd-prose" dangerouslySetInnerHTML={{ __html: detail.synonyms }} />
            </section>
          )}

          {/* 6. Idioms */}
          {detail.idioms && (
            <section className="vd-section">
              <h2 className="vd-section-title">
                <span className="vd-section-number">6</span>
                Expressões Idiomáticas
              </h2>
              <div className="vd-prose" dangerouslySetInnerHTML={{ __html: detail.idioms }} />
            </section>
          )}

          {/* 7. Common Errors */}
          {detail.errors && (
            <section className="vd-section">
              <h2 className="vd-section-title">
                <span className="vd-section-number">7</span>
                Erros Comuns
              </h2>
              <div className="vd-prose" dangerouslySetInnerHTML={{ __html: detail.errors }} />
            </section>
          )}

          {/* 8. Phrasal Verbs */}
          {detail.phrasalVerbs && (
            <section className="vd-section">
              <h2 className="vd-section-title">
                <span className="vd-section-number">8</span>
                Phrasal Verbs
              </h2>
              <div className="vd-prose" dangerouslySetInnerHTML={{ __html: detail.phrasalVerbs }} />
            </section>
          )}

          {/* 9. Pronunciation */}
          {detail.pronunciation && (
            <section className="vd-section">
              <h2 className="vd-section-title">
                <span className="vd-section-number">9</span>
                Pronúncia
              </h2>
              <div className="vd-prose" dangerouslySetInnerHTML={{ __html: detail.pronunciation }} />
            </section>
          )}

          {/* Extra sections if needed */}
          {detail.extra && detail.extra.map((section, i) => (
            <section className="vd-section" key={i}>
              <h2 className="vd-section-title">
                <span className="vd-section-number">{i + 10}</span>
                {section.title}
              </h2>
              <div className="vd-prose" dangerouslySetInnerHTML={{ __html: section.content }} />
            </section>
          ))}

        </div>
      ) : (
        <div className="vd-empty">
          <p>📝 Content coming soon for this verb.</p>
        </div>
      )}

      {/* NAVIGATION */}
      <div className="vd-nav">
        {prev ? (
          <Link to={`/verbs/${prev.verb}`} className="vd-nav-btn vd-nav-prev">
            <ArrowLeft size={15} />
            <div>
              <span className="vd-nav-label">Previous</span>
              <span className="vd-nav-word">{prev.verb}</span>
            </div>
          </Link>
        ) : <div />}

        {next && (
          <Link to={`/verbs/${next.verb}`} className="vd-nav-btn vd-nav-next">
            <div>
              <span className="vd-nav-label">Next</span>
              <span className="vd-nav-word">{next.verb}</span>
            </div>
            <ArrowRight size={15} />
          </Link>
        )}
      </div>

    </main>
  );
}
