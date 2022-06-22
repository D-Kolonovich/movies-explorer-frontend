import logo from "../../images/logo.svg";
import "./Header.css";
import { useLocation, Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import { useState } from "react";
import MobilieNavigation from "../MobileNavigation/MobileNavigation";

function Header() {
  const location = useLocation();
  const [isMobileMemuOpen, setMobileMenu] = useState(false);

  const handleClick = () => {
    setMobileMenu(true);
  };
  const handleCloseClick = () => {
    setMobileMenu(false);
  };

  return (
    <header
      className={`header ${location.pathname !== "/" && "header-movies"}`}
    >
      <div className="header__wrapper">
        <Link to="/">
          <img className="logo" src={logo} alt="логотип"></img>
        </Link>
        {location.pathname !== "/" ? (
          <Navigation />
        ) : (
          <div className="header__auth">
            <a className="header__register header__button" href="#">
              Регистрация
            </a>
            <button className="header__login-btn header__button">Войти</button>
          </div>
        )}
        {isMobileMemuOpen ? (
          <button
            className="header__burgerMenu header__burgerMenu_type_off"
            onClick={handleCloseClick}
          ></button>
        ) : (
          <button
            className="header__burgerMenu header__burgerMenu_type_on"
            onClick={handleClick}
          ></button>
        )}
      </div>

      {isMobileMemuOpen && (
        <MobilieNavigation isMobileMemuOpen={isMobileMemuOpen} />
      )}
    </header>
  );
}

export default Header;
