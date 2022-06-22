import './Movies.css';
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

function Movies() {
    return (
        <>
            <section className="movies">
                <div className="movies__wrapper">
                    <SearchForm />
                    <MoviesCardList />
                    <div className="movies__button-wrapper">
                        <button className="movies__button" type="button" aria-label="Увидить больше фильмов">Ещё</button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Movies;
