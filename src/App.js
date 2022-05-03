import { useState } from "react";
import "./App.css";
const App = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const handleClick = (rate) => {
    setRating(rate);
  };
  return (
    <div className="App">
      {[...Array(5)].map((item, i) => {
        i += 1;
        return (
          <button
            key={i}
            type="button"
            onClick={() => handleClick(i)}
            onMouseEnter={() => setHover(i)}
            onMouseLeave={() => setHover(rating)}
          >
            {i <= (hover || rating) ? (
              <span className="star">&#9733;</span>
            ) : (
              <span className="star">&#9734;</span>
            )}
          </button>
        );
      })}
    </div>
  );
};

export default App;
