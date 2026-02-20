import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Languages, Gamepad2, ArrowRight } from 'lucide-react';
import './Home.css';

const cards = [
  {
    to: '/units',
    icon: <BookOpen size={24} />,
    title: 'Units',
    description: 'Study English grammar organized into thematic units, from basics to advanced.',
  },
  {
    to: '/verbs',
    icon: <Languages size={24} />,
    title: 'Verbs & Meanings',
    description: 'The 300 most frequent English verbs with translations and examples.',
  },
  {
    to: '/games',
    icon: <Gamepad2 size={24} />,
    title: 'Games',
    description: 'Practice vocabulary with fun and interactive games at your own pace.',
  },
];

export default function Home() {
  return (
    <main className="home">
      <section className="hero">
        <p className="hero-eyebrow">Your English companion</p>
        <h1 className="hero-title">Grammar In Use</h1>
        <p className="hero-subtitle">
          Your practical guide to mastering English grammar. Study verbs,
          practice with games, and learn at your own pace.
        </p>
      </section>

      <section className="cards-section">
        {cards.map(card => (
          <Link to={card.to} key={card.to} className="card">
            <div className="card-icon">{card.icon}</div>
            <h2 className="card-title">{card.title}</h2>
            <p className="card-description">{card.description}</p>
            <span className="card-link">
              Explore <ArrowRight size={14} />
            </span>
          </Link>
        ))}
      </section>
    </main>
  );
}