import React, { useState, useEffect } from "react";


export default function Flashcard({ front, back, resetKey }) {
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    setFlipped(false);
  }, [resetKey]);

  const handleClick = () => {
    setFlipped((v) => !v);
  };

  return (
    <div className={`flashcard-wrapper ${flipped ? "flipped" : ""}`}>
      <div className="flashcard" onClick={handleClick} role="button" tabIndex={0}>
        <div className="flashcard-face front">
          <div className="face-label">Question</div>
          <div className="face-content">{front}</div>
        </div>

        <div className="flashcard-face back">
          <div className="face-label">Answer</div>
          <div className="face-content">{back}</div>
        </div>
      </div>
    </div>
  );
}
