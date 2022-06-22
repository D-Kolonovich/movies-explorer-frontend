import "./MoviesCard.css";
import { useLocation } from "react-router-dom";
import { useState } from "react";

function MoviesCard() {
  const [isLiked, setIsLiked] = useState(false);
  const location = useLocation();

  const handleLike = () => {
    setIsLiked(!isLiked);
  };
  return (
    <article className="moviesCard">
      <img
        className="moviesCard__image"
        src="https://d-kolonovich.github.io/russian-travel/images/__image-kosa.jpg"
        alt="постер фильма"
      ></img>
      <div className="moviesCard__wrapper">
        <h2 className="moviesCard__title">Чистая вода</h2>
        {location.pathname === "/movies" ? (
          <button
            className={`moviesCard__button-like ${
              isLiked && "moviesCard__button-like_active"
            }`}
            onClick={handleLike}
          ></button>
        ) : (
          <button className="moviesCard__delete-button"></button>
        )}
      </div>
      <p className="moviesCard__duration">1ч 42м</p>
    </article>
  );
}

export default MoviesCard;
