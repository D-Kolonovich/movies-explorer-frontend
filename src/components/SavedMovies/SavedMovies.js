import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

function SavedMovies({ savedMovies, handleMovieRemove }) {
  return (
    <>
      <section className="movies">
        <div className="movies__wrapper">
          <SearchForm />
          <MoviesCardList
            savedMovies={savedMovies}
            handleMovieRemove={handleMovieRemove}
          />
        </div>
      </section>
    </>
  );
}

export default SavedMovies;
