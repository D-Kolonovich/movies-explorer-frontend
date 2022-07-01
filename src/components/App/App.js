import "../../vendor/normalize.css";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import PageNotFound from "../PageNotFound/PageNotFound";
import Login from "../Login/Login";
import mainApi from "../../utils/MainApi";
import { useEffect, useState } from "react";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Preloader from "../Preloader/Preloader";
import moviesApi from "../../utils/MoviesApi";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [isTokenChecked, setIsTokenChecked] = useState(false);

  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState(
    JSON.parse(localStorage.getItem("filteredMovies")) || []
  );

  const [shortMovies, setShortMovies] = useState(
    JSON.parse(localStorage.getItem("shortMovies")) || []
  );
  const [savedMovies, setSavedMovies] = useState([]);
  const [savedMoviesIds, setSavedMoviesIds] = useState([]);

  const [isFirstQuery, setIsFirstQuery] = useState(true);
  const [isLoadding, setIsLoadding] = useState(false);

  const [isRequestSuccessful, setIsRequestSuccessful] = useState(false);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);

  function onLogin({ email, password }) {
    mainApi
      .login({ email, password })
      .then((data) => {
        if (data.token) {
          localStorage.setItem("jwt", data.token);
          setLoggedIn(true);
          navigate("/movies");
          // setIsSuccess(true);
          // setInfoTooltipMessage("Вы успешно авторизировались!");
        }
      })
      .catch((err) => {
        console.log(err);
        setIsInfoTooltipOpen(true);
      });
  }

  function onRegister({ name, email, password }) {
    mainApi
      .register({ name, email, password })
      .then(() => {
        onLogin({ password: password, email: email });
        // setIsSuccess(true);
        // setInfoTooltipMessage("Вы успешно зарегистрировались!");
      })
      .catch((err) => {
        console.log(err);
        setIsInfoTooltipOpen(true);
      });
  }

  function checkToken() {
    const token = localStorage.getItem("jwt");
    if (token) {
      mainApi
        .tokenCheck()
        .then((data) => {
          setIsTokenChecked(true);
          setLoggedIn(true);
          console.log(data);
        })
        .catch((err) => {
          localStorage.removeItem("jwt");

          console.log(err);
        });
    } else {
      setIsTokenChecked(true);
    }
  }
  useEffect(() => {
    checkToken();
  }, [loggedIn]);

  function getMovies(searchText, checkboxStatus) {
    if (isFirstQuery) {
      setIsLoadding(true);
      moviesApi
        .getMovies()
        .then((res) => {
          setMovies(res);
          const result = filterMovies(res, searchText);
          saveToLocalStorage(result, searchText, checkboxStatus);
          setFilteredMovies(result);
          setShortMovies(result.filter((i) => i.duration <= 40));
          setIsFirstQuery(false);
        })
        .catch((err) => {
          console.log(err);
          setIsInfoTooltipOpen(true);
        })
        .finally(() => {
          setIsLoadding(false);
        });
    }

    const result = filterMovies(movies, searchText);
    setFilteredMovies(result);
    setShortMovies(result.filter((i) => i.duration <= 40));
  }
  function saveToLocalStorage(moviesArr, searchText, checkboxStatus) {
    if (checkboxStatus) {
      localStorage.setItem(
        "shortMovies",
        JSON.stringify(moviesArr.filter((i) => i.duration <= 40))
      );
      localStorage.removeItem("filteredMovies");
    } else {
      localStorage.setItem("filteredMovies", JSON.stringify(moviesArr));
      localStorage.removeItem("shortMovies");
    }
    localStorage.setItem("checkboxStatus", JSON.stringify(checkboxStatus));
    localStorage.setItem("searchMessage", searchText);
  }

  function filterMovies(arr, str) {
    const filteredMovies = arr.filter((item) => {
      const nameRuToLowerCase = item.nameRU.toLowerCase();
      const searchMessageToLowerCase = str.toLowerCase();
      return nameRuToLowerCase.includes(searchMessageToLowerCase);
    });
    return filteredMovies;
  }
  function handleMovieLike(movieCard) {
    mainApi
      .createMovie(movieCard)
      .then((data) => {
        setSavedMovies([data, ...savedMovies]);
        setSavedMoviesIds([data.movieId, ...savedMoviesIds]);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleInfoTooltipOpen() {
    setIsInfoTooltipOpen(false);
    setIsRequestSuccessful(false);
  }

  useEffect(() => {
    if (!loggedIn) {
      return;
    }
    Promise.all([mainApi.getUserProfile(), mainApi.getSavedMovies()])
      .then(([user, movies]) => {
        setCurrentUser(user);
        setSavedMovies(movies.filter((item) => item.owner === user._id));
        setSavedMoviesIds(
          movies
            .filter((item) => item.owner === user._id)
            .map((item) => item.movieId)
        );
        setSavedMovies(movies);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [loggedIn]);

  const handleDislikeMovie = (id) => {
    const movieToDelete = savedMovies.find((el) => el.movieId === id);
    handleMovieRemove(movieToDelete._id);
  };

  function handleMovieRemove(cardId) {
    mainApi
      .removeMovie(cardId)
      .then((res) => {
        setSavedMovies((state) => state.filter((el) => el._id !== res._id));
        setSavedMoviesIds((state) => state.filter((el) => el !== res.movieId));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleExit() {
    setLoggedIn(false);
    localStorage.removeItem("jwt");
    localStorage.clear();
    setCurrentUser({});
  }

  function handleUpdateProfile({ name, email }) {
    mainApi
      .updateProfile({ name, email })
      .then((res) => {
        setIsRequestSuccessful(!isRequestSuccessful);
        setIsInfoTooltipOpen(true);
        setCurrentUser(res);
      })
      .catch((err) => {
        setIsInfoTooltipOpen(true);
        setIsInfoTooltipOpen(true);
        console.log(err);
      });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        {isTokenChecked ? (
          <>
            {(location.pathname === "/" ||
              location.pathname === "/movies" ||
              location.pathname === "/saved-movies" ||
              location.pathname === "/profile") && (
              <Header loggedIn={loggedIn} />
            )}
            <Routes>
              <Route path="/" element={<Main />}></Route>
              <Route
                path="/movies"
                element={
                  <ProtectedRoute loggedIn={loggedIn}>
                    <Movies
                      getMovies={getMovies}
                      filteredMovies={filteredMovies}
                      shortMovies={shortMovies}
                      handleMovieLike={handleMovieLike}
                      savedMoviesIds={savedMoviesIds}
                      handleDislikeMovie={handleDislikeMovie}
                      isLoadding={isLoadding}
                      isRequestSuccessful={isRequestSuccessful}
                      isInfoTooltipOpen={isInfoTooltipOpen}
                      onCloseInfoTooltip={handleInfoTooltipOpen}
                    />
                  </ProtectedRoute>
                }
              ></Route>
              <Route
                path="/saved-movies"
                element={
                  <ProtectedRoute loggedIn={loggedIn}>
                    <SavedMovies
                      savedMovies={savedMovies}
                      handleMovieRemove={handleMovieRemove}
                    />
                  </ProtectedRoute>
                }
              ></Route>
              <Route
                path="/profile"
                element={
                  <ProtectedRoute loggedIn={loggedIn}>
                    <Profile
                      onHandleExit={handleExit}
                      handleUpdateProfile={handleUpdateProfile}
                      isRequestSuccessful={isRequestSuccessful}
                      isInfoTooltipOpen={isInfoTooltipOpen}
                      onCloseInfoTooltip={handleInfoTooltipOpen}
                    />
                  </ProtectedRoute>
                }
              ></Route>
              <Route
                path="/signup"
                element={
                  <Register
                    onRegister={onRegister}
                    isInfoTooltipOpen={isInfoTooltipOpen}
                    onCloseInfoTooltip={handleInfoTooltipOpen}
                    isRequestSuccessful={isRequestSuccessful}
                  />
                }
              ></Route>
              <Route
                path="/signin"
                element={
                  <Login
                    onLogin={onLogin}
                    isInfoTooltipOpen={isInfoTooltipOpen}
                    onCloseInfoTooltip={handleInfoTooltipOpen}
                    isRequestSuccessful={isRequestSuccessful}
                  />
                }
              ></Route>
              <Route path="*" element={<PageNotFound />}></Route>
            </Routes>
            {(location.pathname === "/" ||
              location.pathname === "/movies" ||
              location.pathname === "/saved-movies") && <Footer />}
          </>
        ) : (
          <Preloader />
        )}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
