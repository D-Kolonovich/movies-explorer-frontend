import { useState } from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

function SavedMovies({
  filteredSavedMovies,
  handleMovieRemove,
  getSavedMovies,
}) {
  const [isChecked, setIsChecked] = useState(
    JSON.parse(localStorage.getItem("checkboxStatusSavedMovies")) || false
  );
  const [isSearchHandled, setIsSearchHandled] = useState(false);

  function handleCheckboxChange(value) {
    setIsChecked(value);
    localStorage.setItem("checkboxStatusSavedMovies", JSON.stringify(value));
  }

  return (
    <>
      <section className="movies">
        <div className="movies__wrapper">
          <SearchForm
            getMovies={getSavedMovies}
            checkboxChange={handleCheckboxChange}
            isChecked={isChecked}
            setIsSearchHandled={setIsSearchHandled}
          />
          <MoviesCardList
            savedMovies={filteredSavedMovies}
            handleMovieRemove={handleMovieRemove}
          />
        </div>
      </section>
    </>
  );
}

export default SavedMovies;
