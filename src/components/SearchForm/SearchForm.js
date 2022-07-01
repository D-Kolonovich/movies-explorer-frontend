import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./SearchForm.css";

function SearchForm({
  getMovies,
  handleCheckboxChange,
  isChecked,
  setIsSearchHandled,
}) {
  const location = useLocation();

  const [inputValue, setInputValue] = useState(
    location.pathname === "/movies"
      ? localStorage.getItem("searchMessage") || ""
      : ""
  );

  function handleInputChange(e) {
    setInputValue(e.target.value);
  }

  function handleSearchSubmit(e) {
    e.preventDefault();
    getMovies(inputValue, isChecked);
    handleSearchIs();
  }

  function handleSearchIs() {
    setIsSearchHandled(true);
  }

  return (
    <section className="searchForm">
      <form className="searchForm__form" onSubmit={handleSearchSubmit}>
        <div className="searchForm__form-wrapper">
          <input
            className="searchForm__input"
            type="text"
            placeholder="Фильм"
            required
            value={inputValue || ""}
            onChange={handleInputChange}
          ></input>
          <button className="searchForm__button" type="submit"></button>
        </div>
        <div className="searchForm-wrapper">
          <label className="searchForm-checkbox">
            <input
              type="checkbox"
              className="searchForm-checkbox__input"
              value={isChecked}
              onChange={handleCheckboxChange}
            ></input>
            <span className="searchForm-checkbox__slider white-circle"></span>
            <p className="searchForm-checkbox__text">Короткометражки</p>
          </label>
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
