import React, { useState, useEffect, useCallback } from 'react';
import { verbs } from '../data/verbsData';
import './Games.css';

const LEVELS = ['All', 'B2', 'B2+', 'C1', 'C2'];
const CARDS_PER_ROUND = 10;

function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

function getRound(pool, size = CARDS_PER_ROUND) {
  return shuffle(pool).slice(0, size);
}

export default function Games() {
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [gameStarted, setGameStarted] = useState(false);

  // Stats per level
  const [stats, setStats] = useState({
    All: { correct: 0, wrong: 0 },
    B2: { correct: 0, wrong: 0 },
    'B2+': { correct: 0, wrong: 0 },
    C1: { correct: 0, wrong: 0 },
    C2: { correct: 0, wrong: 0 },
  });

  // Round state
  const [roundVerbs, setRoundVerbs] = useState([]);
  const [translations, setTranslations] = useState([]);
  const [matched, setMatched] = useState(new Set());
  const [selectedVerb, setSelectedVerb] = useState(null);
  const [selectedTranslation, setSelectedTranslation] = useState(null);
  const [wrongPair, setWrongPair] = useState(null);
  const [correctPair, setCorrectPair] = useState(null);
  const [roundComplete, setRoundComplete] = useState(false);
  const [pool, setPool] = useState([]);

  const startGame = useCallback((level) => {
    const filtered = level === 'All' ? verbs : verbs.filter(v => v.level === level);
    setPool(filtered);
    const round = getRound(filtered);
    setRoundVerbs(shuffle(round));
    setTranslations(shuffle(round));
    setMatched(new Set());
    setSelectedVerb(null);
    setSelectedTranslation(null);
    setWrongPair(null);
    setCorrectPair(null);
    setRoundComplete(false);
    setGameStarted(true);
    // Reset stats
    setStats({
      All: { correct: 0, wrong: 0 },
      B2: { correct: 0, wrong: 0 },
      'B2+': { correct: 0, wrong: 0 },
      C1: { correct: 0, wrong: 0 },
      C2: { correct: 0, wrong: 0 },
    });
  }, []);

  const nextRound = useCallback(() => {
    const round = getRound(pool);
    setRoundVerbs(shuffle(round));
    setTranslations(shuffle(round));
    setMatched(new Set());
    setSelectedVerb(null);
    setSelectedTranslation(null);
    setWrongPair(null);
    setCorrectPair(null);
    setRoundComplete(false);
  }, [pool]);

  // Check match when both selected
  useEffect(() => {
    if (!selectedVerb || !selectedTranslation) return;

    const isMatch = selectedVerb.verb === selectedTranslation.verb;

    if (isMatch) {
      setCorrectPair({ verb: selectedVerb.verb });
      setStats(prev => ({
        ...prev,
        All: { ...prev.All, correct: prev.All.correct + 1 },
        [selectedVerb.level]: {
          ...prev[selectedVerb.level],
          correct: prev[selectedVerb.level].correct + 1,
        },
      }));

      setTimeout(() => {
        setMatched(prev => {
          const next = new Set(prev);
          next.add(selectedVerb.verb);
          return next;
        });
        setSelectedVerb(null);
        setSelectedTranslation(null);
        setCorrectPair(null);
      }, 500);
    } else {
      setWrongPair({ verb: selectedVerb.verb, translation: selectedTranslation.verb });
      setStats(prev => ({
        ...prev,
        All: { ...prev.All, wrong: prev.All.wrong + 1 },
        [selectedVerb.level]: {
          ...prev[selectedVerb.level],
          wrong: prev[selectedVerb.level].wrong + 1,
        },
      }));

      setTimeout(() => {
        setSelectedVerb(null);
        setSelectedTranslation(null);
        setWrongPair(null);
      }, 800);
    }
  }, [selectedVerb, selectedTranslation]);

  // Check round complete
  useEffect(() => {
    if (roundVerbs.length > 0 && matched.size === roundVerbs.length) {
      setTimeout(() => setRoundComplete(true), 600);
    }
  }, [matched, roundVerbs]);

  const handleVerbClick = (verb) => {
    if (matched.has(verb.verb)) return;
    if (selectedTranslation) return; // wait for effect
    setSelectedVerb(prev => prev?.verb === verb.verb ? null : verb);
  };

  const handleTranslationClick = (item) => {
    if (matched.has(item.verb)) return;
    if (!selectedVerb) return;
    if (selectedVerb) {
      setSelectedTranslation(item);
    }
  };

  const totalCorrect = stats.All.correct;
  const totalWrong = stats.All.wrong;
  const accuracy = totalCorrect + totalWrong > 0
    ? Math.round((totalCorrect / (totalCorrect + totalWrong)) * 100)
    : 0;

  const levelColors = { B2: '#3b82f6', 'B2+': '#8b5cf6', C1: '#10b981', C2: '#f59e0b' };

  if (!gameStarted) {
    return (
      <main className="games-page">
        <div className="games-header">
          <h1 className="games-title">Verb Match</h1>
          <p className="games-subtitle">
            Match each English verb with its Portuguese meaning. Select a level to begin.
          </p>
        </div>

        <div className="level-select-grid">
          {LEVELS.map(level => {
            const count = level === 'All' ? verbs.length : verbs.filter(v => v.level === level).length;
            return (
              <button
                key={level}
                className={`level-select-card ${selectedLevel === level ? 'active' : ''}`}
                onClick={() => setSelectedLevel(level)}
                style={selectedLevel === level && level !== 'All'
                  ? { borderColor: levelColors[level], background: levelColors[level] + '15' }
                  : {}}
              >
                <span className="level-select-name">{level}</span>
                <span className="level-select-count">{count} verbs</span>
              </button>
            );
          })}
        </div>

        <button className="start-btn" onClick={() => startGame(selectedLevel)}>
          Start Game →
        </button>

        {/* Stats summary */}
        {(totalCorrect + totalWrong) > 0 && (
          <div className="stats-summary">
            <h2>Your Stats</h2>
            <div className="stats-grid">
              <div className="stat-box correct">
                <span className="stat-number">{totalCorrect}</span>
                <span className="stat-label">Correct</span>
              </div>
              <div className="stat-box wrong">
                <span className="stat-number">{totalWrong}</span>
                <span className="stat-label">Wrong</span>
              </div>
              <div className="stat-box accuracy">
                <span className="stat-number">{accuracy}%</span>
                <span className="stat-label">Accuracy</span>
              </div>
            </div>

            <div className="level-stats">
              {['B2', 'B2+', 'C1', 'C2'].map(lvl => {
                const s = stats[lvl];
                if (s.correct + s.wrong === 0) return null;
                const acc = Math.round((s.correct / (s.correct + s.wrong)) * 100);
                return (
                  <div key={lvl} className="level-stat-row">
                    <span className="level-badge" style={{ background: levelColors[lvl] + '20', color: levelColors[lvl] }}>
                      {lvl}
                    </span>
                    <span className="level-stat-text">
                      ✓ {s.correct} &nbsp; ✗ {s.wrong} &nbsp; — {acc}% accuracy
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </main>
    );
  }

  return (
    <main className="games-page">
      <div className="game-topbar">
        <button className="back-to-menu" onClick={() => setGameStarted(false)}>
          ← Menu
        </button>
        <button className="reset-btn" onClick={() => startGame(selectedLevel)}>
          ↺ Restart
        </button>
        <div className="game-scorebar">
          <span className="score correct">✓ {totalCorrect}</span>
          <span className="score wrong">✗ {totalWrong}</span>
          <span className="score accuracy">{accuracy}%</span>
        </div>
        <div className="round-progress">
          {matched.size}/{roundVerbs.length} matched
        </div>
      </div>

      {/* Progress bar */}
      <div className="progress-bar-wrap">
        <div
          className="progress-bar-fill"
          style={{ width: `${(matched.size / roundVerbs.length) * 100}%` }}
        />
      </div>

      {roundComplete ? (
        <div className="round-complete">
          <div className="round-complete-card">
            <div className="round-complete-icon">🎉</div>
            <h2>Round Complete!</h2>
            <p>You matched all {roundVerbs.length} verbs!</p>
            <div className="round-complete-stats">
              <span className="score correct">✓ {totalCorrect} correct</span>
              <span className="score wrong">✗ {totalWrong} wrong</span>
            </div>
            <div className="round-complete-btns">
              <button className="start-btn" onClick={nextRound}>Next Round →</button>
              <button className="secondary-btn" onClick={() => startGame(selectedLevel)}>↺ Restart Game</button>
              <button className="secondary-btn" onClick={() => setGameStarted(false)}>Back to Menu</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="game-board">
          {/* VERBS COLUMN */}
          <div className="cards-column">
            <p className="column-label">English Verb</p>
            {roundVerbs.map(v => {
              const isMatched = matched.has(v.verb);
              const isSelected = selectedVerb?.verb === v.verb;
              const isWrong = wrongPair?.verb === v.verb;
              const isCorrect = correctPair?.verb === v.verb;

              return (
                <button
                  key={v.verb}
                  className={`game-card verb-card-game
                    ${isMatched ? 'matched' : ''}
                    ${isSelected ? 'selected' : ''}
                    ${isWrong ? 'wrong' : ''}
                    ${isCorrect ? 'correct-flash' : ''}
                  `}
                  onClick={() => handleVerbClick(v)}
                  disabled={isMatched}
                >
                  <span className="card-verb">{v.verb}</span>
                  <span
                    className="card-level-dot"
                    style={{ background: levelColors[v.level] }}
                    title={v.level}
                  />
                </button>
              );
            })}
          </div>

          {/* TRANSLATIONS COLUMN */}
          <div className="cards-column">
            <p className="column-label">Portuguese Meaning</p>
            {translations.map(v => {
              const isMatched = matched.has(v.verb);
              const isSelected = selectedTranslation?.verb === v.verb;
              const isWrong = wrongPair?.translation === v.verb;
              const isCorrect = correctPair?.verb === v.verb;

              return (
                <button
                  key={v.verb}
                  className={`game-card translation-card-game
                    ${isMatched ? 'matched' : ''}
                    ${isSelected ? 'selected' : ''}
                    ${isWrong ? 'wrong' : ''}
                    ${isCorrect ? 'correct-flash' : ''}
                    ${!selectedVerb && !isMatched ? 'disabled-look' : ''}
                  `}
                  onClick={() => handleTranslationClick(v)}
                  disabled={isMatched || !selectedVerb}
                >
                  <span className="card-translation">{v.translation}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </main>
  );
}
