import React, { useState } from "react";

function StarRating({ stars }) {
  const [highlightedStars, setHighlightedStars] = useState(0);
  const [hoveredStars, setHoveredStars] = useState(0);

  const handleClick = (stars) => {
    setHighlightedStars(stars);
  };

  const handleMouseEnter = (stars) => {
    setHoveredStars(stars);
  };

  const handleMouseLeave = () => {
    setHoveredStars(0);
  };

  const starsArray = Array.from({ length: stars }, (_, i) => i + 1);
  return (
    <div className="app">
      {starsArray.map((starNumber) => (
        <span
          key={starNumber}
          className={
            starNumber <= (hoveredStars || highlightedStars)
              ? "star highlighted"
              : "star"
          }
          onClick={() => handleClick(starNumber)}
          onMouseEnter={() => handleMouseEnter(starNumber)}
          onMouseLeave={() => handleMouseLeave()}
        >
          &#9733;
        </span>
      ))}
    </div>
  );
}
export default StarRating;
