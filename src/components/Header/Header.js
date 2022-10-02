import logo from "../../images/logo.svg";
import "./Header.css";
import { useLocation, Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import { useState } from "react";
import MobilieNavigation from "../MobileNavigation/MobileNavigation";

function Header({loggedIn}) {
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
        {!loggedIn ? (
          <div className="header__auth">
            <Link className="header__register header__button" to="/signup">
              Регистрация
            </Link>
            <Link to="/signin">
              <button className="header__login-btn header__button">
                Войти
              </button>
            </Link>
          </div>
        ) : (
          <Navigation />
        )}
        {loggedIn ? (
          <>
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
          </>
        )
        :
        null
        }
      </div>

      {isMobileMemuOpen && (
        <MobilieNavigation
          isMobileMemuOpen={isMobileMemuOpen}
          onLinkClick={handleCloseClick}
        />
      )}
    </header>
  );
}

export default Header;
