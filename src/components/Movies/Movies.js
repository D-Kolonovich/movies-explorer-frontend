import "./Movies.css";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import { useEffect, useMemo, useState } from "react";
import Preloader from "../Preloader/Preloader";
import InfoTooltip from "../InfoTooltip/InfoTooltip";

function Movies({
  getMovies,
  filteredMovies,
  shortMovies,
  handleMovieLike,
  savedMoviesIds,
  handleDislikeMovie,
  isLoadding,
  isInfoTooltipOpen,
  onCloseInfoTooltip,
  isRequestSuccessful,
}) {
  const [isChecked, setIsChecked] = useState(
    JSON.parse(localStorage.getItem("checkboxStatus")) || false
  );
  const [currentWidth, setCurrentWidth] = useState(window.innerWidth);
  const [cardsToRender, setСardsToRender] = useState(0);
  const [cardsToAdd, setCardsToAdd] = useState(0);

  const [isSearchHandled, setIsSearchHandled] = useState(false);

  function handleCheckboxChange(value) {
    setIsChecked(value);
    setIsSearchHandled(true);
    localStorage.setItem("checkboxStatus", JSON.stringify(value));
  }

  // служебные
  function resizeHandler() {
    setTimeout(() => {
      setCurrentWidth(window.innerWidth);
    }, 5000);
  }

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  useMemo(() => {
    let res;
    let add;
    switch (true) {
      case currentWidth >= 1280:
        res = 12;
        add = 4;
        break;
      case currentWidth >= 768:
        res = 8;
        add = 2;
        break;
      case currentWidth >= 320:
        res = 5;
        add = 2;
        break;
      default:
        res = 6;
        add = 3;
        break;
    }
    setСardsToRender(res);
    setCardsToAdd(add);
  }, [currentWidth, filteredMovies]);

  function handleBtnMoreClick() {
    setСardsToRender(cardsToRender + cardsToAdd);
  }

  return (
    <>
      <section className="movies">
        <div className="movies__wrapper">
          <SearchForm
            getMovies={getMovies}
            checkboxChange={handleCheckboxChange}
            isChecked={isChecked}
            setIsSearchHandled={setIsSearchHandled}
          />
          {isLoadding ? (
            <Preloader />
          ) : (
            <>
              {isChecked ? (
                <>
                  {isSearchHandled && shortMovies.length === 0 && (
                    <span className="movies__nothing-found">
                      Ничего не найдено
                    </span>
                  )}
                </>
              ) : (
                <>
                  {isSearchHandled && filteredMovies.length === 0 && (
                    <span className="movies__nothing-found">
                      Ничего не найдено
                    </span>
                  )}
                </>
              )}

              {!isLoadding && (
                <MoviesCardList
                  filteredMovies={filteredMovies}
                  shortMovies={shortMovies}
                  isChecked={isChecked}
                  handleMovieLike={handleMovieLike}
                  savedMoviesIds={savedMoviesIds}
                  handleDislikeMovie={handleDislikeMovie}
                  cardsToRender={cardsToRender}
                  cardsToAdd={cardsToAdd}
                />
              )}

              {isChecked ? (
                <>
                  {shortMovies.length >
                    shortMovies.slice(0, cardsToRender).length &&
                  shortMovies.length >= cardsToRender ? (
                    <div className="movies__button-wrapper">
                      <button
                        className="movies__button"
                        type="button"
                        aria-label="Увидить больше фильмов"
                        onClick={handleBtnMoreClick}
                      >
                        Ещё
                      </button>
                    </div>
                  ) : null}
                </>
              ) : (
                <>
                  {filteredMovies.length >
                    filteredMovies.slice(0, cardsToRender).length &&
                  filteredMovies.length >= cardsToRender ? (
                    <div className="movies__button-wrapper">
                      <button
                        className="movies__button"
                        type="button"
                        aria-label="Увидить больше фильмов"
                        onClick={handleBtnMoreClick}
                      >
                        Ещё
                      </button>
                    </div>
                  ) : null}
                </>
              )}
            </>
          )}
        </div>
      </section>
      <InfoTooltip
        isOpen={isInfoTooltipOpen}
        onClose={onCloseInfoTooltip}
        isRequestSuccessful={isRequestSuccessful}
      />
    </>
  );
}

export default Movies;
