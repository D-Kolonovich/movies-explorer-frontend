import "../../vendor/normalize.css";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import { Routes, Route, useLocation } from "react-router-dom";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import PageNotFound from "../PageNotFound/PageNotFound";
import Login from "../Login/Login";
import mainApi from "../../utils/MainApi";

function App() {
  const location = useLocation();

  // function onLogin({ email, password }) {
  //   mainApi
  //     .authorize({ email, password })
  //     .then((data) => {
  //       if (data.token) {
  //         setToken(data.token);
  //         localStorage.setItem("jwt", data.token);
  //         setEmail(email);
  //         setLoggedIn(true);
  //         setIsInfoTooltipPopupOpen(false);
  //         setIsSuccess(true);
  //         setInfoTooltipMessage("Вы успешно авторизировались!");
  //         history.push("/");
  //       }
  //     })
  //     .catch((err) => {
  //       setIsInfoTooltipPopupOpen(true);
  //       setIsSuccess(false);
  //       if (err === 400)
  //         return setInfoTooltipMessage("не передано одно из полей");
  //       if (err === 401)
  //         return setInfoTooltipMessage("неправильная почта или пароль");
  //       setInfoTooltipMessage("Попробуйте еще раз!");
  //       console.log(err);
  //     });
  // }

  function onRegister({ name, email, password }) {
    mainApi
      .register({ name, email, password })
      .then((data) => {
          console.log(data)
          // setIsInfoTooltipPopupOpen(true);
          // setIsSuccess(true);
          // setInfoTooltipMessage("Вы успешно зарегистрировались!");
          // history.push("/sign-in");
      })
      .catch((err) => {
        // setIsInfoTooltipPopupOpen(true);
        // setIsSuccess(false);
        // setInfoTooltipMessage("Что-то пошло не так! Попробуйте ещё раз.");
        // if (err === 400)
        //   return console.log("некорректно заполнено одно из полей ");
        console.log(err);
      });
  }

  return (
    <div className="App">
      {(location.pathname === "/" ||
        location.pathname === "/movies" ||
        location.pathname === "/saved-movies" ||
        location.pathname === "/profile") && <Header />}
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/saved-movies" element={<SavedMovies />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/signup" element={<Register onRegister={onRegister}/>}></Route>
        <Route path="/signin" element={<Login />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
      {(location.pathname === "/" ||
        location.pathname === "/movies" ||
        location.pathname === "/saved-movies") && <Footer />}
    </div>
  );
}

export default App;
