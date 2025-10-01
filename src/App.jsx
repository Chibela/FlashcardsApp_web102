import React, { useEffect, useState } from "react";
import Flashcard from "./components/Flashcard";
import cardsData from "./data/cards";
import "./styles/App.css";

export default function App() {
  const [cards] = useState(cardsData);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [bumpKey, setBumpKey] = useState(0);
  const [bgUrl, setBgUrl] = useState("");
  const [bgFilePreview, setBgFilePreview] = useState(null);

  useEffect(() => {
    const idx = Math.floor(Math.random() * cards.length);
    setCurrentIndex(idx);
  }, [cards.length]);

  const nextRandomCard = () => {
    if (cards.length <= 1) return;
    let next = currentIndex;
    while (next === currentIndex) {
      next = Math.floor(Math.random() * cards.length);
    }
    setCurrentIndex(next);
    setBumpKey((k) => k + 1); // reset flip in child
  };

  const handleBgUrlChange = (e) => {
    setBgUrl(e.target.value);
    setBgFilePreview(null);
  };

  const handleBgFile = (e) => {
    const f = e.target.files?.[0];
    if (!f) return;
    const obj = URL.createObjectURL(f);
    setBgFilePreview(obj);
    setBgUrl("");
  };

  const clearBackground = () => {
    setBgFilePreview(null);
    setBgUrl("");
  };

  const backgroundStyle = bgFilePreview
    ? { backgroundImage: `url(${bgFilePreview})` }
    : bgUrl
    ? { backgroundImage: `url(${bgUrl})` }
    : {};

  const current = cards[currentIndex] || { front: "No cards", back: "" };

  return (
    <div className="app-root" style={backgroundStyle}>
      <div className="app-shell">
        <header className="app-header">
          <h1 className="title">Builders of Industrial America</h1>
          <p className="subtitle">
            Click the card to reveal the answer. Click <strong>Next</strong> to
            load a new random card.
          </p>
          <div className="meta">
            <span>Total cards: <strong>{cards.length}</strong></span>
            <span> · Card {currentIndex + 1}</span>
          </div>
        </header>

        <main className="main-content">
          <section className="card-area">
            <Flashcard
              key={current.id} 
              front={current.front}
              back={current.back}
              resetKey={bumpKey}
            />

            <div className="controls">
              <button className="btn-primary" onClick={nextRandomCard}>
                Next
              </button>
            </div>
          </section>

          <aside className="sidebar">
            <div className="panel">
              <h3>About this set</h3>
              <p>
                Ten flashcards covering key figures and ideas from America’s
                industrial age: Rockefeller, Vanderbilt, Ford, J.P. Morgan, and
                Andrew Carnegie.
              </p>
            </div>
            <img 
              src="/men.jpg" 
              alt="The Men who built America" 
              className="sidebar-image"/>
          </aside>
        </main>

      </div>
    </div>
  );
}
