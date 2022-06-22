import "./Navigation.css";
import { NavLink, Link } from "react-router-dom";

function Navigation() {
  const linkActiveClass = ({ isActive }) => {
    return `navigation__link ${isActive && "navigation__link_active"}`;
  };
  return (
    <>
      <div className="navigation__header">
        <div className="navigation__wrapper">
          <NavLink to="/movies" className={linkActiveClass}>
            Фильмы
          </NavLink>
          <NavLink to="/saved-movies" className={linkActiveClass}>
            Сохраненные Фильмы
          </NavLink>
        </div>
        <Link className="navigation__profile" to="/profile">
          Аккаунт<div className="navigation__icon-user"></div>
        </Link>
      </div>
    </>
  );
}

export default Navigation;
