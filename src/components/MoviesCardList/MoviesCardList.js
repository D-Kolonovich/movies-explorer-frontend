import "./MoviesCardList.css"
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList() {
  return (
    <section className="moviesCardList">
        <ul className="moviesCardList__list">
            <li><MoviesCard /></li>
            <li><MoviesCard /></li>
            <li><MoviesCard /></li>
            <li><MoviesCard /></li>
            <li><MoviesCard /></li>
            <li><MoviesCard /></li>
            {/* <li><MoviesCard /></li>
            <li><MoviesCard /></li>
            <li><MoviesCard /></li>
            <li><MoviesCard /></li>
            <li><MoviesCard /></li>
            <li><MoviesCard /></li>
            <li><MoviesCard /></li>
            <li><MoviesCard /></li>
            <li><MoviesCard /></li>
            <li><MoviesCard /></li> */}
        </ul>
    </section>
        
  )
}

export default MoviesCardList;
