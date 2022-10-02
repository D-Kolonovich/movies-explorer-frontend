import "./MoviesCard.css";
import { useLocation } from "react-router-dom";
import React, { useState } from "react";

function MoviesCard({
  movie,
  handleMovieLike,
  handleMovieRemove,
  savedMoviesIds,
  handleDislikeMovie,
}) {
  const [isLiked, setIsLiked] = useState(false);
  const location = useLocation();

  const serverUrl = "https://api.nomoreparties.co";

  function movieDuration(time) {
    const hours = Math.floor(time / 60);
    const minutes = time % 60;
    return hours > 0 ? `${hours}ч ${minutes}м` : `${minutes}м`;
  }

  function handleLike() {
    setIsLiked(true);
    handleMovieLike(movie);
  }
  function handleDislike() {
    setIsLiked(false);
    handleDislikeMovie(movie.id);
  }
  function handleDelete() {
    handleMovieRemove(movie._id);
  }

  function checkLikeStatus() {
    location.pathname === "/movies" && savedMoviesIds.includes(movie.id)
      ? setIsLiked(true)
      : setIsLiked(false);
  }

  React.useEffect(checkLikeStatus, [
    movie.id,
    savedMoviesIds,
    location.pathname,
  ]);

  return (
    <li>
      <article className="moviesCard">
        <a href={movie.trailerLink} target="_blank" rel="noreferrer">
          <img
            className="moviesCard__image"
            src={
              location.pathname === "/movies"
                ? serverUrl + movie.image.url
                : movie.image
            }
            alt={movie.nameRU}
          ></img>
        </a>
        <div className="moviesCard__wrapper">
          <h2 className="moviesCard__title">{movie.nameRU}</h2>
          {location.pathname === "/movies" ? (
            <button
              className={`moviesCard__button-like ${
                isLiked && "moviesCard__button-like_active"
              }`}
              onClick={!isLiked ? handleLike : handleDislike}
            ></button>
          ) : (
            <button
              className="moviesCard__delete-button"
              onClick={handleDelete}
            ></button>
          )}
        </div>
        <p className="moviesCard__duration">{movieDuration(movie.duration)}</p>
      </article>
    </li>
  );
}

export default MoviesCard;
