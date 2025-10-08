import React, {useState } from "react";
import Flashcard from "./components/Flashcard";
import cardsData from "./data/cards";
import "./styles/App.css";

export default function App() {
  const [cards] = useState(cardsData);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [bumpKey, setBumpKey] = useState(0);
  const [isShuffleMode, setIsShuffleMode] = useState(false);
  const [userGuess, setUserGuess] = useState("");
  const [feedback, setFeedback] = useState(null);
  const [currentStreak, setCurrentStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);

  const normalizeText = (text) =>
    text.toLowerCase().replace(/[^\w\s]|_/g, "").trim();

  const handleGuessSubmit = () => {
    if (feedback === "correct") return; //This will prevent increasing streak using same answer repeatitively
    
    const guessNormalized = normalizeText(userGuess);
    const correctAnswer = normalizeText(cards[currentIndex].back);

    const isCorrect =
      correctAnswer.includes(guessNormalized) ||
      guessNormalized.includes(correctAnswer);

    if (isCorrect) {
      setFeedback("correct");
      setCurrentStreak((prev) => prev + 1);
    } else {
      setFeedback("wrong");
      setLongestStreak((prevLongest) =>
        currentStreak > prevLongest ? currentStreak : prevLongest
      );
      setCurrentStreak(0);
    }
};


  const resetGuess = () => {
    setUserGuess("");
    setFeedback(null);
  };

  const getRandomIndex = (exclude) => {
    if (cards.length <= 1) return exclude;
    let next = exclude;
    while (next === exclude) {
      next = Math.floor(Math.random() * cards.length);
    }
    return next;
};

  const handleNext = () => {
    if (currentIndex < cards.length - 1) {
      resetGuess();
      setBumpKey((k) => k + 1);
      if (isShuffleMode) {
      setCurrentIndex(getRandomIndex(currentIndex));
      setIsShuffleMode(false);
      } else {
        setCurrentIndex((prev) => (prev + 1) % cards.length);
      }
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      resetGuess();
      setBumpKey((k) => k + 1);
      if (isShuffleMode) {
      setCurrentIndex(getRandomIndex(currentIndex));
      setIsShuffleMode(false);
      } else {
        setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
      }
    }
  };

  const handleShuffle = () => {
    setIsShuffleMode(true);
};

  const current = cards[currentIndex] || { front: "No cards", back: "" };

  return (
    <div className="app-root">
      <div className="app-shell">
        <header className="app-header">
          <h1 className="title">Builders of Industrial America</h1>
          <p className="subtitle">
            Click the card to reveal the answer. Click <strong>Next</strong> to
            load a new card & <strong>back</strong> for previous.
          </p>
          <div className="meta">
            <span>Total cards: <strong>{cards.length-1}</strong></span>
            {currentIndex !== 0 && (
              <span> · Card {currentIndex}</span>
            )}
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
            <div className="guess-box">
              <label className="guess-label">Guess the answer here:</label>
              <input
                type="text"
                placeholder="Type your answer..."
                value={userGuess}
                onChange={(e) => {
                  setUserGuess(e.target.value);
                  setFeedback(null);
                }}
                className={`guess-input ${
                  feedback === "correct"
                    ? "correct"
                    : feedback === "wrong"
                    ? "wrong"
                    : ""
                }`}
              />
              <button className="btn-primary" onClick={handleGuessSubmit}>
                Submit
              </button>
            </div>
            
            <div className="streak-container">
              <p>🔥 Current Streak: {currentStreak}</p>
              <p>🏆 Longest Streak: {longestStreak}</p>
            </div>

            <div className="controls">
              <button className="btn-primary" onClick={handleBack}
                disabled={currentIndex === 0}
                style={{
                  opacity: currentIndex === 0 ? 0.5 : 1,
                  cursor: currentIndex === 0 ? "not-allowed" : "pointer",
                }}>
                ⬅ Back
              </button>

              <button className="btn-primary" onClick={handleNext}
              disabled={currentIndex === cards.length - 1}
              style={{
                opacity: currentIndex === cards.length - 1 ? 0.5 : 1,
                cursor: currentIndex === cards.length - 1 ? "not-allowed" : "pointer",
              }}>
                Next ➡
              </button>

              <button
                className={`btn-primary ${isShuffleMode ? "active" : ""}`}
                onClick={handleShuffle}>
                {isShuffleMode ? "Shuffle: ON" : "Shuffle"}
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
