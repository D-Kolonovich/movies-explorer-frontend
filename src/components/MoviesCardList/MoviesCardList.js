import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useLocation } from "react-router-dom";

function MoviesCardList({
  filteredMovies,
  shortMovies,
  isChecked,
  handleMovieLike,
  savedMovies,
  handleMovieRemove,
  savedMoviesIds,
  handleDislikeMovie,
  cardsToRender,
}) {
  const location = useLocation();

  return (
    <section className="moviesCardList">
      <ul className="moviesCardList__list">
        {location.pathname === "/movies"
          ? isChecked
            ? shortMovies
                .slice(0, cardsToRender)
                .map((item) => (
                  <MoviesCard
                    movie={item}
                    {...item}
                    key={item.id}
                    handleMovieLike={handleMovieLike}
                    savedMoviesIds={savedMoviesIds}
                    handleDislikeMovie={handleDislikeMovie}
                  />
                ))
            : filteredMovies
                .slice(0, cardsToRender)
                .map((item) => (
                  <MoviesCard
                    movie={item}
                    {...item}
                    key={item.id}
                    handleMovieLike={handleMovieLike}
                    savedMoviesIds={savedMoviesIds}
                    handleDislikeMovie={handleDislikeMovie}
                  />
                ))
          : savedMovies.map((item) => (
              <MoviesCard
                movie={item}
                {...item}
                key={item._id}
                handleMovieLike={handleMovieLike}
                handleMovieRemove={handleMovieRemove}
              />
            ))}
      </ul>
    </section>
  );
}

export default MoviesCardList;
