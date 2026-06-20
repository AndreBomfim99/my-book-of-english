import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { units } from '../data/unitsData';
import './UnitDetail.css';

export default function UnitDetail() {
  const { unitId } = useParams();
  const unit = units.find(u => u.id === unitId);

  const idx = units.findIndex(u => u.id === unitId);
  const prev = units[idx - 1];
  const next = units[idx + 1];

  if (!unit) {
    return (
      <main className="ud-page">
        <Link to="/units" className="ud-back">
          <ArrowLeft size={15} /> Back to Units
        </Link>
        <p style={{ color: 'var(--text-secondary)', marginTop: '40px' }}>Unit not found.</p>
      </main>
    );
  }

  const detail = unit.detail || {};
  const hasContent = detail.usage || detail.structure || detail.examples ||
                      detail.signalWords || detail.errors || detail.extra;

  return (
    <main className="ud-page">
      <Link to="/units" className="ud-back">
        <ArrowLeft size={15} /> Back to Units
      </Link>

      <div className="ud-hero">
        <span className="ud-number">Unit {unit.number}</span>
        <h1 className="ud-title">{unit.title}</h1>
        <p className="ud-subtitle">{unit.subtitle}</p>
      </div>

      {hasContent ? (
        <div className="ud-content">

          {detail.usage && (
            <section className="ud-section">
              <h2 className="ud-section-title">Usage</h2>
              <div className="ud-prose" dangerouslySetInnerHTML={{ __html: detail.usage }} />
            </section>
          )}

          {detail.structure && (
            <section className="ud-section">
              <h2 className="ud-section-title">Structure</h2>
              <div className="ud-prose" dangerouslySetInnerHTML={{ __html: detail.structure }} />
            </section>
          )}

          {detail.examples && (
            <section className="ud-section">
              <h2 className="ud-section-title">Examples</h2>
              <div className="ud-prose" dangerouslySetInnerHTML={{ __html: detail.examples }} />
            </section>
          )}

          {detail.signalWords && (
            <section className="ud-section">
              <h2 className="ud-section-title">Signal Words</h2>
              <div className="ud-prose" dangerouslySetInnerHTML={{ __html: detail.signalWords }} />
            </section>
          )}

          {detail.errors && (
            <section className="ud-section">
              <h2 className="ud-section-title">Common Errors</h2>
              <div className="ud-prose" dangerouslySetInnerHTML={{ __html: detail.errors }} />
            </section>
          )}

          {detail.extra && detail.extra.map((section, i) => (
            <section className="ud-section" key={i}>
              <h2 className="ud-section-title">{section.title}</h2>
              <div className="ud-prose" dangerouslySetInnerHTML={{ __html: section.content }} />
            </section>
          ))}

        </div>
      ) : (
        <div className="ud-empty">
          <p>📝 Content coming soon for this unit.</p>
        </div>
      )}

      <div className="ud-nav">
        {prev ? (
          <Link to={`/units/${prev.id}`} className="ud-nav-btn ud-nav-prev">
            <ArrowLeft size={15} />
            <div>
              <span className="ud-nav-label">Previous</span>
              <span className="ud-nav-word">{prev.title}</span>
            </div>
          </Link>
        ) : <div />}

        {next && (
          <Link to={`/units/${next.id}`} className="ud-nav-btn ud-nav-next">
            <div>
              <span className="ud-nav-label">Next</span>
              <span className="ud-nav-word">{next.title}</span>
            </div>
            <ArrowRight size={15} />
          </Link>
        )}
      </div>
    </main>
  );
}
