import "./MobilieNavigation.css";
import { NavLink, Link } from "react-router-dom";

function MobilieNavigation(props) {
  const linkActiveClass = ({ isActive }) => {
    return `navigation__link ${isActive && "navigation__link_active_mob"}`;
  };

  return (
    <section className="mobilieNavigation">
      <div className="mobilieNavigation__popup">
        <div className="mobilieNavigation__wrapper">
          <NavLink
            to="/"
            className={linkActiveClass}
            onClick={props.onLinkClick}
          >
            Главная
          </NavLink>
          <NavLink
            to="/movies"
            className={linkActiveClass}
            onClick={props.onLinkClick}
          >
            Фильмы
          </NavLink>
          <NavLink
            to="/saved-movies"
            className={linkActiveClass}
            onClick={props.onLinkClick}
          >
            Сохраненные Фильмы
          </NavLink>
        </div>
        <Link
          className="navigation__profile mobilieNavigation__profile"
          to="/profile"
          onClick={props.onLinkClick}
        >
          Аккаунт
          <div
            className="navigation__icon-user"
          ></div>
        </Link>
      </div>
    </section>
  );
}

export default MobilieNavigation;
