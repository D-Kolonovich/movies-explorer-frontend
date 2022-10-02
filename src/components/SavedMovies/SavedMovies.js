import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

function SavedMovies() {
  return (
    <>
        <section className="movies">
                <div className="movies__wrapper">
                    <SearchForm />
                    <MoviesCardList />
                </div>
            </section>
    </>
  );
}

export default SavedMovies;